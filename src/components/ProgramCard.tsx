import Link from "next/link";

type ProgramCardProps = {
  title: string;
  description: string;
  href?: string;
};

export function ProgramCard({ title, description, href = "/resources" }: ProgramCardProps) {
  return (
    <Link
      href={href}
      className="focus-ring group block rounded-md border border-border bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-teal/40"
    >
      <h3 className="text-lg font-bold text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-charcoal/75">{description}</p>
      <span className="mt-5 inline-flex text-sm font-semibold text-teal group-hover:text-[#276f4c]">
        Learn more
      </span>
    </Link>
  );
}

