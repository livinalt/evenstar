import { PropsWithChildren } from "react";
import Heading3 from "../ui/typography/heading3";
import { buttonVariants } from "../ui/button";
import Link from "next/link";

interface Props {
  title: string;
  hasMoreButton?: boolean;
  doubleRow?: boolean;
}

export function EventsSectionWrapper({
  title,
  hasMoreButton,
  children,
  doubleRow,
}: PropsWithChildren<Props>) {
  return (
    <section className="item-center bg-blue-2 flex flex-col pb-16 pt-20">
      <Heading3 className="text-center text-[#282A31]">{title}</Heading3>

      <div
        className={`mt-5 grid max-w-screen-xl mx-auto grid-cols-3 gap-10 px-10 ${doubleRow ? "grid-rows-2" : "grid-rows-1"}`}
      >
        {children}
      </div>

      {hasMoreButton && (
        <Link
          href={"/events"}
          className={`${buttonVariants({ variant: "outline", size: "lg" })} mx-auto mt-[60px] h-[70px] w-[610px]`}
        >
          See More
        </Link>
      )}
    </section>
  );
}
