import { Image } from "@/components/atoms/Image";
import { Heading, Text, Eyebrow } from "@/components/atoms/Typography";
import { Icon } from "@/components/atoms/Icon";
import { Button } from "@/components/atoms/Button";

/**
 * MOLECULE: Heritage Card
 *
 * Usage context: the Heritage Card is used exclusively for displaying
 * tourist-site previews in a responsive heritage-site grid (see the
 * HeritageGrid organism). It should not be used for unrelated content —
 * for a different preview shape (e.g. an event or news post), create a
 * sibling molecule rather than overloading this one.
 *
 * Composition: built from four Atoms — Image, Typography (Eyebrow +
 * Heading + Text), Icon, and Button — so any Atom-level restyle (e.g. a
 * new Button variant) propagates automatically.
 *
 * Responsive logic: the card itself has no breakpoint logic of its own —
 * it is a fixed-structure vertical card (image over text) at every size.
 * All responsive behavior (1 / 2 / 3 columns) lives one level up in the
 * HeritageGrid organism, keeping this component simple and reusable
 * outside a grid too (e.g. a single featured-site block).
 */

export interface HeritageSite {
  slug: string;
  name: string;
  municipality: string;
  description: string;
  image: string;
}

export function HeritageCard({ site }: { site: HeritageSite }) {
  return (
    <article className="flex flex-col rounded-2xl bg-white shadow-sm ring-1 ring-ink/5 overflow-hidden h-full">
      <Image src={site.image} alt={`${site.name} in ${site.municipality}`} aspect="4/3" rounded={false} />
      <div className="flex flex-col gap-2 p-5 flex-1">
        <div className="flex items-center gap-1.5 text-moss-700">
          <Icon name="pin" size={14} />
          <Eyebrow className="text-moss-700">{site.municipality}</Eyebrow>
        </div>
        <Heading level={3}>{site.name}</Heading>
        <Text muted size="sm" className="flex-1">
          {site.description}
        </Text>
        <Button
          variant="ghost"
          className="self-start px-0 py-1 hover:bg-transparent hover:text-coral"
        >
          Explore site <Icon name="chevronRight" size={16} label="" />
        </Button>
      </div>
    </article>
  );
}
