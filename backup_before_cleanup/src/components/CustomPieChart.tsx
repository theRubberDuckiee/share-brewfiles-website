import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

// Define the TypeScript types
export interface DeveloperTypeBreakdown {
  frontend: number;
  backend: number;
  fullstack: number;
  devops: number;
  other: number;
}

interface PieChartData {
  title: string;
  value: number;
  color: string;
}

export type PieChartDataArray = PieChartData[];

interface Props {
  typeBreakdown: DeveloperTypeBreakdown;
}

// Define color mapping for different developer types
const COLOR_MAPPING = {
  frontend: '#2D24E9',
  backend: '#fff',
  fullstack: '#7EB1Fd',
  devops: '#F847F1',
  other: '#0868F9', // Added the specified color
  package: '#00EAEA', // Added for completeness
};

export default function CustomPieChart({ typeBreakdown }: Props) {
  // State to track which segment is being hovered
  const [hovered, setHovered] = useState<number | null>(null);

  // Convert the typeBreakdown object into an array format required by PieChart
  const chartData: PieChartDataArray = Object.entries(typeBreakdown)
    .filter(([_, value]) => value > 0) // Only include non-zero values
    .map(([key, value], index) => ({
      title: key,
      value,
      color: COLOR_MAPPING[key as keyof typeof COLOR_MAPPING],
    }));

  return (
    <div className="w-full h-full relative">
      <PieChart
        data={chartData}
        lineWidth={20}
        paddingAngle={2}
        radius={42}
        labelPosition={80}
        label={({ dataEntry }) => 
          dataEntry.percentage > 5 ? `${dataEntry.title} ${Math.round(dataEntry.percentage)}%` : ''
        }
        labelStyle={{
          fontSize: '6px',
          fontFamily: 'sans-serif',
          fill: '#fff',
          fontWeight: 'bold',
        }}
        animate
        animationDuration={800}
        segmentsStyle={{ transition: 'stroke-width 0.2s' }}
        segmentsShift={(index) => (index === hovered ? 5 : 0)}
        // Handle hover events
        onMouseOver={(_, index) => {
          setHovered(index);
        }}
        onMouseOut={() => {
          setHovered(null);
        }}
      />
      <div className="text-center mt-4 text-white text-sm">
        {hovered !== null && (
          <div className="absolute bottom-0 left-0 right-0 text-center pb-2">
            <p><span className="font-semibold">{chartData[hovered]?.title}</span>: {Math.round(chartData[hovered]?.value)}%</p>
          </div>
        )}
      </div>
    </div>
  );
}

