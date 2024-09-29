"use client";

import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { SearchInput } from "../ui/input";
import Heading2 from "../ui/typography/heading2";
import Heading3 from "../ui/typography/heading3";
import Paragraph from "../ui/typography/paragraph";

interface Props {
  hasFilter?: boolean;
}

interface WrapperProps {
  title: string;
  id1: string;
  label1: string;
  id2: string;
  label2: string;
}

const filterOptions: WrapperProps[] = [
  {
    title: "Date",
    id1: "week",
    label1: "This Week",
    id2: "date",
    label2: "Pick a Date",
  },
  {
    title: "Price",
    id1: "Free",
    label1: "Free",
    id2: "Paid",
    label2: "Paid",
  },
];

export function EventSearch({ hasFilter }: Props) {
  const [resultReady, setResultReady] = useState<boolean>(false);

  // setResultReady(false);

  return (
    <section>
      <div className="bg-blue-2">
        <div className="flex max-w-screen-xl items-center justify-between px-10 py-5">
          <Heading2 className="text-[#282A31]">Block Event</Heading2>
          <SearchInput />
        </div>
      </div>

      {hasFilter && (
        <div className="flex gap-4 border-b border-[#DEDEDE] py-[30px] pl-[45px]">
          {filterOptions.map((item) => (
            <OptionsWrapper
              key={item.title}
              title={item.title}
              id1={item.id1}
              id2={item.id2}
              label1={item.label1}
              label2={item.label2}
            />
          ))}
        </div>
      )}

      {resultReady && (
        <div>
          <div className="max-w-screen-xl px-12 pt-6">
            <Heading3 className="text-[#282A31]">Search Results</Heading3>

            <div className="grid grid-cols-3 grid-rows-1 gap-10">
              {/* put some search results here */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function OptionsWrapper({ title, id1, id2, label1, label2 }: WrapperProps) {
  return (
    <div className="flex items-center justify-between gap-[18px]">
      <Paragraph className="text-base font-medium text-[#454444]">
        {title}
      </Paragraph>
      <div className="flex gap-[18px]">
        <div className="flex items-center space-x-[10px]">
          <Checkbox id={id1} />
          <label htmlFor={id1} className="text-sm font-normal text-[#ACA9A9]">
            {label1}
          </label>
        </div>

        <div className="flex items-center space-x-[10px]">
          <Checkbox id={id2} />
          <label htmlFor={id2} className="text-sm font-normal text-[#ACA9A9]">
            {label2}
          </label>
        </div>
      </div>
    </div>
  );
}
