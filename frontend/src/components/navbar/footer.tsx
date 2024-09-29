import { FOOTER_ITEMS } from "@/lib/constants";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-blue-1">
      <div className="flex max-w-screen-xl items-center justify-between px-64 py-[74px]">
        {FOOTER_ITEMS.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            className="text-sm text-white hover:text-green-0"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </footer>
  );
}
