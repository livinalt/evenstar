import { IEventItem } from "../../../types";
import { EventItem } from "./event-item";
import { EventsSectionWrapper } from "./events-section-wrapper";

export function RecentEvents({ data }: { data: IEventItem[] }) {
  return (
    <EventsSectionWrapper title="Happening Today">
      {data.map((item) => (
        <EventItem key={item.imageUrl} data={item} />
      ))}
    </EventsSectionWrapper>
  );
}
