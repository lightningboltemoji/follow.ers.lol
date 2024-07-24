import type { Metadata } from "next";
import "./globals.css";
import PageHeader from "./page-header";

export const metadata: Metadata = {
  title: "follow.ers.lol",
  description: "Discover who doesn't follow back on Instagram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageHeader />
        {children}
      </body>
    </html>
  );
}
