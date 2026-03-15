const { findSection, detectIntent } = require('./data/acts.js');
const { findTemplate, extractFields } = require('./data/templates.js');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { messages, language } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid request' });
    }

    const GROQ_API_KEY = process.env.GROQ_API_KEY;
    const TAVILY_API_KEY = process.env.TAVILY_API_KEY;
    const COHERE_API_KEY = process.env.COHERE_API_KEY;

    if (!GROQ_API_KEY) {
      return res.status(500).json({ error: 'GROQ API key not configured.' });
    }

    const userQuery = messages[messages.length - 1]?.content || '';
    const langNote = language && language !== 'English'
      ? `IMPORTANT: Respond entirely in ${language}. Keep legal terms accurate.`
      : '';

    // STEP 1 — INTENT DETECTION
    const intent = detectIntent(userQuery);

    // STEP 2 — LOCAL DATABASE SEARCH
    let templateData = null;
    let templateText = '';
    let extractedFields = {};

    if (intent === 'DRAFT') {
      const found = findTemplate(userQuery);
      if (found) {
        templateData = found.template;
        extractedFields = extractFields(userQuery);
        try {
          templateText = found.template.template(extractedFields);
        } catch(e) {
          templateText = '';
        }
      }
    }

    const localResult = findSection(userQuery);
    const localSectionText = (localResult.sections || []).map(s =>
      `${s.type === 'article' ? 'ARTICLE' : 'SECTION'} ${s.number} — ${s.act}:\nTitle: ${s.title}\nText: ${s.text}${s.ipc ? `\n(Old: ${s.ipc})` : ''}`
    ).join('\n\n---\n\n');

    const localCasesText = (localResult.cases || []).map(c =>
      `CASE: ${c.name}\nCitation: ${c.citation}\nFacts: ${c.facts}\nHeld: ${c.held}`
    ).join('\n\n---\n\n');

    // STEP 3 — TAVILY WEB SEARCH
    let webData = '';
    let sources = [];

    if (TAVILY_API_KEY) {
      try {
        let searchQuery = intent === 'DRAFT'
          ? `${templateData?.name || userQuery} official format Indian court BNS BNSS 2023`
          : intent === 'SECTION'
          ? `${userQuery} Indian law section explanation leading cases indiankanoon`
          : intent === 'CASE'
          ? `${userQuery} India Supreme Court judgment indiankanoon`
          : `${userQuery} Indian law BNS 2023`;

        const tavilyRes = await fetch('https://api.tavily.com/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            api_key: TAVILY_API_KEY,
            query: searchQuery,
            search_depth: 'advanced',
            max_results: 6,
            include_answer: true,
            include_domains: [
              'indiankanoon.org', 'sci.gov.in', 'ecourts.gov.in',
              'legislative.gov.in', 'indiacode.nic.in',
              'barandbench.com', 'livelaw.in',
            ],
          }),
        });

        if (tavilyRes.ok) {
          const tavilyData = await tavilyRes.json();
          sources = (tavilyData.results || []).slice(0, 5).map(r => ({
            title: r.title, url: r.url, snippet: r.content?.slice(0, 350),
          }));
          webData = sources.map(s => `SOURCE: ${s.title}\nURL: ${s.url}\nCONTENT: ${s.snippet}`).join('\n\n');
          if (tavilyData.answer) webData = `WEB SUMMARY: ${tavilyData.answer}\n\n` + webData;
        }
      } catch(e) {
        console.error('Tavily error:', e.message);
      }
    }

    // STEP 4 — COHERE RERANK
    if (COHERE_API_KEY && sources.length > 2) {
      try {
        const cohereRes = await fetch('https://api.cohere.com/v1/rerank', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${COHERE_API_KEY}`,
          },
          body: JSON.stringify({
            model: 'rerank-english-v3.0',
            query: userQuery,
            documents: sources.map(s => `${s.title}: ${s.snippet}`),
            top_n: 4,
          }),
        });
        if (cohereRes.ok) {
          const cohereData = await cohereRes.json();
          const reranked = (cohereData.results || [])
            .sort((a, b) => b.relevance_score - a.relevance_score)
            .map(r => sources[r.index]).filter(Boolean);
          if (reranked.length > 0) {
            sources = reranked;
            webData = reranked.map(s => `SOURCE: ${s.title}\nURL: ${s.url}\nCONTENT: ${s.snippet}`).join('\n\n');
          }
        }
      } catch(e) {
        console.error('Cohere error:', e.message);
      }
    }

    // STEP 5 — BUILD SYSTEM PROMPT
    let systemPrompt = '';

    if (intent === 'DRAFT') {
      systemPrompt = `You are Legal Craft AI — India's expert legal document drafting system.

${templateData ? `DOCUMENT: ${templateData.name}` : 'TASK: Draft the legal document requested.'}

${templateText ? `PRE-FILLED TEMPLATE (Use as base — fill remaining blanks):
---DRAFT START---
${templateText}
---DRAFT END---` : ''}

RULES:
1. Use official Indian court format
2. Use BNS 2023 / BNSS 2023 / BSA 2023 sections (NOT old IPC/CrPC)
3. Fill all details user provided
4. Use [PLACEHOLDER] for missing info
5. Keep formal legal language
6. Start with ---DRAFT START--- end with ---DRAFT END---
7. After draft — list what placeholders user needs to fill

WEB DATA: ${webData || 'Use template as primary source'}
${langNote}`;

    } else if (intent === 'SECTION') {
      systemPrompt = `You are Legal Craft AI — India's legal section explanation system.

VERIFIED SECTION DATA:
${localSectionText || 'Not in database — use web data'}

LEADING CASES:
${localCasesText || 'Use web data'}

WEB DATA: ${webData || 'Use database'}

RESPONSE FORMAT:
1. SECTION DETAILS — exact number, act name, old equivalent
2. SECTION TEXT — exact text
3. SIMPLE EXPLANATION — plain language, who it applies to, consequences
4. LEADING CASES (2-3) — case name, citation, facts (simple), what court decided, why important
5. KEY POINTS TO REMEMBER

RULES: Never make up section numbers or case names. Simple language always.
${langNote}`;

    } else if (intent === 'CASE') {
      systemPrompt = `You are Legal Craft AI — India's case law research system.

DATABASE CASES:
${localCasesText || 'Not in database — use web data'}

WEB DATA: ${webData || 'Use your legal knowledge'}

RESPONSE FORMAT:
1. CASE DETAILS — full name, court, year, citation
2. BACKGROUND — who were parties, what was dispute
3. FACTS — chronological, simple
4. LEGAL ISSUES — which articles/sections
5. ARGUMENTS — petitioner and respondent
6. JUDGMENT — verdict in simple words, ratio decidendi
7. IMPACT — why important, still good law?

RULES: Never make up facts. Simple language. Full citation always.
${langNote}`;

    } else {
      systemPrompt = `You are Legal Craft AI — India's comprehensive legal intelligence system.

DATABASE: ${localSectionText || 'Not found'}
CASES: ${localCasesText || 'Not found'}
WEB DATA: ${webData || 'Use your legal knowledge'}

RULES:
1. Use BNS 2023, BNSS 2023, BSA 2023 always
2. Simple clear language
3. Show sources
4. Never guess — if not found say so clearly
${langNote}`;
    }

    // STEP 6 — GROQ RESPONSE
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages,
        ],
        temperature: 0.1,
        max_tokens: 4000,
      }),
    });

    if (!groqRes.ok) {
      const err = await groqRes.text();
      console.error('Groq error:', err);
      return res.status(500).json({ error: 'AI error. Please try again.' });
    }

    const groqData = await groqRes.json();
    const reply = groqData.choices?.[0]?.message?.content || 'Unable to generate response.';

    return res.status(200).json({
      reply,
      intent,
      sources: sources.slice(0, 4),
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Server error: ' + error.message });
  }
};
