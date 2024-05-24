import { getRandomNumber, getRandomWord } from "@/lib/getRandomValue";
import type { PackageCounted } from "@/types/packageEntry";
import { useEffect, useState } from "react";

const useLeaderboard = (showOnlyTop10?: boolean) => {
  const [leaderboard, setLeaderboard] = useState<PackageCounted[]>(
    Array.from({ length: showOnlyTop10 ? 10 : 100 }, (_, index) => ({
      name: getRandomWord(),
      downloads: getRandomNumber(),
      rank: index + 1,
    }))
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // fetch /api/getBrewfiles.json
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await fetch(
          `/api/getRankedPackages.json${
            showOnlyTop10 ? "?showOnlyTop10=true" : ""
          }`
        );
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const leaderboard: PackageCounted[] = await res.json();
        setLeaderboard(leaderboard);
        setIsLoading(false);
        setError(null);
      } catch (e) {
        if (e instanceof Error) {
          return setError(e.message);
        }
        setError("An unexpected error occurred");
      }
    };
    fetchLeaderboard();
  }, []);

  return { leaderboard, isLoading, error };
};
export default useLeaderboard;
