export type Brews = {
  brews: BrewsItem[];
};

export type BrewsItem = {
  id: string;
  data: BrewEntry[];
  date: string;
  userInfo: {
    profileUrl: string;
    avatarUrl: string;
    username: string;
  };
};

export type BrewEntry = {
  name: string;
  packageManager: string;
};

export type TBrewCard = {
  id: string;
  username: string;
  date: string;
  totalPackages: number;
  totalMatches: number;
};
