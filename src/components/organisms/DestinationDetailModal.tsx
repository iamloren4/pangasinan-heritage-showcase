"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { MapPin, X } from "lucide-react";
import type { Destination } from "@/lib/heritage-sites";
import { basePath } from "@/lib/site-config";
export function DestinationDetailModal({ destination, onClose }: { destination: Destination; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  if (!mounted) return null;
  return createPortal(
    <div
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-sea-900/70 p-4 backdrop-blur-sm sm:p-6"
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="destination-title"
        className="my-auto max-h-[calc(100vh-2rem)] w-full max-w-3xl overflow-y-auto rounded-3xl bg-sand-100 shadow-2xl"
      >
        <div className="relative aspect-[16/8] min-h-52 overflow-hidden rounded-t-3xl">
          <Image
            src={`${basePath}${destination.image}`}
            alt={destination.name}
            fill
            sizes="(min-width: 640px) 768px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sea-900/60 to-transparent" />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-white/90 text-sea-900 shadow-sm transition hover:bg-white"
            aria-label="Close destination details"
          >
            <X className="size-5" />
          </button>
          <p className="absolute bottom-5 left-6 font-mono text-[11px] uppercase tracking-[.2em] text-[#f3d18b]">
            Destination
          </p>
        </div>
        <div className="p-6 sm:p-9">
          <p className="flex items-center gap-1.5 text-sm font-medium text-moss-700">
            <MapPin className="size-4" /> {destination.municipality}, Pangasinan
          </p>
          <h2 id="destination-title" className="mt-3 font-display text-3xl font-semibold leading-tight text-sea-900 sm:text-4xl">
            {destination.name}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/70">{destination.description}</p>
          <div className="mt-7 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-sea-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-moss"
            >
              Close
            </button>
          </div>
        </div>
      </section>
    </div>,
    document.body
  );
}
