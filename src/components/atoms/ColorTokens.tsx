/**
 * ATOM: Color Tokens
 *
 * Single source of truth for the Pangasinan Heritage Digital Showcase palette.
 * Do not hardcode hex values in components — import tokens from here (or use
 * the matching Tailwind classes, which read from tailwind.config.ts) so the
 * whole platform can be re-themed by editing one file.
 *
 * Usage context: referenced by every other Atom/Molecule/Organism for color.
 * Not rendered directly on real pages — <ColorTokenSwatches /> below exists
 * only for the design-system documentation page.
 */

export const colorTokens = {
  sea: { DEFAULT: "#0F3D3E", 700: "#0C302F", 900: "#081F1F" },
  sand: { DEFAULT: "#E8DFC8", 100: "#FAF7F0", 300: "#EFE7D3" },
  coral: { DEFAULT: "#E4572E", 600: "#C94620" },
  moss: { DEFAULT: "#4C7A5E", 700: "#3A5F49" },
  ink: { DEFAULT: "#16231F" },
} as const;

const swatchList = [
  { name: "sea", hex: colorTokens.sea.DEFAULT, className: "bg-sea", role: "Primary — water, headers, dark surfaces" },
  { name: "sea-700", hex: colorTokens.sea[700], className: "bg-sea-700", role: "Primary hover / pressed state" },
  { name: "sand-100", hex: colorTokens.sand[100], className: "bg-sand-100", role: "Page background" },
  { name: "sand", hex: colorTokens.sand.DEFAULT, className: "bg-sand", role: "Card / surface background" },
  { name: "coral", hex: colorTokens.coral.DEFAULT, className: "bg-coral", role: "Accent — CTAs, active nav, focus" },
  { name: "moss", hex: colorTokens.moss.DEFAULT, className: "bg-moss", role: "Secondary accent — tags, success" },
  { name: "ink", hex: colorTokens.ink.DEFAULT, className: "bg-ink", role: "Body text" },
] as const;

export function ColorTokenSwatches() {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4" aria-label="Color token reference">
      {swatchList.map((s) => (
        <li key={s.name} className="rounded-lg border border-ink/10 overflow-hidden bg-white">
          <div className={`${s.className} h-16 w-full`} aria-hidden="true" />
          <div className="p-2.5">
            <p className="font-mono text-xs font-medium">{s.name}</p>
            <p className="font-mono text-[11px] text-ink/60">{s.hex}</p>
            <p className="text-[11px] text-ink/70 mt-1">{s.role}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
