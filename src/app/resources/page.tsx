import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { UploadArchiveCard, resourceArchiveItems } from "@/components/UploadArchiveCard";
import { ResourceLibrary } from "@/app/resources/ResourceLibrary";
import { resources } from "@/data/resources";

export const metadata: Metadata = {
  title: "Resource Library"
};

export default function ResourcesPage() {
  return (
    <>
      <Section
        eyebrow="Resources"
        title="Resource Library"
        subtitle="Evidence-based explainers, seminar materials, worksheets, and awareness tools."
      >
        <ResourceLibrary />
      </Section>

      <Section
        title="Upload archive"
        subtitle="Static files live in public folders and become visible when they are referenced in resources.ts."
        className="bg-white"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <UploadArchiveCard
            title="Flyers"
            description="Flyers and campaign PDFs from /public/flyers."
            items={resourceArchiveItems(resources, "Flyer", "Download")}
          />
          <UploadArchiveCard
            title="Slides"
            description="Slide decks from /public/slides or resource links."
            items={resourceArchiveItems(resources, "Slide Deck", "View")}
          />
          <UploadArchiveCard
            title="Reports"
            description="Impact reports and templates from /public/reports."
            items={resourceArchiveItems(resources, "Report", "Download")}
          />
          <UploadArchiveCard
            title="Worksheets"
            description="Printable tools from /public/worksheets."
            items={resourceArchiveItems(resources, "Worksheet", "Download")}
          />
        </div>
      </Section>
    </>
  );
}

