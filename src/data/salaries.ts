export interface Role {
  role: string;
  annualSalary: number;
  hourlyRate: number;
}

export const SALARY_DATA: Role[] = [
  { role: "CEO", annualSalary: 209787, hourlyRate: 100.86 },
  { role: "VP (Vice President)", annualSalary: 203239, hourlyRate: 97.71 },
  { role: "Managing Director", annualSalary: 197901, hourlyRate: 95.14 },
  { role: "VP Operations", annualSalary: 187515, hourlyRate: 90.15 },
  { role: "CTO", annualSalary: 178774, hourlyRate: 85.95 },
  { role: "Director", annualSalary: 155701, hourlyRate: 74.86 },
  { role: "CFO", annualSalary: 133721, hourlyRate: 64.29 },
  { role: "Technical Product Manager", annualSalary: 114318, hourlyRate: 54.96 },
  { role: "DevOps Engineer", annualSalary: 110000, hourlyRate: 52.88 },
  { role: "Software Engineer", annualSalary: 103133, hourlyRate: 49.58 },
  { role: "Product Manager", annualSalary: 102270, hourlyRate: 49.17 },
  { role: "HR Manager", annualSalary: 98565, hourlyRate: 47.39 },
  { role: "Business Analyst", annualSalary: 91500, hourlyRate: 44.0 },
  { role: "Data Scientist", annualSalary: 90000, hourlyRate: 43.27 },
  { role: "Project Manager", annualSalary: 88948, hourlyRate: 42.76 },
  { role: "Sales Manager", annualSalary: 85599, hourlyRate: 41.15 },
  { role: "Operations Manager", annualSalary: 77576, hourlyRate: 37.3 },
  { role: "UX Designer", annualSalary: 70044, hourlyRate: 33.67 },
  { role: "Data Analyst", annualSalary: 70036, hourlyRate: 33.67 },
  { role: "Designer", annualSalary: 63122, hourlyRate: 30.35 },
];

export const QUICK_SELECT_ROLES = [
  "Product Manager",
  "Software Engineer",
  "Designer",
  "Project Manager",
  "Director",
  "VP (Vice President)",
  "CEO",
];

export const EDUCATIONAL_TIPS = [
  "The average recovery time after a meeting is 23 minutes.",
  "Meetings with more than 8 people see a significant drop in individual participation.",
  "Morning meetings during peak focus hours cost 20% more in lost productivity.",
  "Junior staff take up to 45 minutes longer to recover from meeting interruptions.",
  "36-56 million meetings happen daily in North America.",
  "A 1-hour meeting with 10 people isn't a 1-hour meeting — it's a 10-hour meeting.",
  "Could this meeting be a Loom video, a Slack message, or a shared doc instead?",
  "Adding an agenda to your meeting invite increases focus and reduces duration by up to 20%.",
  "The most effective meetings have fewer than 7 attendees.",
  "Recurring meetings should be reviewed quarterly. Are they still needed?",
];
