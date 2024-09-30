import CreateEventForm from "@/components/events/create-event-form";
import Heading1 from "@/components/ui/typography/heading1";

export default function Page() {
  return (
    <section className="my-24">
      <Heading1 className="text-center font-medium text-[#282A31] lg:text-[32px]">
        Create Event
      </Heading1>

      <div className="mx-auto mt-14 w-[833px] rounded-[36px] border px-32 py-12 shadow-md">
        <CreateEventForm />
      </div>
    </section>
  );
}
