"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { INavbar } from "../../../types";
import clsx from "clsx";
import { SIDEBAR_ITEMS } from "@/lib/constants";

export function Sidebar() {
  const helpItem = {
    title: "Help",
    href: "/dasboard/account",
  };
  return (
    <aside className="h-screen w-[310px] overflow-y-auto bg-blue-2">
      <nav className="flex h-full flex-col justify-between pb-24">
        <ul className="space-y-4">
          {SIDEBAR_ITEMS.map((item) => (
            <li key={item.href}>
              <NavItem item={item} />
            </li>
          ))}
        </ul>

        <NavItem item={helpItem} />
      </nav>
    </aside>
  );
}

function NavItem({ item }: { item: INavbar }) {
  const pathname = usePathname();

  const { href, title } = item;
  return (
    <Link
      href={href}
      className={clsx(
        "block bg-transparent py-5 pl-[50px] text-base font-medium hover:bg-blue-0 hover:text-white",
        {
          "bg-[#3D70FF] text-white": pathname === href,
        },
      )}
    >
      {title}
    </Link>
  );
}
