import { ICategory, IEventItem, INavbar } from "../../types";

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

export const EVENT_ITEMS: IEventItem[] = [
  {
    title: "Ethereum Foundation Meet up",
    imageUrl: "/images/event1.png",
    address: "Cockrane Center Main Lounge, Zurich ",
    time: "8:00",
    size: "100",
    cost: "free",
    date: "NOV 28",
    eventUrl: "/events/1",
    eventHost: "Sam Genji Wise",
  },
  {
    title: "Ethereum Foundation Meet up",
    imageUrl: "/images/event2.png",
    address: "Cockrane Center Main Lounge, Zurich ",
    time: "8:00",
    size: "100",
    cost: "free",
    date: "NOV 28",
    eventUrl: "/events/1",
    eventHost: "Sam Genji Wise",
  },
  {
    title: "Ethereum Foundation Meet up",
    imageUrl: "/images/event3.png",
    address: "Cockrane Center Main Lounge, Zurich ",
    time: "8:00",
    size: "100",
    cost: "free",
    date: "NOV 28",
    eventUrl: "/events/1",
    eventHost: "Sam Genji Wise",
  },
  {
    title: "Ethereum Foundation Meet up",
    imageUrl: "/images/event4.png",
    address: "Cockrane Center Main Lounge, Zurich ",
    time: "8:00",
    size: "100",
    cost: "free",
    date: "NOV 28",
    eventUrl: "/events/1",
    eventHost: "Sam Genji Wise",
  },
  {
    title: "Ethereum Foundation Meet up",
    imageUrl: "/images/event5.png",
    address: "Cockrane Center Main Lounge, Zurich ",
    time: "8:00",
    size: "100",
    cost: "free",
    date: "NOV 28",
    eventUrl: "/events/1",
    eventHost: "Sam Genji Wise",
  },
  {
    title: "Ethereum Foundation Meet up",
    imageUrl: "/images/event6.png",
    address: "Cockrane Center Main Lounge, Zurich ",
    time: "8:00",
    size: "100",
    cost: "free",
    date: "NOV 28",
    eventUrl: "/events/1",
    eventHost: "Sam Genji Wise",
  },
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
