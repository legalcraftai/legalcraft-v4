// ============================================================
// LEGAL CRAFT AI V4 — OFFICIAL COURT TEMPLATES
// Based on: eCourts.gov.in, Bar Council, Indian Kanoon
// All templates follow official Indian court formats
// ============================================================

export const TEMPLATES = {

  // ============================================================
  // CRIMINAL TEMPLATES
  // ============================================================

  BAIL_REGULAR: {
    name: "Bail Application — Section 483 BNSS 2023",
    court: "Sessions Court / High Court",
    keywords: ["bail", "regular bail", "bail application", "section 483", "439 crpc", "bail chahiye", "bail ke liye application"],
    requiredFields: ["court_name", "district", "state", "case_number", "accused_name", "accused_age", "accused_address", "fir_number", "fir_date", "police_station", "offence", "sections", "arrest_date", "advocate_name"],
    template: (f) => `IN THE COURT OF ${f.court_name || "THE SESSIONS JUDGE"}
${f.district || "[DISTRICT]"}, ${f.state || "[STATE]"}

CRIMINAL MISC. APPLICATION NO. _______ OF ${new Date().getFullYear()}

IN THE MATTER OF:
${f.accused_name || "[ACCUSED NAME]"}
Age: ${f.accused_age || "[AGE]"} years
S/o, D/o, W/o: ${f.father_name || "[FATHER/HUSBAND NAME]"}
R/o: ${f.accused_address || "[COMPLETE ADDRESS"}
                                              ...APPLICANT/ACCUSED

VERSUS

STATE OF ${f.state?.toUpperCase() || "[STATE]"}
Through: ${f.police_station || "[POLICE STATION]"} Police Station
                                              ...RESPONDENT/STATE

APPLICATION FOR BAIL UNDER SECTION 483 OF
BHARATIYA NAGARIK SURAKSHA SANHITA, 2023
(Formerly Section 439 of Cr.P.C., 1973)

MOST RESPECTFULLY SHOWETH:

1. That the applicant/accused ${f.accused_name || "[NAME]"} has been arrested on ${f.arrest_date || "[DATE OF ARREST]"} in connection with FIR No. ${f.fir_number || "[FIR NUMBER]"} dated ${f.fir_date || "[FIR DATE]"}, registered at Police Station ${f.police_station || "[POLICE STATION]"}, District ${f.district || "[DISTRICT]"}, for the alleged offences punishable under ${f.sections || "[SECTIONS]"}.

2. BRIEF FACTS OF THE CASE:
${f.facts || "   That the brief facts of the case as alleged in the FIR are that [FACTS TO BE FILLED BY ADVOCATE BASED ON CASE]."}

3. GROUNDS FOR BAIL:

   (a) That the applicant is innocent and has been falsely implicated in this case. The applicant has not committed any offence as alleged.

   (b) That there is no direct evidence against the applicant and the case is based on ${f.evidence_nature || "circumstantial evidence/false allegations"}.

   (c) That the applicant is a permanent resident of the above address and is not likely to flee from justice. He/She has deep roots in the society.

   (d) That the applicant has cooperated with the investigating agency and there is no likelihood of the applicant tampering with evidence or influencing witnesses.

   (e) That the applicant has no criminal antecedents and this is the first case registered against him/her.

   (f) That the applicant has ${f.family_details || "a family including spouse and children who are dependent upon him/her"} and his/her incarceration is causing irreparable hardship to the family.

   (g) That the investigation is complete / nearing completion and the applicant's custody is no longer required for investigation purposes.

   (h) That it is settled law that bail is rule and jail is exception — Satender Kumar Antil v. CBI (2022) 10 SCC 51.

4. That the applicant is ready and willing to abide by any conditions that this Hon'ble Court may impose while granting bail.

5. That no previous bail application has been filed before this or any other court / the previous application filed before _____________ was rejected on _____________ for the following reasons: _____________. The present application is based on fresh grounds.

PRAYER:

It is therefore most respectfully prayed that this Hon'ble Court may graciously be pleased to:

(a) Release the applicant on bail in connection with FIR No. ${f.fir_number || "[FIR NUMBER]"} dated ${f.fir_date || "[FIR DATE]"} registered at PS ${f.police_station || "[PS]"};

(b) Pass any other order(s) as this Hon'ble Court may deem fit and proper in the interest of justice.

                                              Respectfully submitted,

Place: ${f.district || "[PLACE]"}
Date: ${new Date().toLocaleDateString('en-IN')}

                                              (${f.advocate_name || "[ADVOCATE NAME]"})
                                              Counsel for the Applicant/Accused
                                              Enrol. No.: ${f.enrol_no || "[ENROLMENT NUMBER]"}

VERIFICATION:
I, ${f.accused_name || "[ACCUSED NAME]"}, the applicant above named do hereby verify that the contents of the above application are true and correct to the best of my knowledge and belief and nothing material has been concealed therefrom.

Verified at ${f.district || "[PLACE]"} on this _____ day of _________, ${new Date().getFullYear()}.

                                              (${f.accused_name || "[ACCUSED NAME]"})
                                              Applicant/Accused`
  },

  ANTICIPATORY_BAIL: {
    name: "Anticipatory Bail Application — Section 482 BNSS 2023",
    court: "Sessions Court / High Court",
    keywords: ["anticipatory bail", "advance bail", "pre-arrest bail", "section 482", "438 crpc", "giraftari se pehle bail", "anticipatory"],
    requiredFields: ["court_name", "district", "state", "applicant_name", "applicant_age", "applicant_address", "complaint_details", "sections", "advocate_name"],
    template: (f) => `IN THE COURT OF ${f.court_name || "THE SESSIONS JUDGE"} / 
IN THE HIGH COURT OF ${f.state?.toUpperCase() || "[STATE]"}
AT ${f.hc_location || f.district || "[LOCATION]"}

CRIMINAL MISC. APPLICATION NO. _______ OF ${new Date().getFullYear()}

IN THE MATTER OF:
${f.applicant_name || "[APPLICANT NAME]"}
Age: ${f.applicant_age || "[AGE]"} years
S/o, D/o, W/o: ${f.father_name || "[FATHER/HUSBAND NAME]"}
R/o: ${f.applicant_address || "[COMPLETE ADDRESS]"}
                                              ...APPLICANT

VERSUS

STATE OF ${f.state?.toUpperCase() || "[STATE]"}
Through: ${f.police_station || "[POLICE STATION]"} Police Station
                                              ...RESPONDENT

APPLICATION FOR ANTICIPATORY BAIL UNDER SECTION 482 OF
BHARATIYA NAGARIK SURAKSHA SANHITA, 2023
(Formerly Section 438 of Cr.P.C., 1973)

MOST RESPECTFULLY SHOWETH:

1. That the applicant has reason to believe that he/she may be arrested in connection with ${f.complaint_details || "[COMPLAINT/CASE DETAILS]"} for alleged offences under ${f.sections || "[SECTIONS]"}.

2. BACKGROUND OF THE CASE:
${f.background || "   [Background of dispute and why applicant believes arrest may happen]"}

3. GROUNDS FOR ANTICIPATORY BAIL:

   (a) That the apprehension of arrest is based on ${f.apprehension_basis || "false complaint/malicious prosecution"} by the complainant.

   (b) That the applicant is innocent and has not committed any offence as alleged.

   (c) That the applicant is a respectable person of the society with permanent roots and is not likely to flee from justice.

   (d) That the applicant is ready and willing to cooperate with the investigating agency in the investigation.

   (e) That the applicant shall not tamper with evidence or influence any witness.

   (f) That it is settled by Hon'ble Supreme Court in Gurbaksh Singh Sibbia v. State of Punjab AIR 1980 SC 1632 that anticipatory bail cannot be refused merely because the offence alleged is serious.

   (g) That in Sushila Aggarwal v. State (NCT of Delhi) (2020) 5 SCC 1 the Supreme Court held that anticipatory bail need not be limited in time.

4. That the applicant undertakes to surrender his/her passport to the Investigating Officer / Court.

5. That no previous anticipatory bail application has been filed / previous application was filed before _________ on _________ and was rejected.

PRAYER:

It is therefore most respectfully prayed that this Hon'ble Court may graciously be pleased to:

(a) Direct that in the event of arrest of the applicant, he/she shall be released on bail;

(b) Impose such conditions as this Hon'ble Court may deem fit;

(c) Pass any other order(s) as may be deemed fit and proper in the interest of justice.

                                              Respectfully submitted,

Place: ${f.district || "[PLACE]"}
Date: ${new Date().toLocaleDateString('en-IN')}

                                              (${f.advocate_name || "[ADVOCATE NAME]"})
                                              Counsel for the Applicant
                                              Enrol. No.: ${f.enrol_no || "[ENROLMENT NUMBER]"}

VERIFICATION:
I, ${f.applicant_name || "[APPLICANT NAME]"}, do hereby verify that the contents of the above application are true and correct to the best of my knowledge and belief.

Verified at ${f.district || "[PLACE]"} on this _____ day of _________, ${new Date().getFullYear()}.

                                              (${f.applicant_name || "[APPLICANT NAME]"})
                                              Applicant`
  },

  FIR_COMPLAINT: {
    name: "FIR / Police Complaint — Section 173 BNSS 2023",
    court: "Police Station",
    keywords: ["fir", "complaint", "police complaint", "fir likhwana", "section 173", "154 crpc", "police station complaint", "report karna"],
    requiredFields: ["complainant_name", "complainant_address", "complainant_mobile", "police_station", "district", "state", "incident_date", "incident_time", "incident_place", "incident_description", "accused_name", "sections"],
    template: (f) => `TO,
THE OFFICER-IN-CHARGE
${f.police_station || "[POLICE STATION]"} Police Station
District: ${f.district || "[DISTRICT]"}
${f.state || "[STATE]"}

SUBJECT: COMPLAINT / FIRST INFORMATION REPORT UNDER SECTION 173 OF 
BHARATIYA NAGARIK SURAKSHA SANHITA, 2023

Respected Sir/Madam,

I, ${f.complainant_name || "[COMPLAINANT NAME]"}, Age: ${f.complainant_age || "[AGE]"} years, S/o, D/o, W/o ${f.father_name || "[FATHER/HUSBAND NAME]"}, R/o ${f.complainant_address || "[COMPLETE ADDRESS]"}, Mobile: ${f.complainant_mobile || "[MOBILE NUMBER]"}, beg to submit this complaint and state as under:

1. COMPLAINANT DETAILS:
   Name: ${f.complainant_name || "[NAME]"}
   Age: ${f.complainant_age || "[AGE]"}
   Address: ${f.complainant_address || "[ADDRESS]"}
   Mobile: ${f.complainant_mobile || "[MOBILE]"}
   Occupation: ${f.complainant_occupation || "[OCCUPATION]"}

2. ACCUSED DETAILS (if known):
   Name: ${f.accused_name || "[ACCUSED NAME / UNKNOWN]"}
   Address: ${f.accused_address || "[ADDRESS IF KNOWN]"}
   Description: ${f.accused_description || "[DESCRIPTION]"}

3. INCIDENT DETAILS:
   Date of Incident: ${f.incident_date || "[DATE]"}
   Time of Incident: ${f.incident_time || "[TIME]"}
   Place of Incident: ${f.incident_place || "[PLACE]"}

4. FACTS OF THE INCIDENT (in chronological order):
${f.incident_description || "   [Describe what happened in chronological order — date, time, place, what happened, who was involved, what was said/done, witnesses present]"}

5. WITNESSES (if any):
   ${f.witnesses || "1. [WITNESS NAME AND ADDRESS]\n   2. [WITNESS NAME AND ADDRESS]"}

6. ARTICLES/PROPERTY INVOLVED (if any):
   ${f.articles || "[LIST OF ARTICLES STOLEN/DAMAGED ETC.]"}

7. DOCUMENTS ATTACHED:
   ${f.documents || "[LIST DOCUMENTS IF ANY]"}

8. OFFENCES COMMITTED:
   The above acts of the accused are offences punishable under ${f.sections || "[SECTIONS OF BNS/OTHER ACTS]"}.

PRAYER:
In view of the above facts, it is respectfully requested that:
(a) FIR be registered against the accused;
(b) Necessary action be taken under the law;
(c) Accused be arrested and prosecuted;
(d) Stolen/damaged property be recovered.

I undertake that the contents of this complaint are true and correct to the best of my knowledge.

Yours faithfully,

Place: ${f.district || "[PLACE]"}
Date: ${new Date().toLocaleDateString('en-IN')}
Time: ${new Date().toLocaleTimeString('en-IN')}

                                              (${f.complainant_name || "[COMPLAINANT NAME]"})
                                              Complainant
                                              Signature/Thumb Impression`
  },

  LEGAL_NOTICE_138: {
    name: "Legal Notice — Section 138 NI Act (Cheque Bounce)",
    court: "N/A — Notice before filing complaint",
    keywords: ["legal notice", "cheque bounce", "section 138", "cheque dishonour", "ni act notice", "cheque wapas", "138 notice"],
    requiredFields: ["sender_name", "sender_address", "receiver_name", "receiver_address", "cheque_number", "cheque_date", "cheque_amount", "bank_name", "dishonour_date", "dishonour_reason", "advocate_name"],
    template: (f) => `LEGAL NOTICE UNDER SECTION 138 READ WITH SECTION 142 OF THE 
NEGOTIABLE INSTRUMENTS ACT, 1881

BY SPEED POST / REGD. A.D.

Date: ${new Date().toLocaleDateString('en-IN')}

TO,
${f.receiver_name || "[RECEIVER/ACCUSED NAME]"}
${f.receiver_address || "[COMPLETE ADDRESS OF RECEIVER]"}

From:
${f.sender_name || "[SENDER/COMPLAINANT NAME]"}
Through: ${f.advocate_name || "[ADVOCATE NAME]"}
${f.advocate_address || "[ADVOCATE ADDRESS]"}

Sir/Madam,

Under instructions from and on behalf of my client ${f.sender_name || "[CLIENT NAME]"} R/o ${f.sender_address || "[CLIENT ADDRESS]"}, I hereby serve you with the following legal notice:

1. That my client and you entered into a transaction/agreement dated ${f.transaction_date || "[DATE]"} whereby ${f.transaction_details || "you owed a sum of money to my client"}.

2. That in discharge of your liability/debt of Rs. ${f.cheque_amount || "[AMOUNT]"}/- (Rupees ${f.cheque_amount_words || "[AMOUNT IN WORDS]"} Only), you had issued the following cheque in favour of my client:

   Cheque No.:    ${f.cheque_number || "[CHEQUE NUMBER]"}
   Cheque Date:   ${f.cheque_date || "[DATE ON CHEQUE]"}
   Amount:        Rs. ${f.cheque_amount || "[AMOUNT]"}/-
   Bank:          ${f.bank_name || "[BANK NAME]"}
   Branch:        ${f.bank_branch || "[BRANCH NAME]"}
   Account No.:   ${f.account_number || "[ACCOUNT NUMBER]"}

3. That my client presented the above cheque for encashment through his bank on ${f.presentation_date || "[DATE OF PRESENTATION]"}, but the same was returned/dishonoured by your bank on ${f.dishonour_date || "[DATE OF DISHONOUR]"} with the remark "${f.dishonour_reason || "Insufficient Funds/Payment Stopped"}".

4. That the return of the cheque unpaid amounts to an offence punishable under Section 138 of the Negotiable Instruments Act, 1881.

5. That in terms of Section 138 of the Negotiable Instruments Act, 1881, this notice is being served upon you calling upon you to make the payment of Rs. ${f.cheque_amount || "[AMOUNT]"}/- (Rupees ${f.cheque_amount_words || "[AMOUNT IN WORDS]"} Only) together with interest @ ${f.interest_rate || "18"}% per annum from the date of dishonour, within FIFTEEN (15) DAYS from the receipt of this notice.

6. In case you fail to make the payment within 15 days from the receipt of this notice, my client will be constrained to file a criminal complaint against you under Section 138 read with Section 142 of the Negotiable Instruments Act, 1881 before the competent court, at your risk, cost and consequence.

7. Please note that expenses and damages arising out of such action shall also be recoverable from you.

This notice is without prejudice to all other rights and remedies available to my client under law.

${f.advocate_name || "[ADVOCATE NAME]"}
Advocate
${f.advocate_address || "[ADVOCATE ADDRESS]"}
${f.advocate_mobile || "[MOBILE NUMBER]"}
Enrol. No.: ${f.enrol_no || "[ENROLMENT NUMBER]"}

NOTE: The postal receipt and envelope shall constitute part of this notice.`
  },

  QUASHING_PETITION: {
    name: "Petition for Quashing of FIR — Section 528 BNSS 2023",
    court: "High Court",
    keywords: ["quashing", "fir quash", "section 528", "482 crpc", "quashing petition", "fir cancel"],
    requiredFields: ["hc_name", "state", "petitioner_name", "petitioner_address", "fir_number", "fir_date", "police_station", "district", "sections", "advocate_name"],
    template: (f) => `IN THE HIGH COURT OF ${f.state?.toUpperCase() || "[STATE]"}
AT ${f.hc_location || "[LOCATION]"}

CRIMINAL MISC. PETITION NO. _______ OF ${new Date().getFullYear()}

IN THE MATTER OF:
${f.petitioner_name || "[PETITIONER NAME]"}
Age: ${f.petitioner_age || "[AGE]"} years
R/o: ${f.petitioner_address || "[ADDRESS]"}
                                              ...PETITIONER

VERSUS

1. STATE OF ${f.state?.toUpperCase() || "[STATE]"}
   Through: ${f.police_station || "[POLICE STATION]"} Police Station

2. ${f.complainant_name || "[COMPLAINANT NAME]"}
   R/o: ${f.complainant_address || "[ADDRESS]"}
                                              ...RESPONDENTS

PETITION UNDER SECTION 528 OF BHARATIYA NAGARIK SURAKSHA SANHITA, 2023
(Formerly Section 482 Cr.P.C.) FOR QUASHING OF FIR NO. ${f.fir_number || "[FIR NUMBER]"}
DATED ${f.fir_date || "[FIR DATE]"} REGISTERED AT PS ${f.police_station || "[PS]"}

MOST RESPECTFULLY SHOWETH:

1. That the petitioner is a law-abiding citizen and has filed this petition for quashing of FIR No. ${f.fir_number || "[FIR NUMBER]"} dated ${f.fir_date || "[FIR DATE]"} registered at PS ${f.police_station || "[PS]"} for alleged offences under ${f.sections || "[SECTIONS]"}.

2. BRIEF FACTS:
${f.facts || "   [State the facts chronologically]"}

3. GROUNDS FOR QUASHING:

   (a) That the FIR does not disclose any cognizable offence against the petitioner. The allegations are vague and general.

   (b) That the FIR has been filed with malafide intentions to settle personal scores / in a civil dispute / as an abuse of process.

   (c) That ${f.quashing_grounds || "[SPECIFIC GROUNDS FOR QUASHING]"}

   (d) That in State of Haryana v. Bhajan Lal (1992) Supp (1) SCC 335, the Supreme Court has laid down 7 categories where FIR can be quashed:
       - Allegations do not constitute offence
       - Allegations are absurd and inherently improbable
       - Clear malafide and personal grudge
       - FIR is civil dispute dressed in criminal form

   (e) That the present FIR squarely falls within the categories laid down in Bhajan Lal's case.

4. That the continuation of FIR proceedings amounts to abuse of process and causing irreparable prejudice to the petitioner.

PRAYER:

It is therefore most respectfully prayed that this Hon'ble Court may graciously be pleased to:

(a) Quash and set aside FIR No. ${f.fir_number || "[FIR NUMBER]"} dated ${f.fir_date || "[FIR DATE]"} registered at PS ${f.police_station || "[PS]"} and all proceedings arising therefrom;

(b) Grant stay of all proceedings pursuant to the said FIR during pendency of this petition;

(c) Pass any other order(s) as this Hon'ble Court may deem fit.

                                              Respectfully submitted,

Place: ${f.hc_location || "[PLACE]"}
Date: ${new Date().toLocaleDateString('en-IN')}

                                              (${f.advocate_name || "[ADVOCATE NAME]"})
                                              Counsel for the Petitioner
                                              Enrol. No.: ${f.enrol_no || "[ENROLMENT NUMBER]"}`
  },

  // ============================================================
  // CIVIL TEMPLATES
  // ============================================================

  LEGAL_NOTICE_GENERAL: {
    name: "General Legal Notice / Demand Notice",
    keywords: ["legal notice", "demand notice", "notice", "legal notice general", "notice bhejna"],
    template: (f) => `LEGAL NOTICE

BY SPEED POST / REGISTERED A.D.

Date: ${new Date().toLocaleDateString('en-IN')}

TO,
${f.receiver_name || "[RECEIVER NAME]"}
${f.receiver_address || "[RECEIVER COMPLETE ADDRESS]"}

From:
${f.sender_name || "[SENDER NAME]"}
Through Counsel: ${f.advocate_name || "[ADVOCATE NAME]"}
${f.advocate_address || "[ADVOCATE ADDRESS]"}

Sir/Madam,

Under instructions from and on behalf of my client ${f.sender_name || "[CLIENT NAME]"} R/o ${f.sender_address || "[CLIENT ADDRESS]"}, I hereby serve you the following notice:

1. ${f.notice_facts || "[FACTS OF THE CASE — What happened, when, between whom, what is owed/demanded]"}

2. That due to your ${f.default_act || "act/omission/breach"}, my client has suffered losses to the tune of Rs. ${f.claim_amount || "[AMOUNT]"}/-.

3. That despite repeated requests and reminders, you have failed to ${f.demand || "[WHAT IS DEMANDED — pay money/perform act/stop action]"}.

4. You are hereby called upon to ${f.demand || "[SPECIFIC DEMAND]"} within ${f.notice_period || "15 (Fifteen)"} days from the receipt of this notice, failing which my client shall be constrained to initiate appropriate legal proceedings against you, civil and/or criminal, at your risk and cost.

5. Please note that all legal expenses, damages and costs arising out of such proceedings shall also be recovered from you.

This notice is without prejudice to all the rights and remedies of my client under law.

${f.advocate_name || "[ADVOCATE NAME]"}
Advocate — Enrol. No.: ${f.enrol_no || "[ENROLMENT NUMBER]"}
${f.advocate_address || "[ADDRESS]"}
Mobile: ${f.advocate_mobile || "[MOBILE]"}
Date: ${new Date().toLocaleDateString('en-IN')}`
  },

  PLAINT_RECOVERY: {
    name: "Plaint for Recovery of Money — Order VII CPC",
    court: "Civil Court / District Court",
    keywords: ["recovery suit", "money suit", "civil suit", "plaint", "suit for recovery", "paisa wapas", "civil case"],
    template: (f) => `IN THE COURT OF ${f.court_name || "CIVIL JUDGE (SENIOR DIVISION)"}
AT ${f.district || "[DISTRICT]"}, ${f.state || "[STATE]"}

CIVIL SUIT NO. _______ OF ${new Date().getFullYear()}

IN THE MATTER OF:
${f.plaintiff_name || "[PLAINTIFF NAME]"}
Age: ${f.plaintiff_age || "[AGE]"} years, S/o ${f.plaintiff_father || "[FATHER NAME]"}
R/o: ${f.plaintiff_address || "[PLAINTIFF ADDRESS]"}
                                              ...PLAINTIFF

VERSUS

${f.defendant_name || "[DEFENDANT NAME]"}
Age: ${f.defendant_age || "[AGE]"} years, S/o ${f.defendant_father || "[FATHER NAME]"}
R/o: ${f.defendant_address || "[DEFENDANT ADDRESS]"}
                                              ...DEFENDANT

PLAINT FOR RECOVERY OF MONEY
(Under Order VII Rule 1 of C.P.C., 1908)

MOST RESPECTFULLY SHOWETH:

CAUSE OF ACTION & JURISDICTION:
1. That the plaintiff is a permanent resident of ${f.district || "[DISTRICT]"} and this Hon'ble Court has jurisdiction to entertain and try this suit as the cause of action arose within the jurisdiction of this Court and the defendant is also resident within jurisdiction.

2. That the suit is valued at Rs. ${f.suit_amount || "[AMOUNT]"}/- for purposes of court fee and jurisdiction, and appropriate court fee has been affixed.

FACTS OF THE CASE (Chronological):
${f.facts || `3. [FACT 1 — First event with date]
4. [FACT 2 — Next event with date]
5. [FACT 3 — Further events with dates]
6. [LAST EVENT — When payment demanded and refused]`}

LEGAL BASIS:
7. That the defendant is legally bound to repay the said amount and there is a valid and enforceable obligation.

8. That despite repeated demands, the defendant has failed and refused to pay the said amount.

AMOUNT CLAIMED:
9. Principal amount:     Rs. ${f.principal || "[PRINCIPAL AMOUNT]"}/-
   Interest @ ${f.interest_rate || "18"}% p.a.:  Rs. ${f.interest || "[INTEREST AMOUNT]"}/-
   Total:                Rs. ${f.suit_amount || "[TOTAL AMOUNT]"}/-

PRAYER:

The plaintiff therefore prays that this Hon'ble Court may be pleased to:

(a) Pass a decree for Rs. ${f.suit_amount || "[AMOUNT]"}/- (Rupees ${f.amount_words || "[AMOUNT IN WORDS]"} Only) together with interest @ ${f.interest_rate || "18"}% per annum from the date of suit till realization in favour of the plaintiff and against the defendant;

(b) Award costs of the suit in favour of the plaintiff;

(c) Pass any other order(s) as this Hon'ble Court may deem just and proper.

                                              Respectfully submitted,

Place: ${f.district || "[PLACE]"}
Date: ${new Date().toLocaleDateString('en-IN')}

                                              (${f.advocate_name || "[ADVOCATE NAME]"})
                                              Counsel for the Plaintiff

VERIFICATION:
I, ${f.plaintiff_name || "[PLAINTIFF NAME]"}, the plaintiff above named do hereby verify that the contents of paras 1 to 9 of the above plaint are true and correct to the best of my knowledge and belief.

Verified at ${f.district || "[PLACE]"} on this _____ day of _________, ${new Date().getFullYear()}.

                                              (${f.plaintiff_name || "[PLAINTIFF NAME]"})
                                              Plaintiff`
  },

  // ============================================================
  // CONSTITUTIONAL / WRIT TEMPLATES
  // ============================================================

  WRIT_HABEAS_CORPUS: {
    name: "Writ Petition — Habeas Corpus — Article 226 / Article 32",
    court: "High Court / Supreme Court",
    keywords: ["habeas corpus", "illegal detention", "wrongful arrest", "writ petition", "article 226", "article 32"],
    template: (f) => `IN THE HIGH COURT OF ${f.state?.toUpperCase() || "[STATE]"}
AT ${f.hc_location || "[LOCATION]"}

WRIT PETITION (CRIMINAL) NO. _______ OF ${new Date().getFullYear()}

IN THE MATTER OF:
${f.petitioner_name || "[PETITIONER NAME]"}
R/o: ${f.petitioner_address || "[ADDRESS]"}
                                              ...PETITIONER

VERSUS

1. STATE OF ${f.state?.toUpperCase() || "[STATE]"}
2. SUPERINTENDENT, ${f.prison_name || "[PRISON/DETENTION CENTER]"}
3. ${f.respondent3 || "[ANY OTHER RESPONDENT]"}
                                              ...RESPONDENTS

WRIT PETITION UNDER ARTICLE 226 OF THE CONSTITUTION OF INDIA
SEEKING WRIT OF HABEAS CORPUS FOR RELEASE OF
${f.detainee_name || "[DETAINEE'S NAME]"}

MOST RESPECTFULLY SHOWETH:

1. That the petitioner is the ${f.relation || "relative/friend"} of ${f.detainee_name || "[DETAINEE NAME]"} who has been illegally detained/arrested.

2. FACTS:
${f.facts || "   [Facts of illegal detention — when arrested, where kept, grounds stated, why illegal]"}

3. GROUNDS:

   (a) That the detention is illegal and without authority of law.
   
   (b) That the procedure prescribed by law has not been followed. The detainee has not been produced before Magistrate within 24 hours as required by Article 22(2) of the Constitution.
   
   (c) That the grounds of detention as communicated are vague, irrelevant and not proximate to the detention.
   
   (d) That the detaining authority has not applied its mind to the facts.

4. That the petitioner has no other adequate remedy.

PRAYER:

It is therefore most respectfully prayed that this Hon'ble Court may be pleased to:

(a) Issue a Writ of Habeas Corpus or any other appropriate writ directing the Respondents to produce ${f.detainee_name || "[DETAINEE NAME]"} before this Court;

(b) Declare the detention of ${f.detainee_name || "[DETAINEE NAME]"} as illegal;

(c) Direct immediate release of ${f.detainee_name || "[DETAINEE NAME]"};

(d) Pass any other order as this Court may deem just.

Place: ${f.hc_location || "[PLACE]"}
Date: ${new Date().toLocaleDateString('en-IN')}

                                              (${f.advocate_name || "[ADVOCATE NAME]"})
                                              Counsel for the Petitioner`
  },

  PIL: {
    name: "Public Interest Litigation — Article 226 / Article 32",
    court: "High Court / Supreme Court",
    keywords: ["pil", "public interest litigation", "article 226", "article 32", "public interest", "PIL file karna"],
    template: (f) => `IN THE HIGH COURT OF ${f.state?.toUpperCase() || "[STATE]"}
AT ${f.hc_location || "[LOCATION]"}

WRIT PETITION (PIL) NO. _______ OF ${new Date().getFullYear()}

IN THE MATTER OF:
${f.petitioner_name || "[PETITIONER NAME / ORGANISATION]"}
R/o / Registered at: ${f.petitioner_address || "[ADDRESS]"}
                                              ...PETITIONER (PIL)

VERSUS

1. UNION OF INDIA / STATE OF ${f.state?.toUpperCase() || "[STATE]"}
   Through: Secretary, ${f.ministry || "[MINISTRY/DEPARTMENT]"}
2. ${f.respondent2 || "[OTHER RESPONDENT]"}
                                              ...RESPONDENTS

PUBLIC INTEREST LITIGATION UNDER ARTICLE 226 OF THE
CONSTITUTION OF INDIA

MOST RESPECTFULLY SHOWETH:

1. LOCUS STANDI:
   That the petitioner is a ${f.petitioner_nature || "public spirited citizen/NGO"} and is filing this PIL in public interest for enforcement of fundamental/constitutional rights of ${f.affected_class || "[AFFECTED CLASS OF PERSONS]"}.

2. ISSUE RAISED:
   ${f.issue || "[CONSTITUTIONAL/FUNDAMENTAL RIGHTS ISSUE]"}

3. FACTS:
${f.facts || "   [Facts establishing the public interest issue]"}

4. CONSTITUTIONAL VIOLATIONS:
   (a) Violation of Article ${f.articles_violated || "21/14/19"} of the Constitution.
   (b) ${f.other_violations || "[OTHER VIOLATIONS]"}

5. GROUNDS:
${f.grounds || "   [Grounds for PIL]"}

6. RELIEFS SOUGHT:

PRAYER:

It is therefore prayed that this Hon'ble Court may be pleased to:

(a) Issue appropriate writ/direction to the Respondents to ${f.main_prayer || "[MAIN PRAYER]"};

(b) ${f.prayer2 || "[ADDITIONAL PRAYER]"};

(c) Pass any other order as this Court may deem just.

Place: ${f.hc_location || "[PLACE]"}
Date: ${new Date().toLocaleDateString('en-IN')}

                                              (${f.advocate_name || "[ADVOCATE NAME]"})
                                              Counsel for the Petitioner`
  },

  // ============================================================
  // FAMILY LAW TEMPLATES
  // ============================================================

  DIVORCE_PETITION: {
    name: "Divorce Petition — Section 13 Hindu Marriage Act 1955",
    court: "Family Court / District Court",
    keywords: ["divorce petition", "talak", "section 13", "divorce", "divorce case", "divorce karna", "vivah viched"],
    template: (f) => `IN THE FAMILY COURT / COURT OF DISTRICT JUDGE
AT ${f.district || "[DISTRICT]"}, ${f.state || "[STATE]"}

MATRIMONIAL CASE NO. _______ OF ${new Date().getFullYear()}

IN THE MATTER OF:
${f.petitioner_name || "[PETITIONER NAME]"}
Age: ${f.petitioner_age || "[AGE]"} years
R/o: ${f.petitioner_address || "[ADDRESS]"}
                                              ...PETITIONER (${f.petitioner_gender === "F" ? "WIFE" : "HUSBAND"})

VERSUS

${f.respondent_name || "[RESPONDENT NAME]"}
Age: ${f.respondent_age || "[AGE]"} years
R/o: ${f.respondent_address || "[ADDRESS]"}
                                              ...RESPONDENT (${f.petitioner_gender === "F" ? "HUSBAND" : "WIFE"})

PETITION FOR DISSOLUTION OF MARRIAGE BY DECREE OF DIVORCE
UNDER SECTION 13 OF HINDU MARRIAGE ACT, 1955

MOST RESPECTFULLY SHOWETH:

1. MARRIAGE DETAILS:
   Date of Marriage: ${f.marriage_date || "[MARRIAGE DATE]"}
   Place of Marriage: ${f.marriage_place || "[MARRIAGE PLACE]"}
   Form of Marriage: ${f.marriage_form || "Hindu rites and customs"}
   Children (if any): ${f.children || "Nil / [CHILDREN DETAILS]"}

2. FACTS IN CHRONOLOGICAL ORDER:
${f.facts || `   (a) [Date] — [First event after marriage]
   (b) [Date] — [Next event]
   (c) [Date] — [When cruelty/ground started]
   (d) [Date] — [Specific incidents]
   (e) [Date] — [Last incident / separation date]`}

3. GROUNDS FOR DIVORCE:
   That the respondent has treated the petitioner with cruelty under Section 13(1)(ia) of the Hindu Marriage Act, 1955 as evidenced by:
   ${f.grounds || "[SPECIFIC ACTS OF CRUELTY / GROUNDS]"}

4. That the parties have been living separately since ${f.separation_date || "[DATE]"}.

5. That the marriage has broken down irretrievably and there is no possibility of reconciliation.

PRAYER:

The petitioner therefore prays that:

(a) A decree of divorce be passed dissolving the marriage between the parties solemnized on ${f.marriage_date || "[DATE]"};

(b) Permanent alimony/maintenance of Rs. ${f.alimony || "[AMOUNT]"}/- per month be awarded in favour of the petitioner under Section 25 HMA (if applicable);

(c) Custody of minor children be granted to the petitioner (if applicable);

(d) Costs of the proceedings be awarded to the petitioner;

(e) Any other order as this Court may deem fit.

Place: ${f.district || "[PLACE]"}
Date: ${new Date().toLocaleDateString('en-IN')}

                                              (${f.advocate_name || "[ADVOCATE NAME]"})
                                              Counsel for the Petitioner

VERIFICATION:
I, ${f.petitioner_name || "[PETITIONER NAME]"}, do hereby verify that the contents of the above petition are true and correct to the best of my knowledge and belief.

Verified at ${f.district || "[PLACE]"} on this _____ day of _________, ${new Date().getFullYear()}.

                                              (${f.petitioner_name || "[PETITIONER NAME]"})
                                              Petitioner`
  },

  MAINTENANCE_125: {
    name: "Maintenance Application — Section 144 BNSS 2023 (formerly S.125 CrPC)",
    court: "Magistrate Court / Family Court",
    keywords: ["maintenance", "nafqa", "section 125", "section 144 bnss", "wife maintenance", "child maintenance", "guzara bhatta"],
    template: (f) => `IN THE COURT OF JUDICIAL MAGISTRATE FIRST CLASS / FAMILY COURT
AT ${f.district || "[DISTRICT]"}, ${f.state || "[STATE]"}

CRIMINAL MISC. CASE NO. _______ OF ${new Date().getFullYear()}

IN THE MATTER OF:
${f.applicant_name || "[WIFE/CHILD NAME]"}
R/o: ${f.applicant_address || "[ADDRESS]"}
                                              ...APPLICANT

VERSUS

${f.respondent_name || "[HUSBAND/FATHER NAME]"}
R/o: ${f.respondent_address || "[ADDRESS]"}
                                              ...RESPONDENT

APPLICATION FOR MAINTENANCE
UNDER SECTION 144 OF BHARATIYA NAGARIK SURAKSHA SANHITA, 2023
(Formerly Section 125 of Cr.P.C., 1973)

MOST RESPECTFULLY SHOWETH:

1. That the applicant is the ${f.relation || "wife/child"} of the respondent. The parties were married on ${f.marriage_date || "[DATE]"} at ${f.marriage_place || "[PLACE]"}.

2. FINANCIAL STATUS:
   Applicant's income: ${f.applicant_income || "Nil / Rs. [AMOUNT] per month"}
   Respondent's income: Rs. ${f.respondent_income || "[AMOUNT]"}/- per month approx.
   Respondent's assets: ${f.respondent_assets || "[PROPERTY/ASSETS]"}

3. FACTS:
${f.facts || "   [Facts regarding neglect/refusal to maintain, cruelty, desertion etc.]"}

4. That the respondent despite having sufficient means has neglected/refused to maintain the applicant.

5. Monthly maintenance claimed: Rs. ${f.maintenance_amount || "[AMOUNT]"}/- per month.

PRAYER:

It is prayed that this Hon'ble Court may be pleased to:

(a) Direct the respondent to pay monthly maintenance of Rs. ${f.maintenance_amount || "[AMOUNT]"}/- to the applicant;

(b) Direct payment of interim maintenance during pendency under Section 144(2) BNSS;

(c) Pass any other order as deemed just.

Place: ${f.district || "[PLACE]"}
Date: ${new Date().toLocaleDateString('en-IN')}

                                              (${f.advocate_name || "[ADVOCATE NAME]"})
                                              Counsel for the Applicant`
  },

  // ============================================================
  // PROPERTY TEMPLATES
  // ============================================================

  SALE_DEED: {
    name: "Sale Deed — Section 54 Transfer of Property Act 1882",
    court: "Sub-Registrar Office",
    keywords: ["sale deed", "property sale", "registry", "section 54 tpa", "baiyana", "sale agreement", "sampatti bikri"],
    template: (f) => `SALE DEED

THIS SALE DEED is executed on this ${new Date().toLocaleDateString('en-IN')} (${new Date().getFullYear()})

BY AND BETWEEN:

VENDOR/SELLER:
${f.vendor_name || "[SELLER'S FULL NAME]"}
S/o, D/o, W/o: ${f.vendor_father || "[FATHER/HUSBAND NAME]"}
Age: ${f.vendor_age || "[AGE]"} years
R/o: ${f.vendor_address || "[COMPLETE ADDRESS]"}
Aadhaar No.: ${f.vendor_aadhaar || "[AADHAAR NUMBER]"}
(Hereinafter called the "VENDOR" which expression shall include his/her heirs, executors, administrators, legal representatives and assigns)

                                              OF THE FIRST PART

AND

PURCHASER/BUYER:
${f.purchaser_name || "[BUYER'S FULL NAME]"}
S/o, D/o, W/o: ${f.purchaser_father || "[FATHER/HUSBAND NAME]"}
Age: ${f.purchaser_age || "[AGE]"} years
R/o: ${f.purchaser_address || "[COMPLETE ADDRESS]"}
Aadhaar No.: ${f.purchaser_aadhaar || "[AADHAAR NUMBER]"}
(Hereinafter called the "PURCHASER" which expression shall include his/her heirs, executors, administrators, legal representatives and assigns)

                                              OF THE SECOND PART

WHEREAS the Vendor is the absolute owner and in possession of the property more particularly described hereunder:

SCHEDULE OF PROPERTY:
${f.property_description || `Plot/House No.: [NUMBER]
Area: [AREA IN SQ. FT./ACRES]
Location: [COMPLETE ADDRESS]
Bounded by:
North: [BOUNDARY]
South: [BOUNDARY]
East:  [BOUNDARY]
West:  [BOUNDARY]
Khasra/Khata/Survey No.: [NUMBER]
As per Revenue Records of Village/City: [NAME]`}

AND WHEREAS the Vendor has agreed to sell and the Purchaser has agreed to purchase the above described property for a total consideration of Rs. ${f.sale_amount || "[AMOUNT]"}/- (Rupees ${f.amount_words || "[AMOUNT IN WORDS]"} Only).

NOW THIS DEED WITNESSETH AS UNDER:

1. CONSIDERATION: The Purchaser has paid to the Vendor a sum of Rs. ${f.sale_amount || "[AMOUNT]"}/- (Rupees ${f.amount_words || "[AMOUNT IN WORDS]"} Only) as full and final sale consideration, the receipt of which the Vendor hereby acknowledges.

2. TRANSFER: The Vendor hereby sells, conveys, transfers and assigns to the Purchaser all his/her rights, title and interest in the Schedule Property.

3. POSSESSION: The Vendor has handed over peaceful and vacant possession of the Schedule Property to the Purchaser on the date of execution of this deed.

4. TITLE: The Vendor declares that the property is free from all encumbrances, mortgages, charges, liens, disputes and litigation.

5. INDEMNITY: The Vendor shall indemnify and keep indemnified the Purchaser against all claims, demands and actions from third parties.

6. STAMP DUTY: Requisite stamp duty has been paid as per applicable state law.

IN WITNESS WHEREOF, the parties have signed this deed on the day, month and year first above written.

VENDOR                                        PURCHASER
(${f.vendor_name || "[SELLER NAME]"})         (${f.purchaser_name || "[BUYER NAME]"})

WITNESSES:
1. Name: _________________ Signature: _________________
   Address: _________________________________________

2. Name: _________________ Signature: _________________
   Address: _________________________________________`
  },

  // ============================================================
  // NOTICES
  // ============================================================

  EVICTION_NOTICE: {
    name: "Eviction Notice to Tenant",
    keywords: ["eviction notice", "tenant notice", "leave and license", "makaan khali", "eviction", "tenant remove"],
    template: (f) => `EVICTION NOTICE / NOTICE TO QUIT

BY SPEED POST / REGD. A.D.

Date: ${new Date().toLocaleDateString('en-IN')}

TO,
${f.tenant_name || "[TENANT NAME]"}
${f.property_address || "[PROPERTY ADDRESS — TENANT'S ADDRESS]"}

From:
${f.landlord_name || "[LANDLORD NAME]"}
Through: ${f.advocate_name || "[ADVOCATE NAME]"}
${f.advocate_address || "[ADVOCATE ADDRESS]"}

Sir/Madam,

Under instructions from my client ${f.landlord_name || "[LANDLORD NAME]"}, owner of property at ${f.property_address || "[PROPERTY ADDRESS]"}, I hereby serve you this notice:

1. That my client is the owner of the premises at ${f.property_address || "[PROPERTY ADDRESS]"}.

2. That you are occupying the said premises as a tenant/licensee since ${f.tenancy_start || "[DATE]"} at a monthly rent/licence fee of Rs. ${f.rent || "[AMOUNT]"}/-.

3. That your tenancy/licence is determined/terminated on the following grounds:
   ${f.eviction_grounds || "(a) Non-payment of rent since [DATE]\n   (b) [OTHER GROUNDS]"}

4. You are hereby called upon to vacate and hand over vacant possession of the said premises within ${f.notice_period || "30 (Thirty)"} days from the receipt of this notice.

5. You are also called upon to pay the outstanding rent/dues of Rs. ${f.arrears || "[AMOUNT]"}/- immediately.

6. In case you fail to vacate and pay dues, my client will be constrained to initiate appropriate legal proceedings for eviction and recovery of dues at your risk and cost.

${f.advocate_name || "[ADVOCATE NAME]"}
Advocate
Date: ${new Date().toLocaleDateString('en-IN')}`
  },

  RTI_APPLICATION: {
    name: "RTI Application — Section 6 RTI Act 2005",
    keywords: ["rti", "right to information", "rti application", "information application", "suchna ka adhikar", "rti file karna"],
    template: (f) => `APPLICATION UNDER SECTION 6(1) OF THE RIGHT TO INFORMATION ACT, 2005

Date: ${new Date().toLocaleDateString('en-IN')}

TO,
THE PUBLIC INFORMATION OFFICER (CPIO/SPIO)
${f.department || "[DEPARTMENT/MINISTRY NAME]"}
${f.department_address || "[DEPARTMENT ADDRESS]"}

Sir/Madam,

I, ${f.applicant_name || "[APPLICANT NAME]"}, S/o, D/o ${f.father_name || "[FATHER NAME]"}, R/o ${f.applicant_address || "[COMPLETE ADDRESS]"}, hereby request the following information under the Right to Information Act, 2005:

INFORMATION REQUESTED:

1. ${f.query1 || "[FIRST QUERY — Be specific]"}

2. ${f.query2 || "[SECOND QUERY]"}

3. ${f.query3 || "[THIRD QUERY]"}

4. ${f.query4 || "[ADDITIONAL QUERIES IF ANY]"}

TIME PERIOD: ${f.time_period || "[SPECIFY TIME PERIOD — e.g., last 3 years / 2020-2024]"}

DETAILS OF MATTER: ${f.matter_details || "[Brief background of why information is needed]"}

I am enclosing a fee of Rs. 10/- (Rupees Ten Only) by way of ${f.payment_mode || "Indian Postal Order / Cash / Treasury Challan"} as the prescribed application fee.

I request you to provide the information within 30 days as required under Section 7(1) of the RTI Act, 2005.

In case the information is held by another Public Authority, please transfer my application as per Section 6(3) of the RTI Act, 2005.

Yours faithfully,

${f.applicant_name || "[APPLICANT NAME]"}
${f.applicant_address || "[ADDRESS]"}
Mobile: ${f.applicant_mobile || "[MOBILE]"}
Date: ${new Date().toLocaleDateString('en-IN')}

Enclosures:
1. RTI Application Fee — Rs. 10/-
2. ${f.enclosures || "[ANY SUPPORTING DOCUMENTS]"}`
  },

  CONSUMER_COMPLAINT: {
    name: "Consumer Complaint — Consumer Protection Act 2019",
    court: "District Consumer Disputes Redressal Commission",
    keywords: ["consumer complaint", "consumer forum", "defective product", "deficiency service", "consumer court", "consumer case"],
    template: (f) => `IN THE DISTRICT CONSUMER DISPUTES REDRESSAL COMMISSION
${f.district?.toUpperCase() || "[DISTRICT]"}, ${f.state || "[STATE]"}

CONSUMER COMPLAINT NO. _______ OF ${new Date().getFullYear()}

IN THE MATTER OF:
${f.complainant_name || "[COMPLAINANT NAME]"}
Age: ${f.complainant_age || "[AGE]"} years
R/o: ${f.complainant_address || "[ADDRESS]"}
                                              ...COMPLAINANT

VERSUS

${f.opposite_party || "[COMPANY/SELLER/SERVICE PROVIDER NAME]"}
${f.op_address || "[COMPANY ADDRESS]"}
                                              ...OPPOSITE PARTY

CONSUMER COMPLAINT UNDER SECTION 35 OF THE
CONSUMER PROTECTION ACT, 2019

MOST RESPECTFULLY SHOWETH:

1. That the complainant is a 'consumer' within the meaning of Section 2(7) of the Consumer Protection Act, 2019.

2. PURCHASE/SERVICE DETAILS:
   Product/Service: ${f.product_service || "[PRODUCT/SERVICE NAME]"}
   Date of Purchase/Booking: ${f.purchase_date || "[DATE]"}
   Amount Paid: Rs. ${f.amount_paid || "[AMOUNT]"}/-
   Bill/Invoice No.: ${f.bill_number || "[BILL NUMBER]"}

3. FACTS IN CHRONOLOGICAL ORDER:
${f.facts || "   [When purchased, what defect found, when complained, what opposite party did/failed to do]"}

4. DEFICIENCY / DEFECT:
   ${f.deficiency || "[SPECIFIC DEFECT IN PRODUCT / DEFICIENCY IN SERVICE]"}

5. RELIEF SOUGHT:
   (a) Replacement/Refund: Rs. ${f.refund_amount || "[AMOUNT]"}/-
   (b) Compensation for losses: Rs. ${f.compensation || "[AMOUNT]"}/-
   (c) Litigation costs: Rs. ${f.litigation_cost || "[AMOUNT]"}/-
   Total: Rs. ${f.total_claim || "[TOTAL]"}/-

6. LIMITATION: The complaint is within 2 years from the date of cause of action as per Section 69 of the Act.

PRAYER:

It is therefore prayed that this Hon'ble Commission may be pleased to:

(a) Direct the Opposite Party to replace the defective product / refund Rs. ${f.refund_amount || "[AMOUNT]"}/- to the complainant;

(b) Direct payment of compensation of Rs. ${f.compensation || "[AMOUNT]"}/- for mental agony and harassment;

(c) Direct payment of litigation costs of Rs. ${f.litigation_cost || "[AMOUNT]"}/-;

(d) Pass any other order as deemed fit.

Place: ${f.district || "[PLACE]"}
Date: ${new Date().toLocaleDateString('en-IN')}

                                              (${f.advocate_name || "[ADVOCATE NAME / COMPLAINANT]"})
                                              Counsel/Complainant

VERIFICATION:
I, ${f.complainant_name || "[NAME]"}, do hereby verify that the contents of above complaint are true and correct.

Verified at ${f.district || "[PLACE]"} on ${new Date().toLocaleDateString('en-IN')}.

                                              (${f.complainant_name || "[NAME]"})
                                              Complainant`
  },

  VAKALATNAMA: {
    name: "Vakalatnama",
    keywords: ["vakalatnama", "vakalatnama banao", "power of attorney advocate", "advocate authority"],
    template: (f) => `VAKALATNAMA

IN THE COURT OF ${f.court_name || "[COURT NAME]"}
AT ${f.district || "[DISTRICT]"}

CASE: ${f.case_title || "[CASE TITLE]"}
CASE NO.: ${f.case_number || "[CASE NUMBER]"}

I/We ${f.client_name || "[CLIENT NAME]"}, S/o, D/o, W/o ${f.father_name || "[FATHER/HUSBAND NAME]"}, R/o ${f.client_address || "[ADDRESS]"}, do hereby appoint, retain and authorise:

${f.advocate_name || "[ADVOCATE NAME]"}
Advocate — Enrolment No.: ${f.enrol_no || "[ENROLMENT NUMBER]"}
${f.advocate_address || "[ADVOCATE ADDRESS]"}

to be my/our Advocate in the above-mentioned case and on my/our behalf to:
(a) Appear before the above Court and all Courts to which this case may be transferred;
(b) Plead, act, apply and to do all things necessary in the prosecution/defence of the above case;
(c) Sign plaints, written statements, applications and such other documents as may be necessary;
(d) Receive money/decree and give receipts/acquittances;
(e) Compromise the suit with the consent of the client;
(f) File and withdraw appeals/applications;
(g) Engage other Advocates to assist.

I/We agree to ratify all acts done by the said Advocate.

Signed and delivered on this ${new Date().toLocaleDateString('en-IN')}.

                    ${f.client_name || "[CLIENT NAME]"}
                    Client — Signature/Thumb Impression

ACCEPTED:

                    ${f.advocate_name || "[ADVOCATE NAME]"}
                    Advocate — Signature`
  },
};

// ============================================================
// TEMPLATE FINDER
// ============================================================
export function findTemplate(query) {
  const q = query.toLowerCase();
  for (const [key, tmpl] of Object.entries(TEMPLATES)) {
    if (tmpl.keywords?.some(kw => q.includes(kw.toLowerCase()))) {
      return { key, template: tmpl };
    }
  }
  return null;
}

// ============================================================
// FIELD EXTRACTOR — Extract user-provided details from query
// ============================================================
export function extractFields(query) {
  const fields = {};
  // Name patterns
  const nameMatch = query.match(/naam[:\s]+([A-Za-z\s]+?)(?:,|\.|\n|ke liye|ki umar)/i) ||
                    query.match(/name[:\s]+([A-Za-z\s]+?)(?:,|\.|\n)/i) ||
                    query.match(/accused[:\s]+([A-Za-z\s]+?)(?:,|\.|\n)/i);
  if (nameMatch) fields.accused_name = fields.petitioner_name = fields.applicant_name = nameMatch[1].trim();

  // FIR number
  const firMatch = query.match(/fir[:\s#no.]+([0-9\/\s]+?)(?:,|\.|\s|dated)/i);
  if (firMatch) fields.fir_number = firMatch[1].trim();

  // Date patterns
  const dateMatch = query.match(/(?:date|dated|tarikh)[:\s]+(\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{2,4})/i);
  if (dateMatch) fields.incident_date = fields.fir_date = dateMatch[1];

  // Amount
  const amountMatch = query.match(/(?:amount|rs\.?|rupees|rashi)[:\s]+([\d,]+)/i);
  if (amountMatch) fields.cheque_amount = fields.suit_amount = amountMatch[1].replace(/,/g, '');

  // Court
  const courtMatch = query.match(/(?:court|adalat)[:\s]+([A-Za-z\s]+?)(?:,|\.|\n)/i);
  if (courtMatch) fields.court_name = courtMatch[1].trim();

  // District/City
  const districtMatch = query.match(/(?:district|city|jila|shahar)[:\s]+([A-Za-z\s]+?)(?:,|\.|\n)/i);
  if (districtMatch) fields.district = districtMatch[1].trim();

  // State
  const stateMatch = query.match(/(?:state|rajya)[:\s]+([A-Za-z\s]+?)(?:,|\.|\n)/i);
  if (stateMatch) fields.state = stateMatch[1].trim();

  // Police Station
  const psMatch = query.match(/(?:police station|ps|thana)[:\s]+([A-Za-z\s]+?)(?:,|\.|\n)/i);
  if (psMatch) fields.police_station = psMatch[1].trim();

  // Cheque number
  const chequeMatch = query.match(/cheque[:\s#no.]+([0-9]+)/i);
  if (chequeMatch) fields.cheque_number = chequeMatch[1];

  return fields;
}
