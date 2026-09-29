# MANSHORA — Insight Engineered for Impact

A front-end fintech intelligence platform. No install or build step.

## Run
Open `index.html` in a browser with internet access (the 3D views load three.js from cdnjs; everything else works offline).
Optional local server: `python3 -m http.server 8000` then visit http://localhost:8000

## Structure
- `index.html`       page shell, loads the scripts in order
- `css/styles.css`   dark design system and responsive layout
- `js/core.js`       helpers, storage, formulas (EMI, DTI, savings rate)
- `js/domain.js`     financial health score, synthetic customers, AI council rules
- `js/charts.js`     SVG line and bar charts
- `js/landing.js`    landing page
- `js/auth.js`       signup and login
- `js/pages.js`      dashboard, monthly data, twin, coach, simulator, loan, manager pages
- `js/calculators.js` live simulation and loan calculators
- `js/coach.js`      rule-based financial coach replies
- `js/visuals.js`    inline SVG illustrations, 3D bar charts (three.js) and card tilt
- `js/modules.js`    hub, digital adoption, life events, planner, learning, missions, scam/sentiment, camera CV, advisors, PDF, executive, ML (regression, k-means, propensity), chatbot, voice, 3D avatar
- `js/footer.js`     working footer: resource and legal pages (modal), contact form, app footer
- `js/boot.js`       starts the router
- `js/actions.js`    click handlers and router

## Data
No sample data ships with the app. Everything shown comes from the account you register and the monthly records you add.

## Notes and limitations
- Data and accounts are stored in browser localStorage only; there is no backend or database.
- Password hashing is client-side and for demo only.
- All intelligence is rule-based and simulated.
- The Manager Dashboard summarises accounts registered in the same browser.
- Not implemented yet: onboarding wizard, life events, credit advisor, camera banking, executive page, engagement engine, global search, notifications, settings.

MANSHORA provides educational and simulated financial insights. Recommendations are not guaranteed financial advice, loan approval, investment advice, or credit decisions.

## Configure
Edit `MAIL`, `WEBSITE` and `LINKEDIN` at the top of `js/footer.js`. Website and LinkedIn links stay hidden until you set them.
