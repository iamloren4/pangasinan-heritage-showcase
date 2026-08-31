"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { MapPin, Search, X } from "lucide-react";
import { heritageSites, type Destination } from "@/lib/heritage-sites";
import { basePath } from "@/lib/site-config";

type Filter = "all" | "natural" | "cultural" | "other";
const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All sites" },
  { id: "natural", label: "Natural heritage" },
  { id: "cultural", label: "Historical & cultural" },
  { id: "other", label: "Other sites" },
];

function category(site: Destination): Filter {
  const text = site.keywords.join(" ").toLowerCase();
  if (/(island|marine|hot spring|nature|mountain|adventure)/.test(text)) return "natural";
  if (/(lighthouse|heritage|history|architecture|capitol|historic)/.test(text)) return "cultural";
  return "other";
}

export function HeritageGallery() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const sites = useMemo(() => {
    const term = query.trim().toLowerCase();
    return heritageSites.filter((site) => {
      const matchesFilter = filter === "all" || category(site) === filter;
      const searchable = `${site.name} ${site.municipality} ${site.description} ${site.keywords.join(" ")}`.toLowerCase();
      return matchesFilter && (!term || searchable.includes(term));
    });
  }, [query, filter]);

  return (
    <>
      <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full max-w-md">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-ink/45" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="search"
            placeholder="Search heritage sites or municipalities..."
            className="w-full rounded-full border border-sea-900/15 bg-white py-3 pl-11 pr-10 text-sm text-ink shadow-sm outline-none transition focus:border-coral focus:ring-2 focus:ring-coral/20"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/45 hover:text-sea-900"
              aria-label="Clear gallery search"
            >
              <X className="size-4" />
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              className={`rounded-full px-3.5 py-2 text-xs font-semibold transition ${
                filter === item.id
                  ? "bg-sea-900 text-white"
                  : "border border-sea-900/15 bg-white text-sea-900 hover:border-sea-900/35"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-5 text-sm text-ink/60">
        {sites.length} heritage site{sites.length === 1 ? "" : "s"} to explore
      </p>

      {sites.length ? (
        <div className="mt-6 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {sites.map((site, index) => (
            <article
              key={site.slug}
              className="mb-5 break-inside-avoid overflow-hidden rounded-2xl bg-sea-900 shadow-[0_10px_30px_rgba(8,31,31,.1)]"
            >
              <div className={`relative ${index % 3 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
                <Image
                  src={`${basePath}${site.image}`}
                  alt={site.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sea-900/85 via-sea-900/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="flex items-center gap-1.5 text-xs text-[#f3d18b]">
                    <MapPin className="size-3.5" />
                    {site.municipality}, Pangasinan
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold leading-tight">
                    {site.name}
                  </h3>
                </div>
              </div>
              <div className="bg-white px-5 py-3.5">
                <p className="line-clamp-1 text-xs text-ink/60">{site.description}</p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-sea-900/20 bg-white/70 px-6 py-14 text-center">
          <h3 className="font-display text-2xl font-semibold text-sea-900">No Heritage Sites Found</h3>
          <p className="mt-2 text-sm text-ink/65">Try a different name, municipality, or keyword.</p>
        </div>
      )}
    </>
  );
}
