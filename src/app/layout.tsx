import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Providers from "@/components/providers";

export const metadata: Metadata = {
  title: "Tabdraw - Collaborative bookmark",
  description: "Tabdraw - Collaborative bookmark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Providers>
          <main className="relative flex min-h-screen flex-col justify-between overflow-x-hidden">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
