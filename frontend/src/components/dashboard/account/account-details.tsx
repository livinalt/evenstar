import Paragraph from "@/components/ui/typography/paragraph";
import Image from "next/image";

export function AccountDetails({ address }: { address: string }) {
  return (
    <div className="flex items-center gap-[90px] rounded-[8px] bg-blue-2 px-16 py-10">
      <div className="relative">
        <Image
          src={"/images/profile-pic.png"}
          alt="profile picture"
          width={160}
          height={160}
          className="cursor-pointer"
        />
      </div>

      <div className="flex w-[496px] flex-col gap-6">
        <AccountItem title="Username" value="ricky00x" />
        <AccountItem title="Address" value={address} />
        <AccountItem title="Website" value="web3boys.com" />
        <AccountItem title="Email" value="rickson@web3boys.com" />
        <AccountItem title="Company" value="Web3 Boys" />
      </div>
    </div>
  );
}

function AccountItem({ title, value }: { title: string; value: string }) {
  return (
    <div className="flex w-full items-center justify-between">
      <Paragraph className="text-base font-semibold text-[#737B7D]">
        {title}
      </Paragraph>
      <div className="w-[345px] rounded-full bg-white px-6 py-2">
        <Paragraph className="text-base text-[#282A31]">{value}</Paragraph>
      </div>
    </div>
  );
}
