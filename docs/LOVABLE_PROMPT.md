# Lovable Prompt — Mockup & Prototype
## Meeter: Meeting Cost Calculator (Canadian Edition)

---

## PROMPT

Build a **mockup and clickable prototype** for a web app called **"Meeter"** — a real-time meeting cost calculator for the Canadian market. This is a prototype to validate the concept and flow, not a production-ready app. Focus on the UI, the core calculator interaction, and the user experience. No backend, no auth, no database — use local state and hardcoded data only.

---

### WHAT TO BUILD (Prototype Scope)

**In scope (build these):**
1. Landing page
2. Manual calculator — the full flow: add attendees → live counter → meeting summary
3. A static mockup of what a dashboard would look like (placeholder data)

**Out of scope (do NOT build — future iterations):**
- Authentication / sign-up / login
- Database or backend
- Calendar integrations
- Meeting history persistence
- Reports and analytics (real data)
- Gamification logic
- Settings page with integrations

---

### PAGE 1: Landing Page (`/`)

A simple, clean landing page to communicate the value proposition.

**Elements:**
- Headline: "See What Your Meetings Really Cost"
- Subheadline: "Real-time cost tracking. Smarter meetings. Built for Canadian teams."
- Hero section: an animated cost ticker counting up automatically with sample data (e.g., 5 attendees, ticking from $0 upwards). This is a demo — it runs on its own to show visitors what the app does.
- Stats bar below hero: "36-56M meetings/day | $1.4T annual investment | 23-min recovery time"
- One primary CTA button: "Try the Calculator" → navigates to `/calculator`
- Feature highlights section (3-4 simple cards):
  1. "Real-Time Cost Counter" — See dollars tick up as your meeting runs
  2. "20+ Canadian Salary Benchmarks" — Pre-loaded with Glassdoor data
  3. "Manual or Integrated" — Use standalone or connect your calendar (coming soon)
  4. "Optimization Insights" — Tips to make meetings more efficient
- Simple footer

---

### PAGE 2: Manual Calculator (`/calculator`)

This is the core of the prototype. A 3-step flow, all on one page (or stepped sections).

#### Step 1: Add Attendees

- A role search/select dropdown pre-populated with 20 Canadian roles (see salary data below)
- Quick-select chips for the most common roles: Product Manager, Software Engineer, Designer, Project Manager, Director, VP, CEO
- Clicking a role or chip adds an attendee row below
- Each attendee row shows:
  - Role name
  - Hourly rate (CAD), editable — clicking the rate opens an inline edit field
  - Remove button (x icon)
- "Add Custom Role" button that reveals two fields:
  - Custom role name (text input)
  - Custom hourly rate (number input, CAD)
  - [Add] button
- Running total at bottom of the attendee list:
  - "Total Burn Rate: CAD $X.XX/hr (CAD $X.XX/min | CAD $X.XX/sec)"
- [Start Meeting Counter] button — primary CTA, disabled until at least 1 attendee is added
- Social loafing warning: if more than 8 attendees are added, show a yellow banner: "Heads up: Meetings with more than 8 people see reduced participation."

#### Step 2: Live Counter (appears after clicking Start)

- The attendee setup section collapses or slides away
- Large, prominent cost display in the centre of the screen:
  - Big number: "CAD $347.52" (48px+ font, monospace/tabular numbers so digits don't jump)
  - Subtitle: "and counting..."
- Below the counter:
  - Duration: MM:SS (counting up from 00:00)
  - Attendees: number
  - Burn Rate: CAD $X.XX/min | CAD $X.XX/sec
- **Meeting Health Meter** — a visual gauge/arc that fills from green → yellow → orange → red as the meeting cost rises. This is the signature UI element of Meeter.
  - The meter uses a **cost-per-attendee-per-minute** benchmark to determine health:
    - **Green ("Good Value"):** Cost per attendee < $1.00/min — Meeting is within productive range
    - **Yellow ("Watch It"):** Cost per attendee $1.00 - $1.50/min — Getting expensive, stay focused
    - **Orange ("Expensive"):** Cost per attendee $1.50 - $2.50/min — Consider wrapping up soon
    - **Red ("Over Budget"):** Cost per attendee > $2.50/min — This meeting is costly, wrap up or go async
  - The meter also factors in **duration** — research shows focus drops after 30 min and falls sharply after 45 min:
    - Any meeting still running past 45 min shifts one zone higher (yellow → orange, orange → red)
    - Any meeting past 60 min is automatically orange or red regardless of cost
  - The meter displays a label below it: "Good Value", "Watch It", "Expensive", or "Over Budget"
  - Visually: a semi-circular arc/gauge (like a speedometer) with a needle, or a horizontal progress bar with colour gradient — either works
  - The meter sits beside or below the main cost counter number
  - **Research basis for thresholds:**
    - Average meeting with 5-10 mid-level employees costs $200-$800/hr (source: Owl Labs, Parabol)
    - Shopify found their avg 30-min / 3-person meeting costs $700-$1,600 (source: Shopify internal data)
    - Cognitive focus peaks in first 15-30 min, drops significantly after 45 min (source: Wharton, Flowtrace)
    - A single weekly mid-level manager meeting at a large corp costs ~$15M/year (source: Bain & Company)
    - 35% of all business meetings are considered a waste (source: various studies)
- Cost milestones: small log entries that appear as thresholds are crossed
  - "Reached $100 at 10:18"
  - "Reached $200 at 20:36"
  - "Reached $500 at 51:30"
- Insight card (one static tip visible, can rotate every 30 seconds):
  - "Wrapping up 10 min early would save CAD $X.XX"
  - "Recovery time after this meeting costs an additional CAD $X.XX"
  - Dynamic: when meter hits yellow: "Consider if all attendees need to stay for the rest"
  - Dynamic: when meter hits red: "This meeting has become expensive. Can remaining items go async?"
- Control buttons:
  - [Pause] / [Resume] — toggles timer and cost
  - [Stop Meeting] — ends the session, goes to summary
  - [+ Add Attendee] — opens a small modal/drawer to add another person mid-meeting (their cost accrues from the moment they're added)

#### Step 3: Meeting Summary (appears after clicking Stop)

- The counter stops and displays a summary card:
  - **Total Cost:** CAD $X.XX
  - **Duration:** HH:MM:SS
  - **Attendees:** count
  - **Avg Cost/Person:** CAD $X.XX
  - **Recovery Cost:** CAD $X.XX (attendees x 23 min x avg hourly rate / 60)
  - **True Total:** CAD $X.XX (meeting cost + recovery cost)
  - **Annual Projection:** "If this is a weekly meeting: CAD $X.XX/year"
- Value rating: 5 clickable stars — "How valuable was this meeting?" (purely visual for prototype, doesn't save)
- Suggestion card:
  - "Could this have been an email, a Loom video, or a shared doc?"
  - "Tip: Reducing attendees from 10 to 7 saves CAD $X.XX per meeting"
- Two buttons:
  - [Start New Meeting] → resets back to Step 1
  - [Share Results] → copies a text summary to clipboard

---

### PAGE 3: Dashboard Mockup (`/dashboard`)

A **static mockup** with hardcoded placeholder data. No real logic needed — just show what it would look like.

**Layout:**
- Greeting: "Good morning, Sarah"
- Cards:
  - **This Week:** 14 meetings | Total: CAD $4,287 | Avg: $306/meeting | 12 hrs in meetings
  - **Upcoming Meeting:** "Daily Standup — 9:30 AM | 6 attendees | Est: CAD $198" with a greyed-out [Start Counter] button
  - **Monthly Trend:** a simple placeholder line chart (can use a static SVG or basic chart library) showing declining costs over 4 weeks
  - **Efficiency Score:** "72/100 — Up 5 pts from last week"
- Quick actions row (buttons, visually present but can link back to `/calculator`):
  - [Start Manual Counter] [View Calendar] [View Reports]
- Tip card: "Did you know? The average recovery time after a meeting is 23 minutes."
- A small banner at top: "Dashboard preview — sign up for full access (coming soon)"

---

### SALARY DATA (Hardcode in the app)

Use this as the pre-loaded role list. All values in Canadian Dollars (CAD).

```json
[
  { "role": "CEO", "annualSalary": 209787, "hourlyRate": 100.86 },
  { "role": "VP (Vice President)", "annualSalary": 203239, "hourlyRate": 97.71 },
  { "role": "Managing Director", "annualSalary": 197901, "hourlyRate": 95.14 },
  { "role": "VP Operations", "annualSalary": 187515, "hourlyRate": 90.15 },
  { "role": "CTO", "annualSalary": 178774, "hourlyRate": 85.95 },
  { "role": "Director", "annualSalary": 155701, "hourlyRate": 74.86 },
  { "role": "CFO", "annualSalary": 133721, "hourlyRate": 64.29 },
  { "role": "Technical Product Manager", "annualSalary": 114318, "hourlyRate": 54.96 },
  { "role": "DevOps Engineer", "annualSalary": 110000, "hourlyRate": 52.88 },
  { "role": "Software Engineer", "annualSalary": 103133, "hourlyRate": 49.58 },
  { "role": "Product Manager", "annualSalary": 102270, "hourlyRate": 49.17 },
  { "role": "HR Manager", "annualSalary": 98565, "hourlyRate": 47.39 },
  { "role": "Business Analyst", "annualSalary": 91500, "hourlyRate": 44.00 },
  { "role": "Data Scientist", "annualSalary": 90000, "hourlyRate": 43.27 },
  { "role": "Project Manager", "annualSalary": 88948, "hourlyRate": 42.76 },
  { "role": "Sales Manager", "annualSalary": 85599, "hourlyRate": 41.15 },
  { "role": "Operations Manager", "annualSalary": 77576, "hourlyRate": 37.30 },
  { "role": "UX Designer", "annualSalary": 70044, "hourlyRate": 33.67 },
  { "role": "Data Analyst", "annualSalary": 70036, "hourlyRate": 33.67 },
  { "role": "Designer", "annualSalary": 63122, "hourlyRate": 30.35 }
]
```

---

### FORMULA (Implement in frontend logic)

```
// Runs every 1 second while counter is active
burnRatePerSecond = SUM(all attendees' hourly rates) / 3600
currentCost = burnRatePerSecond * elapsedSeconds

// Recovery cost (shown in summary only)
avgHourlyRate = SUM(all attendees' hourly rates) / numberOfAttendees
recoveryCost = numberOfAttendees * 23 * (avgHourlyRate / 60)

// Annual projection
annualCost = totalMeetingCost * 52  // assumes weekly

// Meeting Health Meter — cost per attendee per minute
costPerAttendeePerMin = currentCost / numberOfAttendees / elapsedMinutes
elapsedMinutes = elapsedSeconds / 60

// Determine meter zone (base zone from cost)
if (costPerAttendeePerMin < 1.00)       -> GREEN  ("Good Value")
else if (costPerAttendeePerMin < 1.50)  -> YELLOW ("Watch It")
else if (costPerAttendeePerMin < 2.50)  -> ORANGE ("Expensive")
else                                    -> RED    ("Over Budget")

// Duration modifier — shift zone up if meeting runs long
if (elapsedMinutes > 45) -> shift one zone higher (green→yellow, yellow→orange, etc.)
if (elapsedMinutes > 60) -> minimum zone is ORANGE

// Meter percentage (0-100 for gauge fill)
meterPercent = min(100, (costPerAttendeePerMin / 3.00) * 100)
// Capped at 100%. $3.00/attendee/min = fully red.
```

---

### DESIGN

- **Style:** Clean, modern, professional. Business tool — not playful.
- **Colours:**
  - Primary: Deep blue (#1E3A5F)
  - Accent: Teal (#0D9488)
  - Meter Green: (#10B981) — "Good Value"
  - Meter Yellow: (#F59E0B) — "Watch It"
  - Meter Orange: (#F97316) — "Expensive"
  - Meter Red: (#EF4444) — "Over Budget"
  - Background: Light grey (#F9FAFB)
  - Text: Dark grey (#111827)
- **Typography:** Inter or system font. The cost counter number must be the most prominent element — large (48px+), bold, monospace or tabular numbers.
- **Cards:** Rounded corners (8px), subtle shadow, white background.
- **Responsive:** Desktop-first, but should look good on tablet and mobile.
- **Animations:** Smooth number transitions on the counter (no jarring digit jumps). Subtle fade-in for insight cards.

---

### KEY BEHAVIOURS

1. **Counter updates every 1 second** using `setInterval`. Display cost to 2 decimal places.
2. **Pause/Resume** stops and restarts the timer and cost accumulation.
3. **Adding an attendee mid-meeting** recalculates the burn rate from that moment. Their cost does NOT retroactively apply to elapsed time.
4. **Any role's hourly rate can be edited inline** before or during the meeting.
5. **Currency display:** Always prefix with "CAD". Format: CAD $1,247.50 (commas for thousands).
6. **Social loafing warning** appears as a yellow banner when attendee count exceeds 8.
9. **Meeting Health Meter** updates every second alongside the cost counter. It uses cost-per-attendee-per-minute to determine the zone (green/yellow/orange/red) and shifts up a zone when duration exceeds 45 min. The meter is the signature visual of Meeter — make it prominent and satisfying to watch.
7. **Cost milestones** log at $100, $200, $300, $500 with the timestamp when crossed.
8. **Share Results** copies a plain-text summary to the clipboard.
9. **Hero demo ticker** on the landing page auto-runs with sample attendees (no user interaction needed).

---

### WHAT SUCCESS LOOKS LIKE

A prototype where someone can:
1. Land on the page and immediately understand what Meeter does (hero demo)
2. Click "Try the Calculator" and set up a meeting in under 30 seconds
3. Watch a live cost counter tick up during a real meeting
4. Stop and see a clear summary with the true cost including recovery time
5. Peek at the dashboard mockup to envision the full product

This validates the core interaction loop before investing in backend, auth, and integrations.

---

### COMPETITIVE DIFFERENTIATION

Existing tools in this space (CostMeet, Meeting Cost Ticker, OmniCalculator, MeetingKing, etc.) share common gaps. Meeter must differentiate by NOT replicating what already exists. Here is how:

**What competitors do:**
- CostMeet: Free, real-time tracking, calendar sync, team analytics, multi-currency. Generic — not localized.
- Meeting Cost Ticker / MeetingCostCalculator.com: Simple static calculators. Enter salary + duration = output. No live counter.
- OmniCalculator: Static form-based calculator. No timer. No insights.
- Flowtrace: Enterprise-focused, calendar analytics, no live counter during meetings.

**What Meeter does differently (our edge):**
1. **Canadian-first localization** — Pre-loaded with 20 CAD salary benchmarks from Glassdoor/PayScale. No other tool does this.
2. **Recovery cost calculation** — We calculate the hidden cost of meeting recovery time (23 min avg per person). No competitor includes this.
3. **True Total Cost** — Meeting cost + recovery cost combined. A unique metric.
4. **Manual counter with custom rates** — Works without an account, with full rate override for any role. Not gated behind sign-up.
5. **Mid-meeting attendee add** — Add/remove people during a live session with cost accruing from that moment. Most tools require setup upfront only.
6. **Educational framing, not punitive** — Tips, insights, and async suggestions positioned as empowerment, not surveillance.
7. **Cost zone visualisation** — Colour-coded green/yellow/red zones that shift in real-time. More visceral than a plain number.
8. **Milestone logging** — Timestamps when cost crosses $100, $200, $500 thresholds. Creates memorable moments.
9. **Value rating + outcome tagging** (future) — Rate meetings post-session. Build a value-vs-cost dataset over time. No competitor does this.
10. **Gamification roadmap** (future) — Badges, streaks, leaderboards for meeting efficiency. Not an audit tool — a behaviour change tool.

**Positioning:**
Meeter is not a cheaper CostMeet. It is a **Canadian-localized, education-first meeting cost tool** with recovery cost awareness, manual flexibility, and a path toward gamified behaviour change. CostMeet tracks cost. Meeter changes culture.

---

### EDUCATIONAL TIPS (Hardcode and rotate)

```json
[
  "The average recovery time after a meeting is 23 minutes.",
  "Meetings with more than 8 people see a significant drop in individual participation.",
  "Morning meetings during peak focus hours cost 20% more in lost productivity.",
  "Junior staff take up to 45 minutes longer to recover from meeting interruptions.",
  "36-56 million meetings happen daily in North America.",
  "A 1-hour meeting with 10 people isn't a 1-hour meeting — it's a 10-hour meeting.",
  "Could this meeting be a Loom video, a Slack message, or a shared doc instead?",
  "Adding an agenda to your meeting invite increases focus and reduces duration by up to 20%.",
  "The most effective meetings have fewer than 7 attendees.",
  "Recurring meetings should be reviewed quarterly. Are they still needed?"
]
```
