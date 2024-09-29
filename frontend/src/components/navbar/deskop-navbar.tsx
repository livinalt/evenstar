"use client";

import { NAVBAR_ITEMS } from "@/lib/constants";
import { Logo } from "../logo";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { useScroll } from "../../../hooks/useScroll";

export function DesktopNavbar() {
  const { isVisible } = useScroll();
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full bg-white transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center gap-12">
          <Logo />
          {NAVBAR_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-base font-medium text-[#414141] hover:text-blue-1 ${isActive(item.href) && "text-blue-1 underline"}`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-12">
          <Link
            href="/events/create"
            className="text-base font-medium text-[#414141]"
          >
            Create Event
          </Link>
          <Button className="rounded-[16px]">Connect</Button>
        </div>
      </div>
    </header>
  );
}
