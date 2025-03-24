export enum DeveloperPersonalityType {
  Retro = "Retro",
  Traditionalist = "Traditionalist",
  MarieKondo = "Marie Kondo",
  Trailblazer = "Trailblazer",
  Minimalist = "Minimalist",
  Architect = "Architect",
  Hoarder = "Hoarder",
  Pragmatist = "Pragmatist",
  Explorer = "Explorer",
  Innovator = "Innovator"
}

export interface DeveloperTypeBreakdown {
  frontend: number;
  backend: number;
  fullstack: number;
  devops: number;
  other: number;
}

export interface PersonalitySummary {
  developerType: DeveloperPersonalityType;
  description: string;
  friendsWith: DeveloperPersonalityType[];
  percentileSimilarToType: number;
  mostPopularPackage: string;
  typeBreakdown: DeveloperTypeBreakdown;
}

export interface PieChartData {
  title: string;
  value: number;
  color: string;
}

export type PieChartDataArray = PieChartData[];

