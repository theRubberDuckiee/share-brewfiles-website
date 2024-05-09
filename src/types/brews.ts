export type Brews = {
  brews: BrewsItem[];
};

export type BrewsItem = {
  id: string;
  data: BrewEntry[];
  date: Date;
  userInfo: UserInfo;
  personalitySummary: PersonalitySummary | null;
};

export type PersonalitySummary = {
  personalitySummary?: PersonalitySummary;
  hashtags: string[];
  generalStat: GeneralStat;
  relevantStat: RelevantStat;
  title: string;
  percentileSimilarToType: number;
  totalPackagesUploaded: number;
  developerType: DeveloperType;
  totalPackagesUploadedComparison: number;
  description: string;
  friendsWith: string[];
};

export type GeneralStat = {
  content: string;
  title: string;
};

export type RelevantStat = {
  title: string;
  content: string;
};

export type DeveloperType = {
  fractionGeneral: number;
  fractionFrontend: number;
  fractionData: number;
  fractionSecurity: number;
  fractionBackend: number;
  fractionDevOps: number;
};

export type UserInfo = {
  username: string;
  imageUrl: string;
  profileUrl: string;
  isFeatured: boolean;
};

export type BrewEntry = {
  name: string;
  packageManager: string;
};

export type TBrewCard = {
  id: string;
  username: string;
  date: Date;
  totalPackages: number;
  totalMatches: number;
  isFeatured: boolean;
};
