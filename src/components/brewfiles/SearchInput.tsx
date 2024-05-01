import { forwardRef } from "react";
import SearchIcon from "./SearchIcon";

type Props = {
  filter: string;
  handleInputChange: () => void;
};

const BrewSearch = forwardRef<HTMLInputElement, Props>(
  ({ filter, handleInputChange }: Props, ref) => {
    return (
      <div className="relative rounded-full bg-white/10 w-full p-2 max-w-xl mx-auto flex gap-4 transition-all focus-within:ring-4 ring-offset-4 ring-offset-bkg ring-accent-bluemedium backdrop-blur-4xl">
        <div
          className="pl-2 size-9 grid place-items-center pointer-events-none"
          aria-hidden="true"
        >
          <SearchIcon />
        </div>
        <input
          type="search"
          ref={ref}
          name="brew-search"
          id="brew-search"
          value={filter}
          onInput={() => handleInputChange()}
          placeholder="Search packages"
          autoFocus={true}
          autoComplete="off"
          className="bg-transparent focus:outline-none w-full text-3xl uppercase tracking-widest font-mono peer"
        />
      </div>
    );
  }
);
export default BrewSearch;
