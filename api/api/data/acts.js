// ============================================================
// LEGAL CRAFT AI V4 — VERIFIED ACTS DATABASE (CommonJS)
// ============================================================

const BNS = {
  name: "Bharatiya Nyaya Sanhita 2023", short: "BNS", replaces: "IPC 1860",
  keywords: ["bns", "bharatiya nyaya sanhita", "new ipc", "naya ipc", "criminal law 2023"],
  sections: {
    "63":  { title: "Rape", ipc: "375", text: "A man commits rape if he has sexual intercourse with a woman against her will, without consent, or consent obtained by force/fraud.", keywords: ["rape", "balatkar", "section 63 bns", "375 ipc"] },
    "64":  { title: "Punishment for rape", ipc: "376", text: "Rigorous imprisonment not less than 10 years, extendable to life, and fine.", keywords: ["rape punishment", "section 64 bns", "376 ipc"] },
    "70":  { title: "Gang rape", ipc: "376D", text: "Rigorous imprisonment not less than 20 years to life (natural life) and fine.", keywords: ["gang rape", "section 70 bns", "376d ipc"] },
    "74":  { title: "Assault/Molestation of woman", ipc: "354", text: "Assault with intent to outrage modesty — imprisonment up to 2 years or fine or both.", keywords: ["molestation", "outrage modesty", "section 74 bns", "354 ipc", "eve teasing"] },
    "78":  { title: "Stalking", ipc: "354D", text: "Following woman repeatedly despite clear disinterest, or monitoring her internet use.", keywords: ["stalking", "section 78 bns", "354d ipc"] },
    "80":  { title: "Dowry death", ipc: "304B", text: "Death of woman within 7 years of marriage due to burns/injury after dowry harassment — 7 years to life.", keywords: ["dowry death", "dahej mrityu", "section 80 bns", "304b ipc"] },
    "85":  { title: "Cruelty by husband/relatives", ipc: "498A", text: "Cruelty by husband or relatives — imprisonment up to 3 years and fine.", keywords: ["cruelty", "498a", "husband cruelty", "section 85 bns", "498a ipc"] },
    "101": { title: "Culpable homicide", ipc: "299/304", text: "Causing death with intention or knowledge that act is likely to cause death.", keywords: ["culpable homicide", "section 101 bns", "299 ipc"] },
    "103": { title: "Murder", ipc: "302", text: "Punishment: death or life imprisonment and fine.", keywords: ["murder", "hatya", "section 103 bns", "302 ipc", "death penalty"] },
    "109": { title: "Attempt to murder", ipc: "307", text: "Imprisonment up to 10 years and fine.", keywords: ["attempt to murder", "section 109 bns", "307 ipc"] },
    "111": { title: "Organised crime", ipc: "New", text: "Death or life imprisonment if organised crime results in death.", keywords: ["organised crime", "section 111 bns"] },
    "113": { title: "Terrorist act", ipc: "New", text: "Death or life imprisonment and fine.", keywords: ["terrorism", "terrorist", "section 113 bns"] },
    "115": { title: "Voluntarily causing grievous hurt", ipc: "325", text: "Imprisonment up to 7 years and fine.", keywords: ["grievous hurt", "section 115 bns", "325 ipc"] },
    "137": { title: "Kidnapping", ipc: "361", text: "Taking person under 16 (male) or 18 (female) from lawful guardian without consent.", keywords: ["kidnapping", "apaharan", "section 137 bns", "361 ipc"] },
    "303": { title: "Theft", ipc: "378/379", text: "Dishonestly taking moveable property — imprisonment up to 3 years or fine or both.", keywords: ["theft", "chori", "section 303 bns", "379 ipc"] },
    "308": { title: "Extortion", ipc: "383/384", text: "Putting person in fear to dishonestly induce delivery of property — up to 3 years.", keywords: ["extortion", "blackmail", "section 308 bns", "384 ipc"] },
    "318": { title: "Cheating/Fraud", ipc: "415/420", text: "Deceiving person to deliver property — up to 7 years. General cheating — up to 3 years.", keywords: ["cheating", "fraud", "dhokha", "section 318 bns", "420 ipc", "420"] },
    "324": { title: "Mischief", ipc: "425/426", text: "Causing wrongful loss by destroying property — up to 3 months or fine.", keywords: ["mischief", "section 324 bns", "425 ipc"] },
    "329": { title: "Criminal trespass", ipc: "441", text: "Entering property with intent to commit offence — up to 3 months or fine.", keywords: ["trespass", "section 329 bns", "441 ipc"] },
    "351": { title: "Criminal intimidation", ipc: "503/506", text: "Threatening injury with intent to cause alarm — up to 2 years or fine.", keywords: ["threat", "dhamki", "section 351 bns", "506 ipc"] },
    "356": { title: "Defamation", ipc: "499/500", text: "Making/publishing imputation to harm reputation — up to 2 years or fine.", keywords: ["defamation", "manahaani", "section 356 bns", "499 ipc"] },
  }
};

const BNSS = {
  name: "Bharatiya Nagarik Suraksha Sanhita 2023", short: "BNSS", replaces: "CrPC 1973",
  keywords: ["bnss", "crpc new", "new crpc", "criminal procedure 2023", "nagarik suraksha"],
  sections: {
    "35":  { title: "Arrest without warrant", crpc: "41", text: "Police may arrest without warrant for cognizable offence.", keywords: ["arrest without warrant", "section 35 bnss", "41 crpc"] },
    "47":  { title: "Rights of arrested person", crpc: "50", text: "Right to know grounds of arrest, consult lawyer, know right to bail.", keywords: ["rights on arrest", "section 47 bnss", "50 crpc"] },
    "173": { title: "FIR — First Information Report", crpc: "154", text: "Information of cognizable offence to police reduced to writing, read to informant, signed.", keywords: ["fir", "first information report", "section 173 bnss", "154 crpc"] },
    "478": { title: "Bail in bailable offences", crpc: "436", text: "Person accused of bailable offence shall be released on bail.", keywords: ["bail bailable", "section 478 bnss", "436 crpc"] },
    "479": { title: "Undertrial bail — half period", crpc: "436A", text: "Person detained for half maximum period shall be released on bail.", keywords: ["undertrial bail", "section 479 bnss", "436a crpc"] },
    "480": { title: "Bail in non-bailable offences", crpc: "437", text: "Magistrate may release on bail unless reasonable grounds of guilt for death/life imprisonment offence.", keywords: ["bail non bailable", "section 480 bnss", "437 crpc", "non bailable bail"] },
    "482": { title: "Anticipatory Bail", crpc: "438", text: "When person believes he may be arrested for non-bailable offence, may apply to HC or Sessions Court for bail direction.", keywords: ["anticipatory bail", "advance bail", "section 482 bnss", "438 crpc", "giraftari se pehle bail"] },
    "483": { title: "Bail by Sessions Court / High Court", crpc: "439", text: "HC or Sessions Court may direct any accused in custody to be released on bail.", keywords: ["regular bail", "sessions bail", "hc bail", "section 483 bnss", "439 crpc"] },
    "528": { title: "Inherent powers of High Court", crpc: "482", text: "HC powers to prevent abuse of process or secure ends of justice — includes quashing FIR.", keywords: ["quashing", "inherent powers", "section 528 bnss", "482 crpc", "fir quash"] },
  }
};

const BSA = {
  name: "Bharatiya Sakshya Adhiniyam 2023", short: "BSA", replaces: "Evidence Act 1872",
  keywords: ["bsa", "evidence act new", "sakshya", "evidence", "proof"],
  sections: {
    "2":  { title: "Evidence — Definition", ea: "3", text: "Evidence: statements by witnesses before court; all documents including electronic records.", keywords: ["evidence definition", "section 2 bsa"] },
    "23": { title: "Admission", ea: "17", text: "Statement suggesting inference as to fact in issue, made by party.", keywords: ["admission", "section 23 bsa"] },
    "25": { title: "Confession to police — not provable", ea: "25", text: "No confession to police officer shall be proved against accused.", keywords: ["confession to police", "section 25 bsa"] },
    "57": { title: "Burden of proof", ea: "101", text: "Whoever desires court judgment must prove facts.", keywords: ["burden of proof", "section 57 bsa"] },
    "63": { title: "Electronic records admissibility", ea: "65B", text: "Electronic records admissible with certificate from responsible person.", keywords: ["electronic evidence", "digital evidence", "section 63 bsa"] },
  }
};

const CONSTITUTION = {
  name: "Constitution of India 1950", short: "Constitution",
  keywords: ["constitution", "fundamental rights", "article", "samvidhan"],
  articles: {
    "12":   { title: "Definition of State", text: "State includes Government and Parliament of India, State Governments and Legislatures, all local authorities.", keywords: ["state definition", "article 12"] },
    "13":   { title: "Laws inconsistent with Fundamental Rights — Void", text: "Laws inconsistent with Fundamental Rights shall be void.", keywords: ["void law", "article 13"] },
    "14":   { title: "Right to Equality", text: "State shall not deny equality before law or equal protection of laws.", keywords: ["equality", "article 14", "samanta"] },
    "15":   { title: "No discrimination", text: "No discrimination on grounds of religion, race, caste, sex, place of birth.", keywords: ["discrimination", "article 15"] },
    "16":   { title: "Equality in public employment", text: "Equality of opportunity in government employment.", keywords: ["article 16", "government job"] },
    "17":   { title: "Abolition of Untouchability", text: "Untouchability abolished. Practice forbidden.", keywords: ["untouchability", "article 17"] },
    "19":   { title: "Freedom of Speech, Expression, Assembly, Movement", text: "Freedom of speech; assembly; association; movement; residence; profession.", keywords: ["freedom of speech", "article 19", "expression"] },
    "20":   { title: "Protection against conviction", text: "No ex post facto law; no double jeopardy; no self-incrimination.", keywords: ["article 20", "double jeopardy", "self incrimination"] },
    "21":   { title: "Right to Life and Personal Liberty", text: "No deprivation of life or liberty except by procedure established by law.", keywords: ["right to life", "article 21", "personal liberty", "jeevan adhikar"] },
    "21A":  { title: "Right to Education", text: "Free and compulsory education to children 6-14 years.", keywords: ["right to education", "article 21a", "RTE"] },
    "22":   { title: "Protection against arrest", text: "Informed of grounds; right to lawyer; produced before Magistrate within 24 hours.", keywords: ["article 22", "arrest rights", "24 hours"] },
    "25":   { title: "Freedom of religion", text: "Freedom of conscience and right to profess, practise, propagate religion.", keywords: ["article 25", "freedom of religion"] },
    "32":   { title: "Right to Constitutional Remedies — SC", text: "Right to move SC for enforcement of Fundamental Rights. SC may issue habeas corpus, mandamus, prohibition, quo warranto, certiorari.", keywords: ["article 32", "supreme court writ", "habeas corpus sc"] },
    "39A":  { title: "Free legal aid", text: "State shall provide free legal aid to ensure justice not denied by economic disabilities.", keywords: ["article 39a", "free legal aid"] },
    "51A":  { title: "Fundamental Duties", text: "Duties of citizens: abide by Constitution; uphold sovereignty; defend country; protect environment etc.", keywords: ["fundamental duties", "article 51a"] },
    "124":  { title: "Supreme Court", text: "Supreme Court with Chief Justice and up to 33 other judges.", keywords: ["supreme court", "article 124"] },
    "141":  { title: "SC law binding on all courts", text: "Law declared by SC shall be binding on all courts within India.", keywords: ["article 141", "precedent", "stare decisis"] },
    "226":  { title: "High Court writs", text: "HC may issue habeas corpus, mandamus, prohibition, quo warranto, certiorari.", keywords: ["article 226", "high court writ", "writ petition hc"] },
    "300A": { title: "Right to property", text: "No person deprived of property except by authority of law.", keywords: ["article 300a", "right to property"] },
    "368":  { title: "Power to amend Constitution", text: "Parliament may amend Constitution but cannot alter basic structure.", keywords: ["article 368", "amendment", "basic structure"] },
  }
};

const NI_ACT = {
  name: "Negotiable Instruments Act 1881", short: "NI Act",
  keywords: ["ni act", "cheque bounce", "cheque dishonour", "section 138", "cheque case"],
  sections: {
    "138": { title: "Cheque dishonour — offence", text: "Cheque returned unpaid due to insufficient funds — imprisonment up to 2 years or fine up to twice cheque amount or both.", keywords: ["cheque bounce", "section 138", "dishonour cheque", "138 ni act"] },
    "139": { title: "Presumption in favour of holder", text: "Presumed holder received cheque for discharge of debt unless contrary proved.", keywords: ["section 139", "cheque presumption"] },
    "141": { title: "Company liability", text: "If company commits offence, every person in charge also guilty.", keywords: ["section 141", "company cheque"] },
    "142": { title: "Complaint required for cognizance", text: "Court cannot take cognizance except on written complaint by payee within 30 days.", keywords: ["section 142", "cheque complaint"] },
  }
};

const HMA = {
  name: "Hindu Marriage Act 1955", short: "HMA",
  keywords: ["hindu marriage", "divorce", "hma", "talak", "vivah"],
  sections: {
    "5":   { title: "Conditions for marriage", text: "Neither party has living spouse; both competent; man 21 years, woman 18 years.", keywords: ["marriage conditions", "section 5 hma"] },
    "13":  { title: "Divorce grounds", text: "Adultery; cruelty; desertion 2 years; conversion; mental disorder; venereal disease; renunciation; not heard 7 years.", keywords: ["divorce grounds", "section 13 hma", "cruelty divorce", "talak grounds"] },
    "13B": { title: "Mutual consent divorce", text: "Both parties petition together after 1 year separation. Second motion after 6 months.", keywords: ["mutual consent divorce", "section 13b hma"] },
    "24":  { title: "Interim maintenance", text: "Court may order maintenance during proceedings.", keywords: ["interim maintenance", "section 24 hma"] },
    "25":  { title: "Permanent alimony", text: "Court may order permanent maintenance after decree.", keywords: ["alimony", "section 25 hma", "guzara bhatta"] },
    "26":  { title: "Child custody", text: "Court may make provision for custody of minor children.", keywords: ["child custody", "section 26 hma"] },
  }
};

const DV_ACT = {
  name: "Protection of Women from Domestic Violence Act 2005", short: "DV Act",
  keywords: ["domestic violence", "dv act", "gharelu hinsa", "wife protection"],
  sections: {
    "3":  { title: "Definition of domestic violence", text: "Physical, sexual, verbal, emotional and economic abuse causing harm.", keywords: ["domestic violence definition", "section 3 dv act"] },
    "12": { title: "Application to Magistrate", text: "Aggrieved person or Protection Officer may apply to Magistrate.", keywords: ["dv complaint", "section 12 dv act"] },
    "18": { title: "Protection orders", text: "Magistrate may prohibit respondent from committing acts of domestic violence.", keywords: ["protection order", "section 18 dv act"] },
    "20": { title: "Monetary relief", text: "Magistrate may direct monetary relief for losses suffered.", keywords: ["monetary relief dv", "section 20 dv act"] },
  }
};

const CONSUMER = {
  name: "Consumer Protection Act 2019", short: "Consumer Act",
  keywords: ["consumer", "complaint", "defective product", "deficiency service", "consumer court"],
  sections: {
    "2":  { title: "Consumer definition", text: "Person who buys goods/services for consideration, not for commercial resale.", keywords: ["consumer definition", "section 2 consumer act"] },
    "35": { title: "District Commission — under Rs.1 crore", text: "Complaint where value does not exceed Rs 1 crore.", keywords: ["consumer complaint district", "section 35 consumer act", "under 1 crore"] },
    "47": { title: "State Commission — Rs.1-10 crore", text: "Value exceeds Rs 1 crore but not Rs 10 crore.", keywords: ["state consumer commission", "section 47 consumer act"] },
    "58": { title: "National Commission — above Rs.10 crore", text: "Value exceeds Rs 10 crore.", keywords: ["ncdrc", "section 58 consumer act", "above 10 crore"] },
    "69": { title: "Limitation — 2 years", text: "Complaint must be filed within 2 years of cause of action.", keywords: ["consumer limitation", "section 69 consumer act"] },
  }
};

const RTI = {
  name: "Right to Information Act 2005", short: "RTI Act",
  keywords: ["rti", "right to information", "suchna ka adhikar", "rti application"],
  sections: {
    "3":  { title: "Right to information", text: "All citizens have right to information.", keywords: ["rti right", "section 3 rti"] },
    "6":  { title: "RTI Application", text: "Request in writing in English/Hindi/official language with prescribed fee.", keywords: ["rti application", "section 6 rti"] },
    "7":  { title: "30 days time limit", text: "Information within 30 days. Life/liberty involved — 48 hours.", keywords: ["rti 30 days", "section 7 rti"] },
    "19": { title: "Appeal", text: "First appeal within 30 days. Second appeal to Information Commission within 90 days.", keywords: ["rti appeal", "section 19 rti"] },
  }
};

const CPC = {
  name: "Code of Civil Procedure 1908", short: "CPC",
  keywords: ["cpc", "civil procedure", "civil suit", "civil case"],
  sections: {
    "9":      { title: "Civil court jurisdiction", text: "Courts try all civil suits except those expressly barred.", keywords: ["civil jurisdiction", "section 9 cpc"] },
    "11":     { title: "Res Judicata", text: "No court shall try matter already decided between same parties in competent court.", keywords: ["res judicata", "section 11 cpc", "pehle faisala"] },
    "80":     { title: "Notice before government suit", text: "2 months notice to government before filing suit.", keywords: ["government notice", "section 80 cpc"] },
    "96":     { title: "First appeal", text: "Appeal from every decree passed by court of original jurisdiction.", keywords: ["civil appeal", "section 96 cpc"] },
    "100":    { title: "Second appeal to HC", text: "Second appeal if case involves substantial question of law.", keywords: ["second appeal", "section 100 cpc"] },
    "O39R1":  { title: "Temporary injunction", text: "Court may grant temporary injunction to restrain party from doing acts causing injury.", keywords: ["temporary injunction", "order 39 rule 1", "stay order"] },
  }
};

const TPA = {
  name: "Transfer of Property Act 1882", short: "TPA",
  keywords: ["transfer of property", "tpa", "property transfer", "sale deed", "mortgage", "lease", "gift deed"],
  sections: {
    "54":  { title: "Sale", text: "Transfer of ownership for price. Immoveable property above Rs.100 must be by registered instrument.", keywords: ["sale of property", "section 54 tpa", "registered sale deed"] },
    "58":  { title: "Mortgage", text: "Transfer of interest in immoveable property to secure loan.", keywords: ["mortgage", "section 58 tpa", "girvi"] },
    "105": { title: "Lease", text: "Transfer of right to enjoy property for certain time for consideration.", keywords: ["lease", "section 105 tpa", "kiraya"] },
    "122": { title: "Gift", text: "Voluntary transfer without consideration, accepted by donee.", keywords: ["gift deed", "section 122 tpa", "uphar"] },
  }
};

const LEADING_CASES = {
  "Art21": [
    { name: "Maneka Gandhi v Union of India (1978)", citation: "AIR 1978 SC 597", facts: "Government impounded passport without giving reasons or hearing.", held: "Procedure established by law must be just, fair and reasonable. Articles 14, 19 and 21 are interconnected.", importance: "Revolutionized interpretation of Articles 14, 19 and 21." },
    { name: "Olga Tellis v Bombay Municipal Corporation (1985)", citation: "AIR 1986 SC 180", facts: "Pavement dwellers challenged eviction without notice.", held: "Right to livelihood is part of right to life under Article 21.", importance: "Right to livelihood = Right to life." },
  ],
  "Art32_226": [
    { name: "Kesavananda Bharati v State of Kerala (1973)", citation: "AIR 1973 SC 1461", facts: "Challenge to Kerala land reform amendment. Parliament's power to amend Constitution came up.", held: "Parliament cannot amend the basic structure of the Constitution.", importance: "Most important constitutional case — basic structure doctrine." },
  ],
  "S103_BNS": [
    { name: "Bachan Singh v State of Punjab (1980)", citation: "AIR 1980 SC 898", facts: "Bachan Singh convicted for murder of 3 persons.", held: "Death penalty constitutional but only in rarest of rare cases.", importance: "Established rarest of rare doctrine for death penalty." },
  ],
  "S85_BNS": [
    { name: "Arnesh Kumar v State of Bihar (2014)", citation: "AIR 2014 SC 2756", facts: "Mechanical arrests in 498A cases without investigation.", held: "Police cannot arrest mechanically. Must check 9 questions before arrest.", importance: "Protected against misuse of 498A." },
  ],
  "S138_NI": [
    { name: "Dashrath Rupsingh Rathod v State of Maharashtra (2014)", citation: "AIR 2014 SC 3519", facts: "Question of jurisdiction in cheque bounce case.", held: "Case to be filed only at place where drawer's bank is situated.", importance: "Fixed jurisdiction for cheque bounce cases." },
  ],
  "S482_BNSS": [
    { name: "Gurbaksh Singh Sibbia v State of Punjab (1980)", citation: "AIR 1980 SC 1632", facts: "Challenge to conditions in anticipatory bail.", held: "Court has wide discretion. Cannot refuse merely because offence is serious.", importance: "Fundamental case on anticipatory bail." },
    { name: "Sushila Aggarwal v State NCT Delhi (2020)", citation: "(2020) 5 SCC 1", facts: "Whether anticipatory bail can be for limited period only.", held: "Anticipatory bail need not be time-limited. Can continue till end of trial.", importance: "Settled — anticipatory bail not time-limited." },
  ],
  "S483_BNSS": [
    { name: "Satender Kumar Antil v CBI (2022)", citation: "(2022) 10 SCC 51", facts: "Accused in custody for long time without bail being decided.", held: "Bail is rule, jail is exception. Courts must decide promptly.", importance: "Most recent landmark on bail." },
  ],
};

const DRAFT_KEYWORDS = [
  "draft", "drafting", "draw up", "prepare", "write application", "banao", "likho",
  "taiyar karo", "bana do", "likh do", "draft karo", "draft karna hai",
  "application chahiye", "petition chahiye", "notice chahiye", "format chahiye",
  "document chahiye", "agreement chahiye", "deed chahiye", "complaint likhni hai",
  "fir likhni hai", "bail application", "notice bhejna", "plaint", "vakalatnama"
];

const CASE_KEYWORDS = [
  "case", "judgment", "judgement", "verdict", "kanoon", "kya hai",
  "explain", "batao", "samjhao", "what is", "section", "article", "dhara",
  "leading case", "landmark", "supreme court case", "case law", "precedent"
];

function findSection(query) {
  const q = query.toLowerCase();
  const results = [];

  const allActs = [
    { data: BNS, type: "section" },
    { data: BNSS, type: "section" },
    { data: BSA, type: "section" },
    { data: CONSTITUTION, type: "article" },
    { data: NI_ACT, type: "section" },
    { data: HMA, type: "section" },
    { data: DV_ACT, type: "section" },
    { data: CONSUMER, type: "section" },
    { data: RTI, type: "section" },
    { data: CPC, type: "section" },
    { data: TPA, type: "section" },
  ];

  for (const { data, type } of allActs) {
    const actMatch = data.keywords?.some(kw => q.includes(kw.toLowerCase()));
    const secs = type === "article" ? data.articles : data.sections;
    if (!secs) continue;

    for (const [num, sec] of Object.entries(secs)) {
      const kwMatch = sec.keywords?.some(kw => q.includes(kw.toLowerCase()));
      const directMatch =
        q.includes(`section ${num}`) || q.includes(`sec ${num}`) ||
        q.includes(`s.${num}`) || q.includes(`article ${num}`) ||
        q.includes(`art ${num}`) || (actMatch && kwMatch);

      if (directMatch || kwMatch) {
        results.push({
          act: data.name, actShort: data.short, type,
          number: num, title: sec.title, text: sec.text,
          ipc: sec.ipc || sec.crpc || sec.ea || null,
          relevance: directMatch ? 3 : 2,
        });
      }
    }
  }

  // Find leading cases
  const caseResults = [];
  for (const [key, cases] of Object.entries(LEADING_CASES)) {
    if (results.some(r => q.includes(r.number)) || q.includes(key.toLowerCase().replace(/_/g,' '))) {
      caseResults.push(...cases);
    }
  }

  return {
    sections: results.sort((a, b) => b.relevance - a.relevance).slice(0, 5),
    cases: caseResults.slice(0, 3),
  };
}

function detectIntent(query) {
  const q = query.toLowerCase();
  const isDraft = DRAFT_KEYWORDS.some(kw => q.includes(kw));
  const isCase = CASE_KEYWORDS.some(kw => q.includes(kw));
  const isSection = /section|dhara|article|art\.|sec\.|bns|bnss|bsa|ipc|crpc|cpc/.test(q);

  if (isDraft) return 'DRAFT';
  if (isSection) return 'SECTION';
  if (isCase) return 'CASE';
  return 'GENERAL';
}

module.exports = { findSection, detectIntent, LEADING_CASES };
