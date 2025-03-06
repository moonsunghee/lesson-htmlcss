import GlobalNav from "@/src/components/GlobalNav";
import PageHeader from "@/src/components/PageHeader";

import "@/src/styles/pages.layout.scss";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <GlobalNav />
    </>
  );
}
