import { EventItem } from "./event-item";
import { IEventItem } from "../../../types";
import { EventsSectionWrapper } from "./events-section-wrapper";

export function PopularEventsSection({ data }: { data: IEventItem[] }) {
  return (
    <EventsSectionWrapper title="Popular Events" hasMoreButton doubleRow>
      {data.map((item) => (
        <EventItem key={item.imageUrl} data={item} />
      ))}
    </EventsSectionWrapper>
  );
}
