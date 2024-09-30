import { NewEventCta } from "@/components/events/new-event-cta";
import { PopularEventsSection } from "@/components/events/popular-events-section";
import { Categories } from "@/components/homepage/categories";
import { SearchInput } from "@/components/ui/input";
import Heading1 from "@/components/ui/typography/heading1";
import Paragraph from "@/components/ui/typography/paragraph";
import { RecentEvents } from "@/components/events/recent-events";
import { dummyEvents } from "@/lib/data";

export default function Home() {
  const recentEvents = dummyEvents.slice(0, 3);

  return (
    <main className="min-h-screen w-full lg:min-h-[620px] lg:min-w-[1280px]">
      <section className="relative z-10 mt-8 flex h-[620px] flex-col items-center justify-center">
        <div
          className="absolute inset-0 bg-[url('/images/hero-background.svg')] bg-cover bg-center bg-no-repeat"
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-0/40 to-blue-1/40"
          aria-hidden="true"
        />

        <div className="z-20 mb-8 w-[45%] text-center">
          <Heading1 className="leading-[87px]">Evenstar Events </Heading1>
          <Paragraph>
            Discover, Attend, and Pay for Events Seamlessly. Empower Event
            Creators with Smart Contracts and Secure Payments
          </Paragraph>
        </div>

        <SearchInput />
      </section>

      <Categories />

      <PopularEventsSection data={dummyEvents} />

      <NewEventCta />

      <RecentEvents data={recentEvents} />
    </main>
  );
}
