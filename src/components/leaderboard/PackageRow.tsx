import { packagePersonalityDictionary } from "@/data/labelledBrewfiles";
import { getRandomNumber, getRandomWord } from "@/lib/getRandomValue";
import type { PackageCounted } from "@/types/packageEntry";
import { useEffect, useState } from "react";

interface Props extends PackageCounted {
  isLast?: boolean;
  shouldRandomize: boolean;
}

const PackageRow = ({
  isLast,
  rank,
  name,
  downloads,
  shouldRandomize,
}: Props) => {
  const [processedName, setProcessedName] = useState<string>(getRandomWord());
  const [processedDownloads, setProcessedDownloads] = useState<string>(
    getRandomNumber()
  );

  useEffect(() => {
    const nameInterval = setInterval(() => {
      setProcessedName(getRandomWord());
    }, 60);
    const downloadsInterval = setInterval(() => {
      setProcessedDownloads(getRandomNumber());
    }, 60);
    return () => {
      clearInterval(nameInterval);
      clearInterval(downloadsInterval);
      if (shouldRandomize) {
        setProcessedName(name);
        setProcessedDownloads(downloads);
      }
    };
  }, [processedName, processedDownloads, shouldRandomize]);

  return (
    <li className="relative @container">
      {!isLast && (
        <div className="absolute -bottom-2 border-b border-white/15 w-[2200px] -ml-[20%]" />
      )}
      <div className="sm:p-2 relative flex justify-between items-center group font-mono hover:bg-white/5 rounded-xl sm:rounded-3xl ring-accent-bluemedium focus:outline-none transition-all focus-visible:ring-4 ring-offset-4 ring-offset-bkg @sm:text-lg @lg:text-2xl @2xl:text-4xl">
        <div className="flex gap-4 sm:gap-8 items-center">
          <p className="text-white/50 px-4 py-3 sm:px-8 sm:py-6 bg-white/5 max-w-fit rounded-xl sm:rounded-2xl leading-none">
            {rank.toString().padStart(2, "0")}
          </p>
          <p className="uppercase tracking-widest break-all pr-4 sm:pr-2">
            {processedName}
          </p>
          <div className="items-center opacity-0 absolute inset-0 sm:inset-auto sm:static sm:opacity-100 hover:bg-white/20 sm:hover:bg-transparent sm:hidden group-hover:sm:flex gap-2 shrink-0 pr-8 text-base">
            <a
              href={
                packagePersonalityDictionary[name]?.link ??
                `https://google.com?q=${name}+cli+package`
              }
              className="absolute inset-0 opacity-0 sm:opacity-100 sm:inset-auto sm:static flex items-center gap-2 sm:max-w-fit focus:outline-none transition-all focus-visible:ring-4 ring-offset-4 leading-tight ring-offset-bkg py-2 px-4 bg-white/10 hover:bg-white/20 ring-accent-bluemedium rounded-full"
              target="_blank"
            >
              Explore tool
            </a>
            <a
              className="hidden sm:flex items-center gap-2 max-w-fit focus:outline-none transition-all focus-visible:ring-4 ring-offset-4 leading-tight ring-offset-bkg py-2 px-4 bg-white/10 hover:bg-white/20 ring-accent-bluemedium rounded-full"
              href={`/brewfiles?search=${name.replace("/", "%2F")}`}
            >
              See users
            </a>
          </div>
        </div>
        <p className="uppercase tracking-widest mr-3">{processedDownloads}</p>
      </div>
    </li>
  );
};
export default PackageRow;
