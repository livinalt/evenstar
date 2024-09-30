import { ICategory, INavbar } from "../../types";

export const NAVBAR_ITEMS: INavbar[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  // {
  //   title: "About",
  //   href: "/about",
  // },
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

export const FOOTER_ITEMS: INavbar[] = [
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Contact Us",
    href: "/",
  },
  {
    title: "FAQs",
    href: "/",
  },
  {
    title: "Terms of Service",
    href: "/",
  },
  {
    title: "Privacy Policy",
    href: "/",
  },
];

export const SIDEBAR_ITEMS: INavbar[] = [
  { title: "Account", href: "/dashboard/account" },
  { title: "Notification", href: "/dashboard/notification" },
];
