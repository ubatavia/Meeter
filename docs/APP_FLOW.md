# App Flow - Meeting Cost Calculator
## User Journeys & Screen-by-Screen Flow

---

## Flow Overview

```
                         +------------------+
                         |   Landing Page   |
                         +--------+---------+
                                  |
                    +-------------+-------------+
                    |                           |
           +--------v--------+        +--------v--------+
           |  Manual Counter |        |  Sign Up/Login  |
           |  (No account)   |        |  (Full access)  |
           +--------+--------+        +--------+--------+
                    |                           |
                    v                           v
           +----------------+         +-----------------+
           | Manual Meeting |         |    Dashboard    |
           |    Session     |         |    (Home)       |
           +----------------+         +--------+--------+
                                               |
                    +----------+----------+----+----+-----------+
                    |          |          |         |           |
               +----v---+ +---v----+ +---v---+ +---v----+ +---v-----+
               |Calendar| |Manual  | |Meeting| |Reports | |Settings |
               |  View  | |Counter | |History| |        | |         |
               +---+----+ +---+----+ +-------+ +--------+ +---------+
                   |           |
                   v           v
            +-------------+  +-------------+
            |Pre-Meeting  |  |  Meeting    |
            |  Summary    |  |  Session    |
            +------+------+  +------+------+
                   |                |
                   v                v
            +-------------+  +-------------+
            |  Meeting    |  | Post-Meeting|
            |  Session    |  |  Summary    |
            +------+------+  +------+------+
                   |                |
                   v                v
            +-------------+  +-------------+
            |Post-Meeting |  |  Dashboard  |
            |  Summary    |  |  (Updated)  |
            +-------------+  +-------------+
```

---

## Screen 1: Landing Page

**Purpose:** First impression. Communicate value. Offer immediate use (manual counter) or sign-up.

**Elements:**
- Headline: "See what your meetings really cost"
- Subheadline: "Real-time cost tracking. Smarter meetings. Built for Canadian teams."
- Hero animation: A live cost ticker counting up (demo mode)
- Two primary CTAs:
  - [Try It Now — No Sign Up] --> Manual Counter (Screen 3)
  - [Get Started Free] --> Sign Up (Screen 2)
- Key stats bar: "36-56M meetings/day | $1.4T annual investment | 23-min recovery time"
- Brief feature overview:
  - Real-time cost counter
  - Canadian salary benchmarks (20+ roles)
  - Calendar integration (Google, Outlook, Teams)
  - Optimization suggestions & gamification
- Social proof / testimonials placeholder

**Navigation:** Minimal. Logo, About, Pricing, Login, Get Started.

---

## Screen 2: Sign Up / Login

**Purpose:** Account creation and authentication.

**Sign Up Flow:**
```
Step 1: Email + Password
        OR
        Continue with Google
        Continue with Microsoft

Step 2: Profile Setup
        - Name
        - Company Name (optional)
        - Your Role (dropdown from salary database + "Other")
        - Team Size (optional)
        - Primary Calendar (Google / Outlook / Apple)

Step 3: Calendar Integration (optional, can skip)
        - "Connect Google Calendar" [OAuth flow]
        - "Connect Microsoft Outlook" [OAuth flow]
        - "Skip for now — I'll use manual mode"

Step 4: Welcome Screen
        - Quick 3-step tour
        - "Start your first meeting counter" CTA
```

**Login Flow:**
- Email + Password
- Google SSO
- Microsoft SSO
- "Forgot Password" link

---

## Screen 3: Manual Counter (No Account Required)

**Purpose:** Immediate value. Let anyone calculate a meeting cost without signing up. This is the conversion hook.

**Flow:**
```
Step 1: Add Attendees
        +-------------------------------------------+
        |  MEETING COST CALCULATOR           [CAD]  |
        |                                           |
        |  Add attendees to your meeting:           |
        |                                           |
        |  [Search role or type custom...]          |
        |                                           |
        |  Popular roles:                           |
        |  [Product Manager] [Software Engineer]    |
        |  [Designer] [Project Manager] [Director]  |
        |  [VP] [CEO] [Custom...]                   |
        |                                           |
        +-------------------------------------------+

Step 2: Configure Attendees
        +-------------------------------------------+
        |  YOUR MEETING                      [CAD]  |
        |                                           |
        |  1. Product Manager    $49.17/hr   [x]    |
        |  2. Software Engineer  $49.58/hr   [x]    |
        |  3. Designer           $30.35/hr   [x]    |
        |     [Edit rate]                           |
        |                                           |
        |  + Add another attendee                   |
        |  + Add custom role (set your own rate)    |
        |                                           |
        |  Total Burn Rate: $129.10/hr              |
        |  ($2.15/min | $0.04/sec)                  |
        |                                           |
        |  [Start Meeting Counter]                  |
        +-------------------------------------------+

Step 3: Live Counter
        +-------------------------------------------+
        |  MEETING COST                      [CAD]  |
        |                                           |
        |         +---------------------+           |
        |         |    $247.83          |           |
        |         |    and counting...   |           |
        |         +---------------------+           |
        |                                           |
        |  Duration:    28:42                       |
        |  Attendees:   3                           |
        |  Burn Rate:   $0.04/sec                   |
        |                                           |
        |  [Pause]  [Stop]  [+ Attendee]            |
        |                                           |
        |  [!] Tip: Recovery time after this        |
        |  meeting will cost an additional $55.72   |
        +-------------------------------------------+

Step 4: Meeting Summary (on Stop)
        +-------------------------------------------+
        |  MEETING COMPLETE                         |
        |                                           |
        |  Total Cost:      CAD $312.45             |
        |  Duration:        36:12                   |
        |  Attendees:       3                       |
        |  Avg Cost/Person: $104.15                 |
        |                                           |
        |  Recovery Cost:   $55.72                  |
        |  TRUE TOTAL:      $368.17                 |
        |                                           |
        |  If this is a weekly recurring meeting:   |
        |  Annual Cost: $19,144.84                  |
        |                                           |
        |  Was this meeting valuable?               |
        |  [1] [2] [3] [4] [5]                      |
        |                                           |
        |  [Share Results] [Start New]              |
        |  [Sign up to save & track history]        |
        +-------------------------------------------+
```

---

## Screen 4: Dashboard (Authenticated Home)

**Purpose:** Central hub after login. Show overview of meeting costs, trends, and quick actions.

**Layout:**
```
+------------------------------------------------------------------+
| [Logo]  Calendar  Manual  History  Reports  Settings    [Avatar]  |
+------------------------------------------------------------------+
|                                                                    |
|  Good morning, Sarah.                                              |
|                                                                    |
|  +-------------------------+  +---------------------------+        |
|  | THIS WEEK               |  | UPCOMING MEETING          |        |
|  | Meetings: 14            |  | Daily Standup - 9:30 AM   |        |
|  | Total Cost: $4,287      |  | 6 attendees | Est: $198   |        |
|  | Avg per meeting: $306   |  | [Start Counter]           |        |
|  | Time in meetings: 12hrs |  +---------------------------+        |
|  +-------------------------+                                       |
|                                                                    |
|  +-------------------------+  +---------------------------+        |
|  | MONTHLY TREND           |  | EFFICIENCY SCORE          |        |
|  | [Chart: cost over time] |  | 72/100                    |        |
|  |                         |  | Up 5 pts from last week   |        |
|  | Oct: $12,400            |  |                           |        |
|  | Nov: $11,800 (-4.8%)    |  | Badges: 3 earned          |        |
|  +-------------------------+  +---------------------------+        |
|                                                                    |
|  +--------------------------------------------------+             |
|  | QUICK ACTIONS                                      |             |
|  | [Start Manual Counter] [View Calendar] [Reports]  |             |
|  +--------------------------------------------------+             |
|                                                                    |
|  +--------------------------------------------------+             |
|  | TODAY'S TIP                                        |             |
|  | "Meetings >8 people see significant drops in       |             |
|  | individual participation. Consider splitting."     |             |
|  +--------------------------------------------------+             |
+------------------------------------------------------------------+
```

---

## Screen 5: Calendar View

**Purpose:** See upcoming meetings with cost estimates. Click to start a meeting counter.

**Layout:**
```
+------------------------------------------------------------------+
|  CALENDAR VIEW                          [Day] [Week] [Month]      |
+------------------------------------------------------------------+
|                                                                    |
|  Today - Monday, Feb 10                                            |
|                                                                    |
|  9:00  +----------------------------------------------+           |
|        | Daily Standup                                 |           |
|        | 6 attendees | 15 min | Est: CAD $49.50      |           |
|        | [Start Counter] [View Details]               |           |
|        +----------------------------------------------+           |
|                                                                    |
|  10:00 +----------------------------------------------+           |
|        | Sprint Planning                    [!] 12ppl |           |
|        | 12 attendees | 1 hr | Est: CAD $582.00      |           |
|        | [!] Social loafing risk (>8 attendees)       |           |
|        | [Start Counter] [Optimize] [View Details]    |           |
|        +----------------------------------------------+           |
|                                                                    |
|  14:00 +----------------------------------------------+           |
|        | Exec Review                      [$$$]       |           |
|        | 4 attendees (incl. VP, Director)             |           |
|        | 1 hr | Est: CAD $322.72                      |           |
|        | [Start Counter] [View Details]               |           |
|        +----------------------------------------------+           |
|                                                                    |
|  Today's Total: CAD $954.22 estimated across 3 meetings           |
|  Weekly Projection: CAD $4,771.10                                  |
+------------------------------------------------------------------+
```

---

## Screen 6: Pre-Meeting Summary (Click "View Details")

**Purpose:** Before a meeting starts, show the full cost breakdown and offer optimization.

**Layout:**
```
+------------------------------------------------------------------+
|  MEETING DETAILS                                                   |
+------------------------------------------------------------------+
|                                                                    |
|  Sprint Planning                                                   |
|  Monday 10:00 AM - 11:00 AM | Recurring: Weekly                   |
|                                                                    |
|  COST ESTIMATE                                                     |
|  +---------------------------+                                     |
|  | Single Meeting: $582.00   |                                     |
|  | Weekly (x52):   $30,264   |                                     |
|  | Recovery Cost:  $176.33   |                                     |
|  | TRUE COST:      $758.33   |                                     |
|  +---------------------------+                                     |
|                                                                    |
|  ATTENDEES (12)                          [!] Social loafing risk   |
|  +--------------------------------------------+                   |
|  | Role                | Rate/hr   | Status   |                   |
|  |---------------------|-----------|----------|                   |
|  | Product Manager     | $49.17    | Required |                   |
|  | Product Manager     | $49.17    | Required |                   |
|  | Software Engineer   | $49.58    | Required |                   |
|  | Software Engineer   | $49.58    | Required |                   |
|  | Software Engineer   | $49.58    | Optional |                   |
|  | Software Engineer   | $49.58    | Optional |                   |
|  | Designer            | $30.35    | Optional |                   |
|  | Designer            | $30.35    | Optional |                   |
|  | QA Analyst          | $33.67    | Optional |                   |
|  | Project Manager     | $42.76    | Required |                   |
|  | Director            | $74.86    | Required |                   |
|  | VP                  | $97.71    | Required |                   |
|  +--------------------------------------------+                   |
|                                                                    |
|  OPTIMIZATION SUGGESTION                                           |
|  Reducing to 7 required attendees saves:                           |
|  - $243.11 per meeting                                             |
|  - $12,641.72 per year                                             |
|  Optional attendees can review async recording instead.            |
|                                                                    |
|  [Start Counter]  [Optimize Attendees]  [Suggest Async]           |
+------------------------------------------------------------------+
```

---

## Screen 7: Live Meeting Session (Active Counter)

**Purpose:** The core experience. Real-time cost display during the meeting.

**Layout:**
```
+------------------------------------------------------------------+
|  LIVE MEETING: Sprint Planning                          [CAD]     |
+------------------------------------------------------------------+
|                                                                    |
|              +----------------------------------+                  |
|              |                                  |                  |
|              |         CAD $347.52              |                  |
|              |         and counting...           |                  |
|              |                                  |                  |
|              +----------------------------------+                  |
|                                                                    |
|  Duration:      35:48 / 60:00                                      |
|  Attendees:     12                                                 |
|  Burn Rate:     $9.70/min | $0.16/sec                             |
|                                                                    |
|  +-------------------------------+                                 |
|  | COST MILESTONES               |                                 |
|  | [x] $100 reached at 10:18     |                                 |
|  | [x] $200 reached at 20:36     |                                 |
|  | [x] $300 reached at 30:54     |                                 |
|  | [ ] $500 threshold             |                                 |
|  +-------------------------------+                                 |
|                                                                    |
|  +-------------------------------+                                 |
|  | LIVE INSIGHT                   |                                 |
|  | You're 60% through the meeting |                                 |
|  | with 24:12 remaining.          |                                 |
|  | Wrapping up 10 min early saves |                                 |
|  | CAD $97.00.                    |                                 |
|  +-------------------------------+                                 |
|                                                                    |
|  [Pause]  [Stop Meeting]  [+ Add Attendee]  [Notes]               |
+------------------------------------------------------------------+
```

**Minimized Widget (overlay for video calls):**
```
+---------------------------+
| $347.52 | 35:48 | 12 ppl |
| $0.16/sec        [Expand] |
+---------------------------+
```

---

## Screen 8: Post-Meeting Summary

**Purpose:** After stopping the counter, show the full cost breakdown, prompt for value assessment, and suggest improvements.

**Layout:**
```
+------------------------------------------------------------------+
|  MEETING COMPLETE: Sprint Planning                                |
+------------------------------------------------------------------+
|                                                                    |
|  +----------------------------+  +----------------------------+    |
|  | COST SUMMARY               |  | MEETING DETAILS            |    |
|  |                            |  |                            |    |
|  | Total Cost:    $582.00     |  | Duration: 60:00            |    |
|  | Recovery Cost: $176.33     |  | Attendees: 12              |    |
|  | TRUE TOTAL:    $758.33     |  | Avg Cost/Person: $48.50    |    |
|  |                            |  | Cost/Minute: $9.70         |    |
|  | Annual Impact: $39,433     |  |                            |    |
|  | (weekly recurring)         |  |                            |    |
|  +----------------------------+  +----------------------------+    |
|                                                                    |
|  HOW VALUABLE WAS THIS MEETING?                                   |
|  [1 - Waste] [2 - Low] [3 - Fair] [4 - Good] [5 - Essential]     |
|                                                                    |
|  WHAT WAS THE OUTCOME?                                             |
|  [ ] Decisions made: ______                                        |
|  [ ] Action items created: ______                                  |
|  [ ] Information shared (could be async)                           |
|  [ ] No clear outcome                                              |
|                                                                    |
|  SUGGESTIONS                                                       |
|  - 5 attendees were optional. Consider async for them.            |
|  - This meeting exceeded 8 attendees. Social loafing risk.        |
|  - Try a 45-min version next week — save $145.50/session.         |
|                                                                    |
|  [Save to History]  [Share Summary]  [Schedule Follow-up]         |
+------------------------------------------------------------------+
```

---

## Screen 9: Meeting History

**Purpose:** View all past meetings with cost data, trends, and filters.

**Layout:**
```
+------------------------------------------------------------------+
|  MEETING HISTORY               [Filter] [Export CSV] [Date Range] |
+------------------------------------------------------------------+
|                                                                    |
|  This Week: 14 meetings | Total: CAD $4,287 | Avg Score: 3.2/5   |
|                                                                    |
|  +----------------------------------------------------------------+
|  | Date     | Meeting           | Duration | Attend | Cost   | Val|
|  |----------|-------------------|----------|--------|--------|-----|
|  | Feb 10   | Daily Standup     | 15 min   | 6      | $49    | 4  |
|  | Feb 10   | Sprint Planning   | 60 min   | 12     | $582   | 3  |
|  | Feb 10   | Exec Review       | 60 min   | 4      | $323   | 5  |
|  | Feb 9    | Design Review     | 45 min   | 5      | $172   | 4  |
|  | Feb 9    | 1:1 with Marcus   | 30 min   | 2      | $46    | 4  |
|  | Feb 8    | Retro             | 60 min   | 8      | $378   | 3  |
|  | Feb 8    | Roadmap Alignment | 90 min   | 10     | $712   | 2  |
|  +----------------------------------------------------------------+
|                                                                    |
|  INSIGHTS                                                          |
|  - Your most expensive recurring meeting: Sprint Planning ($582)  |
|  - 3 meetings this week scored below 3 — consider async options   |
|  - You spent 12 hours in meetings (30% of your work week)         |
+------------------------------------------------------------------+
```

---

## Screen 10: Reports & Analytics

**Purpose:** Deeper analytics for managers and team leads.

**Layout:**
```
+------------------------------------------------------------------+
|  REPORTS                    [Weekly] [Monthly] [Quarterly]        |
+------------------------------------------------------------------+
|                                                                    |
|  +----------------------------+  +----------------------------+    |
|  | COST TREND                 |  | TIME IN MEETINGS           |    |
|  | [Line chart: weekly cost   |  | [Bar chart: hrs/week]      |    |
|  |  over last 12 weeks]       |  |                            |    |
|  | Trending: -8% month/month  |  | This week: 12 hrs (30%)   |    |
|  +----------------------------+  +----------------------------+    |
|                                                                    |
|  +----------------------------+  +----------------------------+    |
|  | VALUE vs COST              |  | TOP EXPENSIVE MEETINGS     |    |
|  | [Scatter plot: value       |  | 1. Sprint Planning  $582  |    |
|  |  score vs cost]            |  | 2. Roadmap Align    $712  |    |
|  |                            |  | 3. All Hands        $1,247|    |
|  | Quadrants:                 |  |                            |    |
|  | High Value/Low Cost = KEEP |  | Potential annual savings:  |    |
|  | Low Value/High Cost = CUT  |  | CAD $38,400 if optimized  |    |
|  +----------------------------+  +----------------------------+    |
|                                                                    |
|  +----------------------------+  +----------------------------+    |
|  | MEETING TYPE BREAKDOWN     |  | GAMIFICATION               |    |
|  | Standup:     18% of cost   |  | Badges earned: 5           |    |
|  | Planning:    24% of cost   |  | Current streak: 3 days     |    |
|  | Reviews:     15% of cost   |  | Efficiency score: 72/100   |    |
|  | Ad-hoc:      28% of cost   |  | Team rank: 3rd of 8        |    |
|  | Exec:        15% of cost   |  |                            |    |
|  +----------------------------+  +----------------------------+    |
+------------------------------------------------------------------+
```

---

## Screen 11: Settings

**Purpose:** Configure the calculator, salary overrides, integrations, and preferences.

**Layout:**
```
+------------------------------------------------------------------+
|  SETTINGS                                                         |
+------------------------------------------------------------------+
|                                                                    |
|  PROFILE                                                           |
|  Name: Sarah Chen                                                  |
|  Role: Product Manager                                             |
|  Company: Acme Corp                                                |
|  [Edit Profile]                                                    |
|                                                                    |
|  SALARY CONFIGURATION                                              |
|  Default database: Canadian Benchmarks (2025-2026)                 |
|  Currency: [CAD v]                                                 |
|  Working hours/year: [2,080]                                       |
|  Benefits multiplier: [1.0x v]                                     |
|                                                                    |
|  Custom Rate Overrides:                                            |
|  +--------------------------------------------------+             |
|  | Role              | Default    | Your Override    |             |
|  |-------------------|------------|------------------|             |
|  | Product Manager   | $49.17/hr  | [          ]     |             |
|  | Software Engineer | $49.58/hr  | [$55.00/hr ]     |             |
|  | Contractor        | —          | [$75.00/hr ]     |             |
|  +--------------------------------------------------+             |
|  [+ Add Custom Role]                                               |
|                                                                    |
|  INTEGRATIONS                                                      |
|  Google Calendar: Connected [Disconnect]                           |
|  Microsoft Outlook: Not connected [Connect]                        |
|  Zoom: Not connected [Connect]                                     |
|  Teams: Not connected [Connect]                                    |
|                                                                    |
|  NOTIFICATIONS                                                     |
|  Cost threshold alerts: [On v]  Threshold: [$500 CAD]             |
|  Social loafing warnings: [On v]  Threshold: [8 people]           |
|  Weekly email report: [On v]                                       |
|  Educational tips: [On v]                                          |
|                                                                    |
|  TEMPLATES                                                         |
|  Saved meeting templates: 3                                        |
|  [Manage Templates]                                                |
|                                                                    |
|  [Save Changes]                                                    |
+------------------------------------------------------------------+
```

---

## Key User Flows

### Flow A: First-Time Visitor (No Account)
```
Landing Page --> "Try It Now" --> Manual Counter --> Add Attendees
--> Start Counter --> Stop --> Meeting Summary --> "Sign up to save"
```

### Flow B: Registered User - Calendar Meeting
```
Login --> Dashboard --> Calendar View --> Click Meeting
--> Pre-Meeting Summary --> Start Counter --> Live Session
--> Stop --> Post-Meeting Summary --> Rate & Log --> Dashboard
```

### Flow C: Registered User - Ad-Hoc Manual Meeting
```
Login --> Dashboard --> "Start Manual Counter" --> Add Attendees
--> Configure Rates --> Start Counter --> Stop --> Summary --> Save
```

### Flow D: Reviewing Meeting Efficiency
```
Login --> Dashboard --> Reports --> View Trends --> Identify
expensive/low-value meetings --> Click meeting --> See suggestions
--> Take action (shorten, reduce attendees, go async)
```

### Flow E: Team Lead Reviewing Team
```
Login --> Dashboard --> Reports --> Team View --> Compare teams
--> Identify improvement areas --> Set team goals --> Track via
gamification leaderboard
```

---

## State Transitions: Meeting Counter

```
                 +-------+
                 | IDLE  |
                 +---+---+
                     |
              [Start Button]
                     |
                     v
                 +-------+
           +---->|RUNNING|<----+
           |     +---+---+     |
           |         |         |
     [Resume]   [Pause]   [+Attendee]
           |         |    (stays running)
           |         v
           |     +-------+
           +-----|PAUSED |
                 +---+---+
                     |
                [Stop Button]
                     |
                     v
                 +-------+
                 |STOPPED|
                 +---+---+
                     |
              [Save / Discard]
                     |
                     v
                 +--------+
                 |COMPLETE|
                 +--------+
```

---

## Responsive Considerations

| Context | Display Mode |
|---------|-------------|
| Desktop web app | Full dashboard with sidebar navigation |
| Tablet | Stacked cards, collapsible sidebar |
| Mobile | Single-column, bottom tab navigation |
| Browser extension popup | Compact widget (manual counter + timer) |
| Meeting overlay (Zoom/Teams) | Minimized bar with cost + time + expand |

---

*Document Version: 1.0*
*Created: 2026-02-10*
*Last Updated: 2026-02-10*
