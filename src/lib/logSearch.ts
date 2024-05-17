export const logSearch = ({
  search,
  type,
}: {
  search: string;
  type: "search" | "route";
}) => {
  if (import.meta.env.PROD) {
    fetch("/api/logSearch.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ search, type }),
    });
  }
};
