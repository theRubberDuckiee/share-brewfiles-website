import type { Brews } from "@/types/brews";
import { useEffect, useState } from "react";

const useBrewFiles = () => {
  const [brews, setBrews] = useState<Brews | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // fetch /api/getBrewfiles.json
  useEffect(() => {
    const fetchBrews = async () => {
      try {
        const res = await fetch(`/api/getBrewfiles.json`);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const brews: Brews = await res.json();
        setBrews(brews);
        setIsLoading(false);
        setError(null);
      } catch (e) {
        if (e instanceof Error) {
          return setError(e.message);
        }
        setError("An unexpected error occurred");
      }
    };
    fetchBrews();
  }, []);

  return { brews, isLoading, error };
};
export default useBrewFiles;
