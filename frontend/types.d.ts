export interface INavbar {
  title: string;
  href: string;
}

export interface ICategory {
  imageUrl: string;
  title: string;
}

export interface IEventItem {
  imageUrl: string;
  title: string;
  address: string;
  time: string;
  size: string;
  cost: string;
  date: string;
  eventUrl: string;
  eventHost: string;
}

export interface INotification {
  imageUrl: string;
  message: string;
  description: string;
}
