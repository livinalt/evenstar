import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { DesktopNavbar } from "@/components/navbar/deskop-navbar";
import { Footer } from "@/components/navbar/footer";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Evenstar",
  description: "Event management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        <DesktopNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
