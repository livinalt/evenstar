import { EventItem } from "@/components/events/event-item";
import { EventSearch } from "@/components/events/event-search";
import Heading1 from "@/components/ui/typography/heading1";
import { EVENT_ITEMS } from "@/lib/constants";

export default function Page() {
  return (
    <main>
      <div className="mt-24">
        <EventSearch hasFilter />
        <section>
          <div className="mx-auto max-w-screen-xl bg-white px-4 py-10">
            <Heading1 className="text-center text-[#282A31]">
              All Events
            </Heading1>

            <div className="mt-10 grid grid-cols-3 grid-rows-2 gap-10">
              {EVENT_ITEMS.map((item) => (
                <EventItem key={item.imageUrl} data={item} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
