"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { getPrimarySeminar } from "@/data/seminars";
import { Button } from "@/components/Button";
import { hasLink } from "@/lib/utils";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/seminars", label: "Seminars" },
  { href: "/resources", label: "Resources" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const primarySeminar = getPrimarySeminar();
  const canRegister =
    primarySeminar.status === "registration_open" && hasLink(primarySeminar.registrationUrl);
  const ctaHref = canRegister
    ? primarySeminar.registrationUrl!
    : siteConfig.mailingListUrl || "/contact";
  const ctaLabel = canRegister ? "Register for Seminar" : "Join Mailing List";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="focus-ring rounded-sm">
          <span className="block text-lg font-black leading-tight text-navy">{siteConfig.name}</span>
          <span className="hidden text-xs font-semibold text-charcoal/60 sm:block">
            {siteConfig.subtitle}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-sm text-sm font-semibold text-charcoal/75 hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
          <Button href={ctaHref} variant={canRegister ? "primary" : "secondary"} className="min-h-10">
            {ctaLabel}
          </Button>
        </nav>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-white text-navy lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative h-4 w-5">
            <span className="absolute left-0 top-0 h-0.5 w-5 bg-current" />
            <span className="absolute left-0 top-[7px] h-0.5 w-5 bg-current" />
            <span className="absolute bottom-0 left-0 h-0.5 w-5 bg-current" />
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-cream px-4 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-6xl gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-md px-3 py-3 text-sm font-semibold text-charcoal hover:bg-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button href={ctaHref} variant={canRegister ? "primary" : "secondary"} className="mt-2 w-full">
              {ctaLabel}
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

