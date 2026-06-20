import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ProgramCard } from "@/components/ProgramCard";
import { SeminarCard } from "@/components/SeminarCard";
import { StatCard } from "@/components/StatCard";
import { ResourceCard } from "@/components/ResourceCard";
import { Button } from "@/components/Button";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { programs } from "@/data/programs";
import { impactStats } from "@/data/impactStats";
import { getPrimarySeminar } from "@/data/seminars";
import { resources } from "@/data/resources";
import { siteConfig } from "@/data/siteConfig";
import { hasLink } from "@/lib/utils";

const whyCards = [
  {
    title: "Trends are changing",
    description:
      "Early-onset colorectal and breast cancers are becoming a more visible public-health concern, and students deserve clear ways to understand the trend."
  },
  {
    title: "The science is still developing",
    description:
      "Researchers are studying lifestyle, microbiome, environment, metabolic health, family history, diagnostic delay, and other possible contributors."
  },
  {
    title: "Earlier awareness changes conversations",
    description:
      "Warning-sign literacy, prevention education, and family-history conversations can help young people know when to ask for professional guidance."
  }
];

export default function Home() {
  const primarySeminar = getPrimarySeminar();
  const featuredResources = resources.filter((resource) => resource.featured).slice(0, 3);
  const stats = [
    ["Seminars hosted", impactStats.seminarsHosted],
    ["Students/families reached", impactStats.attendeesReached],
    ["Schools represented", impactStats.schoolsReached],
    ["Resources published", impactStats.resourcesPublished],
    ["Partner organizations", impactStats.partnerOrganizations]
  ] as const;

  const noImpactYet = Object.values(impactStats).every((value) => value === 0);

  return (
    <>
      <Hero />

      <Section className="bg-white">
        <div className="grid gap-6 rounded-md border border-border bg-cream p-6 shadow-soft lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-teal">
              What Onset means
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy">Early understanding matters.</h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-charcoal/78">{siteConfig.mission}</p>
            <p className="mt-4 text-sm font-semibold leading-6 text-charcoal">
              Onset is about the beginning: the beginning of symptoms, the beginning of questions,
              the beginning of family-history conversations, and the beginning of better health
              literacy for students.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Why this matters"
        subtitle="The goal is not panic. It is better questions, credible information, prevention awareness, and earlier conversations when symptoms or family history matter."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {whyCards.map((card) => (
            <article key={card.title} className="rounded-md border border-border bg-cream p-6">
              <h3 className="text-lg font-bold text-navy">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-charcoal/75">{card.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="Core programs"
        subtitle="A focused program structure for seminars, student-friendly education, outreach, and impact tracking."
        className="bg-white"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>
      </Section>

      <Section
        title="Upcoming seminar"
        subtitle="The seminar series is designed around what we know, what remains unknown, and what young people should not ignore."
        className="bg-white"
      >
        <SeminarCard seminar={primarySeminar} compact />
      </Section>

      <Section title="Featured resources" subtitle="Starter materials for students, families, and school communities.">
        <div className="grid gap-5 md:grid-cols-3">
          {featuredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </Section>

      <Section title="Impact snapshot" className="bg-white">
        {noImpactYet && (
          <p className="mb-6 rounded-md border border-border bg-cream p-4 text-sm font-medium text-charcoal/75">
            Impact tracking will begin with our first seminar cycle.
          </p>
        )}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map(([label, value]) => (
            <StatCard key={label} label={label} value={value} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 rounded-md border border-border bg-white p-6 shadow-soft md:grid-cols-[1.4fr_0.6fr] md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-navy">
              Stay updated on upcoming seminars and resources.
            </h2>
            <p className="mt-3 text-sm leading-6 text-charcoal/75">
              Join the mailing list when it opens, or contact the team about speakers,
              partnerships, and school outreach.
            </p>
          </div>
          <div className="flex md:justify-end">
            {hasLink(siteConfig.mailingListUrl) ? (
              <Button href={siteConfig.mailingListUrl}>Join Mailing List</Button>
            ) : (
              <Button disabled>Mailing list coming soon</Button>
            )}
          </div>
        </div>
        <div className="mt-6">
          <DisclaimerBanner />
        </div>
      </Section>
    </>
  );
}
