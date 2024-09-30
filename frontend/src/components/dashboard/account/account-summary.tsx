import Paragraph from "@/components/ui/typography/paragraph";

export function AccountSummary() {
  return (
    <div className="flex items-center justify-between rounded-[8px] bg-blue-2 p-[30px]">
      <SummaryItem title="Events Created" value="40" />
      <SummaryItem title="Events Attended" value="40" />
      <SummaryItem title="Account Status" value="Active" />
    </div>
  );
}

function SummaryItem({ value, title }: { value: string; title: string }) {
  return (
    <div className="rounded-[8px] bg-white px-[72px] py-9">
      <Paragraph className="font-semibold text-[#282A31]">{value}</Paragraph>
      <Paragraph className="text-base font-semibold text-[#737B7D]">
        {title}
      </Paragraph>
    </div>
  );
}
