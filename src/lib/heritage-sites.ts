import { HeritageSite } from "@/components/molecules/HeritageCard";

export type Destination = HeritageSite & { keywords: string[] };

export const heritageSites: Destination[] = [
  { slug: "hundred-islands", name: "Hundred Islands National Park", municipality: "Alaminos City", description: "A protected marine reserve of limestone islands scattered across Lingayen Gulf, with island-hopping, snorkeling, and hiking trails.", image: "/heritage/hundred-islands.jpg", keywords: ["hundred islands", "islands", "marine", "alaminos", "lingayen gulf", "snorkeling"] },
  { slug: "bolinao-lighthouse", name: "Cape Bolinao Lighthouse", municipality: "Bolinao", description: "One of the tallest lighthouses in the Philippines, built in 1905 atop Punta Piedra Point overlooking the West Philippine Sea.", image: "/heritage/bolinao-lighthouse.jpg", keywords: ["lighthouse", "cape bolinao", "bolinao", "patar", "historic landmark", "west philippine sea"] },
  { slug: "balungao-hotspring", name: "Balungao Hot Spring & Adventure Park", municipality: "Balungao", description: "A forested eco-park at the foot of Mt. Balungao with natural hot spring pools, ziplines, and trekking trails.", image: "/heritage/balungao-hotspring.jpg", keywords: ["hot spring", "balungao", "adventure", "nature", "zipline", "mountain"] },
  { slug: "urduja-house", name: "Urduja House", municipality: "Lingayen", description: "A historic residence in the Provincial Capitol Compound, Urduja House showcases Pangasinan's rich history and elegant architectural heritage.", image: "/heritage/urduwa.jpg", keywords: ["urduja", "lingayen", "provincial capitol", "heritage house", "history", "architecture"] },
];
