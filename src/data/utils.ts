import type { Attendee, MeterState, MeterZone } from "./types";

export function formatCAD(amount: number): string {
  return `CAD $${amount.toLocaleString("en-CA", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function formatDuration(totalSeconds: number): string {
  const hrs = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;
  if (hrs > 0) {
    return `${hrs}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

export function formatDurationLong(totalSeconds: number): string {
  const hrs = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;
  return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

export function calcBurnRatePerSecond(attendees: Attendee[]): number {
  return attendees.reduce((sum, a) => sum + a.hourlyRate, 0) / 3600;
}

export function calcCurrentCost(
  attendees: Attendee[],
  elapsedSeconds: number
): number {
  let total = 0;
  for (const a of attendees) {
    const activeSeconds = Math.max(0, elapsedSeconds - a.addedAt);
    total += (a.hourlyRate / 3600) * activeSeconds;
  }
  return total;
}

export function calcRecoveryCost(attendees: Attendee[]): number {
  if (attendees.length === 0) return 0;
  const avgRate =
    attendees.reduce((sum, a) => sum + a.hourlyRate, 0) / attendees.length;
  return attendees.length * 23 * (avgRate / 60);
}

export function getMeterState(
  currentCost: number,
  attendeeCount: number,
  elapsedSeconds: number
): MeterState {
  const elapsedMinutes = elapsedSeconds / 60;

  // Avoid division by zero in first second
  if (elapsedMinutes < 0.017 || attendeeCount === 0) {
    return { zone: "green", label: "Good Value", percent: 0, costPerAttendeePerMin: 0 };
  }

  const costPerAttendeePerMin = currentCost / attendeeCount / elapsedMinutes;

  // Base zone from cost
  let zone: MeterZone;
  if (costPerAttendeePerMin < 1.0) zone = "green";
  else if (costPerAttendeePerMin < 1.5) zone = "yellow";
  else if (costPerAttendeePerMin < 2.5) zone = "orange";
  else zone = "red";

  // Duration modifier
  const zoneOrder: MeterZone[] = ["green", "yellow", "orange", "red"];
  if (elapsedMinutes > 60) {
    const idx = zoneOrder.indexOf(zone);
    if (idx < 2) zone = "orange"; // minimum orange
    else if (idx < 3) zone = "red"; // shift up
  } else if (elapsedMinutes > 45) {
    const idx = zoneOrder.indexOf(zone);
    if (idx < 3) zone = zoneOrder[idx + 1];
  }

  const labels: Record<MeterZone, string> = {
    green: "Good Value",
    yellow: "Watch It",
    orange: "Expensive",
    red: "Over Budget",
  };

  const percent = Math.min(100, (costPerAttendeePerMin / 3.0) * 100);

  return { zone, label: labels[zone], percent, costPerAttendeePerMin };
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}
