import { forwardRef } from "react";
import SearchIcon from "./SearchIcon";

type Props = {
  filter: string;
  handleInputChange: () => void;
};

const BrewSearch = forwardRef<HTMLInputElement, Props>(
  ({ filter, handleInputChange }: Props, ref) => {
    return (
      <div className="relative rounded-full bg-white/10 w-full p-2 lg:max-w-2xl mx-auto flex items-center gap-4 transition-all focus-within:ring-4 ring-offset-4 ring-offset-bkg ring-accent-bluemedium backdrop-blur-4xl">
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
          placeholder="Search packages or profiles"
          autoFocus={true}
          autoComplete="off"
          className="bg-transparent focus:outline-none w-full text-2xs sm:text-base lg:text-xl uppercase tracking-wider sm:tracking-widest font-mono peer pr-3"
        />
      </div>
    );
  }
);
export default BrewSearch;
