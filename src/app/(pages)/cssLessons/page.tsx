import PageHeader from "@/src/components/PageHeader";

export default function page() {
  return (
    <>
      <PageHeader title={"test title"} iconType={0}/>
      <div className="page">
        <nav>
          page navigation
        </nav>
      </div>
    </>
  );
}