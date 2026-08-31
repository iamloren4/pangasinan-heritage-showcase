import { ColorTokenSwatches } from "@/components/atoms/ColorTokens";
import { Heading, Text, Eyebrow } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { Image } from "@/components/atoms/Image";
import { HeritageCard } from "@/components/molecules/HeritageCard";
import { SearchForm } from "@/components/molecules/SearchForm";
import { NavigationItem } from "@/components/molecules/NavigationItem";
import { HeritageGrid } from "@/components/organisms/HeritageGrid";
import { HeaderNavigation } from "@/components/organisms/HeaderNavigation";
import { heritageSites } from "@/lib/heritage-sites";
import { basePath } from "@/lib/site-config";

function Section({ level, title, children }: { level: string; title: string; children: React.ReactNode }) {
  return (
    <section className="py-10 border-b border-ink/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Eyebrow className="mb-1">{level}</Eyebrow>
        <Heading level={2} className="mb-5">
          {title}
        </Heading>
        {children}
      </div>
    </section>
  );
}

export default function StyleGuide() {
  return (
    <main className="bg-sand-100 min-h-screen pb-20">
      <div className="bg-sea text-sand-100 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Eyebrow className="text-sand-300 mb-2">Deliverable 1.2</Eyebrow>
          <Heading level={1} className="text-sand-100">
            Atomic Design System &mdash; Component Library
          </Heading>
        </div>
      </div>

      <Section level="Atom" title="Color Tokens">
        <ColorTokenSwatches />
      </Section>

      <Section level="Atom" title="Typography">
        <div className="flex flex-col gap-3">
          <Heading level={1}>Heading level 1</Heading>
          <Heading level={2}>Heading level 2</Heading>
          <Heading level={3}>Heading level 3</Heading>
          <Heading level={4}>Heading level 4</Heading>
          <Eyebrow>Eyebrow label</Eyebrow>
          <Text>Body text — used for descriptions and long-form content.</Text>
          <Text muted>Muted body text — used for secondary/supporting copy.</Text>
        </div>
      </Section>

      <Section level="Atom" title="Button">
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary action</Button>
          <Button variant="secondary">Secondary action</Button>
          <Button variant="ghost">Ghost action</Button>
        </div>
      </Section>

      <Section level="Atom" title="Icon">
        <div className="flex flex-wrap gap-6 text-sea">
          <Icon name="search" label="Search" />
          <Icon name="pin" label="Location pin" />
          <Icon name="menu" label="Menu" />
          <Icon name="close" label="Close" />
          <Icon name="chevronRight" label="Chevron right" />
        </div>
      </Section>

      <Section level="Atom" title="Image">
        <div className="max-w-xs">
          <Image src={`${basePath}/heritage/hundred-islands.svg`} alt="Hundred Islands, Alaminos" aspect="4/3" />
        </div>
      </Section>

      <Section level="Molecule" title="Heritage Card">
        <div className="max-w-sm">
          <HeritageCard site={heritageSites[0]} />
        </div>
      </Section>

      <Section level="Molecule" title="Search Form">
        <div className="max-w-md">
          <SearchForm />
        </div>
      </Section>

      <Section level="Molecule" title="Navigation Item">
        <div className="flex gap-2 bg-sea p-3 rounded-lg max-w-md">
          <NavigationItem href="#" active>
            Active item
          </NavigationItem>
          <NavigationItem href="#">Inactive item</NavigationItem>
        </div>
      </Section>

      <Section level="Organism" title="Heritage Grid">
        <HeritageGrid sites={heritageSites} />
      </Section>

      <Section level="Organism" title="Header Navigation">
        <div className="rounded-lg overflow-hidden ring-1 ring-ink/10">
          <HeaderNavigation />
        </div>
      </Section>
    </main>
  );
}
