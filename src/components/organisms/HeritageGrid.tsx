// components/organisms/HeritageGrid.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Heading, Text } from "@/components/atoms/Typography";
import { MapPin } from "lucide-react";
import { basePath } from "@/lib/site-config";
type HeritageSite = {
  slug: string;
  name: string;
  municipality: string;
  description: string;
  image: string; // e.g. "/heritage/hundred-islands.jpg"
};
function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}
function HeritageCard({ site, index }: { site: HeritageSite; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: inView ? `${index * 80}ms` : "0ms" }}
      className={`flex flex-col overflow-hidden rounded-xl border border-ink/10 bg-white shadow-sm transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={`${basePath}${site.image}`}
          alt={site.name}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <span className="absolute left-3 top-3 grid size-8 place-items-center rounded-md bg-sea text-[#f0b75a] shadow-sm">
          <MapPin className="size-4" aria-hidden="true" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <Heading level={3} className="text-lg text-sea">
          {site.name}
        </Heading>
        <Text muted className="mt-2 line-clamp-3 text-sm">{site.description}</Text>
      </div>
    </div>
  );
}
export function HeritageGrid({ sites }: { sites: HeritageSite[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      {sites.map((site, index) => (
        <HeritageCard key={site.slug} site={site} index={index} />
      ))}
    </div>
  );
}
