import { EVENT_ITEMS } from "@/lib/constants";
import Heading3 from "../ui/typography/heading3";
import { EventItem } from "./event-item";
import { buttonVariants } from "../ui/button";
import Link from "next/link";

export function PopularEventsSection() {
  return (
    <section className="item-center flex flex-col bg-[#ECF1FF] pb-16 pt-20">
      <Heading3 className="text-center text-[#282A31]">Popular Events</Heading3>

      <div className="mb-[60px] mt-5 grid max-w-screen-xl grid-cols-3 grid-rows-2 gap-10 px-10">
        {EVENT_ITEMS.map((item) => (
          <EventItem key={item.imageUrl} data={item} />
        ))}
      </div>

      <Link
        href={"/events"}
        className={`${buttonVariants({ variant: "outline", size: "lg" })} mx-auto w-[610px]`}
      >
        See More
      </Link>
    </section>
  );
}
