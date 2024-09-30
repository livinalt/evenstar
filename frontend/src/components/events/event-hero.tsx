import Image from "next/image";
import Paragraph from "../ui/typography/paragraph";
import { Button } from "../ui/button";
import { Icons } from "../icons";

interface Props {
  title: string;
}

export function EventHero({ title }: Props) {
  return (
    <div className="bg-blue-2 mx-auto flex w-[1200px] items-center rounded-[16px] p-5">
      <Image
        src={"/images/event-hero.png"}
        alt="event main image"
        width={782}
        height={360}
      />

      <div className="ml-12 space-y-[16px] py-[78px]">
        <div>
          <Paragraph className="text-sm text-[#A7A7A7]">Event Title</Paragraph>
          <Paragraph className="font-medium text-[#282A31]">{title}</Paragraph>
        </div>

        <Button variant={"secondary"} className="w-full gap-2">
          <Icons.ticketIcon stroke="#ffffff" /> <span>Attendance is free</span>
        </Button>

        <div className="flex gap-[10px]">
          <Button variant={"outline"} className="w-1/2 gap-4">
            <span>Share</span> <Icons.shareIcon />
          </Button>

          <Button className="w-1/2">Register</Button>
        </div>

        <Paragraph className="text-base font-semibold text-blue-1 hover:underline">
          + Add to Calendar
        </Paragraph>
      </div>
    </div>
  );
}
