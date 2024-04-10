import type { BrewsItem } from "@/types/brews";

type Props = {
  entry: BrewsItem;
};

const BrewCard = ({ entry }: Props) => {
  return (
    <article className="bg-white/5 p-6 rounded-3xl backdrop-blur-4xl flex justify-between relative animate-pulse"></article>
  );
};
export default BrewCard;
