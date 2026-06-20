import { Seminar } from "@/data/seminars";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function hasLink(value?: string) {
  return Boolean(value && value.trim() && value.trim() !== "#");
}

export function formatSeminarDate(seminar: Pick<Seminar, "date" | "time" | "timezone">) {
  const time = seminar.time && seminar.time !== "TBD" ? ` at ${seminar.time}` : "";
  const timezone = seminar.timezone ? ` ${seminar.timezone}` : "";
  return `${seminar.date}${time}${timezone}`;
}

export function makeCalendarUrl(seminar: Seminar) {
  if (seminar.date === "TBD") return "";

  const details = encodeURIComponent(
    `${seminar.description}\n\nEducational only; not medical advice.`
  );
  const text = encodeURIComponent(seminar.title);
  const location = encodeURIComponent("Online");

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&details=${details}&location=${location}`;
}

