import { useEffect, useState } from "react";
import LeaderboardFilter from "./LeaderboardFilter";
import PackageRow from "./PackageRow";
import useLeaderboard from "./useLeaderboard";
import type { PackageCounted } from "@/types/packageEntry";
import { packagePersonalityDictionary } from "@/data/labelledBrewfiles";

const LeaderboardList = ({ showOnlyTop10 }: { showOnlyTop10?: boolean }) => {
  const { leaderboard, error, isLoading } = useLeaderboard(showOnlyTop10);
  const [leaderboardFilter, setLeaderboardFilter] = useState(
    new URL(location.href).searchParams.get("filter") || ""
  );
  const [filteredLeaderboard, setFilteredLeaderboard] =
    useState<PackageCounted[]>(leaderboard);

  useEffect(() => {
    if (!leaderboard) return;

    if (leaderboardFilter === "all-brews" || leaderboardFilter === "") {
      return setFilteredLeaderboard(leaderboard);
    }
    if (leaderboardFilter === "top-dev-apps") {
      return setFilteredLeaderboard(
        leaderboard.filter(
          (entry) => packagePersonalityDictionary[entry.name]?.isDevApp
        )
      );
    }
    if (leaderboardFilter === "top-cli-tools") {
      return setFilteredLeaderboard(
        leaderboard.filter(
          (entry) => packagePersonalityDictionary[entry.name]?.isCLITool
        )
      );
    }
  }, [leaderboardFilter, leaderboard]);

  return (
    <div className="grid gap-8">
      {!showOnlyTop10 && (
        <LeaderboardFilter
          leaderboardFilter={leaderboardFilter}
          setLeaderboardFilter={setLeaderboardFilter}
        />
      )}
      <ul className="grid gap-4">
        {filteredLeaderboard.map((entry: PackageCounted) => (
          <PackageRow
            key={entry.rank}
            {...entry}
            shouldRandomize={!isLoading}
          />
        ))}
      </ul>
    </div>
  );
};
export default LeaderboardList;
