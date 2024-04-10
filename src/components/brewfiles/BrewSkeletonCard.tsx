import BrewLink from "./BrewLink";
import anonImage from "./anon.jpg";

const BrewSkeletonCard = () => {
  return (
    <article className="bg-white/5 p-6 rounded-3xl backdrop-blur-4xl flex justify-between relative animate-pulse">
      <div className="flex flex-col gap-6 justify-between">
        <div className="flex items-center gap-3">
          <img
            src={anonImage.src}
            alt="anon"
            width="50"
            height="50"
            className="rounded-full grayscale"
          />
          <p className="font-mono text-2xl uppercase tracking-widest">
            Username
          </p>
        </div>
        <div className="grid gap-1">
          <p className="text-xl uppercase tracking-widest text-white/60 min-h-7">
            Matches
          </p>
          <p className="text-xl uppercase tracking-widest text-white/60">
            Date
          </p>
          <p className="text-xl uppercase tracking-widest text-white/60">
            Packages
          </p>
        </div>
      </div>
      <div className="shrink-0 flex flex-col justify-end">
        <BrewLink />
      </div>
    </article>
  );
};
export default BrewSkeletonCard;
