import { ICategory, INavbar } from "../../types";

export const NAVBAR_ITEMS: INavbar[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Events",
    href: "/events",
  },
];

export const CATEGORIES: ICategory[] = [
  { title: "Entertainment", imageUrl: "/images/entertainment.png" },
  { title: "Educational & Business", imageUrl: "/images/edu&biz.png" },
  { title: "Cultural & Arts", imageUrl: "/images/culture&arts.png" },
  { title: "Sports & Fitness", imageUrl: "/images/sports&fit.png" },
  { title: "Technology & Innovation", imageUrl: "/images/tech&inno.png" },
  { title: "Travel & Adventure", imageUrl: "/images/travel&adv.png" },
];
