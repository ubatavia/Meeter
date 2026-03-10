# Meeter — Meeting Cost Calculator

A real-time meeting cost calculator for Canadian organizations. Meeter shows the true cost of meetings as they happen, helping teams make more intentional decisions about how they spend their time.

## What it does

- Calculates real-time burn rate based on attendee roles and Canadian salary benchmarks
- Scores meeting health (green / yellow / orange / red) based on cost per attendee per minute and duration
- Visualizes cost with a live gauge and running total in CAD
- Surfaces educational insights about meeting cost patterns

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- React Router 7

## Project structure

```
src/
  components/     # HealthMeter gauge, Navbar
  data/           # Salary database (20 Canadian roles), calculator logic, types
  pages/          # Landing, calculator, dashboard (in progress)
docs/
  PRD.md          # Full product requirements
  APP_FLOW.md     # Screen-by-screen user flows
  LOVABLE_PROMPT.md   # UI prototype prompt
  SALARY_DATABASE.md  # Salary benchmark data and methodology
  RESEARCH.md     # Market research and meeting cost statistics
```

## Status

Data layer and core calculation logic are implemented. Pages are in progress.

## Running locally

```bash
npm install
npm run dev
```
