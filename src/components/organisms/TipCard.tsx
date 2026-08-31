"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Backpack, Bus, CalendarDays, Heart } from "lucide-react";
import { basePath } from "@/lib/site-config";
type Tip = { title: string; body: string; image: string; icon: string; };
export function TipCard({ tip, index }: { tip: Tip; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => { const el = ref.current; if (!el) return; const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } }, { threshold: 0.2 }); observer.observe(el); return () => observer.disconnect(); }, []);
  const TipIcon = { sun: CalendarDays, map: Bus, backpack: Backpack, heart: Heart }[tip.icon] ?? CalendarDays;
  return <li ref={ref} style={{ transitionDelay: inView ? `${index * 90}ms` : "0ms" }} className={`group overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(8,31,31,.07)] ring-1 ring-sea-900/5 transition-all duration-700 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_rgba(8,31,31,.15)] ${inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}><div className="relative aspect-[16/9] overflow-hidden"><Image src={`${basePath}${tip.image}`} alt={tip.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-sea-900/45 to-transparent" /><span className="absolute bottom-4 left-4 grid size-10 place-items-center rounded-full bg-white/95 text-sea-900 shadow-sm"><TipIcon className="size-4" aria-hidden="true" /></span></div><div className="p-6"><h3 className="font-display text-2xl font-semibold text-sea-900">{tip.title}</h3><p className="mt-3 text-sm leading-relaxed text-ink/70">{tip.body}</p><span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-coral transition-all group-hover:gap-2.5">Learn more <ArrowRight className="size-4" /></span></div></li>;
}
