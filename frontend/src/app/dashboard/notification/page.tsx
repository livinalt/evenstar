import Heading2 from "@/components/ui/typography/heading2";
import Paragraph from "@/components/ui/typography/paragraph";
import { dummyNotifications } from "@/lib/data";
import Image from "next/image";

export default function Page() {
  return (
    <div className="mb-12 space-y-[16px]">
      <Heading2 className="text-2xl leading-[33px] text-[#282A31]">
        Notifcations
      </Heading2>

      <div className="space-y-[20px] rounded-[8px] bg-blue-2 px-7 py-[50px]">
        {dummyNotifications.map((item) => (
          <div
            key={item.imageUrl}
            className="flex items-center gap-2 rounded-[32px] bg-white px-5 py-8"
          >
            <Image
              src={item.imageUrl}
              alt="notification image"
              width={40}
              height={40}
            />
            <div>
              <Paragraph className="mb-1 text-base font-semibold text-[#282A31]">
                {item.message}
              </Paragraph>
              <Paragraph className="text-base font-normal leading-[30px] text-[#282A31]">
                {item.description}
              </Paragraph>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
