export type Brews = {
  brews: BrewsItem[];
};

export type BrewsItem = {
  id: string;
  data: BrewEntry[];
  date: Date;
  userInfo: UserInfo
};

export type UserInfo = {
  username: string;
  imageUrl: string;
  profileUrl: string;
  isFeatured: boolean;
}

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
