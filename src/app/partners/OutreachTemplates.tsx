"use client";

import { useState } from "react";
import { outreachTemplates } from "@/data/partners";
import { Button } from "@/components/Button";

export function OutreachTemplates() {
  const [copied, setCopied] = useState<string | null>(null);

  async function copyTemplate(title: string, body: string) {
    await navigator.clipboard.writeText(body);
    setCopied(title);
    window.setTimeout(() => setCopied(null), 1600);
  }

  return (
    <div className="space-y-4">
      {outreachTemplates.map((template) => (
        <details key={template.title} className="rounded-md border border-border bg-white p-5 shadow-soft">
          <summary className="cursor-pointer text-lg font-bold text-navy">{template.title}</summary>
          <pre className="mt-4 whitespace-pre-wrap rounded-md border border-border bg-cream p-4 text-sm leading-6 text-charcoal/75">
            {template.body}
          </pre>
          <div className="mt-4">
            <Button onClick={() => copyTemplate(template.title, template.body)} variant="secondary">
              {copied === template.title ? "Copied" : "Copy Template"}
            </Button>
          </div>
        </details>
      ))}
    </div>
  );
}

