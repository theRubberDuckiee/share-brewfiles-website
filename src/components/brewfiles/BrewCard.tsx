import type { TBrewCard } from "@/types/brews";
import BrewLink from "./BrewLink";
import anonImage from "./anon.jpg";
import starIcon from "../../icons/star.svg";

type Props = {
  entry?: TBrewCard;
};

const BrewCard = ({ entry }: Props) => {
  return (
    <article
      className={`bg-white/5 rounded-3xl backdrop-blur-4xl flex justify-between relative @container ${
        !entry && "animate-pulse"
      }`}
    >
      <div className="p-4 @sm:p-6 flex flex-col gap-4 @sm:gap-6 justify-between">
        <div className="flex justify-between items-center gap-2 @sm:gap-3">
          <a
            className="flex items-center gap-3 rounded-full focus:outline-none focus-visible:ring-4 ring-offset-4 ring-offset-bkg ring-accent-bluemedium"
            href={entry ? `https://github.com/${entry.username}` : "#"}
          >
            <img
              src={
                entry
                  ? `https://github.com/${entry.username}.png`
                  : anonImage.src
              }
              alt={entry?.username}
              width="50"
              height="50"
              className="rounded-full grayscale hover:ring-4 "
            />
          </a>
          <a
            className="font-mono @sm:text-lg @lg:text-xl @2xl:text-2xl uppercase tracking-widest hover:underline underline-offset-4 decoration-white/20 break-all flex items-center gap-3 group rounded-full focus:outline-none focus-visible:ring-4 ring-offset-4 ring-offset-bkg ring-accent-bluemedium"
            href={entry && `/brew/${entry.id}`}
          >
            {entry ? entry.username : "Username"}
          </a>

          {entry?.isFeatured && (
            <img src={starIcon.src} alt="star" width={20} />
          )}
        </div>

        <div className="grid gap-1">
          <p className="@md:text-lg uppercase tracking-widest text-accent-bluelight min-h-5 @md:min-h-7">
            {entry?.totalMatches === 0 && ""}
            {entry &&
              entry?.totalMatches > 0 &&
              `${entry?.totalMatches} matches`}
          </p>
          <p className="@md:text-lg uppercase tracking-widest text-white/60">
            {entry ? new Date(entry.date).toLocaleDateString() : "Date"}
          </p>
          <p className="@md:text-lg uppercase tracking-widest text-white/60">
            {entry ? `${entry.totalPackages} packages` : "Packages"}
          </p>
        </div>
      </div>
      <div className="absolute right-4 bottom-4 @sm:right-6 @sm:bottom-6">
        <BrewLink id={entry?.id} />
      </div>
    </article>
  );
};
export default BrewCard;
