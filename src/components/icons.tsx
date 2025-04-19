import { CircleUser, BookOpenText, Cloud } from "lucide-react";

export type IconKeys = keyof typeof icons;
type IconsType = {
  [key in IconKeys]: React.ElementType;
};
const icons = {
  circleUser: CircleUser,
  bookOpenText: BookOpenText,
  cloud: Cloud,
};

export const Icons: IconsType = icons;
