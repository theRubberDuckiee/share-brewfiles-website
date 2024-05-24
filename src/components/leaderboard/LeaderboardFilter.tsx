import Checkbox from "../ui/Checkbox";

const LeaderboardFilter = ({
  setLeaderboardFilter,
  leaderboardFilter,
}: {
  leaderboardFilter: string;
  setLeaderboardFilter: (filter: string) => void;
}) => {
  return (
    <div className="flex gap-4 flex-wrap border-2 border-white/10 rounded-md max-w-fit mx-auto py-3 px-4">
      <Checkbox
        label="All Brews"
        leaderboardFilter={leaderboardFilter}
        setLeaderboardFilter={setLeaderboardFilter}
      />
      <Checkbox
        label="Top Dev Apps"
        leaderboardFilter={leaderboardFilter}
        setLeaderboardFilter={setLeaderboardFilter}
      />
      <Checkbox
        label="Top CLI Tools"
        leaderboardFilter={leaderboardFilter}
        setLeaderboardFilter={setLeaderboardFilter}
      />
    </div>
  );
};
export default LeaderboardFilter;
