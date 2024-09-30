import { IEventItem } from "../../../types";
import { EventItem } from "./event-item";
import { EventsSectionWrapper } from "./events-section-wrapper";

interface Props {
  data: IEventItem[];
  hasButton?: boolean;
}

export function RecentEvents({ data, hasButton }: Props) {
  return (
    <EventsSectionWrapper title="Happening Today" hasMoreButton={hasButton}>
      {data.map((item) => (
        <EventItem key={item.imageUrl} data={item} />
      ))}
    </EventsSectionWrapper>
  );
}
