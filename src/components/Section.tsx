import { cn } from "@/lib/utils";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, subtitle, children, className }: SectionProps) {
  return (
    <section className={cn("px-4 py-16 sm:px-6 lg:px-8", className)}>
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title || subtitle) && (
          <div className="mb-8 max-w-3xl">
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-teal">
                {eyebrow}
              </p>
            )}
            {title && <h2 className="text-3xl font-bold text-charcoal sm:text-4xl">{title}</h2>}
            {subtitle && <p className="mt-4 text-lg leading-8 text-charcoal/75">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

