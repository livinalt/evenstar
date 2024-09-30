"use client";

import { NAVBAR_ITEMS } from "@/lib/constants";
import { Logo } from "../logo";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

export function DesktopNavbar() {
  const pathname = usePathname();

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full bg-white transition-transform duration-300 ease-in-out`}
    >
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center gap-12">
          <Logo />
          {NAVBAR_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-base font-medium text-[#414141] hover:text-blue-1 ${pathname.includes(item.href) && "text-blue-1"}`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-12">
          <Link
            href="/events/create"
            className="text-base font-medium text-[#414141] hover:text-blue-1"
          >
            Create Event
          </Link>
          <Button className="rounded-[16px]">Connect</Button>
        </div>
      </div>
    </header>
  );
}
