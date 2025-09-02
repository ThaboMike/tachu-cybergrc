# Cybersecurity Policy Starter Pack — Checklist

> A practical, vendor‑neutral starter set you can tailor to your organization. Use the checkboxes and placeholders to track implementation.

---

## How to use this checklist
- **Owner:** ☐ CISO ☐ IT Lead ☐ Compliance ☐ Other: _______
- **Scope:** ☐ Company‑wide ☐ Business unit: _______
- **Version:** v___.__  |  **Approved by:** __________  |  **Review cadence:** ☐ Quarterly ☐ Semi‑annual ☐ Annual
- **Maturity target:** ☐ Baseline (2 weeks) ☐ Core (60 days) ☐ Advanced (120+ days)

### Quick‑Start Tiers
- **Baseline (Day 0–14):** essentials to reduce top risks quickly.
- **Core (Day 15–60):** hardening + visibility + response.
- **Advanced (Day 61–120):** depth, automation, and assurance.

---

## 1) Governance & Roles
- [ ] Approve a **Security Policy Framework** (this checklist acts as v1)
- [ ] Define **RACI** for security (Owner, Approver, Contributors)
- [ ] Establish **risk acceptance** and **exception** process
- [ ] Create a **policy repository** (wiki/drive) with read access to all staff
- [ ] Document **data classification scheme** (Public/Internal/Confidential/Restricted)

**Artifacts/Evidence:** Org chart with security roles; policy index; exception log.

---

## 2) Risk Management
- [ ] Create an **asset‑based risk register** (top 10 risks)
- [ ] Adopt a **risk rating method** (Likelihood x Impact)
- [ ] Define **risk treatment** options (avoid/mitigate/transfer/accept)
- [ ] Review risks with leadership **quarterly**

**Artifacts:** Risk register; meeting notes; accepted‑risk memos.

---

## 3) Asset Management
- [ ] Maintain **authoritative inventory** (devices, servers, apps, SaaS, data stores)
- [ ] Tag assets with **owner**, **criticality**, **data classification**
- [ ] Track **software bills of materials** (where feasible)
- [ ] Remove/disable **orphaned accounts/services** monthly

**Artifacts:** CMDB or spreadsheet; deprovisioning tickets.

---

## 4) Identity & Access Management (IAM)
- [ ] Enforce **least privilege** & **role‑based access** (RBAC)
- [ ] Centralize identities (IdP/SSO) for major apps
- [ ] **Provisioning/deprovisioning** tied to HR lifecycle
- [ ] Quarterly **access reviews** for high‑risk systems

**Artifacts:** Access review records; joiner/mover/leaver SOP.

---

## 5) Authentication & Account Security
- [ ] **MFA** on email, VPN, privileged/admin, code repos, finance apps
- [ ] Password policy: length ≥ 12, deny common/breached passwords
- [ ] **Password manager** approved & rolled out
- [ ] **Service accounts**: unique, vaulted secrets, rotation

**Artifacts:** MFA coverage report; password policy doc; vault audit trail.

---

## 6) Endpoint Security (Workstations & Servers)
- [ ] **EDR/AV** deployed and reporting for all endpoints
- [ ] **Disk encryption** enabled (laptops and mobiles)
- [ ] **Screen‑lock/timeouts** and **auto‑patching** enabled
- [ ] **Admin rights** restricted; elevation via workflow

**Artifacts:** EDR console screenshots; MDM profiles; baseline build docs.

---

## 7) Secure Configuration & Baseline Hardening
- [ ] Baseline **hardening guides** (CIS or vendor) for OS, cloud, DB
- [ ] **Configuration as code** where possible (IaC)
- [ ] **Non‑prod** separated from **prod**; default deny on inbound
- [ ] Periodic **config drift** checks

**Artifacts:** Baseline templates; IaC repos; change tickets.

---

## 8) Data Protection & Privacy
- [ ] **Data classification** applied to key systems
- [ ] **Encryption in transit** (TLS1.2+) and **at rest** on sensitive data
- [ ] **DLP** controls for email/cloud storage (start with alerts)
- [ ] **Data retention** schedule and lawful bases documented

**Artifacts:** Data map; retention schedule; DLP policy and alerts log.

---

## 9) Backup & Recovery
- [ ] **3‑2‑1** backups for critical systems (one offline/immutable)
- [ ] **Test restores** quarterly; record RPO/RTO results
- [ ] Protect backup admin with **MFA** & separate credentials

**Artifacts:** Backup plan; restore test results; immutable storage config.

---

## 10) Network Security
- [ ] **Segmentation**: user, server, management networks
- [ ] **Firewall**/security groups: default‑deny, documented rules
- [ ] **VPN**/ZTNA for remote access; block split tunneling if required
- [ ] **DNS filtering** for malware/C2

**Artifacts:** Network diagram; rule reviews; VPN posture policy.

---

## 11) Email & Web Security
- [ ] **SPF/DKIM/DMARC** implemented (DMARC at least quarantine/monitor)
- [ ] **Anti‑phish**/malware scanning; link protection
- [ ] **Banner** external sender; block auto‑forwarding

**Artifacts:** DMARC reports; mail gateway policies; phishing metrics.

---

## 12) Vulnerability & Patch Management
- [ ] Automated **vuln scanning** for endpoints/servers/containers
- [ ] **Patch SLAs** (e.g., critical: 7 days; high: 14)
- [ ] **Exception process** with compensating controls
- [ ] Track **remediation rate** monthly

**Artifacts:** Scanner dashboards; SLA policy; patch reports.

---

## 13) Logging, Monitoring & Detection
- [ ] Centralize **logs** (SIEM/SOAR/lightweight aggregator)
- [ ] **Use‑case playbooks** for top 10 detections (MFA failures, privilege changes, EDR alerts, new admin, anomalous data exfil)
- [ ] **Time sync** (NTP) across systems

**Artifacts:** Log retention policy; alert runbooks; SIEM queries.

---

## 14) Incident Response (IR)
- [ ] **IR plan**: severity levels, roles, comms, evidence handling
- [ ] **On‑call** contact list; escalation tree
- [ ] **Tabletop exercise** (quarterly/bi‑annual)
- [ ] **Breach notification** criteria and templates

**Artifacts:** IR plan; TTX notes; after‑action reports (AARs).

---

## 15) Business Continuity & Disaster Recovery (BC/DR)
- [ ] Identify **critical processes** and maximum tolerable downtime
- [ ] **BC/DR plan** with **alternate work** procedures
- [ ] Annual **BC/DR exercise** with lessons learned

**Artifacts:** BIA (impact analysis); DR runbook; test results.

---

## 16) Third‑Party & Supply Chain
- [ ] **Vendor inventory** with data types & processing locations
- [ ] **Security due diligence** (questionnaire/assurance) for high‑risk vendors
- [ ] **Contract clauses**: breach notice, audit rights, subprocessor controls
- [ ] **Access reviews** for vendor accounts/integrations

**Artifacts:** Vendor register; DPA/SLA language; SOC2/ISO reports.

---

## 17) Secure Development / DevSecOps
- [ ] **Branch protection** & mandatory code review
- [ ] **Secrets scanning** & pre‑commit hooks
- [ ] **SAST/DAST/Dependency** scanning in CI
- [ ] **Prod access** via change tickets; rollback tested

**Artifacts:** CI configs; scanning reports; release checklist.

---

## 18) Cloud & SaaS Security
- [ ] **CSPM**/native guardrails; baseline policies (public buckets off, keys rotation)
- [ ] **Least‑privilege IAM** (deny * on *) and **separate accounts** per env
- [ ] **SaaS admin**: MFA, audit logs enabled, offboard promptly

**Artifacts:** Cloud policy set; account structure; SaaS security settings.

---

## 19) Physical Security
- [ ] **Access control** to offices/server rooms; visitor logs
- [ ] **Asset locking** and **screen privacy** where needed
- [ ] **Environmental** controls for server/network rooms

**Artifacts:** Badge logs; visitor policy; CCTV retention policy.

---

## 20) Security Awareness & Training
- [ ] **Onboarding** security training within 7 days
- [ ] **Annual refresher**; role‑based (developers, finance, IT)
- [ ] **Phishing simulations** with coaching, not blame

**Artifacts:** Training records; campaign metrics; policy attestations.

---

## 21) Legal, Compliance & Records
- [ ] Map to relevant frameworks (e.g., **NIST CSF**, **ISO 27001**, **CIS**, **local laws**)
- [ ] **Record of Processing Activities** (privacy) if applicable
- [ ] **Regulatory notification** playbook (sectoral/regional)

**Artifacts:** Controls matrix; RoPA; legal counsel guidance.

---

## 22) Acceptable Use & HR Lifecycle
- [ ] **Acceptable Use Policy (AUP)** published; staff attestation
- [ ] **Code of Conduct** with security clauses
- [ ] **HR offboarding** checklist (accounts, devices, NDAs)

**Artifacts:** AUP; attestation logs; offboarding runbook.

---

## 23) Remote Work & BYOD
- [ ] **MDM** for corporate devices; **MAM** or container for BYOD
- [ ] **Conditional access** (device health, location)
- [ ] **Secure home/remote** guidance for staff

**Artifacts:** MDM policy; BYOD agreement; CA policies.

---

## 24) Change & Release Management
- [ ] **Change approval** workflow; emergency change procedure
- [ ] **Version control** for infra and apps
- [ ] **Post‑implementation review** for major changes

**Artifacts:** CAB records; change logs; PIR templates.

---

## 25) Secure Disposal & Media Sanitization
- [ ] **Data wipe** standards (e.g., crypto‑erase) for drives/devices
- [ ] **Shredding/secure bins** for paper
- [ ] **Certificates of destruction** from vendors

**Artifacts:** Disposal policy; destruction certs; asset retirement log.

---

## 26) Metrics, Reporting & Audits
- [ ] Define **KPIs/KRIs** (patch latency, MFA coverage, phishing fail rate)
- [ ] Monthly **security report** to leadership
- [ ] **Internal audit**/control testing plan

**Artifacts:** Metrics dashboard; monthly brief; audit checklist.

---

## 27) Policy Governance & Maintenance
- [ ] **Numbered policy set** with owners, scope, revision history
- [ ] **Exception register** with expiry dates & reviews
- [ ] **Annual policy review** cycle (or after major changes)

**Artifacts:** Policy catalog; exception register; approvals.

---

## Appendix A — One‑Page Policy Template (fill‑in)
**Title:** ____________________  
**Purpose:** Why this policy exists.  
**Scope:** Systems, roles, locations covered.  
**Policy Statements:** Bulleted, testable requirements.  
**Roles & Responsibilities:** Who does what.  
**Standards/Procedures:** Links to how‑to and settings.  
**Exceptions:** Who can approve and criteria.  
**Enforcement:** Consequences for non‑compliance.  
**Related Docs:** Other policies, laws, or standards.  
**Revision History:** v__ / Date / Changes / Owner.

---

## Appendix B — “Top 10” Starter Policies (suggested content)
- [ ] **Acceptable Use** — employee responsibilities, prohibited actions, monitoring notice
- [ ] **Access Control** — least privilege, reviews, provisioning, emergency access
- [ ] **Password & MFA** — length, managers, rotation for privileged/service accounts
- [ ] **Endpoint Security** — EDR, encryption, patching, admin rights
- [ ] **Vulnerability & Patch** — scanning cadence, SLAs, exception process
- [ ] **Change Management** — approvals, emergency changes, rollback
- [ ] **Data Classification & Handling** — labels, sharing, storage, retention
- [ ] **Incident Response** — severity, comms, evidence, notification
- [ ] **Backup & Recovery** — scope, frequency, testing, roles
- [ ] **Third‑Party Security** — due diligence, contracts, access oversight

---

## Appendix C — Roles & RACI (example)
| Activity | Owner | Consulted | Informed |
|---|---|---|---|
| Approve policies | Exec sponsor | Legal, Security | All staff |
| Quarterly risk review | Security | IT, Product, Finance | Leadership |
| Access reviews | System owners | Security | Audit |
| Incident commander | Security | IT, Legal, Comms | Leadership |

---

## Appendix D — Quick Evidence Pack (audit‑ready)
- [ ] Policies (PDF) with approvals
- [ ] Asset & vendor inventories (CSV)
- [ ] MFA coverage/export from IdP
- [ ] Patch & vulnerability reports (last 90 days)
- [ ] IR plan + latest tabletop after‑action
- [ ] Backup test results & screenshots
- [ ] Training records & phishing metrics

---

> **Tip:** Start by assigning owners and due dates for each section, then track status monthly. Keep it lightweight, iterate fast, and capture evidence as you go.


---

# POPIA Compliance — Starter Checklist (South Africa)

> Tailored for the Protection of Personal Information Act, 2013 (POPIA) and the Information Regulator (South Africa). Use with your PAIA Manual and privacy program.

## How to use
- **Owner:** ☐ Information Officer (IO) ☐ Deputy IO ☐ Legal/Privacy ☐ Security
- **Scope:** ☐ Company‑wide ☐ Business unit: _______
- **Version:** v___.__  |  **Approved by:** __________  |  **Review cadence:** ☐ Quarterly ☐ Semi‑annual ☐ Annual
- **Maturity target:** ☐ Baseline (30 days) ☐ Core (90 days) ☐ Advanced (180+ days)

### Quick‑Start Tiers
- **Baseline (Day 0–30):** Appoint/register IO, publish privacy notices, enable requests & incident notification.
- **Core (Day 31–90):** Data mapping, lawfulness and retention controls, operator contracts, direct marketing governance.
- **Advanced (Day 91–180):** Prior‑authorisation where needed, cross‑border transfer controls, audits & KPIs.

---

## 1) Governance & Accountability
- [ ] Appoint **Information Officer (IO)** (head of the private body by default) and designate **Deputy IOs** where needed
- [ ] **Register IO/Deputies** with the Information Regulator (ZA)
- [ ] Approve **Privacy Policy Framework** and publish internally
- [ ] Maintain a **POPIA control register** (mapping to the 8 Conditions)
- [ ] Integrate POPIA with **PAIA Manual** and access request process

**Artifacts:** IO appointment letters; Regulator registration confirmation; privacy program charter; PAIA Manual.

---

## 2) Data Mapping & Records
- [ ] Maintain a **Processing Register** (what data, purposes, recipients, storage locations, retention)
- [ ] Identify **special personal information** and **children’s data** processing
- [ ] Identify **operators** (processors) and cross‑border transfers

**Artifacts:** Data inventory; system list; vendor list; cross‑border map.

---

## 3) Lawful Processing (Processing Limitation)
- [ ] Determine a **justification ground** for each purpose (consent, contract, legal obligation, vital interests, public law duty, legitimate interests)
- [ ] Implement **consent capture & withdrawal** records where consent is used
- [ ] Enforce **minimality** (collect only necessary data); collect **directly from the data subject** unless an exception applies
- [ ] Enable **objection to processing** and maintain a do‑not‑process list

**Artifacts:** Lawfulness matrix; consent logs; objection register.

---

## 4) Purpose Specification & Retention
- [ ] Define **specific purposes** for each processing activity
- [ ] Publish **privacy notices** at/ before collection with required disclosures
- [ ] Implement **retention and disposal** schedules; record destruction/depseudonymisation

**Artifacts:** Notices library; retention schedule; disposal log.

---

## 5) Further Processing Limitation
- [ ] Apply **compatibility test** for any new/secondary purposes
- [ ] Prefer **anonymisation/aggregation** for analytics where possible

**Artifacts:** Compatibility assessments; anonymisation SOPs.

---

## 6) Information Quality
- [ ] Procedures to keep data **accurate, complete, and up‑to‑date**
- [ ] **Verification** at onboarding and periodic refresh for high‑risk records

**Artifacts:** Data quality KPIs; correction workflow docs.

---

## 7) Openness & Transparency
- [ ] Maintain **internal documentation** of processing activities and policies
- [ ] Provide **collection notices** with contact details of IO, purposes, categories, recipients, consequences of failure, rights, etc.
- [ ] Keep **PAIA Manual** current and publicly accessible

**Artifacts:** Notice templates; PAIA Manual link; records of changes.

---

## 8) Security Safeguards
- [ ] Implement **appropriate technical & organisational measures** (align with the Cybersecurity Checklist)
- [ ] Conclude **operator (processor) agreements** with security and confidentiality clauses
- [ ] **Breach response**: detect, assess, and **notify the Regulator and affected data subjects** for qualifying compromises

**Artifacts:** Operator agreements; IR plan; breach notification templates; training records.

---

## 9) Data Subject Rights (Participation)
- [ ] Enable **access, correction, deletion**, and **objection** requests; define SLAs
- [ ] Provide **identity verification** and secure delivery of responses
- [ ] Keep a **DSR register** and track turnaround times

**Artifacts:** DSR SOP; request log; response templates.

---

## 10) Special Personal Information & Children
- [ ] Identify processing of **special personal information** (e.g., health, biometrics, religious beliefs) and apply extra safeguards
- [ ] For **children’s data**, ensure **consent by a competent person** or applicable exemption
- [ ] Assess need for **prior authorisation** from the Regulator where required

**Artifacts:** SPI register; parental consent records; prior‑authorisation submissions.

---

## 11) Direct Marketing & Cookies/Tracking
- [ ] For electronic **direct marketing**, obtain **opt‑in consent** (or verify limited existing‑customer exception) and provide **opt‑out** in every message
- [ ] Maintain **do‑not‑contact** and suppression lists
- [ ] Disclose **cookies/tracking** in notices; capture preferences for non‑essential cookies (good practice)

**Artifacts:** Marketing consent logs; preference centre; suppression list; cookie notice.

---

## 12) Operators & Third Parties
- [ ] **Due diligence** on operators and sub‑processors
- [ ] **Written contracts** covering confidentiality, security, breach notice, and processing on instructions
- [ ] **Access reviews** for vendor accounts and integrations

**Artifacts:** Vendor risk assessments; signed operator agreements; access review records.

---

## 13) Cross‑Border Transfers
- [ ] Confirm **adequate protection** at destination or use **appropriate safeguards** (contractual clauses/BCRs), or obtain **consent** where suitable
- [ ] Record legal basis and **transfer mechanism** for each flow

**Artifacts:** Transfer register; template clauses; country adequacy notes.

---

## 14) Training & Awareness
- [ ] POPIA **onboarding** training within 30 days; annual refreshers
- [ ] Role‑based training for marketing, HR, support, developers, security

**Artifacts:** Training records; policy attestations.

---

## 15) Monitoring, Audits & Metrics
- [ ] Define **KPIs/KRIs** (DSR turnaround, breach MTTR, consent capture rates)
- [ ] **Internal audits** of consent, notices, operator contracts, retention
- [ ] **Management reporting** each quarter; track remediation actions

**Artifacts:** KPI dashboard; audit reports; action tracker.

---

## Appendix — POPIA Evidence Pack (audit‑ready)
- [ ] IO registration confirmation; PAIA Manual
- [ ] Processing register (systems & purposes)
- [ ] Privacy notices and consent records
- [ ] Operator agreements & vendor assessments
- [ ] Breach response plan & latest incident drill results
- [ ] DSR register with sample responses
- [ ] Retention schedule & destruction logs
- [ ] Training logs & policy attestations

> **Tip:** Align this POPIA checklist with your Cybersecurity controls above; strong security safeguards are foundational to POPIA compliance.

