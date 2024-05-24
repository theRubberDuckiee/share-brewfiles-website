import type { BrewEntry } from "@/types/brews";
import type { PackageCounted } from "@/types/packageEntry";

export default function totalBrewData(
  entry: BrewEntry[],
  showOnlyTop10: boolean
): PackageCounted[] {
  const brewCounter = new Map();
  entry.forEach((brewEntry) => {
    if (!brewCounter.has(brewEntry.name)) {
      // set initial value to 1
      brewCounter.set(brewEntry.name, 1);
    } else {
      // increment value
      brewCounter.set(brewEntry.name, brewCounter.get(brewEntry.name) + 1);
    }
  });

  return Array.from(brewCounter)
    .map(([key, value]) => ({
      name: key.replaceAll('"', ""),
      downloads: value,
    }))
    .sort((a, b) => b.downloads - a.downloads)
    .map((entry, index) => ({
      ...entry,
      downloads: entry.downloads,
      rank: index + 1,
    }))
    .slice(0, showOnlyTop10 ? 10 : 200);
}
