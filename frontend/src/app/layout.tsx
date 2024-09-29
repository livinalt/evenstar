import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { DesktopNavbar } from "@/components/navbar/deskop-navbar";

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
      </body>
    </html>
  );
}
