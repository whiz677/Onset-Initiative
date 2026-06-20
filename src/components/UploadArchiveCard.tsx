import { Seminar } from "@/data/seminars";
import { Resource } from "@/data/resources";
import { Button } from "@/components/Button";
import { hasLink } from "@/lib/utils";

type ArchiveItem = {
  title: string;
  label: string;
  url?: string;
};

type UploadArchiveCardProps = {
  title: string;
  description: string;
  items: ArchiveItem[];
};

export function UploadArchiveCard({ title, description, items }: UploadArchiveCardProps) {
  const available = items.filter((item) => hasLink(item.url));

  return (
    <div className="rounded-md border border-border bg-white p-6 shadow-soft">
      <h3 className="text-lg font-bold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-charcoal/70">{description}</p>
      <div className="mt-5 space-y-3">
        {available.length > 0 ? (
          available.map((item) => (
            <div key={`${item.label}-${item.title}`} className="flex flex-wrap items-center justify-between gap-3 rounded-md border border-border bg-cream p-3">
              <span className="text-sm font-medium text-charcoal">{item.title}</span>
              <Button href={item.url!} variant="archive" className="min-h-9 px-3 py-1 text-xs">
                {item.label}
              </Button>
            </div>
          ))
        ) : (
          <p className="rounded-md border border-dashed border-border bg-cream p-4 text-sm text-charcoal/65">
            Nothing uploaded yet. Add files to the matching public folder and reference them in the data files.
          </p>
        )}
      </div>
    </div>
  );
}

export function seminarArchiveItems(seminars: Seminar[], key: keyof Seminar, label: string) {
  return seminars.map((seminar) => ({
    title: seminar.title,
    label,
    url: seminar[key] as string | undefined
  }));
}

export function resourceArchiveItems(resources: Resource[], type: Resource["type"], label: string) {
  return resources
    .filter((resource) => resource.type === type)
    .map((resource) => ({
      title: resource.title,
      label,
      url: resource.url
    }));
}

