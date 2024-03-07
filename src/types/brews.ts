export type Brews = {
  brews: BrewsItem[];
};

type BrewsItem = {
  id: string;
  data: BrewEntry[];
};

export type BrewEntry = {
  name: string;
  packageManager: string;
};
