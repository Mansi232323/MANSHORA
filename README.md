<div align="center">
  
# DIGIMANSHORA

### Insight Engineered for Impact

**From Financial Data to Intelligent Decisions**

`Analyze` → `Understand` → `Predict` → `Act`

*Built for SBI × Global Fintech Fest 2026 · Theme 2: Digital Adoption*
*Evolved from **DigiMentor AI 3.0***

**Created by Mansi Kushwaha × Sheetal**

</div>

---

## Table of Contents

- [Overview](#overview)
- [Our Journey](#our-journey)
- [The Problem](#the-problem)
- [The Solution](#the-solution)
- [Product Ecosystem (14 Modules)](#product-ecosystem-14-modules)
- [Trust by Design: No Fake Data](#trust-by-design-no-fake-data)
- [Feature Deep Dive](#feature-deep-dive)
  - [Monthly Financial Memory](#1-monthly-financial-memory)
  - [Financial Health Dashboard](#2-financial-health-dashboard)
  - [Financial DNA & Digital Twin](#3-financial-dna--digital-twin)
  - [AI Council](#4-ai-council)
  - [Digital Adoption Intelligence](#5-digital-adoption-intelligence)
  - [Life Events & Next-Best-Action](#6-life-events--next-best-action)
  - [AI Chatbot, Voice & Financial Coach](#7-ai-chatbot-voice--financial-coach)
  - [Simulation Lab & Financial Planner](#8-simulation-lab--financial-planner)
  - [Scam Protection](#9-scam-protection)
  - [Camera Banking](#10-camera-banking)
  - [Bank Manager & Executive Intelligence](#11-bank-manager--executive-intelligence)
- [Technology Stack](#technology-stack)
- [Formulas Used](#formulas-used)
- [Current Limitations](#current-limitations)
- [Roadmap: MANSHORA 2.0](#roadmap-manshora-20)
- [Project Demonstration](#project-demonstration)
- [Disclaimer](#disclaimer)
- [Authors](#authors)

---

## Overview

**MANSHORA** is a financial intelligence platform that turns raw financial data into clear understanding and concrete next steps. It serves two audiences from a single intelligence layer:

| For Customers | For Banks / Managers |
|---|---|
| Financial health score | Customer segmentation |
| Monthly financial tracking | Digital adoption analysis |
| AI-style insights | Risk signals |
| Simulations | Product opportunities |
| Goal planning | Investment / insurance opportunities |
| Digital adoption analysis | Campaign monitoring |
| Financial chatbot | Executive intelligence |
| Life-event signals | |

The whole product runs **entirely in the browser** (HTML + CSS + JavaScript), with no backend and no database in its current form.

---

## Our Journey

MANSHORA did not start as a product. It started as a hackathon idea.

| Step | Milestone | Detail |
|---|---|---|
| 1 | **SBI × GFF 2026** | Hackathon by SBI × Global Fintech Fest |
| 2 | **Digital Adoption Theme** | Theme 2 · Agentic AI & Emerging Tech |
| 3 | **5,000-Customer Prototype** | 5,000 customer records worked on in Google Colab |
| 4 | **DigiMentor AI 3.0** | Streamlit-based AI banking prototype |
| 5 | **Idea-Phase Submission** | Concept, prototype and demo video |
| 6 | **Beyond the Hackathon** | Development continued independently |
| 7 | **MANSHORA** | A broader financial intelligence platform |

> We chose not to stop at the idea phase. We used the prototype as a foundation and expanded it into a broader financial intelligence platform.

---

## The Problem

**Financial data exists. Financial understanding doesn't.**

**Customers** struggle to answer questions like:

- Am I saving enough?
- Can I afford a loan?
- How much emergency fund do I need?
- Should I invest more?
- How well am I using digital banking?
- What financial goal should I prioritize?

**Banks** hold data but need better ways to identify:

- Digital adoption gaps
- Customer segments
- Product opportunities
- Engagement opportunities
- Financial risk signals
- Next-best actions

The result is *fragmented financial information* for the customer and *fragmented customer signals* for the bank. **The missing layer is intelligence.**

---

## The Solution

MANSHORA is one intelligence layer connecting customers and banks through a single flow:

```
DATA  →  ANALYZE  →  UNDERSTAND  →  PREDICT  →  ACT
```

---

## Product Ecosystem (14 Modules)

Fourteen modules sit around one intelligence layer.

**Customer-facing**

| Module | Purpose |
|---|---|
| Customer Hub | Searchable customer profiles (by name, ID or city) |
| Financial Health | Health score and 9 KPIs |
| Financial DNA | Multidimensional customer profile |
| AI Chatbot | Multilingual rule-based assistant |
| Life Events | Estimated life-event signals |
| Simulation Lab | Scenario comparison and live recalculation |
| Planner | SIP, goals, retirement, emergency fund, salary hike |
| Loan Advisor | EMI affordability guidance |
| Scam Protection | Pattern-based message scan |
| Camera Banking | In-browser document photo checks |
| Digital Adoption | Adoption score, gaps, 30-day action plan |

**Bank-facing**

| Module | Purpose |
|---|---|
| AI Council | 14 specialist agents with a synthesis |
| Manager Dashboard | Segmentation, finders and opportunities |
| Executive Intelligence | Predictions, revenue opportunity, campaign tracking |

---

## Trust by Design: No Fake Data

**One rule we never break: no fake data.**

- No invented customer numbers
- No hard-coded financial outcomes
- Insights are calculated only from available inputs
- Missing information is shown explicitly as **"Not Provided"**
- Simulated outputs are clearly labelled
- Recommendations are educational, not guaranteed advice

**Real user input** (income, expenses, savings, investments, EMI, goals, digital banking usage) feeds **calculated insights** (health score, savings rate, DTI, net worth, digital adoption score).

MANSHORA ships with no demo or invented customer data. Every number comes from what a user entered.

> Transparency is a feature.

---

## Feature Deep Dive

### 1. Monthly Financial Memory

Your financial story, month by month (January → December).

- Each month stores **income, expenses, EMI, savings and investments**
- Users add only the new month each time; earlier months are **retained, never overwritten**
- Monthly history powers trends, KPIs, forecasts and recommendations
- Forecasts use **linear regression** on the saved history (implemented)

### 2. Financial Health Dashboard

A 100-point **Financial Health Score** with 9 KPIs, all computed from user-entered data.

| Component | Points |
|---|---|
| Savings rate | 35 |
| Low DTI | 25 |
| Emergency fund | 25 |
| Investments | 15 |
| **Total** | **100** |

**KPIs:** Health Score · Income · Expenses · DTI · Savings · Savings Rate · Investments · Outstanding Loans · Net Worth · Digital Adoption

### 3. Financial DNA & Digital Twin

Understand the customer beyond a single number.

- A six-dimension profile: **Saver · Investor · Borrower · Digital User · Protector · Planner**
- **Risk appetite** level per customer (Conservative / Moderate / Aggressive), derived from their profile
- **Digital adoption gaps** flagged across UPI, Mobile Banking and Internet Banking where usage is missing or low
- Searchable in the Customer Hub by name, ID or city

### 4. AI Council

**14 specialist agents. One council synthesis.**

| | | | |
|---|---|---|---|
| Financial Analyst | Risk | Investment | Loan |
| Engagement | Digital Adoption | Behavior | Insurance |
| Fraud | Life Event | Wellness | Recommendation |
| Next Best Action | Product Recommendation | | |

Each agent returns a **Status**, **Recommendation**, **Confidence** and **Reason**. The council then synthesizes four outputs: **Overall Health, Biggest Opportunity, Biggest Risk, Next Action.**

> The current implementation uses rule-based logic and heuristics. It does not expose hidden chain-of-thought or claim autonomous LLM reasoning.

### 5. Digital Adoption Intelligence

Directly tied to SBI GFF Theme 2 (payments, investments, insurance and mobile banking).

- **Digital Adoption Score (0–100)**, calculated from user input on UPI usage, mobile banking and internet banking
- **Gaps** identified from missing or low usage
- **30-Day Action Plan**
- **Personalized Nudges**
- **Potential Next Products**

> Don't just measure adoption. Identify the next digital action.

### 6. Life Events & Next-Best-Action

Detect signals before they become decisions.

**Signals covered:** Salary Hike · New Job · Marriage · Home Purchase · Travel · Education · Retirement Readiness

**Flow:** Financial change + stated goal → Signal detection → Estimated life event → Relevant financial action

**Example next-best-actions** (educational, no guaranteed outcomes):

| Signal | Suggested Action |
|---|---|
| Salary hike | Review whether to raise your monthly SIP |
| Home purchase goal | Check EMI affordability in the Simulation Lab |
| Retirement readiness | Explore the Retirement Simulator |

> Life-event outputs are **estimated signals, not confirmed life events.**

### 7. AI Chatbot, Voice & Financial Coach

*Ask your money. Get an action plan.*

- **Languages:** English, Hindi (हिंदी), Tamil (தமிழ்); answers follow the chosen language
- **Voice:** voice input and spoken replies via the browser **Web Speech API**
- **Four-part answers:** Explanation → Calculation → Recommendation → Action Plan
- Example questions: *"How can I save more?"*, *"Can I afford a ₹10 lakh car?"*
- **Works offline**, because it is rule-based

> The current chatbot is a local rule-based assistant, not a connected large language model.

### 8. Simulation Lab & Financial Planner

*Don't guess. Simulate.*

**Scenario comparison**

| Scenario | Extra SIP |
|---|---|
| A: No extra investment | ₹0 / month |
| B: Extra SIP | ₹5,000 / month |
| C: Extra SIP | ₹10,000 / month |

**Live recalculation** of EMI, total interest and emergency fund coverage as inputs change.

**Planner modules:** SIP Calculator · Wealth Forecast · Goal Planning · Retirement Simulator · Emergency Fund · Salary Hike Simulator

> Projection charts use a standard SIP future-value formula with an **assumed** 12% p.a. purely for illustration. This is not a forecast or a promise of returns.

### 9. Scam Protection

A pattern-based scan of a pasted message. It looks for:

- OTP requests
- Urgency
- Prize offers
- Suspicious links
- Remote-access apps

**Output:** a risk level with an explanation. This is pattern matching, not a guarantee.

### 10. Camera Banking

Document photo checks that run in the browser:

- Image brightness
- Sharpness
- Document coverage
- Best-effort OCR (Tesseract.js, which depends on an online library)

**Privacy:** PAN / Aadhaar numbers are always masked (e.g. `XXXX XXXX 2346`). The complete number and the image are not stored by the feature.

### 11. Bank Manager & Executive Intelligence

From individual insights to banking intelligence.

**Manager Dashboard**
- City-wise digital adoption heatmap
- Low-adoption finder
- High-value finder
- K-means customer segmentation (needs 3+ accounts)

**Executive Intelligence**
- SIP adoption prediction
- Insurance adoption prediction
- Investment and insurance opportunities
- Revenue opportunity estimate
- Fraud monitoring
- Campaign tracking

> In the current implementation, all insights are based on accounts registered **in the same browser**. SIP / insurance predictions are fixed-weight heuristics, not trained models.

---

## Technology Stack

**Runs entirely in the browser.**

| Layer | Technology |
|---|---|
| Frontend | HTML + CSS + JavaScript |
| Visualization | SVG + Three.js |
| PDF Reports | jsPDF |
| OCR | Tesseract.js (best-effort) |
| Voice | Web Speech API |
| Storage | Browser storage |
| Logic | Rule-based + heuristics |
| ML | Linear Regression (savings forecasts), K-Means Clustering (segmentation) |
| Prediction | Fixed-weight logistic score (heuristic) |
| Chatbot | Local rule-based assistant |
| Formulas | EMI · DTI · Net worth |

The original hackathon prototype (DigiMentor AI 3.0) was built with Streamlit and Google Colab.

---

## Formulas Used

```text
Savings Rate = (Income − Expenses) ÷ Income × 100

DTI          = Total Monthly EMI ÷ Monthly Income × 100

Net Worth    = Cash + Investments − Loans

EMI          = P × r × (1 + r)^n ÷ ((1 + r)^n − 1)
               P = principal, r = monthly rate, n = number of months
```

---

## Current Limitations

We state these up front on purpose. Technical honesty is a design choice.

- No backend / database
- Data is browser-local
- No production banking integration
- Loan / credit outputs are simulations
- Life-event outputs are estimates
- Propensity models are not trained on real outcomes
- The chatbot is rule-based, not an LLM
- OCR is best-effort and depends on an online library
- Manager / Executive views only cover accounts registered in the same browser
- Some features remain future scope

---

## Roadmap: MANSHORA 2.0

*From prototype to real-world financial intelligence.* Everything below is **future scope**; nothing here is implemented today.

| Phase | Focus | Planned Work |
|---|---|---|
| **1** | Foundation | Node.js backend · Secure database · Authentication · Server-side security |
| **2** | Intelligence | Secure LLM integration · Trained propensity models · Real outcome-based ML · Advanced personalization |
| **3** | Banking Integration | Consent-based transaction data · Secure banking APIs · Real digital adoption signals · Real-time insights |
| **4** | Scale | Enterprise banking deployment · Advanced fraud intelligence · Personalized financial journeys · Responsible Agentic AI |

---

## Project Demonstration

- **Prototype notebook (Google Colab):** [Open in Colab](https://colab.research.google.com/drive/1qdm39UOnB7qQUSCbRjnKjOZniCnCs9MQ#scrollTo=BgxUpgUyj1BP)
- **MANSHORA web app:** a single self-contained HTML file. Open it in any modern browser to run it locally.

<!-- Add screenshots or a demo video link here -->

---

## Disclaimer

MANSHORA provides **educational and simulated financial insights**. Recommendations are **not** guaranteed financial advice, loan approval, investment advice, or credit decisions. All demo visuals are illustrative mockups.

---

## Authors

**Mansi Kushwaha** × **Sheetal**

<div align="center">

*Analyze. Understand. Predict. Act.*

**MANSHORA · Insight Engineered for Impact**

</div>
