import { useRef, useState } from "react";
import BrewSearch from "../ui/BrewSearch";

const BrewfilesRoute = () => {
  // set filter to query param
  const [filter, setFilter] = useState(
    new URL(location.href).searchParams.get("package") || ""
  );

  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <BrewSearch filter={filter} ref={searchRef} />
      <div
        className="container grid gap-8 sm:grid-cols-2 md:grid-cols-3 items-start"
        id="brewfiles-grid"
      >
        {/* {Array.from({ length: 9 }).map(() => (
          <BrewCard />
        ))} */}
      </div>
    </>
  );
};
export default BrewfilesRoute;
