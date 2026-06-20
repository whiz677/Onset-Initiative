import { Seminar } from "@/data/seminars";
import { cn, formatSeminarDate, hasLink, makeCalendarUrl } from "@/lib/utils";
import { Button } from "@/components/Button";

const statusLabels: Record<Seminar["status"], string> = {
  planning: "Details coming soon",
  registration_open: "Registration open",
  registration_closed: "Registration closed",
  live: "Live now",
  completed: "Recording available"
};

const statusClasses: Record<Seminar["status"], string> = {
  planning: "bg-gray-100 text-gray-700 border-gray-200",
  registration_open: "bg-green-50 text-teal border-green-200",
  registration_closed: "bg-amber-50 text-amber border-amber-200",
  live: "bg-green-50 text-teal border-green-300",
  completed: "bg-mist text-navy border-[#d2deea]"
};

type SeminarCardProps = {
  seminar: Seminar;
  compact?: boolean;
};

function StatusBadge({ seminar }: { seminar: Seminar }) {
  const completedLabel =
    seminar.status === "completed" && !hasLink(seminar.recordingUrl)
      ? "Completed"
      : statusLabels[seminar.status];

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",
        statusClasses[seminar.status],
        seminar.status === "live" && "animate-pulse"
      )}
    >
      {completedLabel}
    </span>
  );
}

function RegistrationButton({ seminar }: { seminar: Seminar }) {
  if (hasLink(seminar.registrationUrl) && seminar.status === "registration_open") {
    return <Button href={seminar.registrationUrl!}>Register</Button>;
  }

  if (seminar.status === "registration_closed") {
    return <Button disabled>Registration closed</Button>;
  }

  if (seminar.status === "completed") {
    return hasLink(seminar.recordingUrl) ? (
      <Button href={seminar.recordingUrl!} variant="archive">
        Watch Recording
      </Button>
    ) : (
      <Button disabled>Recording unavailable</Button>
    );
  }

  return <Button disabled>Registration coming soon</Button>;
}

function ZoomButton({ seminar }: { seminar: Seminar }) {
  if (seminar.status === "completed") return null;

  if (hasLink(seminar.zoomUrl) && seminar.status === "live") {
    return <Button href={seminar.zoomUrl!}>Join Zoom</Button>;
  }

  if (hasLink(seminar.zoomUrl)) {
    return (
      <Button href={seminar.zoomUrl!} variant="secondary">
        Zoom link available
      </Button>
    );
  }

  return <Button disabled>Zoom link pending</Button>;
}

export function SeminarCard({ seminar, compact = false }: SeminarCardProps) {
  const calendarUrl = makeCalendarUrl(seminar);

  return (
    <article className="rounded-md border border-border bg-white p-6 shadow-soft">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-teal">{seminar.category}</p>
          <h3 className="mt-2 text-2xl font-bold leading-tight text-navy">{seminar.title}</h3>
        </div>
        <StatusBadge seminar={seminar} />
      </div>

      <div className="mt-4 grid gap-3 text-sm text-charcoal/75 sm:grid-cols-2">
        <p>
          <span className="font-semibold text-charcoal">When:</span>{" "}
          {formatSeminarDate(seminar)}
        </p>
        <p>
          <span className="font-semibold text-charcoal">Speaker:</span>{" "}
          {seminar.speakerName || "Speaker TBD"}
        </p>
        <p className="sm:col-span-2">
          <span className="font-semibold text-charcoal">Role:</span>{" "}
          {[seminar.speakerTitle, seminar.speakerAffiliation].filter(Boolean).join(", ") ||
            "Details coming soon"}
        </p>
      </div>

      {seminar.speakerBio && (
        <p className="mt-4 text-sm leading-6 text-charcoal/70">{seminar.speakerBio}</p>
      )}

      <p className="mt-5 leading-7 text-charcoal/80">{seminar.description}</p>

      {!compact && seminar.agenda && seminar.agenda.length > 0 && (
        <div className="mt-5 rounded-md border border-border bg-cream p-4">
          <p className="text-sm font-bold text-charcoal">Agenda</p>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-charcoal/75">
            {seminar.agenda.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {seminar.status === "completed" && seminar.keyTakeaways && seminar.keyTakeaways.length > 0 && (
        <div className="mt-5 rounded-md border border-[#d2deea] bg-mist p-4">
          <p className="text-sm font-bold text-navy">Key takeaways</p>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-charcoal/75">
            {seminar.keyTakeaways.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {(seminar.attendanceCount || seminar.schoolsReached) && (
        <div className="mt-5 flex flex-wrap gap-3 text-sm text-charcoal/70">
          {seminar.attendanceCount && <span>{seminar.attendanceCount} attendees</span>}
          {seminar.schoolsReached && <span>{seminar.schoolsReached} schools reached</span>}
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        <RegistrationButton seminar={seminar} />
        <ZoomButton seminar={seminar} />
        {hasLink(seminar.flyerUrl) && (
          <Button href={seminar.flyerUrl!} variant="secondary">
            Download Flyer
          </Button>
        )}
        {seminar.status !== "completed" && hasLink(seminar.preSurveyUrl) && (
          <Button href={seminar.preSurveyUrl!} variant="secondary">
            Take Pre-Survey
          </Button>
        )}
        {(seminar.status === "completed" || seminar.status === "live") &&
          hasLink(seminar.postSurveyUrl) && (
            <Button href={seminar.postSurveyUrl!} variant="secondary">
              Take Post-Survey
            </Button>
          )}
        {hasLink(seminar.slidesUrl) && (
          <Button href={seminar.slidesUrl!} variant="archive">
            View Slides
          </Button>
        )}
        {hasLink(seminar.summaryUrl) && (
          <Button href={seminar.summaryUrl!} variant="archive">
            Read Summary
          </Button>
        )}
        {calendarUrl && (
          <Button href={calendarUrl} variant="secondary">
            Add to Calendar
          </Button>
        )}
      </div>
    </article>
  );
}

