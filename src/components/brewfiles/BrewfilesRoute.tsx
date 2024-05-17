import { useEffect, useRef, useState } from "react";
import BrewSearch from "./SearchInput";
import type { TBrewCard } from "@/types/brews";
import useBrewFiles from "./useBrewFiles";
import BrewCard from "./BrewCard";
import FeaturedBrewfileToggle from "./FeaturedBrewfileToggle";
import { logSearch } from "@/lib/logSearch";

const BrewfilesRoute = () => {
  const [searchLogTimeout, setSearchLogTimeout] =
    useState<NodeJS.Timeout | null>(null);
  const [isToggledFeatured, setIsToggledFeatured] = useState(
    new URL(location.href).searchParams.get("isFeaturedToggled") === "true"
  );
  const { brews, error, isLoading } = useBrewFiles();
  const [filter, setFilter] = useState(
    new URL(location.href).searchParams.get("search") || ""
  );
  const [filteredBrews, setFilteredBrews] = useState<TBrewCard[] | null>(null);

  useEffect(() => {
    let brewsMatchingFilter;
    if (!brews) return;
    if (filter === "") {
      brewsMatchingFilter = brews.brews
        .filter((brew) =>
          isToggledFeatured
            ? brew.userInfo.isFeatured === isToggledFeatured
            : brew
        )
        .map((brew) => ({
          id: brew.id,
          username: brew.userInfo.username,
          date: brew.date,
          totalPackages: brew.data.length,
          totalMatches: 0,
          isFeatured: brew.userInfo.isFeatured ?? false,
        }));
      return setFilteredBrews(brewsMatchingFilter);
    }
    brewsMatchingFilter = brews.brews
      .filter(
        (brew) =>
          (isToggledFeatured
            ? brew.userInfo.isFeatured === isToggledFeatured
            : brew) &&
          (brew.userInfo.username
            .toLowerCase()
            .includes(filter.replaceAll(" ", "-")) ||
            brew.data.some((entry) =>
              entry.name.toLowerCase().includes(filter)
            ))
      )
      .map((brew) => ({
        id: brew.id,
        username: brew.userInfo.username,
        date: brew.date,
        totalPackages: brew.data.length,
        totalMatches: brew.data.filter((entry) =>
          entry.name.toLowerCase().includes(filter)
        ).length,
        isFeatured: brew.userInfo.isFeatured ?? false,
      }));
    setFilteredBrews(brewsMatchingFilter);
  }, [brews, filter, isToggledFeatured]);

  const searchInput = useRef<HTMLInputElement>(null);

  const handleInputChange = () => {
    if (searchLogTimeout) {
      clearTimeout(searchLogTimeout);
    }
    const currentFilter = searchInput?.current?.value ?? "";
    setFilter(currentFilter.toLowerCase());
    const url = new URL(location.href);
    currentFilter.length > 0
      ? url.searchParams.set("search", currentFilter)
      : url.searchParams.delete("search");
    history.replaceState({}, "", url.toString());
    document.title =
      currentFilter.length > 0
        ? `Brewfiles search: ${currentFilter}`
        : `Submitted brewfiles`;

    if (currentFilter.length > 0) {
      setSearchLogTimeout(
        setTimeout(() => {
          logSearch({ search: currentFilter, type: "search" });
        }, 1000)
      );
    }
  };

  return (
    <>
      <div className="flex items-center justify-center md:justify-between w-full gap-4 flex-wrap">
        <BrewSearch
          filter={filter}
          handleInputChange={handleInputChange}
          ref={searchInput}
        />
        <FeaturedBrewfileToggle
          isToggledFeatured={Boolean(isToggledFeatured)}
          setIsToggledFeatured={setIsToggledFeatured}
        />
      </div>
      <div
        className="grid gap-4 sm:gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
        id="brewfiles-grid"
      >
        {error && (
          <p className="font-mono text-lg sm:text-2xl uppercase tracking-widest col-span-3 text-center">
            {error}
          </p>
        )}
        {isLoading &&
          Array.from({ length: 9 }).map((_, i) => <BrewCard key={i} />)}

        {!isLoading && filteredBrews && filteredBrews.length === 0 && (
          <p className="font-mono text-lg sm:text-2xl uppercase tracking-widest col-span-3 text-center">
            No brewfiles found
          </p>
        )}

        {filteredBrews &&
          filteredBrews.length > 0 &&
          filteredBrews
            .sort((a, b) => (a.totalMatches < b.totalMatches ? 1 : -1))
            .map((b) => <BrewCard entry={b} key={b.id} />)}
      </div>
    </>
  );
};
export default BrewfilesRoute;
