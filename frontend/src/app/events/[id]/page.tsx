import { EventHero } from "@/components/events/event-hero";
import { EventHighlight } from "@/components/events/event-highlight";
import { EventSearch } from "@/components/events/event-search";
import { RecentEvents } from "@/components/events/recent-events";
import { Separator } from "@/components/ui/separator";
import Heading2 from "@/components/ui/typography/heading2";
import Heading3 from "@/components/ui/typography/heading3";
import Paragraph from "@/components/ui/typography/paragraph";
import { EVENT_ITEMS } from "@/lib/constants";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const selectedEvent = EVENT_ITEMS[+id];

  const recentEvents = EVENT_ITEMS.slice(0, 3);

  const { title } = selectedEvent;

  return (
    <main>
      <section className="mt-24">
        <EventSearch />
        <div className="mx-auto max-w-screen-xl py-10 pt-9">
          <Heading2 className="text-2xl font-medium text-[#282A31]">
            {title}
          </Heading2>
          <Separator className="my-5" />
          <EventHero title={title} />
          <EventHighlight data={selectedEvent} />

          <div className="mb-20 space-y-[6px]">
            <Heading3 className="text-2xl leading-[32px] text-[#282A31]">
              Event Description
            </Heading3>

            <Paragraph className="text-base text-[#282A31]">
              lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
              dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
              amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
              ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
              sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
              lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
              dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
              amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
              ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
              sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
              lorem ipsum dolor sit amet lorem ipsum dolor sit amet{" "}
            </Paragraph>
          </div>

          <RecentEvents data={recentEvents} hasButton />
        </div>
      </section>
    </main>
  );
}
