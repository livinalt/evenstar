import { SearchInput } from "@/components/ui/input";
import Heading1 from "@/components/ui/typography/heading1";
import Paragraph from "@/components/ui/typography/paragraph";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full lg:min-h-[620px] lg:min-w-[1280px]">
      <div
        className="absolute inset-0 bg-[url('/images/hero-background.svg')] bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
      />

      <div
        className="from-blue-0/40 to-blue-1/40 absolute inset-0 bg-gradient-to-r"
        aria-hidden="true"
      />

      <section className="relative z-10 flex h-[620px] flex-col items-center justify-center">
        <div className="mb-8 w-[45%] text-center">
          <Heading1 className="leading-[87px]">Evenstar Events </Heading1>
          <Paragraph>
            Discover, Attend, and Pay for Events Seamlessly. Empower Event
            Creators with Smart Contracts and Secure Payments
          </Paragraph>
        </div>

        <SearchInput />
      </section>
    </main>
  );
}
