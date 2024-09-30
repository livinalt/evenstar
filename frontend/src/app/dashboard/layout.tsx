import { Sidebar } from "@/components/navbar/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen pt-24">
      {/* <Sidebar>{children}</Sidebar> */}
      <Sidebar />
      <>{children}</>
    </main>
  );
}
