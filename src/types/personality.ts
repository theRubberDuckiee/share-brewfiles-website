export type Statistic = {
  title: string;
  content: string;
};

export type DeveloperType = {
  fractionBackend: string;
  fractionFrontend: string;
  fractionDevOps: string;
  fractionSecurity: string;
  fractionData: string;
  fractionGeneral: string;
};

export enum DeveloperPersonalityType {
    Retro = "Retro",
    Traditionalist = "Traditionalist",
    MarieKondo = "Marie Kondo",
    Trailblazer = "Trailblazer",
    CrazyScientist = "Crazy Scientist",
    AI = "AI",
    Architect = "Architect",
    BobTheBuilder = "Bob-The-Builder",
    Artist = "Artist",
    Trendy = "Trendy",
    Security = "The Guardian",
    Minimalist = "Minimalist",
    Pragamatist = "Pragmatist",
    Wallflower = "Wallflower",
    GoldenRetriever = "Golden Retriever",
}

export type PersonalitySummary = {
  title: DeveloperPersonalityType;
  description: string;
  percentileSimilarToType: string;
  hashtags: string[];
  friendsWith: DeveloperPersonalityType[];
  mostPopularPackage: string;
  relevantStat: Statistic;
  totalPackagesUploaded: number;
  totalPackagesUploadedComparitive: number;
  developerType: DeveloperType;
  last_generated?: number;
};

export type PersonalityTotalCountStatistics = {
    totalBackend: number,
    totalFrontend: number,
    totalSecurity: number,
    totalData: number,
    totalDevOps: number,
    totalGeneral: number,
    totalOld: number,
    totalCustomization: number,
    totalOrganization: number,
    totalRecognized: number,
    totalPackages: number
    totalPopular: number,
    totalSuperPopular: number,
    totalAI: number,
}

export type PersonalityPercentageStatistics = {
    fractionBackend: number,
    fractionFrontend: number,
    fractionDevOps: number,
    fractionSecurity: number,
    fractionData: number,
    fractionGeneral: number,
    fractionOld: number,
    fractionAI: number,
    fractionCustomization: number,
    fractionOrganization: number,
    fractionRecognized: number,
    fractionPopular: number,
    totalPackages: number,
}

