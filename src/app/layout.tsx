import type { Metadata } from "next";
import "./reset.css";
import "./globals.scss";
import PageHeader from "@/src/components/PageHeader";
import PageNavigation from "@/src/components/GlobalNav";
import GlobalNav from "@/src/components/GlobalNav";
export const metadata: Metadata = {
  title: "HTML CSS/SCSS Lesson",
  description: "HTML/CSS/SCSS lesson for Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body >
        {children}
        <GlobalNav />
      </body>
    </html>
  );
}
