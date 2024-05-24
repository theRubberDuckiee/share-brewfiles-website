import Check from "@/icons/Check";
import slugify from "@sindresorhus/slugify";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  leaderboardFilter: string;
  setLeaderboardFilter: (filter: string) => void;
}

const Checkbox = ({
  label,
  leaderboardFilter,
  setLeaderboardFilter,
  ...rest
}: Props) => {
  let isChecked = false;
  if (label === "All Brews" && leaderboardFilter === "") {
    isChecked = true;
  } else {
    isChecked = leaderboardFilter === slugify(label);
  }
  return (
    <label className="flex items-center space-x-2 relative">
      <input
        type="checkbox"
        name={slugify(label)}
        className="form-checkbox absolute inset-0 opacity-0 peer cursor-pointer"
        checked={isChecked}
        onChange={(e) => {
          const url = new URL(location.href);
          if (e.target.checked) {
            setLeaderboardFilter(e.target.name);
            url.searchParams.set("filter", e.target.name);
          } else {
            url.searchParams.delete("filter");
          }
          history.replaceState({}, "", url.toString());
        }}
        {...rest}
      />
      <div className="h-6 w-6 grid place-items-center text-bkg peer-checked:bg-accent-bluemedium border-white/60 peer-checked:border-accent-bluemedium rounded peer-hover:border-accent-bluemedium ring-accent-bluemedium ring-offset-2 ring-offset-bkg border-2 peer-focus-visible:ring-4 transition-all">
        <Check />
      </div>
      <span className="text-white">{label}</span>
    </label>
  );
};
export default Checkbox;
