import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { collaborationOptions, targetOrganizations } from "@/data/partners";
import { siteConfig } from "@/data/siteConfig";
import { hasLink } from "@/lib/utils";
import { OutreachTemplates } from "@/app/partners/OutreachTemplates";

export const metadata: Metadata = {
  title: "Partners & Outreach"
};

export default function PartnersPage() {
  const partnerHref = hasLink(siteConfig.partnerFormUrl)
    ? siteConfig.partnerFormUrl
    : `mailto:${siteConfig.email}?subject=Partner%20inquiry`;

  return (
    <>
      <Section
        eyebrow="Partners"
        title="Partners & Outreach"
        subtitle="We collaborate with schools, libraries, clinicians, researchers, nonprofits, and public-health organizations."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {collaborationOptions.map((option) => (
            <article key={option.title} className="rounded-md border border-border bg-white p-6 shadow-soft">
              <h3 className="text-lg font-bold text-navy">{option.title}</h3>
              <p className="mt-3 text-sm leading-6 text-charcoal/75">{option.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Button href={partnerHref}>Start a Partner Conversation</Button>
        </div>
      </Section>

      <Section title="Who we hope to work with" className="bg-white">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {targetOrganizations.map((item) => (
            <div key={item} className="rounded-md border border-border bg-cream p-4 text-sm font-semibold text-charcoal/75">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Current partners">
        <div className="rounded-md border border-dashed border-border bg-white p-6 text-charcoal/70 shadow-soft">
          Partnerships will be listed here after confirmation.
        </div>
      </Section>

      <Section
        title="Outreach templates"
        subtitle="Use these as starting points for credible, clear outreach to speakers, schools, libraries, nonprofits, and local offices."
        className="bg-white"
      >
        <OutreachTemplates />
      </Section>
    </>
  );
}

