export type Brews = {
  brews: BrewsItem[];
};

export type BrewsItem = {
  id: string;
  data: BrewEntry[];
  dateUploaded: string;
  userInfo: UserInfo
};

export type UserInfo = {
  username: string;
  imageUrl: string;
  profileUrl: string;
}

export type BrewEntry = {
  name: string;
  packageManager: string;
};
