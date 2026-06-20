import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { teamRoles } from "@/data/teamRoles";
import { siteConfig } from "@/data/siteConfig";
import { hasLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Get Involved"
};

export default function GetInvolvedPage() {
  return (
    <>
      <Section
        eyebrow="Get involved"
        title="Get Involved"
        subtitle="Help bring early-onset cancer education to students, families, and communities."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {teamRoles.map((role) => (
            <article key={role.title} className="rounded-md border border-border bg-white p-6 shadow-soft">
              <h3 className="text-lg font-bold text-navy">{role.title}</h3>
              <p className="mt-3 text-sm leading-6 text-charcoal/75">{role.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Join the team" className="bg-white">
        <div className="grid gap-6 rounded-md border border-border bg-cream p-6 md:grid-cols-[1.5fr_0.5fr] md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-navy">Apply to join The Onset Initiative.</h2>
            <p className="mt-3 text-sm leading-6 text-charcoal/75">
              Volunteers can help with research writing, outreach, event support, design, impact
              tracking, and school-based awareness.
            </p>
          </div>
          <div className="flex md:justify-end">
            {hasLink(siteConfig.joinFormUrl) ? (
              <Button href={siteConfig.joinFormUrl}>Apply to Join</Button>
            ) : (
              <Button disabled>Application form coming soon</Button>
            )}
          </div>
        </div>
      </Section>

      <Section title="Start a chapter">
        <div className="rounded-md border border-border bg-white p-6 shadow-soft">
          <p className="max-w-4xl text-lg leading-8 text-charcoal/78">
            Students can start a school chapter or ambassador branch to share credible resources,
            promote seminars, and organize awareness activities with school approval.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button disabled>Download Chapter Toolkit</Button>
            {hasLink(siteConfig.joinFormUrl) ? (
              <Button href={siteConfig.joinFormUrl} variant="secondary">
                Apply to Start a Chapter
              </Button>
            ) : (
              <Button disabled>Chapter application coming soon</Button>
            )}
            <Button href={`mailto:${siteConfig.email}?subject=Ambassador%20lead%20inquiry`} variant="secondary">
              Contact Ambassador Lead
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
