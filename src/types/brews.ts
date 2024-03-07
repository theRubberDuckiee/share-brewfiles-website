export type Brews = {
  brews: BrewsItem[];
};

export type BrewsItem = {
  id: string;
  data: BrewEntry[];
};

export type BrewEntry = {
  name: string;
  packageManager: string;
};
