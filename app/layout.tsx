
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sustainable Fashion and Future of Thrifting",
  description:
    "An article exploring the depth of sustainable fashion in india",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
