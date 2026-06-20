"use client";

import { useMemo, useState } from "react";
import { Resource, resourceCategories, resources } from "@/data/resources";
import { ResourceCard } from "@/components/ResourceCard";

const categoryLabels: Record<string, string> = {
  "Early-Onset Cancer Basics": "Basics"
};

function matchesResource(resource: Resource, query: string) {
  const searchable = [
    resource.title,
    resource.description,
    resource.category,
    resource.type,
    ...(resource.tags ?? [])
  ]
    .join(" ")
    .toLowerCase();

  return searchable.includes(query.toLowerCase());
}

export function ResourceLibrary() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const categoryMatch = category === "All" || resource.category === category;
      const queryMatch = query.trim() ? matchesResource(resource, query.trim()) : true;
      return categoryMatch && queryMatch;
    });
  }, [category, query]);

  return (
    <div>
      <div className="rounded-md border border-border bg-white p-4 shadow-soft">
        <label htmlFor="resource-search" className="text-sm font-bold text-charcoal">
          Search resources
        </label>
        <input
          id="resource-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search titles, descriptions, or tags"
          className="focus-ring mt-2 w-full rounded-md border border-border bg-cream px-4 py-3 text-sm text-charcoal"
        />
        <div className="mt-4 flex flex-wrap gap-2" aria-label="Resource category filters">
          {resourceCategories.map((item) => {
            const active = item === category;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`focus-ring rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "border-teal bg-teal text-white"
                    : "border-border bg-white text-charcoal/75 hover:border-navy/30 hover:bg-mist"
                }`}
              >
                {categoryLabels[item] ?? item}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredResources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>

      {filteredResources.length === 0 && (
        <p className="mt-8 rounded-md border border-dashed border-border bg-white p-6 text-charcoal/70">
          No resources match that search yet.
        </p>
      )}
    </div>
  );
}

