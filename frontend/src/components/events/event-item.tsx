import Image from "next/image";
import { IEventItem } from "../../../types";
import Paragraph from "../ui/typography/paragraph";
import { Icons } from "../icons";
import Link from "next/link";

interface Props {
  data: IEventItem;
}

export function EventItem({ data }: Props) {
  const { imageUrl, date, title, time, size, cost, address, eventUrl } = data;

  return (
    <Link
      href={eventUrl}
      className="h-[306px] w-[373px] rounded-[8px] bg-white px-10 pb-[35px] pt-[30px] shadow-md transition-transform duration-200 ease-linear hover:-translate-y-2 hover:shadow-lg"
    >
      <Image src={imageUrl} alt="event image" width={293} height={175} />
      <div className="mt-[10px] flex gap-2">
        <Paragraph className="w-[45px] text-center text-xl font-bold text-green-0">
          {date}
        </Paragraph>

        <div>
          <Paragraph className="text-base font-semibold leading-[22px] text-[#282A31]">
            {title}
          </Paragraph>
          <Paragraph className="mb-[3px] text-xs font-semibold text-[#656565]">
            {address}
          </Paragraph>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Icons.calenderIcon />
              <Paragraph className="text-[10px] font-medium leading-[13px] text-[#999393]">
                {time} GMT
              </Paragraph>
            </div>
            <div className="flex items-center gap-1">
              <Icons.userGroupIcon />
              <Paragraph className="text-[10px] font-medium leading-[13px] text-[#999393]">
                {size} Attending
              </Paragraph>
            </div>
            <div className="flex items-center gap-1">
              <Icons.ticketIcon />
              <Paragraph className="text-[10px] font-medium leading-[13px] text-[#999393]">
                {cost}
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
