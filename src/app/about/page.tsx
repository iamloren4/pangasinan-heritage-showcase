import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, BookOpen, Compass, MapPin, Sparkles } from "lucide-react";
import { HeaderNavigation } from "@/components/organisms/HeaderNavigation";
import { HeritageGrid } from "@/components/organisms/HeritageGrid";
import { heritageSites } from "@/lib/heritage-sites";

const features = [
  { icon: Compass, title: "Discover Heritage", text: "Find the places that hold Pangasinan’s enduring stories." },
  { icon: BookOpen, title: "Explore Local Stories", text: "Meet the culture, memory, and faith woven into every town." },
  { icon: MapPin, title: "Plan Your Visit", text: "Travel thoughtfully with practical guides for every journey." },
];

export default function AboutPage() {
  return <>
    <HeaderNavigation overlay />
    <main>
      <section className="relative isolate min-h-[620px] overflow-hidden bg-sea-900 text-white sm:min-h-[710px]">
        <Image src="/heritage/sunset.jpg" alt="Pangasinan coastline at sunset" fill priority sizes="100vw" className="-z-20 object-cover object-right" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,29,30,.91)_0%,rgba(5,43,45,.65)_48%,rgba(5,37,42,.16)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 text-white/40"><svg className="h-full w-full" viewBox="0 0 1200 160" preserveAspectRatio="none" fill="none"><path d="M0 70 Q170 10 390 65 T780 60 T1200 45" stroke="currentColor" strokeWidth="1.5" /><path d="M0 100 Q200 45 420 100 T800 95 T1200 75" stroke="currentColor" strokeWidth="1" /><path d="M0 130 Q180 80 370 125 T760 120 T1200 100" stroke="currentColor" strokeWidth="1" /></svg></div>
        <div className="relative mx-auto flex min-h-[620px] max-w-6xl items-center px-5 pb-20 pt-28 sm:min-h-[710px] sm:px-6 sm:pt-32"><div className="max-w-3xl animate-[fadeUp_.8s_ease-out_both]">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[.2em] text-[#f3b75c]">Pangasinan Heritage Digital Showcase</p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs text-white/90 backdrop-blur-sm"><MapPin className="size-3.5 text-[#f3b75c]" /> Pangasinan, Philippines</div>
          <h1 className="mt-6 font-display text-[clamp(3.25rem,8vw,6.3rem)] font-semibold leading-[.95] tracking-[-.045em]">Sharing the heart of <em className="font-medium text-[#f4bd68]">Pangasinan.</em></h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">A digital initiative by the Pangasinan Provincial Tourism Office, created to bring the province’s heritage within reach of every curious traveler.</p>
          <Link href="/sites" className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-black/25 transition hover:-translate-y-0.5 hover:bg-coral-600">Explore Heritage Sites <ArrowRight className="size-4" /></Link>
        </div></div>
        <a href="#about-showcase" aria-label="Learn about the showcase" className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[.18em] text-white/75"><span>Our purpose</span><ArrowDown className="size-4 animate-bounce" /></a>
        <svg className="absolute inset-x-0 bottom-0 block h-10 w-full text-sand-100 sm:h-16" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true"><path d="M0 45 C240 100 410 5 700 48 C990 92 1190 35 1440 22 V80 H0Z" fill="currentColor" /></svg>
      </section>
      <section id="about-showcase" className="relative overflow-hidden bg-sand-100 py-20 sm:py-28"><div className="pointer-events-none absolute -left-20 top-24 size-96 rounded-full border border-moss/10" /><div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-md"><div className="absolute -inset-5 rounded-[48%_52%_43%_57%/56%_42%_58%_44%] border border-coral/30" /><div className="relative aspect-square overflow-hidden rounded-[47%_53%_44%_56%/55%_42%_58%_45%] border-8 border-white shadow-[0_20px_50px_rgba(8,31,31,.16)]"><Image src="/heritage/bolinao-lighthouse.jpg" alt="Cape Bolinao Lighthouse" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-sea-900/45 to-transparent" /><span className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full bg-sea-900/85 px-3 py-2 text-xs font-medium text-white backdrop-blur"><Sparkles className="size-3.5 text-[#f3b75c]" /> A heritage worth keeping</span></div></div>
        <div><p className="font-mono text-[11px] uppercase tracking-[.2em] text-coral">About the showcase</p><h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-[-.025em] text-sea-900 sm:text-5xl">Preserving the stories that shape Pangasinan.</h2><p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">The Pangasinan Heritage Digital Showcase connects people with the province’s iconic places—from the limestone islands of Alaminos to the coast of Bolinao and the forested pools of Balungao. It is an invitation to see each destination with greater context, care, and wonder.</p><div className="mt-9 grid gap-4 sm:grid-cols-3">{features.map(({ icon: Icon, title, text }) => <div key={title} className="border-t border-sea-900/15 pt-4"><Icon className="size-5 text-coral" /><h3 className="mt-3 font-display text-lg font-semibold text-sea-900">{title}</h3><p className="mt-1.5 text-sm leading-relaxed text-ink/65">{text}</p></div>)}</div></div>
      </div></section>
      <section className="relative bg-[#e8efe6] py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6"><div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="font-mono text-[11px] uppercase tracking-[.2em] text-coral">Featured on the showcase</p><h2 className="mt-3 font-display text-4xl font-semibold text-sea-900 sm:text-5xl">Three sites, one province.</h2></div><p className="max-w-sm text-sm leading-relaxed text-ink/65">Natural wonders, historic landmarks, and the quiet beauty of a province shaped by the sea.</p></div><div className="mt-11"><HeritageGrid sites={heritageSites.slice(0, 3)} /></div><div className="mt-9 text-center"><Link href="/sites" className="inline-flex items-center gap-2 rounded-full border border-sea-900/20 px-5 py-3 text-sm font-semibold text-sea-900 transition hover:border-sea-900 hover:bg-sea-900 hover:text-white">Browse all heritage sites <ArrowRight className="size-4" /></Link></div></div></section>
    </main>
    <footer className="bg-sea-900 py-10 text-sand-100/70"><div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6"><p>Pangasinan Heritage Digital Showcase — Provincial Tourism Office.</p><Link href="/plan-a-visit" className="font-semibold text-[#f3b75c] hover:text-white">Plan your visit →</Link></div></footer>
  </>;
}
