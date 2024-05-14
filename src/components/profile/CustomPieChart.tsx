import type { DeveloperType } from "@/types/personality";
import { PieChart } from "react-minimal-pie-chart";

const CustomPieChart = ({ data }: { data: DeveloperType }) => {
  const colors = [
    "#2D24E9",
    "#fff",
    "#7EB1Fd",
    "#F847F1",
    "#0868F9",
    "#00EAEA",
  ];

  const pieData = Object.entries(data).map(([title, value], index) => ({
    title,
    value: parseFloat(value),
    color: colors[index],
  }));
  return (
    <div
      class="flex p-6 rounded-xl bg-bkg/70 text-center justify-center"
      data-gridName="pie"
    >
      <div className="grid gap-4">
        <p className="text-xl uppercase text-balance leading-heading tracking-widest font-mono">
          Dev Breakdown
        </p>
        <PieChart data={pieData} />
        <div className="flex gap-2 flex-wrap justify-center max-w-xs">
          {pieData
            .filter(({ value }) => value > 0)
            .map(({ title, color }) => (
              <div className="flex gap-0.5 items-center" key={title}>
                <div
                  className="size-3 rounded-full"
                  style={{
                    backgroundColor: color,
                  }}
                ></div>
                <p>{title.substring(8)}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default CustomPieChart;
