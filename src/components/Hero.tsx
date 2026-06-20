import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { getPrimarySeminar } from "@/data/seminars";
import { Button } from "@/components/Button";
import { hasLink } from "@/lib/utils";

export function Hero() {
  const seminar = getPrimarySeminar();
  const canRegister = seminar.status === "registration_open" && hasLink(seminar.registrationUrl);

  return (
    <section className="px-4 pb-16 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-[#d2deea] bg-mist px-4 py-2 text-sm font-semibold text-navy">
            Youth-led. Evidence-based. Educational only - not medical advice.
          </p>
          <h1 className="text-5xl font-black leading-[1.02] text-navy sm:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-4 text-xl font-semibold text-charcoal">{siteConfig.subtitle}</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal/78">
            {siteConfig.heroDescription}
          </p>
          <p className="mt-5 max-w-2xl text-lg font-bold leading-8 text-charcoal">
            {siteConfig.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {canRegister ? (
              <Button href={seminar.registrationUrl!}>Register for Upcoming Seminar</Button>
            ) : (
              <Button disabled>Registration coming soon</Button>
            )}
            <Button href="/resources" variant="secondary">
              Explore Resources
            </Button>
            <Button href="/partners" variant="secondary">
              Partner With Us
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-md border border-border bg-white shadow-soft">
            <Image
              src="/images/student-public-health-workshop.png"
              alt="Students working together during a public health education workshop"
              width={1400}
              height={1000}
              priority
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="mt-4 rounded-md border border-border bg-white p-4 shadow-soft">
            <p className="text-sm font-bold text-navy">Current focus</p>
            <p className="mt-1 text-sm leading-6 text-charcoal/75">
              Youth-led education on rising early-onset cancer trends, warning signs, family
              history, prevention, and credible public-health information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
