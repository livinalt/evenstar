"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { INavbar } from "../../../types";
import clsx from "clsx";
import { SIDEBAR_ITEMS } from "@/lib/constants";

// export function Sidebar() {
export function Sidebar({ children }: { children: React.ReactNode }) {
  const helpItem = {
    title: "Help",
    href: "/dasboard/account",
  };

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[310px_1fr]">
      <aside className="sticky top-0 h-screen bg-blue-2 pt-24">
        <div className="flex h-full max-h-screen flex-col">
          <nav className="flex flex-1 flex-col justify-between overflow-auto">
            <ul className="space-y-[16px]">
              {SIDEBAR_ITEMS.map((item) => (
                <li key={item.title}>
                  <NavItem item={item} />
                </li>
              ))}
            </ul>

            <NavItem item={helpItem} />
          </nav>
        </div>
      </aside>
      <>{children}</>
    </div>
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
