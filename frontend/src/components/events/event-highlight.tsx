import Image from "next/image";
import Paragraph from "../ui/typography/paragraph";
import { PropsWithChildren } from "react";
import { IEventItem } from "../../../types";

export function EventHighlight({ data }: { data: IEventItem }) {
  const { eventHost, address, size, time } = data;
  return (
    <div className="mb-[30px] mt-10 flex w-full items-center gap-[120px]">
      <div className="flex items-center gap-[26px]">
        <Image
          src={"/images/event-host-pic.png"}
          alt="image host"
          width={40}
          height={40}
        />

        <div>
          <ValueText>{eventHost}</ValueText>
          <TitleText>Host</TitleText>
        </div>
      </div>

      <div>
        <ValueText>{address}</ValueText>
        <TitleText>Location</TitleText>
      </div>

      <div>
        <ValueText>{size}</ValueText>
        <TitleText>Attending</TitleText>
      </div>

      <div>
        <ValueText>{time}</ValueText>
        <TitleText>Time</TitleText>
      </div>

      <div>
        <ValueText>Thursday 28th November,2024</ValueText>
        <TitleText>Date</TitleText>
      </div>
    </div>
  );
}

function ValueText({ children }: PropsWithChildren) {
  return (
    <Paragraph className="text-base font-semibold text-[#282A31]">
      {children}
    </Paragraph>
  );
}

function TitleText({ children }: PropsWithChildren) {
  return (
    <Paragraph className="text-sm font-normal text-[#A7A7A7]">
      {children}
    </Paragraph>
  );
}
