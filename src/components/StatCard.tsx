type StatCardProps = {
  label: string;
  value: number;
};

export function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-md border border-border bg-white p-5 shadow-soft">
      <p className="text-3xl font-bold text-navy">{value}</p>
      <p className="mt-2 text-sm font-medium text-charcoal/70">{label}</p>
    </div>
  );
}

