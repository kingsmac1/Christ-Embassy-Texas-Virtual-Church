/**
 * Service times from the website: Sunday Service "Every Sunday – 10am" and
 * Midweek Service "Every Wednesday – 7pm". Church is in Houston, Texas (US Central time).
 */
export const CHURCH_TIMEZONE = "America/Chicago";

export type ServiceSlot = { title: string; schedule: string; weekday: number; hour: number };

export const SERVICES: ServiceSlot[] = [
  { title: "Sunday Service", schedule: "Every Sunday – 10am", weekday: 0, hour: 10 },
  { title: "Midweek Service", schedule: "Every Wednesday – 7pm", weekday: 3, hour: 19 },
];

/** Offset (ms) between UTC and Houston wall-clock time at the given instant. */
function zoneOffsetMs(at: Date): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: CHURCH_TIMEZONE,
    hourCycle: "h23",
    year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric",
  }).formatToParts(at);
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value);
  const asUtc = Date.UTC(get("year"), get("month") - 1, get("day"), get("hour"), get("minute"), get("second"));
  return asUtc - at.getTime();
}

/** The next start (as a real instant) of a weekly slot, after `from`. */
export function nextOccurrence(slot: ServiceSlot, from = new Date()): Date {
  const wall = new Date(from.getTime() + zoneOffsetMs(from)); // Houston wall clock, read via UTC getters
  for (let add = 0; add < 8; add++) {
    const day = new Date(Date.UTC(wall.getUTCFullYear(), wall.getUTCMonth(), wall.getUTCDate() + add, slot.hour, 0, 0));
    if (day.getUTCDay() !== slot.weekday) continue;
    // Convert the Houston wall time back to a real instant.
    let guess = new Date(day.getTime() - zoneOffsetMs(day));
    guess = new Date(day.getTime() - zoneOffsetMs(guess));
    if (guess.getTime() > from.getTime()) return guess;
  }
  throw new Error("unreachable");
}

export function nextService(from = new Date()): { target: Date; slot: ServiceSlot } {
  const candidates = SERVICES.map((slot) => ({ slot, target: nextOccurrence(slot, from) }));
  candidates.sort((a, b) => a.target.getTime() - b.target.getTime());
  return candidates[0]!;
}
