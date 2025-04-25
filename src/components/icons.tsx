import {
  CircleUser,
  BookOpenText,
  Cloud,
  ListFilterPlus,
  X,
  Facebook,
  Linkedin,
  Phone,
  Mail,
} from "lucide-react";
import typescriptIcon from "@/assets/icons/typescript.png";
import javascriptIcon from "@/assets/icons/js.png";
import reactJsIcon from "@/assets/icons/physics.png";
import tailWindIcon from "@/assets/icons/tailwindcss.png";
import gitHubIcon from "@/assets/icons/github.png";
import phpIcon from "@/assets/icons/php.png";
import htmlIcon from "@/assets/icons/html.png";
import cssIcon from "@/assets/icons/css-3.png";
import mysqlIcon from "@/assets/icons/database.png";
import shadcnIcon from "@/assets/icons/shadcn.png";

export type IconKeys = keyof typeof icons;
type IconsType = {
  [key in IconKeys]: React.ElementType;
};

const icons = {
  circleUser: CircleUser,
  bookOpenText: BookOpenText,
  cloud: Cloud,
  filter: ListFilterPlus,
  delete: X,
  facebook: Facebook,
  linkin: Linkedin,
  phone: Phone,
  mail: Mail,
};

type ImageIconType = {
  [key: string]: string;
};
const techStackIcons = {
  typescriptIcon,
  javascriptIcon,
  reactJsIcon,
  tailWindIcon,
  gitHubIcon,
  phpIcon,
  htmlIcon,
  cssIcon,
  mysqlIcon,
  shadcnIcon,
};
export const Icons: IconsType = icons;
export const TechStackIcons: ImageIconType = techStackIcons;
