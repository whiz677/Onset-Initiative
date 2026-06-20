import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SeminarCard } from "@/components/SeminarCard";
import { UploadArchiveCard, seminarArchiveItems } from "@/components/UploadArchiveCard";
import { seminars } from "@/data/seminars";

export const metadata: Metadata = {
  title: "Seminars"
};

const formatItems = [
  "45-60 minute online sessions",
  "20-30 minute expert talk",
  "Moderated student Q&A",
  "Practical action steps",
  "Pre/post awareness survey",
  "Recording/resources posted when available"
];

export default function SeminarsPage() {
  const upcoming = seminars.filter((seminar) => seminar.status !== "completed");
  const past = seminars.filter((seminar) => seminar.status === "completed");

  return (
    <>
      <Section
        eyebrow="Seminars"
        title="The Early-Onset Cancer Unknowns Seminar Series"
        subtitle="What we know, what we do not know, and what young people should not ignore."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {formatItems.map((item) => (
            <div key={item} className="rounded-md border border-border bg-white p-5 shadow-soft">
              <p className="text-sm font-semibold text-charcoal">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Upcoming seminars" className="bg-white">
        <div className="grid gap-6">
          {upcoming.map((seminar) => (
            <SeminarCard key={seminar.id} seminar={seminar} />
          ))}
        </div>
      </Section>

      <Section title="Past seminars archive">
        {past.length > 0 ? (
          <div className="grid gap-6">
            {past.map((seminar) => (
              <SeminarCard key={seminar.id} seminar={seminar} />
            ))}
          </div>
        ) : (
          <p className="rounded-md border border-dashed border-border bg-white p-6 text-charcoal/70">
            Completed seminars will be archived here after the first seminar cycle.
          </p>
        )}
      </Section>

      <Section
        title="Seminar materials archive"
        subtitle="These sections populate automatically when seminar entries include links to uploaded files or recordings."
        className="bg-white"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <UploadArchiveCard
            title="Flyers"
            description="PDF flyers uploaded to /public/flyers and linked in seminars.ts."
            items={seminarArchiveItems(seminars, "flyerUrl", "Download Flyer")}
          />
          <UploadArchiveCard
            title="Recordings"
            description="YouTube links or files in /public/recordings, linked in seminars.ts."
            items={seminarArchiveItems(seminars, "recordingUrl", "Watch Recording")}
          />
          <UploadArchiveCard
            title="Slides"
            description="Slide decks uploaded to /public/slides and linked in seminars.ts."
            items={seminarArchiveItems(seminars, "slidesUrl", "View Slides")}
          />
          <UploadArchiveCard
            title="Summaries and reports"
            description="Seminar summaries or survey reports uploaded to /public/reports."
            items={seminarArchiveItems(seminars, "summaryUrl", "Read Summary")}
          />
        </div>
      </Section>
    </>
  );
}

