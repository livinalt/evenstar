import { Sidebar } from "@/components/navbar/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Sidebar>
      <main className="pt-24">
        <section className="px-10 pt-[30px]">{children}</section>
      </main>
    </Sidebar>
  );
}
