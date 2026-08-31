"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavigationItem } from "@/components/molecules/NavigationItem";
import { SearchForm } from "@/components/molecules/SearchForm";
import { Icon } from "@/components/atoms/Icon";
import { usePathname } from "next/navigation";
import { basePath } from "@/lib/site-config";
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/sites", label: "Heritage Sites" },
  { href: "/plan-a-visit", label: "Plan a Visit" },
  { href: "/about", label: "About" },
];
export function HeaderNavigation({ overlay = false }: { overlay?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className={`${isOpen ? "absolute inset-x-0 top-0 bg-sea-900/95 shadow-lg backdrop-blur-md" : overlay ? "absolute inset-x-0 top-0" : "sticky top-0 bg-sea shadow-sm"} z-50`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex min-h-16 items-center justify-between gap-3 py-2 md:h-20 md:py-0">
          <Link href="/" className="flex min-w-0 shrink items-center gap-2.5 font-display text-base font-semibold leading-none text-sand-100 sm:text-lg md:shrink-0">
            <Image src={`${basePath}/heritage/logo.jpg`} alt="Pangasinan Province logo" width={48} height={48} priority className="size-11 shrink-0 object-contain" />
            <span>Pangasinan<br />Heritage</span>
          </Link>
          <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavigationItem key={link.href} href={link.href} active={link.href === pathname} onClick={() => setIsOpen(false)}>
                {link.label}
              </NavigationItem>
            ))}
          </nav>
          <div className="hidden w-56 xl:block xl:w-64">
            <SearchForm inputId="heritage-search-desktop" />
          </div>
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setIsOpen((v) => !v)}
            className="inline-flex shrink-0 items-center justify-center rounded-full p-2.5 text-sand-100 hover:bg-white/10 md:hidden"
          >
            <Icon name={isOpen ? "close" : "menu"} label={isOpen ? "Close menu" : "Open menu"} />
          </button>
        </div>
        <nav
          id="mobile-nav-panel"
          aria-label="Mobile"
          className={`flex flex-col gap-1 overflow-hidden rounded-b-xl border-t border-white/10 bg-sea-900/80 px-2 transition-all duration-300 ease-in-out md:hidden ${
            isOpen ? "max-h-96 py-3 opacity-100" : "max-h-0 border-t-0 py-0 opacity-0"
          }`}
        >
          {navLinks.map((link) => (
            <NavigationItem key={link.href} href={link.href} active={link.href === pathname} onClick={() => setIsOpen(false)}>
              {link.label}
            </NavigationItem>
          ))}
          <div className="pt-2 pb-1">
            <SearchForm inputId="heritage-search-mobile" />
          </div>
        </nav>
      </div>
    </header>
  );
}
