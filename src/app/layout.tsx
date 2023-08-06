import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Navbar from "@/components/Navbar";

const Font = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Petrais",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ overflowX: "hidden" }}>
      <body style={{ overflowX: "hidden" }} className={Font.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
