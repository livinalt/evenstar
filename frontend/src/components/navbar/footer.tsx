"use client";

import { FOOTER_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  const isDashboard = pathname.includes("/dashboard");

  return (
    <>
      {!isDashboard && (
        <footer className="bg-blue-1">
          <div className="flex max-w-screen-xl items-center justify-between px-64 py-10">
            {FOOTER_ITEMS.map((item) => (
              <Link
                href={item.href}
                key={item.title}
                className="text-sm text-white hover:text-black"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </footer>
      )}
    </>
  );
}
