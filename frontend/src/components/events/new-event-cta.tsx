import Link from "next/link";
import { buttonVariants } from "../ui/button";
import Heading3 from "../ui/typography/heading3";
import Paragraph from "../ui/typography/paragraph";
import { Icons } from "../icons";

export function NewEventCta() {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl mx-auto px-10 py-[70px]">
        <div className="bg-blue-2 flex items-center justify-between rounded-[16px] px-14 py-[70px]">
          <div className="w-[637px]">
            <Heading3 className="w-[521px] font-bold text-[#282A31]">
              Create Your events and conferences with Block Event
            </Heading3>
            <Paragraph className="text-[#282A31]">
              Got a show, event, activity or a great experience? Partner with us
              & get listed on Eventify
            </Paragraph>
          </div>

          <Link
            href={"events/create"}
            className={`${buttonVariants({ variant: "default", size: "lg" })} h-20 gap-[10px]`}
          >
            <Icons.newCalenderIcon />
            <span>Create Event</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
