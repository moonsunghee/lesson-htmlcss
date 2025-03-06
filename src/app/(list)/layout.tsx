import type { Metadata } from "next";
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
      </body>
    </html>
  );
}
