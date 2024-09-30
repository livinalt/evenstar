import { AccountDetails } from "@/components/dashboard/account/account-details";
import { AccountSummary } from "@/components/dashboard/account/account-summary";
import Heading2 from "@/components/ui/typography/heading2";

export default function Page() {
  const address = "0x00ade6329dbwcj9i3en";

  return (
    <div className="my-12 space-y-[30px]">
      <div className="space-y-[14px]">
        <Heading2 className="text-2xl leading-[33px] text-[#282A31]">
          Profile
        </Heading2>
        <AccountDetails address={address} />
      </div>

      <div className="space-y-[14px]">
        <Heading2 className="text-2xl leading-[33px] text-[#282A31]">
          Summary
        </Heading2>
        <AccountSummary />
      </div>
    </div>
  );
}
