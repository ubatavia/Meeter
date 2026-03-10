export interface Attendee {
  id: string;
  role: string;
  hourlyRate: number;
  addedAt: number; // elapsed seconds when added (0 for initial attendees)
}

export interface CostMilestone {
  amount: number;
  timestamp: string; // MM:SS format
}

export type MeterZone = "green" | "yellow" | "orange" | "red";

export interface MeterState {
  zone: MeterZone;
  label: string;
  percent: number;
  costPerAttendeePerMin: number;
}

export type CalcStep = "setup" | "running" | "summary";
