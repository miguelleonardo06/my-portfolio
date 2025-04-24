export type MenuListType = {
  label: string;
  icon: string;
  route: string;
};

export type OverviewInfoType = {
  title: string;
  body: string;
  icon?: string;
};

export type AboutMeType = {
  category: string;
  title: string;
  body: string;
};

export type TechStackType = {
  tech_name: string;
  icon: string;
  category: "front-end" | "back-end" | null;
  body: string;
};
