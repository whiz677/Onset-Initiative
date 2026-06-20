import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/seminars", label: "Seminars" },
  { href: "/resources", label: "Resources" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" }
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <p className="text-lg font-black text-navy">{siteConfig.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-charcoal/75">
            {siteConfig.formalName} is a youth-led public health education project. Educational
            only; not medical advice.
          </p>
          <p className="mt-4 text-xs leading-5 text-charcoal/60">{siteConfig.disclaimer}</p>
        </div>
        <div>
          <p className="text-sm font-bold text-charcoal">Quick links</p>
          <div className="mt-3 grid gap-2">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-charcoal/70 hover:text-navy">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold text-charcoal">Contact</p>
          <div className="mt-3 grid gap-2 text-sm text-charcoal/70">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-navy">
              {siteConfig.email}
            </a>
            {siteConfig.instagramUrl ? (
              <a href={siteConfig.instagramUrl} className="hover:text-navy">
                Instagram
              </a>
            ) : (
              <span>Instagram coming soon</span>
            )}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-border pt-6 text-xs text-charcoal/55">
        Copyright {new Date().getFullYear()} {siteConfig.formalName}. All rights reserved.
      </div>
    </footer>
  );
}
