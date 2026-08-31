import { SVGProps } from "react";

/**
 * ATOM: Icon
 *
 * Usage context: small inline glyphs used inside Molecules/Organisms
 * (SearchForm's magnifier, NavigationItem's chevron, HeritageCard's pin).
 * All icons are inline SVG (no icon font / no external requests) to keep
 * the "Lightning Fast" requirement — zero extra network round trips on
 * 3G/4G, and icons inherit `currentColor` so they re-theme for free.
 *
 * Accessibility: icons are decorative by default (aria-hidden). When an
 * icon is the *only* content of an interactive element, pass a `label`
 * to render an accessible name instead.
 */

export type IconName = "search" | "pin" | "menu" | "close" | "chevronRight";

const paths: Record<IconName, JSX.Element> = {
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12M18 6L6 18" />
    </>
  ),
  chevronRight: (
    <>
      <path d="M9 6l6 6-6 6" />
    </>
  ),
};

export function Icon({
  name,
  label,
  size = 20,
  className = "",
  ...rest
}: { name: IconName; label?: string; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={label ? "img" : undefined}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      className={className}
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
