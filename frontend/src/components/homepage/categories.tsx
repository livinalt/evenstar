import { CATEGORIES } from "@/lib/constants";
import Heading2 from "../ui/typography/heading2";
import Image from "next/image";
import Paragraph from "../ui/typography/paragraph";

export function Categories() {
  return (
    <section className="space-y-[60px] bg-white px-10 py-20">
      <Heading2 className="text-center text-[#282A31]">
        Explore Categories
      </Heading2>

      <div className="flex items-center justify-between">
        {CATEGORIES.map((item) => (
          <div
            key={item.title}
            className="group flex w-[170px] cursor-pointer flex-col items-center space-y-[22px] rounded-md border border-white hover:border-blue-1"
          >
            <Image
              src={item.imageUrl}
              alt="category image"
              width={125}
              height={125}
            />
            <Paragraph className="text-center font-semibold leading-[21.82px] text-[#5A5A5A] group-hover:text-blue-1">
              {item.title}
            </Paragraph>
          </div>
        ))}
      </div>
    </section>
  );
}
