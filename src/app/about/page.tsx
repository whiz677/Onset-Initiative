import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "About"
};

const pillars = [
  {
    title: "Understand the Rise",
    description:
      "Explain the trend in young-onset colorectal and breast cancers with care, context, and source awareness."
  },
  {
    title: "Recognize the Signs",
    description:
      "Teach symptoms young people should not ignore and encourage timely conversations with licensed professionals."
  },
  {
    title: "Explore the Unknowns",
    description:
      "Discuss possible contributors without overstating evidence or promoting one-cause explanations."
  },
  {
    title: "Act Early",
    description:
      "Encourage family-history conversations, prevention awareness, and medical attention for persistent symptoms."
  }
];

const weAre = [
  "Youth-led",
  "Educational",
  "Evidence-based",
  "Focused on seminars and awareness",
  "Committed to credible sources",
  "Open to collaboration with clinicians, researchers, nonprofits, schools, and public-health groups"
];

const weAreNot = [
  "A medical provider",
  "A diagnostic service",
  "A replacement for professional medical advice",
  "A source of fear-based claims",
  "A group that promotes unsupported one-cause explanations"
];

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About"
        title="Mission"
        subtitle={siteConfig.mission}
      >
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-md border border-border bg-white p-6 shadow-soft">
            <p className="text-lg leading-8 text-charcoal/80">
              The Onset Initiative exists because young people are often left out of cancer
              conversations, even as early-onset colorectal and breast cancers are becoming a more
              visible part of public-health research and community concern. We help students and
              families understand what is known, what remains unresolved, and how credible
              education can support earlier, better-informed conversations with medical
              professionals.
            </p>
            <p className="mt-5 text-lg font-bold leading-8 text-navy">
              Awareness is not about fear. It is about recognizing patterns, asking better
              questions, and taking persistent warning signs seriously.
            </p>
          </div>
          <DisclaimerBanner />
        </div>
      </Section>

      <Section
        title="Why early-onset cancer?"
        subtitle="Cancer is often discussed as an older-adult disease, but colorectal and breast cancers are increasingly part of conversations about young adult health."
        className="bg-white"
      >
        <p className="max-w-4xl text-lg leading-8 text-charcoal/78">
          The Onset Initiative helps students and families understand the trend without panic,
          misinformation, or oversimplified claims. Our focus is trend literacy, symptom awareness,
          family-history literacy, prevention education, and honest discussion of the science that
          is still developing.
        </p>
      </Section>

      <Section
        title="What the name means"
        subtitle="Onset points to the moment when something begins: symptoms, questions, research interest, family conversations, and prevention habits."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "The onset of symptoms",
              description:
                "Students learn which persistent changes deserve attention and why warning signs should not be dismissed because of age."
            },
            {
              title: "The onset of questions",
              description:
                "We explain what researchers are asking about changing cancer trends without pretending the answers are simple."
            },
            {
              title: "The onset of action",
              description:
                "We encourage family-history literacy, prevention awareness, and timely conversations with licensed professionals."
            }
          ].map((item) => (
            <article key={item.title} className="rounded-md border border-border bg-white p-6 shadow-soft">
              <h3 className="text-lg font-bold text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-charcoal/75">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Four pillars" className="bg-white">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-md border border-border bg-white p-6 shadow-soft">
              <h3 className="text-lg font-bold text-navy">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-6 text-charcoal/75">{pillar.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="What we are / what we are not" className="bg-white">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-md border border-border bg-cream p-6">
            <h3 className="text-xl font-bold text-navy">We are</h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-charcoal/75">
              {weAre.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-md border border-border bg-cream p-6">
            <h3 className="text-xl font-bold text-navy">We are not</h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-charcoal/75">
              {weAreNot.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
