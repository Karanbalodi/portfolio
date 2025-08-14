import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppNavigation } from "@/components/app-navigation";
import { SpotifyWiget } from "@/components/spotify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karan Balodi | Portfolio",
  description: "Karan Balodi's personal portfolio showcasing skills, projects, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppNavigation />
        <div className="2xl:flex justify-center">
          <div className="2xl:w-10/12 overscroll-none">{children}</div>
        </div>
        <SpotifyWiget />
      </body>
    </html>
  );
}
