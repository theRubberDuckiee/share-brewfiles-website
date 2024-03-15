import type { PackageEntry } from "@/types/packageEntry";

type Props = {
  entry: PackageEntry;
  index: number;
};

const PackageRow = ({ entry, index }: Props) => {
  return (
    <li className="relative">
      {index !== 10 && (
        <div className="absolute -bottom-2 border-b border-white/15 w-[2200px] -ml-[20%]"></div>
      )}
      <a
        href="/"
        className="p-2 relative flex justify-between items-center font-mono hover:bg-white/5 rounded-3xl ring-accent-bluemedium focus:outline-none transition-all focus-visible:ring-4 ring-offset-4  ring-offset-bkg"
      >
        <div className="flex gap-8 items-center">
          <p className=" text-white/50 text-5xl px-8 py-6 bg-white/5 max-w-fit rounded-2xl leading-none">
            {index.toString().padStart(2, "0")}
          </p>
          <p className="text-5xl uppercase tracking-widest">{entry.name}</p>
        </div>
        <p className="text-5xl uppercase tracking-widest">
          {entry.downloads.toString().padStart(3, "0")}
        </p>
      </a>
    </li>
  );
};
export default PackageRow;
