# Product Requirements Document (PRD)
## Meeting Cost Calculator - Canadian Edition

---

## 1. Executive Summary

### Product Vision
A real-time meeting cost calculator that displays the cumulative cost of meetings as they happen, based on attendee roles and Canadian salary benchmarks. The tool serves as both an awareness mechanism and an educational platform to optimize meeting culture, drive organizational efficiency, and deliver value through optimization and gamification.

### Problem Statement
Canadian organizations mirror the global trend of excessive meetings. With the national average hourly rate at ~CAD $47/hr for knowledge workers, teams experience constant context-switching between daily syncs, ad-hoc "can you chat for a minute" conversations, retrospectives, executive presentations, roadmap alignments, and design sessions. There is no real-time visibility into the true cost of these interactions, and no mechanism to educate teams on the impact or suggest alternatives.

### Target User
- Primary: Product Managers, Team Leads, Department Heads
- Secondary: Meeting organizers, Executives, HR/Operations

### Market
- Primary: Canada (CAD currency, Canadian salary benchmarks)
- Future: Expandable to US, UK, and other markets

---

## 2. Goals & Objectives

### Primary Goals
1. Provide real-time visibility into meeting costs as they occur
2. Educate users on the true investment of meeting time
3. Encourage more efficient and intentional meeting practices
4. Deliver value through optimization suggestions, not just cost awareness

### Success Metrics
| Metric | Target |
|--------|--------|
| Reduction in average meeting duration | 15% within 6 months |
| Increase in meetings with agendas | 40% improvement |
| User engagement with optimization suggestions | 60% click-through |
| Meeting efficiency score improvement | 20% increase |
| User adoption of async alternatives | 25% of flagged meetings |

---

## 3. User Personas

### Persona 1: The Product Manager (Primary)
- **Name:** Sarah
- **Pain Points:** Back-to-back meetings, constant context switching, no visibility into time investment
- **Needs:** Quick insights, integration with existing tools, actionable suggestions, data to justify meeting reductions

### Persona 2: The Team Lead
- **Name:** Marcus
- **Pain Points:** Too many team syncs, unclear ROI on recurring meetings
- **Needs:** Team-level analytics, gamification to drive adoption, benchmarks against other teams

### Persona 3: The Executive
- **Name:** Diana
- **Pain Points:** High-cost meetings with large attendance, decision bottlenecks
- **Needs:** Dashboard views, cost projections, efficiency benchmarks, ROI visibility

---

## 4. Core Components

### 4.1 Calculator Engine
The core calculation logic that computes meeting costs.

**Inputs:**
- Meeting duration (real-time counter)
- Number of attendees
- Role/title of each attendee (selectable or manual)
- Optional: manual salary override per attendee

**Formula:**
```
Meeting Cost = SUM(Attendee Hourly Rate x Time Elapsed in Hours)

Where:
- Attendee Hourly Rate = Annual Salary / 2,080 (working hours per year)
- Time Elapsed = Current time - Meeting start time

Optional Modifiers:
- Benefits Multiplier (1.0x - 1.5x) to reflect total cost of employment
- Recovery Cost = Number of Attendees x 23 min x Avg Hourly Rate / 60
  (post-meeting recovery time cost)
```

**Default Salary Database (Canadian Market - CAD):**

Salary data sourced from Glassdoor, PayScale, Robert Half (2025-2026).
Full dataset: see [SALARY_DATABASE.md](SALARY_DATABASE.md)

| Role Category | Avg Annual (CAD) | Hourly Rate | Per Minute |
|---------------|-----------------|-------------|------------|
| CEO | $209,787 | $100.86 | $1.68 |
| CFO | $133,721 | $64.29 | $1.07 |
| CTO | $178,774 | $85.95 | $1.43 |
| VP | $203,239 | $97.71 | $1.63 |
| Director | $155,701 | $74.86 | $1.25 |
| Product Manager | $102,270 | $49.17 | $0.82 |
| Software Engineer | $103,133 | $49.58 | $0.83 |
| Project Manager | $88,948 | $42.76 | $0.71 |
| HR Manager | $98,565 | $47.39 | $0.79 |
| Sales Manager | $85,599 | $41.15 | $0.69 |
| DevOps Engineer | $110,000 | $52.88 | $0.88 |
| Data Scientist | $90,000 | $43.27 | $0.72 |
| Business Analyst | $91,500 | $44.00 | $0.73 |
| UX Designer | $70,044 | $33.67 | $0.56 |
| Data Analyst | $70,036 | $33.67 | $0.56 |
| Designer | $63,122 | $30.35 | $0.51 |
| Operations Manager | $77,576 | $37.30 | $0.62 |

### 4.2 Manual Configuration & Custom Counter

When the default salary database does not match a user's organization, manual overrides are available:

**Manual Rate Configuration:**
- Add custom role names not in the database
- Override any default salary with a custom annual salary or hourly rate
- Adjust working hours per year (default: 2,080) for part-time or contract staff
- Set a benefits multiplier (1.0x - 1.5x) to reflect total employment cost
- Switch currency (CAD default, with USD and other options)

**Manual Counter Mode:**
For users who prefer full manual control without calendar integration:
- Enter number of attendees manually
- Assign roles from dropdown or type custom roles
- Set custom hourly rates per attendee
- Start/stop/pause/reset timer manually
- No account or integration required — works standalone
- Save manual meeting configurations as templates for reuse

### 4.3 Real-Time Timer
- Live countdown/countup display
- Visual cost ticker (dollar amount incrementing in real-time)
- Elapsed time indicator
- "Cost per second" display for visceral impact
- Colour-coded cost zones (green/yellow/red thresholds)
- Pause/resume capability for breaks

### 4.4 Tracker & Analytics
- Meeting history log with cost per meeting
- Cost trends over time (daily/weekly/monthly)
- Recurring meeting cost projections (weekly x 52, biweekly x 26)
- Department/team comparisons
- Personal meeting budget tracker
- "Time saved" tracking when meetings are shortened or replaced

### 4.5 Integration Layer
**Calendar Platforms:**
- Google Calendar
- Microsoft Outlook
- Apple Calendar

**Meeting Tools:**
- Google Meet
- Microsoft Teams
- Zoom
- Slack Huddles

**Communication:**
- Gmail (meeting invites)
- Outlook (meeting invites)

---

## 5. Feature Requirements

### 5.1 Must Have (MVP)

| Feature | Description | Priority |
|---------|-------------|----------|
| Real-time cost counter | Live display of meeting cost as it accumulates | P0 |
| Canadian salary database | Pre-populated with 20 common roles (CAD) | P0 |
| Manual counter mode | Standalone timer with manual attendee/rate entry | P0 |
| Manual rate override | Custom salary/hourly rate per attendee | P0 |
| Basic timer | Start/stop/pause/reset functionality | P0 |
| Single meeting calculation | Calculate cost for one meeting | P0 |
| Role selector | Dropdown with common titles + custom entry | P0 |
| Google Calendar integration | Read meeting details from calendar | P0 |

### 5.2 Should Have (v1.1)

| Feature | Description | Priority |
|---------|-------------|----------|
| Teams/Zoom overlay | Display cost during video calls | P1 |
| Outlook integration | Microsoft ecosystem support | P1 |
| Meeting history | Track past meeting costs | P1 |
| Weekly/monthly reports | Automated cost summaries | P1 |
| Social loafing alert | Warning when >8 attendees | P1 |
| Optimization suggestions | Pre/during/post meeting tips | P1 |
| Meeting templates | Save recurring meeting configurations | P1 |

### 5.3 Nice to Have (v2.0)

| Feature | Description | Priority |
|---------|-------------|----------|
| Gamification elements | Badges, streaks, leaderboards | P2 |
| AI-powered suggestions | Smart async alternatives | P2 |
| Team dashboards | Department-level analytics | P2 |
| Multi-currency support | USD, GBP, EUR beyond CAD | P2 |
| Slack integration | Huddle cost tracking | P2 |
| Agenda enforcement | Require agenda before confirming invite | P2 |
| Recovery cost calculator | Show post-meeting productivity cost | P2 |

---

## 6. Value & Education Features

The tool must not be seen as just a deterrent. It should educate, optimize, and create positive outcomes.

### 6.1 Optimization Suggestions
Rather than just showing cost, the tool provides actionable insights:

**Pre-Meeting:**
- "This 1-hour meeting with 12 people will cost ~CAD $850. Consider reducing attendees or sending a Loom video."
- "This recurring weekly meeting costs CAD $4,400/month. Is there an async alternative?"
- "3 of 10 attendees are optional — removing them saves CAD $12,480/year."

**During Meeting:**
- "You've reached the CAD $500 threshold. Ensure you're covering high-value agenda items."
- "15 minutes remaining. Consider wrapping up to respect everyone's time."
- "This meeting has exceeded its scheduled time by 10 minutes — that's CAD $78 in unplanned cost."

**Post-Meeting:**
- "This meeting cost CAD $1,200. Was a decision made? Tag the outcome for tracking."
- "Suggestion: Similar topics were discussed in 3 other meetings this week. Consider consolidating."
- "Your meeting efficiency score this week: 72/100. Here's how to improve."

### 6.2 Value Derivation
Show the positive side — what value meetings create:

- **Decision Tracker:** Tag decisions made in meetings to show ROI
- **Outcome Logging:** "This CAD $800 meeting resulted in 3 action items and 1 key decision"
- **Meeting Value Score:** Rate meetings on a 1-5 scale after completion
- **Value vs Cost Graph:** Show trending ratio of value generated to cost incurred
- **Best Practices Feed:** Surface what high-performing teams do differently

### 6.3 Gamification Elements

**Individual:**
- "Meeting Minimalist" badge: Kept meetings under 30 mins for a week
- "Async Champion" badge: Replaced 5 meetings with async updates
- "Agenda Pro" badge: Added agendas to all meetings for a month
- Efficiency streak counter
- Personal "time saved" dashboard
- Weekly efficiency score with improvement tips

**Team:**
- Weekly team efficiency leaderboard
- Department cost reduction challenges
- "Most Improved" recognition
- Collaborative goals (e.g., "Reduce recurring meeting costs by 10%")
- Monthly "meeting health" report card

### 6.4 Educational Insights
- "Did you know? The average recovery time after a meeting is 23 minutes."
- "Tip: Meetings with more than 8 people see a significant drop in individual participation."
- "Research shows: Morning meetings during peak focus hours cost 20% more in lost productivity."
- "Junior staff take up to 45 minutes longer to recover from meeting interruptions."
- "Organizations waste between CAD $95B - $380B annually on ineffective meetings."

---

## 7. User Interface Concepts

### 7.1 Live Meeting Widget
```
+-------------------------------------+
|  MEETING COST           [CAD]       |
|  +-----------------------------+    |
|  |      $347.52               |    |
|  |      and counting...        |    |
|  +-----------------------------+    |
|                                     |
|  Duration: 32:15                    |
|  Attendees: 6                       |
|  Rate: $0.18/second                 |
|                                     |
|  [!] Approaching $500 threshold     |
|  [Pause] [Stop] [Add Attendee]      |
+-------------------------------------+
```

### 7.2 Pre-Meeting Summary
```
+-------------------------------------+
|  Weekly Product Sync                 |
|                                     |
|  Estimated Cost: CAD $1,247.50      |
|  Duration: 1 hour                   |
|  Attendees: 8                       |
|                                     |
|  Suggestion:                        |
|  3 attendees are optional.          |
|  Reducing to 5 saves $468/meeting   |
|  ($24,336/year for weekly recurring)|
|                                     |
|  [Keep All] [Optimize] [Make Async] |
+-------------------------------------+
```

### 7.3 Manual Counter Mode
```
+-------------------------------------+
|  MANUAL MEETING COUNTER    [CAD]    |
|                                     |
|  Attendees:                         |
|  + Product Manager    $49.17/hr     |
|  + Software Engineer  $49.58/hr     |
|  + Designer           $30.35/hr     |
|  + [Custom: "Contractor" $75/hr]    |
|  + [Add Attendee]                   |
|                                     |
|  Total Rate: $204.10/hr             |
|  [$3.40/min | $0.06/sec]            |
|                                     |
|  +-----------------------------+    |
|  |      $0.00                  |    |
|  +-----------------------------+    |
|                                     |
|  [Start] [Save as Template]         |
+-------------------------------------+
```

---

## 8. Technical Architecture

### 8.1 Components
```
+-----------------------------------------------------+
|                    Frontend                          |
|  +----------+  +----------+  +------------------+   |
|  | Web App  |  | Browser  |  | Meeting Overlay  |   |
|  |          |  | Extension|  | (Zoom/Teams)     |   |
|  +----------+  +----------+  +------------------+   |
+-----------------------------------------------------+
                        |
                        v
+-----------------------------------------------------+
|                    Backend                           |
|  +----------+  +----------+  +------------------+   |
|  |   API    |  |Calculator|  |   Integrations   |   |
|  |  Server  |  |  Engine  |  | (Calendar, Meet) |   |
|  +----------+  +----------+  +------------------+   |
+-----------------------------------------------------+
                        |
                        v
+-----------------------------------------------------+
|                   Data Layer                         |
|  +----------+  +----------+  +------------------+   |
|  | Salary   |  | Meeting  |  |    Analytics     |   |
|  | Database |  | History  |  |      Store       |   |
|  | (CAD)    |  |          |  |                  |   |
|  +----------+  +----------+  +------------------+   |
+-----------------------------------------------------+
```

### 8.2 Integration Approach
| Platform | Integration Method |
|----------|-------------------|
| Google Calendar | OAuth + Calendar API |
| Google Meet | Chrome Extension |
| Microsoft Outlook | Microsoft Graph API |
| Microsoft Teams | Teams App SDK |
| Zoom | Zoom Apps SDK |
| Slack | Slack App / Bot |

---

## 9. Privacy & Risk Management

### 9.1 Privacy Principles
- Use aggregated salary bands from public benchmarks, never individual compensation
- No personal salary data stored or transmitted
- Users can customize their own role category
- Meeting data stays within organization's control
- Manual mode requires no personal data at all

### 9.2 Positioning
The tool should be framed as:
- "Protecting focus time"
- "Maximizing meeting value"
- "Empowering informed decisions"
- "An educational tool, not an auditing tool"
- NOT "Auditing employee time"
- NOT "Punishing meeting organizers"

### 9.3 Access Controls
| Role | Access Level |
|------|-------------|
| Individual | Own meeting history only |
| Team Lead | Team aggregated data |
| Department Head | Department analytics |
| Admin | Organization-wide trends (anonymized) |

---

## 10. Rollout Plan

### Phase 1: MVP
- Web-based calculator with manual counter mode
- Google Calendar integration
- Real-time timer and cost display
- Canadian salary database (20 roles)
- Manual rate override and custom roles
- Basic optimization suggestions

### Phase 2: Expansion
- Browser extension (Chrome, Edge)
- Meeting overlay for Google Meet
- Historical tracking and meeting log
- Weekly email reports
- Gamification v1 (badges, streaks)

### Phase 3: Enterprise
- Microsoft ecosystem integration (Outlook, Teams)
- Team/department dashboards
- Advanced gamification (leaderboards, challenges)
- AI-powered suggestions
- Multi-currency support
- Value tracking and outcome logging

---

## 11. Open Questions

1. ~~Should salary bands be customizable per organization?~~ **Resolved: Yes — manual override included**
2. What is the right threshold for "expensive meeting" alerts? (Proposed: CAD $500)
3. How do we handle meetings that span multiple time zones?
4. Should we integrate with project management tools (Jira, Asana) to link meeting costs to outcomes?
5. What's the monetization model (freemium, enterprise, per-seat)?
6. Should the salary database auto-update annually from public sources?
7. What privacy certifications are needed for Canadian enterprise (PIPEDA compliance)?

---

## 12. Appendix

### A. Research References
- See [RESEARCH.md](RESEARCH.md) for detailed statistics and psychological considerations

### B. Salary Data
- See [SALARY_DATABASE.md](SALARY_DATABASE.md) for full salary benchmarks with sources

### C. Competitive Landscape
- Meeting cost calculators exist but lack real-time integration
- No current solution offers gamification + optimization suggestions + manual mode
- Gap in market for Canadian-localized, integrated calendar/video platform solution

---

*Document Version: 2.0*
*Created: 2026-02-10*
*Last Updated: 2026-02-10*
