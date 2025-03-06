import GlobalNav from "@/src/components/GlobalNav";
import PageHeader from "@/src/components/PageHeader";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PageHeader title={"VS Code"} iconType={1} />
      {children}
      <GlobalNav />
    </>
  );
}
