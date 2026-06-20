"use client";

import { useState } from "react";
import { Resource } from "@/data/resources";
import { Button } from "@/components/Button";
import { hasLink } from "@/lib/utils";

function actionLabel(type: Resource["type"]) {
  switch (type) {
    case "Video":
      return "Watch";
    case "PDF":
    case "Flyer":
    case "Worksheet":
    case "Slide Deck":
    case "Report":
      return "Download";
    case "External Link":
      return "Open";
    default:
      return "Read";
  }
}

export function ResourceCard({ resource }: { resource: Resource }) {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    const url = resource.url === "#" ? window.location.href : new URL(resource.url, window.location.origin).href;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <article className="flex h-full flex-col rounded-md border border-border bg-white p-6 shadow-soft">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-navy">
          {resource.category}
        </span>
        <span className="rounded-full bg-cream px-3 py-1 text-xs font-semibold text-charcoal/70">
          {resource.type}
        </span>
      </div>
      <h3 className="mt-4 text-xl font-bold text-navy">{resource.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-charcoal/75">{resource.description}</p>
      <div className="mt-4 text-xs leading-5 text-charcoal/65">
        <p>Date added: {resource.dateAdded}</p>
        {resource.reviewedBy && <p>Review status: {resource.reviewedBy}</p>}
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        {hasLink(resource.url) ? (
          <Button href={resource.url} variant="archive">
            {actionLabel(resource.type)}
          </Button>
        ) : (
          <Button disabled>{actionLabel(resource.type)} coming soon</Button>
        )}
        <Button onClick={copyLink} variant="secondary">
          {copied ? "Copied" : "Copy Link"}
        </Button>
      </div>
    </article>
  );
}

