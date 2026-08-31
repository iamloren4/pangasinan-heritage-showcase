"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { heritageSites } from "@/lib/heritage-sites";

export function DestinationHighlights() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {heritageSites.map((destination) => (
        <article
          key={destination.slug}
          className="overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(8,31,31,.08)] ring-1 ring-sea-900/5"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={destination.image}
              alt={destination.name}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sea-900/50 to-transparent" />
          </div>
          <div className="p-5">
            <p className="flex items-center gap-1.5 text-xs font-medium text-moss-700">
              <MapPin className="size-3.5" />
              {destination.municipality}, Pangasinan
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold text-sea-900">
              {destination.name}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/65">
              {destination.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}