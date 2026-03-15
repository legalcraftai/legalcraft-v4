import { findSection, detectIntent } from './data/acts.js';
import { findTemplate, extractFields, TEMPLATES } from './data/templates.js';

export default async function handler(req, res) {
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

    if (!GROQ_API_KEY || !TAVILY_API_KEY || !COHERE_API_KEY) {
      return res.status(500).json({ error: 'API keys not configured.' });
    }

    const userQuery = messages[messages.length - 1]?.content || '';
    const langNote = language && language !== 'English'
      ? `IMPORTANT: Respond entirely in ${language}. Keep legal terms accurate.`
      : '';

    // ============================================================
    // STEP 1 — SMART INTENT DETECTION
    // ============================================================
    const intent = detectIntent(userQuery);

    // ============================================================
    // STEP 2A — IF DRAFT: Find template + extract fields
    // ============================================================
    let templateData = null;
    let extractedFields = {};
    let templateText = '';

    if (intent === 'DRAFT') {
      const found = findTemplate(userQuery);
      if (found) {
        templateData = found.template;
        extractedFields = extractFields(userQuery);
        // Generate template with extracted fields
        try {
          templateText = found.template.template(extractedFields);
        } catch(e) {
          templateText = '';
        }
      }
    }

    // ============================================================
    // STEP 2B — SECTION/CASE: Find from database
    // ============================================================
    let localResult = { sections: [], cases: [] };
    if (intent === 'SECTION' || intent === 'CASE' || intent === 'GENERAL') {
      localResult = findSection(userQuery);
    }

    const localSectionText = localResult.sections.map(s =>
      `${s.type === 'article' ? 'ARTICLE' : 'SECTION'} ${s.number} — ${s.act}:\nTitle: ${s.title}\nText: ${s.text}${s.ipc ? `\n(Old equivalent: ${s.ipc})` : ''}`
    ).join('\n\n---\n\n');

    const localCasesText = localResult.cases.map(c =>
      `LEADING CASE: ${c.name}\nCitation: ${c.citation}\nFacts: ${c.facts}\nHeld: ${c.held}\nImportance: ${c.importance}`
    ).join('\n\n---\n\n');

    // ============================================================
    // STEP 3 — TAVILY WEB SEARCH
    // ============================================================
    let webData = '';
    let sources = [];

    try {
      let searchQuery = '';
      if (intent === 'DRAFT') {
        searchQuery = `${templateData?.name || userQuery} official format Indian court BNS BNSS 2023`;
      } else if (intent === 'SECTION') {
        searchQuery = `${userQuery} Indian law section explanation leading cases indiankanoon`;
      } else if (intent === 'CASE') {
        searchQuery = `${userQuery} India Supreme Court High Court judgment`;
      } else {
        searchQuery = `${userQuery} Indian law BNS 2023`;
      }

      const tavilyRes = await fetch('https://api.tavily.com/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: TAVILY_API_KEY,
          query: searchQuery,
          search_depth: 'advanced',
          max_results: 8,
          include_answer: true,
          include_domains: [
            'indiankanoon.org',
            'sci.gov.in',
            'ecourts.gov.in',
            'legislative.gov.in',
            'indiacode.nic.in',
            'barandbench.com',
            'livelaw.in',
            'scobserver.in',
            'lawrato.com',
            'barcouncilofindia.org',
          ],
        }),
      });

      if (tavilyRes.ok) {
        const tavilyData = await tavilyRes.json();
        sources = (tavilyData.results || []).slice(0, 6).map(r => ({
          title: r.title,
          url: r.url,
          snippet: r.content?.slice(0, 400),
        }));
        webData = sources.map(s => `SOURCE: ${s.title}\nURL: ${s.url}\nCONTENT: ${s.snippet}`).join('\n\n');
        if (tavilyData.answer) webData = `WEB SUMMARY: ${tavilyData.answer}\n\n` + webData;
      }
    } catch (e) {
      console.error('Tavily error:', e.message);
    }

    // ============================================================
    // STEP 4 — COHERE RERANK
    // ============================================================
    let verifiedData = webData;
    if (sources.length > 2) {
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
            .map(r => sources[r.index])
            .filter(Boolean);
          if (reranked.length > 0) {
            sources = reranked;
            verifiedData = reranked.map(s =>
              `SOURCE: ${s.title}\nURL: ${s.url}\nCONTENT: ${s.snippet}`
            ).join('\n\n');
          }
        }
      } catch (e) {
        console.error('Cohere error:', e.message);
      }
    }

    // ============================================================
    // STEP 5 — BUILD SYSTEM PROMPT BASED ON INTENT
    // ============================================================
    let systemPrompt = '';

    if (intent === 'DRAFT') {
      const missingFields = templateData?.requiredFields?.filter(f => !extractedFields[f]) || [];

      systemPrompt = `You are Legal Craft AI — India's expert legal document drafting system.

${templateData ? `DOCUMENT TYPE: ${templateData.name}
COURT: ${templateData.court || 'As applicable'}` : 'TASK: Draft the legal document requested.'}

${templateText ? `
PRE-FILLED TEMPLATE (Use this as base — fill remaining blanks with user details):
---DRAFT START---
${templateText}
---DRAFT END---
` : ''}

${missingFields.length > 0 ? `
MISSING INFORMATION: The following details were not provided by user:
${missingFields.join(', ')}

For missing fields: Use [FIELD NAME] placeholder and tell user to fill these.
` : ''}

DRAFTING RULES (STRICTLY FOLLOW):
1. Use the pre-filled template above as base
2. All BNS 2023 / BNSS 2023 / BSA 2023 sections are already correct in template
3. Fill all details user has provided
4. Use [PLACEHOLDER] for missing information
5. Do NOT change the court format structure
6. Keep formal legal language
7. Start document with ---DRAFT START--- and end with ---DRAFT END---
8. After draft — list what information user needs to fill in [PLACEHOLDERS]

WEB VERIFIED DATA (for additional clauses if needed):
${verifiedData || 'Use template as primary source'}

${langNote}`;

    } else if (intent === 'SECTION') {
      systemPrompt = `You are Legal Craft AI — India's legal section explanation system.

TASK: Explain the section/article asked by user.

VERIFIED SECTION DATA FROM DATABASE:
${localSectionText || 'Not found in database — use web data'}

LEADING CASES FROM DATABASE:
${localCasesText || 'Search web data for cases'}

WEB VERIFIED DATA:
${verifiedData || 'Use database as primary source'}

RESPONSE FORMAT (Always follow):
1. SECTION/ARTICLE DETAILS
   - Exact number and Act name
   - Old equivalent (IPC/CrPC) if applicable
   - Exact text of section

2. SIMPLE EXPLANATION
   - What this section means in plain language
   - Who does it apply to
   - What are consequences/punishment
   - When it applies

3. LEADING CASES (2-3 most important)
   For each case:
   - Case name and citation
   - Facts in 3-4 simple sentences
   - What court decided — in simple words
   - Why important

4. IMPORTANT POINTS TO REMEMBER
   - Key things advocate/student must know
   - Common mistakes to avoid

RULES:
- Never make up section numbers or case names
- If section not found — say so clearly
- Simple language — explain like teaching
- Always mention old IPC/CrPC equivalent

${langNote}`;

    } else if (intent === 'CASE') {
      systemPrompt = `You are Legal Craft AI — India's case law research system.

TASK: Research and explain the case asked by user.

DATABASE CASES FOUND:
${localCasesText || 'Not in database — use web data'}

WEB VERIFIED DATA:
${verifiedData || 'Use your legal knowledge'}

RESPONSE FORMAT (Always follow):
1. CASE DETAILS
   - Full case name
   - Court and Year
   - Citation (AIR / SCC / SCR)
   - Bench (judges if known)

2. BACKGROUND
   - Who were parties
   - What was the dispute

3. FACTS (Chronological)
   - What happened step by step
   - Key events with dates if known

4. LEGAL ISSUES
   - What legal questions arose
   - Which articles/sections involved

5. ARGUMENTS
   - Petitioner's arguments
   - Respondent's arguments

6. JUDGMENT — WHAT COURT DECIDED
   - Final verdict in simple words
   - Key observations
   - Ratio decidendi

7. IMPACT
   - Why this case is important
   - How it changed Indian law
   - Still good law or overruled?

RULES:
- NEVER make up facts
- If not found — say so clearly
- Simple language always
- Give full citation

${langNote}`;

    } else {
      systemPrompt = `You are Legal Craft AI — India's comprehensive legal intelligence system.

LOCAL DATABASE SECTIONS:
${localSectionText || 'Not found'}

LOCAL DATABASE CASES:
${localCasesText || 'Not found'}

WEB VERIFIED DATA:
${verifiedData || 'Use your legal knowledge'}

RULES:
1. Use BNS 2023, BNSS 2023, BSA 2023 — always prefer new laws
2. Simple clear language
3. Show sources at end
4. If answer not found — say clearly, do not guess
5. For drafting queries — offer to draft
6. For section queries — section text + explanation + cases
7. For case queries — facts + judgment + impact

${langNote}`;
    }

    // ============================================================
    // STEP 6 — GROQ FINAL RESPONSE
    // ============================================================
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
      templateFound: !!templateData,
      sectionsFound: localResult.sections.length,
      casesFound: localResult.cases.length,
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Server error. Please try again.' });
  }
}
