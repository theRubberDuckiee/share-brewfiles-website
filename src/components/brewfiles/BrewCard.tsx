import type { TBrewCard } from "@/types/brews";
import BrewLink from "./BrewLink";
import anonImage from "./anon.jpg";

type Props = {
  entry?: TBrewCard;
};

const BrewCard = ({ entry }: Props) => {
  return (
    <article
      className={`bg-white/5 p-6 rounded-3xl backdrop-blur-4xl flex justify-between relative ${
        !entry && "animate-pulse"
      }`}
    >
      <div className="flex flex-col gap-6 justify-between">
        <div className="flex items-center gap-3">
          <img
            src={
              entry ? `https://github.com/${entry.username}.png` : anonImage.src
            }
            alt="anon"
            width="50"
            height="50"
            className="rounded-full grayscale"
          />
          <p className="font-mono text-2xl uppercase tracking-widest">
            {entry ? entry.username : "Username"}
          </p>
        </div>
        <div className="grid gap-1">
          <p className="text-xl uppercase tracking-widest text-white/60 min-h-7"></p>
          <p className="text-xl uppercase tracking-widest text-white/60">
            {entry ? entry.date : "Date"}
          </p>
          <p className="text-xl uppercase tracking-widest text-white/60">
            {entry ? entry.totalPackages : "Packages"}
          </p>
        </div>
      </div>
      <div className="shrink-0 flex flex-col justify-end">
        <BrewLink id={entry?.id} />
      </div>
    </article>
  );
};
export default BrewCard;
