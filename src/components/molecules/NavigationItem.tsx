import Link from "next/link";

export function NavigationItem({ href, active = false, children, onClick }: { href: string; active?: boolean; children: React.ReactNode; onClick?: () => void; }) {
  return <Link href={href} aria-current={active ? "page" : undefined} onClick={onClick} className={`relative block w-full px-3 py-2 text-sm font-medium transition-colors duration-200 md:w-auto ${active ? "text-white after:absolute after:inset-x-3 after:bottom-0 after:h-px after:bg-[#f3b75c]" : "text-sand-100/85 hover:text-sand-100 after:absolute after:inset-x-3 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-white/50 after:transition-transform hover:after:scale-x-100"}`}>{children}</Link>;
}
