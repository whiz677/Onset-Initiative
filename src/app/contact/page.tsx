import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { siteConfig } from "@/data/siteConfig";
import { hasLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact"
};

const contactCards = [
  {
    title: "General Questions",
    description: "Ask about the initiative, upcoming seminars, or student-facing resources.",
    href: `mailto:${siteConfig.email}?subject=General%20question`
  },
  {
    title: "Speaker/Partner Inquiries",
    description: "Reach out about speaking, reviewing materials, or collaborating on outreach.",
    href: hasLink(siteConfig.partnerFormUrl)
      ? siteConfig.partnerFormUrl
      : `mailto:${siteConfig.email}?subject=Speaker%20or%20partner%20inquiry`
  },
  {
    title: "Join the Team",
    description: "Ask about volunteer roles, school chapters, or ambassador opportunities.",
    href: hasLink(siteConfig.joinFormUrl)
      ? siteConfig.joinFormUrl
      : `mailto:${siteConfig.email}?subject=Join%20the%20team`
  },
  {
    title: "Media/School Outreach",
    description: "Contact the team about sharing resources with students or families.",
    href: `mailto:${siteConfig.email}?subject=Media%20or%20school%20outreach`
  }
];

const faqs = [
  {
    q: "Do you provide medical advice?",
    a: "No. The Onset Initiative is educational only and does not provide diagnosis, treatment, or medical advice."
  },
  {
    q: "Who are the seminars for?",
    a: "Students, families, school communities, youth leaders, and anyone looking for credible public-health education."
  },
  {
    q: "Can my school partner with you?",
    a: "Yes. Schools can share webinars, host awareness activities, or connect students with educational materials."
  },
  {
    q: "Can I start a chapter?",
    a: "The chapter program is designed for students who want to bring resources and seminars to their school community."
  },
  {
    q: "How are resources reviewed?",
    a: "Resources are marked with review status in the library, and the initiative seeks review from credible clinicians, researchers, and public-health educators."
  },
  {
    q: "Can doctors or nonprofits speak at an event?",
    a: "Yes. Clinicians, researchers, nonprofit educators, and patient advocates can contact the team about seminar opportunities."
  }
];

export default function ContactPage() {
  return (
    <>
      <Section
        eyebrow="Contact"
        title="Contact"
        subtitle="Reach out about seminars, resources, partnerships, speakers, school outreach, or joining the team."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {contactCards.map((card) => (
            <article key={card.title} className="rounded-md border border-border bg-white p-6 shadow-soft">
              <h3 className="text-lg font-bold text-navy">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-charcoal/75">{card.description}</p>
              <div className="mt-5">
                <Button href={card.href} variant="secondary">
                  Contact
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-md border border-border bg-white p-6 shadow-soft">
          <p className="text-sm font-bold text-charcoal">Email</p>
          <a href={`mailto:${siteConfig.email}`} className="mt-2 inline-block text-lg font-bold text-navy">
            {siteConfig.email}
          </a>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href={`mailto:${siteConfig.email}?subject=Partner%20inquiry`}>Partner Inquiry</Button>
            <Button href={`mailto:${siteConfig.email}?subject=Speaker%20inquiry`} variant="secondary">
              Speaker Inquiry
            </Button>
            {hasLink(siteConfig.mailingListUrl) ? (
              <Button href={siteConfig.mailingListUrl} variant="secondary">
                Mailing List
              </Button>
            ) : (
              <Button disabled>Mailing list coming soon</Button>
            )}
          </div>
        </div>
      </Section>

      <Section title="FAQ" className="bg-white">
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <details key={faq.q} className="rounded-md border border-border bg-cream p-5">
              <summary className="cursor-pointer font-bold text-navy">{faq.q}</summary>
              <p className="mt-3 text-sm leading-6 text-charcoal/75">{faq.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
