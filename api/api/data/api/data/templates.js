// ============================================================
// LEGAL CRAFT AI V4 — OFFICIAL COURT TEMPLATES (CommonJS)
// ============================================================

const TEMPLATES = {

  BAIL_REGULAR: {
    name: "Bail Application — Section 483 BNSS 2023",
    keywords: ["bail", "regular bail", "bail application", "section 483", "439 crpc", "bail chahiye"],
    template: (f) => `IN THE COURT OF ${f.court_name || "THE SESSIONS JUDGE"}
${f.district || "[DISTRICT]"}, ${f.state || "[STATE]"}

CRIMINAL MISC. APPLICATION NO. _______ OF ${new Date().getFullYear()}

IN THE MATTER OF:
${f.accused_name || "[ACCUSED NAME]"}
Age: ${f.accused_age || "[AGE]"} years
R/o: ${f.accused_address || "[ADDRESS]"}
                                    ...APPLICANT/ACCUSED
VERSUS
STATE OF ${f.state?.toUpperCase() || "[STATE]"}
Through: ${f.police_station || "[POLICE STATION]"} Police Station
                                    ...RESPONDENT

APPLICATION FOR BAIL UNDER SECTION 483
BHARATIYA NAGARIK SURAKSHA SANHITA, 2023
(Formerly Section 439 Cr.P.C., 1973)

MOST RESPECTFULLY SHOWETH:

1. That the applicant ${f.accused_name || "[NAME]"} has been arrested on ${f.arrest_date || "[DATE]"} in FIR No. ${f.fir_number || "[FIR NO]"} dated ${f.fir_date || "[DATE]"} at PS ${f.police_station || "[PS]"} for offences under ${f.sections || "[SECTIONS]"}.

2. FACTS: ${f.facts || "[BRIEF FACTS OF THE CASE]"}

3. GROUNDS:
   (a) Applicant is innocent and falsely implicated.
   (b) No direct evidence against applicant.
   (c) Applicant is permanent resident — not likely to flee.
   (d) Will not tamper with evidence or influence witnesses.
   (e) No criminal antecedents.
   (f) As held in Satender Kumar Antil v CBI (2022) 10 SCC 51 — bail is rule, jail is exception.

4. Applicant ready to abide by any conditions imposed.

PRAYER:
(a) Release applicant on bail in FIR No. ${f.fir_number || "[FIR NO]"};
(b) Any other order as deemed fit.

Place: ${f.district || "[PLACE]"}
Date: ${new Date().toLocaleDateString('en-IN')}

                                    (${f.advocate_name || "[ADVOCATE NAME]"})
                                    Counsel for Applicant
                                    Enrol. No.: ${f.enrol_no || "[ENROLMENT NO]"}

VERIFICATION:
I, ${f.accused_name || "[NAME]"}, verify that contents are true and correct.
Verified at ${f.district || "[PLACE]"} on ${new Date().toLocaleDateString('en-IN')}.
                                    (${f.accused_name || "[NAME]"})`
  },

  ANTICIPATORY_BAIL: {
    name: "Anticipatory Bail — Section 482 BNSS 2023",
    keywords: ["anticipatory bail", "advance bail", "pre-arrest bail", "section 482", "438 crpc", "giraftari se pehle bail"],
    template: (f) => `IN THE COURT OF ${f.court_name || "THE SESSIONS JUDGE / HIGH COURT"}
${f.district || "[DISTRICT]"}, ${f.state || "[STATE]"}

CRIMINAL MISC. APPLICATION NO. _______ OF ${new Date().getFullYear()}

IN THE MATTER OF:
${f.applicant_name || "[APPLICANT NAME]"}
Age: ${f.applicant_age || "[AGE]"} years
R/o: ${f.applicant_address || "[ADDRESS]"}
                                    ...APPLICANT
VERSUS
STATE OF ${f.state?.toUpperCase() || "[STATE]"}
                                    ...RESPONDENT

APPLICATION FOR ANTICIPATORY BAIL UNDER SECTION 482
BHARATIYA NAGARIK SURAKSHA SANHITA, 2023
(Formerly Section 438 Cr.P.C., 1973)

MOST RESPECTFULLY SHOWETH:

1. Applicant has reason to believe he/she may be arrested for ${f.complaint_details || "[OFFENCE/COMPLAINT DETAILS]"} under ${f.sections || "[SECTIONS]"}.

2. BACKGROUND: ${f.background || "[WHY ARREST IS APPREHENDED]"}

3. GROUNDS:
   (a) Apprehension based on false complaint/malicious prosecution.
   (b) Applicant is innocent.
   (c) Permanent resident — not likely to flee.
   (d) Will cooperate with investigation.
   (e) As held in Gurbaksh Singh Sibbia v State of Punjab AIR 1980 SC 1632 — cannot refuse merely because offence is serious.
   (f) As held in Sushila Aggarwal v State (2020) 5 SCC 1 — anticipatory bail need not be time-limited.

4. Applicant undertakes to cooperate with investigation and not tamper with evidence.

PRAYER:
(a) Direct that applicant be released on bail if arrested;
(b) Impose such conditions as deemed fit.

Place: ${f.district || "[PLACE]"}
Date: ${new Date().toLocaleDateString('en-IN')}
                                    (${f.advocate_name || "[ADVOCATE NAME]"})
                                    Counsel for Applicant`
  },

  FIR_COMPLAINT: {
    name: "FIR Complaint — Section 173 BNSS 2023",
    keywords: ["fir", "complaint", "police complaint", "fir likhwana", "section 173", "154 crpc"],
    template: (f) => `TO,
THE OFFICER-IN-CHARGE
${f.police_station || "[POLICE STATION]"} Police Station
District: ${f.district || "[DISTRICT]"}, ${f.state || "[STATE]"}

SUBJECT: COMPLAINT UNDER SECTION 173 BNSS 2023

Respected Sir/Madam,

I, ${f.complainant_name || "[COMPLAINANT NAME]"}, Age: ${f.complainant_age || "[AGE]"}, R/o ${f.complainant_address || "[ADDRESS]"}, Mobile: ${f.complainant_mobile || "[MOBILE]"}, submit this complaint:

ACCUSED: ${f.accused_name || "[ACCUSED NAME / UNKNOWN]"}
Address: ${f.accused_address || "[ADDRESS IF KNOWN]"}

INCIDENT DETAILS:
Date: ${f.incident_date || "[DATE]"}
Time: ${f.incident_time || "[TIME]"}
Place: ${f.incident_place || "[PLACE]"}

FACTS:
${f.incident_description || "[DESCRIBE WHAT HAPPENED IN CHRONOLOGICAL ORDER]"}

WITNESSES: ${f.witnesses || "[WITNESS NAMES AND ADDRESSES]"}

OFFENCES: ${f.sections || "[BNS/OTHER SECTIONS]"}

PRAYER:
(a) Register FIR against accused;
(b) Arrest and prosecute accused;
(c) Recover stolen/damaged property.

I declare contents are true and correct.

Place: ${f.district || "[PLACE]"}
Date: ${new Date().toLocaleDateString('en-IN')}
Time: ${new Date().toLocaleTimeString('en-IN')}
                                    (${f.complainant_name || "[NAME]"})
                                    Complainant`
  },

  LEGAL_NOTICE_138: {
    name: "Legal Notice — Section 138 NI Act",
    keywords: ["legal notice", "cheque bounce", "section 138", "cheque dishonour", "138 notice", "cheque wapas"],
    template: (f) => `LEGAL NOTICE UNDER SECTION 138 READ WITH SECTION 142
NEGOTIABLE INSTRUMENTS ACT, 1881

BY SPEED POST / REGD. A.D.
Date: ${new Date().toLocaleDateString('en-IN')}

TO,
${f.receiver_name || "[ACCUSED/DRAWER NAME]"}
${f.receiver_address || "[COMPLETE ADDRESS]"}

Under instructions from my client ${f.sender_name || "[CLIENT NAME]"} R/o ${f.sender_address || "[ADDRESS]"}:

1. My client and you had a transaction whereby you owed Rs. ${f.cheque_amount || "[AMOUNT]"}/- to my client.

2. You issued the following cheque in discharge of your liability:
   Cheque No.: ${f.cheque_number || "[CHEQUE NO]"}
   Date:       ${f.cheque_date || "[DATE]"}
   Amount:     Rs. ${f.cheque_amount || "[AMOUNT]"}/-
   Bank:       ${f.bank_name || "[BANK NAME]"}
   Branch:     ${f.bank_branch || "[BRANCH]"}

3. The cheque was presented on ${f.presentation_date || "[DATE]"} and dishonoured on ${f.dishonour_date || "[DATE]"} with remark: "${f.dishonour_reason || "Insufficient Funds"}".

4. This amounts to an offence under Section 138 NI Act.

5. You are hereby called upon to pay Rs. ${f.cheque_amount || "[AMOUNT]"}/- with interest @ ${f.interest_rate || "18"}% p.a. within FIFTEEN (15) DAYS of receipt of this notice.

6. Failure will result in criminal complaint under Section 138/142 NI Act at your risk and cost.

${f.advocate_name || "[ADVOCATE NAME]"}
Advocate — Enrol. No.: ${f.enrol_no || "[ENROLMENT NO]"}
${f.advocate_address || "[ADDRESS]"}
Mobile: ${f.advocate_mobile || "[MOBILE]"}`
  },

  QUASHING_PETITION: {
    name: "Quashing Petition — Section 528 BNSS 2023",
    keywords: ["quashing", "fir quash", "section 528", "482 crpc", "quashing petition", "fir cancel"],
    template: (f) => `IN THE HIGH COURT OF ${f.state?.toUpperCase() || "[STATE]"}
AT ${f.hc_location || "[LOCATION]"}

CRIMINAL MISC. PETITION NO. _______ OF ${new Date().getFullYear()}

${f.petitioner_name || "[PETITIONER]"} ...PETITIONER
VERSUS
1. STATE OF ${f.state?.toUpperCase() || "[STATE]"}
2. ${f.complainant_name || "[COMPLAINANT]"} ...RESPONDENTS

PETITION UNDER SECTION 528 BNSS 2023
(Formerly Section 482 CrPC) FOR QUASHING OF
FIR NO. ${f.fir_number || "[FIR NO]"} DATED ${f.fir_date || "[DATE]"}
PS: ${f.police_station || "[PS]"}

MOST RESPECTFULLY SHOWETH:

1. Petitioner files this petition for quashing of FIR No. ${f.fir_number || "[FIR NO]"} dated ${f.fir_date || "[DATE]"} for offences under ${f.sections || "[SECTIONS]"}.

2. FACTS: ${f.facts || "[FACTS CHRONOLOGICALLY]"}

3. GROUNDS:
   (a) FIR does not disclose cognizable offence.
   (b) Allegations are vague and improbable.
   (c) FIR filed with malafide intentions — ${f.quashing_grounds || "[SPECIFIC GROUNDS]"}
   (d) As held in State of Haryana v Bhajan Lal (1992) Supp (1) SCC 335 — FIR falls in quashable categories.

PRAYER:
(a) Quash FIR No. ${f.fir_number || "[FIR NO]"} and all proceedings;
(b) Stay all proceedings during pendency;
(c) Any other order as deemed fit.

Date: ${new Date().toLocaleDateString('en-IN')}
                                    (${f.advocate_name || "[ADVOCATE NAME]"})
                                    Counsel for Petitioner`
  },

  LEGAL_NOTICE_GENERAL: {
    name: "General Legal Notice / Demand Notice",
    keywords: ["legal notice", "demand notice", "notice bhejna", "general notice"],
    template: (f) => `LEGAL NOTICE
BY SPEED POST / REGD. A.D.
Date: ${new Date().toLocaleDateString('en-IN')}

TO,
${f.receiver_name || "[RECEIVER NAME]"}
${f.receiver_address || "[ADDRESS]"}

Under instructions from my client ${f.sender_name || "[CLIENT NAME]"}:

1. ${f.notice_facts || "[FACTS OF THE CASE]"}

2. Due to your ${f.default_act || "act/omission"}, my client has suffered losses of Rs. ${f.claim_amount || "[AMOUNT]"}/-.

3. You are called upon to ${f.demand || "[SPECIFIC DEMAND]"} within ${f.notice_period || "15"} days of receipt of this notice.

4. Failing which my client shall initiate appropriate legal proceedings at your risk and cost.

${f.advocate_name || "[ADVOCATE NAME]"}
Advocate — ${f.advocate_address || "[ADDRESS]"}
Date: ${new Date().toLocaleDateString('en-IN')}`
  },

  DIVORCE_PETITION: {
    name: "Divorce Petition — Section 13 HMA 1955",
    keywords: ["divorce petition", "talak", "section 13 hma", "divorce", "divorce karna"],
    template: (f) => `IN THE FAMILY COURT
${f.district || "[DISTRICT]"}, ${f.state || "[STATE]"}

MATRIMONIAL CASE NO. _______ OF ${new Date().getFullYear()}

${f.petitioner_name || "[PETITIONER]"} ...PETITIONER
VERSUS
${f.respondent_name || "[RESPONDENT]"} ...RESPONDENT

PETITION FOR DIVORCE UNDER SECTION 13
HINDU MARRIAGE ACT, 1955

MOST RESPECTFULLY SHOWETH:

1. MARRIAGE: Date: ${f.marriage_date || "[DATE]"}, Place: ${f.marriage_place || "[PLACE]"}, Form: Hindu rites.
   Children: ${f.children || "Nil"}

2. FACTS:
${f.facts || "   [FACTS IN CHRONOLOGICAL ORDER WITH DATES]"}

3. GROUNDS: Respondent has treated petitioner with cruelty under Section 13(1)(ia) HMA:
   ${f.grounds || "[SPECIFIC ACTS OF CRUELTY]"}

4. Parties have been living separately since ${f.separation_date || "[DATE]"}.

PRAYER:
(a) Decree of divorce dissolving marriage dated ${f.marriage_date || "[DATE]"};
(b) Maintenance of Rs. ${f.alimony || "[AMOUNT]"}/- per month (if applicable);
(c) Custody of minor children (if applicable);
(d) Costs of proceedings.

Date: ${new Date().toLocaleDateString('en-IN')}
                                    (${f.advocate_name || "[ADVOCATE NAME]"})
                                    Counsel for Petitioner

VERIFICATION: I, ${f.petitioner_name || "[NAME]"}, verify contents are true.
Verified at ${f.district || "[PLACE]"} on ${new Date().toLocaleDateString('en-IN')}.`
  },

  CONSUMER_COMPLAINT: {
    name: "Consumer Complaint — Consumer Protection Act 2019",
    keywords: ["consumer complaint", "consumer forum", "defective product", "deficiency service", "consumer court"],
    template: (f) => `IN THE DISTRICT CONSUMER DISPUTES REDRESSAL COMMISSION
${f.district?.toUpperCase() || "[DISTRICT]"}, ${f.state || "[STATE]"}

CONSUMER COMPLAINT NO. _______ OF ${new Date().getFullYear()}

${f.complainant_name || "[COMPLAINANT]"} ...COMPLAINANT
VERSUS
${f.opposite_party || "[COMPANY/SELLER]"} ...OPPOSITE PARTY

CONSUMER COMPLAINT UNDER SECTION 35
CONSUMER PROTECTION ACT, 2019

1. Complainant is a consumer under Section 2(7) Consumer Protection Act 2019.

2. PURCHASE: Product/Service: ${f.product_service || "[PRODUCT]"}, Date: ${f.purchase_date || "[DATE]"}, Amount: Rs. ${f.amount_paid || "[AMOUNT]"}/-, Bill No.: ${f.bill_number || "[BILL NO]"}

3. FACTS: ${f.facts || "[WHEN PURCHASED, DEFECT FOUND, COMPLAINT MADE, OP RESPONSE]"}

4. DEFICIENCY: ${f.deficiency || "[SPECIFIC DEFECT/DEFICIENCY]"}

5. RELIEF:
   Replacement/Refund: Rs. ${f.refund_amount || "[AMOUNT]"}/-
   Compensation: Rs. ${f.compensation || "[AMOUNT]"}/-
   Litigation cost: Rs. ${f.litigation_cost || "[AMOUNT]"}/-

PRAYER:
(a) Direct OP to replace/refund Rs. ${f.refund_amount || "[AMOUNT]"}/- ;
(b) Compensation Rs. ${f.compensation || "[AMOUNT]"}/- for harassment;
(c) Litigation costs Rs. ${f.litigation_cost || "[AMOUNT]"}/-;
(d) Any other order as deemed fit.

Date: ${new Date().toLocaleDateString('en-IN')}
                                    (${f.complainant_name || "[NAME]"})
                                    Complainant`
  },

  RTI_APPLICATION: {
    name: "RTI Application — Section 6 RTI Act 2005",
    keywords: ["rti", "right to information", "rti application", "suchna ka adhikar", "rti file karna"],
    template: (f) => `APPLICATION UNDER SECTION 6(1) RIGHT TO INFORMATION ACT, 2005

Date: ${new Date().toLocaleDateString('en-IN')}

TO,
THE PUBLIC INFORMATION OFFICER
${f.department || "[DEPARTMENT NAME]"}
${f.department_address || "[DEPARTMENT ADDRESS]"}

I, ${f.applicant_name || "[APPLICANT NAME]"}, R/o ${f.applicant_address || "[ADDRESS]"}, Mobile: ${f.applicant_mobile || "[MOBILE]"}, request the following information:

INFORMATION REQUIRED:
1. ${f.query1 || "[FIRST QUERY — Be specific]"}
2. ${f.query2 || "[SECOND QUERY]"}
3. ${f.query3 || "[THIRD QUERY]"}

TIME PERIOD: ${f.time_period || "[SPECIFY PERIOD]"}

I enclose prescribed fee of Rs. 10/- by ${f.payment_mode || "IPO/Cash"}.

Please provide information within 30 days as per Section 7(1) RTI Act.
If held by another authority, please transfer as per Section 6(3).

                                    (${f.applicant_name || "[NAME]"})
                                    ${f.applicant_address || "[ADDRESS]"}`
  },

  VAKALATNAMA: {
    name: "Vakalatnama",
    keywords: ["vakalatnama", "vakalatnama banao", "advocate authority"],
    template: (f) => `VAKALATNAMA

IN THE COURT OF ${f.court_name || "[COURT NAME]"}
CASE: ${f.case_title || "[CASE TITLE]"} — NO. ${f.case_number || "[CASE NO]"}

I/We ${f.client_name || "[CLIENT NAME]"}, R/o ${f.client_address || "[ADDRESS]"}, appoint:

${f.advocate_name || "[ADVOCATE NAME]"}
Advocate — Enrolment No.: ${f.enrol_no || "[ENROLMENT NO]"}
${f.advocate_address || "[ADVOCATE ADDRESS]"}

to appear and act on my/our behalf in the above case and all related proceedings, including:
- Signing documents and applications
- Receiving notices and orders
- Filing appeals as necessary
- Engaging other advocates if required

I agree to ratify all acts done by the said Advocate.

Date: ${new Date().toLocaleDateString('en-IN')}
                    ${f.client_name || "[CLIENT NAME]"}
                    Client — Signature

ACCEPTED:
                    ${f.advocate_name || "[ADVOCATE NAME]"}
                    Advocate`
  },
};

function findTemplate(query) {
  const q = query.toLowerCase();
  for (const [key, tmpl] of Object.entries(TEMPLATES)) {
    if (tmpl.keywords?.some(kw => q.includes(kw.toLowerCase()))) {
      return { key, template: tmpl };
    }
  }
  return null;
}

function extractFields(query) {
  const fields = {};
  const nameMatch = query.match(/naam[:\s]+([A-Za-z\s]+?)(?:,|\.|\n|ke liye)/i) ||
                    query.match(/name[:\s]+([A-Za-z\s]+?)(?:,|\.|\n)/i) ||
                    query.match(/accused[:\s]+([A-Za-z\s]+?)(?:,|\.|\n)/i);
  if (nameMatch) {
    fields.accused_name = nameMatch[1].trim();
    fields.petitioner_name = nameMatch[1].trim();
    fields.applicant_name = nameMatch[1].trim();
    fields.complainant_name = nameMatch[1].trim();
  }
  const firMatch = query.match(/fir[:\s#no.]+([0-9\/\s]+?)(?:,|\.|\s|dated)/i);
  if (firMatch) fields.fir_number = firMatch[1].trim();
  const dateMatch = query.match(/(?:date|dated|tarikh)[:\s]+(\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{2,4})/i);
  if (dateMatch) { fields.fir_date = dateMatch[1]; fields.incident_date = dateMatch[1]; }
  const amountMatch = query.match(/(?:amount|rs\.?|rupees)[:\s]+([\d,]+)/i);
  if (amountMatch) { fields.cheque_amount = amountMatch[1].replace(/,/g,''); fields.suit_amount = amountMatch[1].replace(/,/g,''); }
  const courtMatch = query.match(/court[:\s]+([A-Za-z\s]+?)(?:,|\.|\n)/i);
  if (courtMatch) fields.court_name = courtMatch[1].trim();
  const districtMatch = query.match(/(?:district|city|jila)[:\s]+([A-Za-z\s]+?)(?:,|\.|\n)/i);
  if (districtMatch) fields.district = districtMatch[1].trim();
  const stateMatch = query.match(/state[:\s]+([A-Za-z\s]+?)(?:,|\.|\n)/i);
  if (stateMatch) fields.state = stateMatch[1].trim();
  const psMatch = query.match(/(?:police station|ps|thana)[:\s]+([A-Za-z\s]+?)(?:,|\.|\n)/i);
  if (psMatch) fields.police_station = psMatch[1].trim();
  return fields;
}

module.exports = { TEMPLATES, findTemplate, extractFields };
