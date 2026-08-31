import { ElementType, ReactNode } from "react";

/**
 * ATOM: Typography
 *
 * Usage context: every piece of text on the platform should go through
 * Heading, Eyebrow, or Text rather than raw <h1>/<p> tags with ad-hoc
 * classes, so type scale, font-pairing, and line-height stay consistent
 * as the site grows to new heritage-site pages.
 *
 * Responsive logic: sizes are expressed with Tailwind's responsive
 * prefixes (text-3xl sm:text-4xl md:text-5xl for Heading level 1) so the
 * scale steps down automatically on narrow mobile viewports rather than
 * needing separate mobile components.
 */

const headingSizes: Record<1 | 2 | 3 | 4, string> = {
  1: "text-3xl sm:text-4xl md:text-5xl leading-[1.1]",
  2: "text-2xl sm:text-3xl leading-[1.15]",
  3: "text-xl sm:text-2xl leading-snug",
  4: "text-lg sm:text-xl leading-snug",
};

export function Heading({
  level = 2,
  as,
  children,
  className = "",
}: {
  level?: 1 | 2 | 3 | 4;
  as?: ElementType;
  children: ReactNode;
  className?: string;
}) {
  const Tag = as ?? (`h${level}` as ElementType);
  return (
    <Tag className={`font-display font-semibold text-ink ${headingSizes[level]} ${className}`}>
      {children}
    </Tag>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`font-mono text-xs tracking-[0.14em] uppercase text-moss-700 ${className}`}
    >
      {children}
    </p>
  );
}

export function Text({
  children,
  muted = false,
  size = "base",
  className = "",
}: {
  children: ReactNode;
  muted?: boolean;
  size?: "sm" | "base" | "lg";
  className?: string;
}) {
  const sizeClass = { sm: "text-sm", base: "text-base", lg: "text-lg" }[size];
  return (
    <p className={`font-sans ${sizeClass} leading-relaxed ${muted ? "text-ink/65" : "text-ink"} ${className}`}>
      {children}
    </p>
  );
}
