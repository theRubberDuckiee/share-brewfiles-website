import { useEffect, useRef, useState } from "react";
import BrewSearch from "./SearchInput";
import type { TBrewCard } from "@/types/brews";
import useBrewFiles from "./useBrewFiles";
import BrewCard from "./BrewCard";

const BrewfilesRoute = () => {
  const { brews, error, isLoading } = useBrewFiles();
  const [filter, setFilter] = useState(
    new URL(location.href).searchParams.get("package") || ""
  );
  const [filteredBrews, setFilteredBrews] = useState<TBrewCard[] | null>(null);

  useEffect(() => {
    if (!brews) return;
    if (filter === "") {
      return setFilteredBrews(
        brews.brews.map((brew) => ({
          id: brew.id,
          username: brew.userInfo.username,
          date: brew.date,
          totalPackages: brew.data.length,
          totalMatches: 0,
        }))
      );
    }
    const brewsMatchingFilter = brews.brews
      .filter((brew) =>
        brew.data.some((entry) => entry.name.toLowerCase().includes(filter))
      )
      .map((brew) => ({
        id: brew.id,
        username: brew.userInfo.username,
        date: brew.date,
        totalPackages: brew.data.length,
        totalMatches: brew.data.filter((entry) =>
          entry.name.toLowerCase().includes(filter)
        ).length,
      }));
    setFilteredBrews(brewsMatchingFilter);
  }, [brews, filter]);

  // set filter on change
  const searchInput = useRef<HTMLInputElement>(null);
  const handleInputChange = () => {
    if (searchInput.current) {
      setFilter(searchInput.current.value);
    }
    const url = new URL(location.href);
    url.searchParams.set("package", filter);
    history.replaceState({}, "", url.toString());
  };

  return (
    <>
      <BrewSearch
        filter={filter}
        handleInputChange={handleInputChange}
        ref={searchInput}
      />
      <div
        className="container grid gap-8 sm:grid-cols-2 md:grid-cols-3 items-start"
        id="brewfiles-grid"
      >
        {isLoading && Array.from({ length: 9 }).map(() => <BrewCard />)}

        {!isLoading && filteredBrews && filteredBrews.length === 0 && (
          <p className="font-mono text-3xl uppercase tracking-widest col-span-3 text-center">
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
