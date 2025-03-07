import PageHeader from "@/src/components/PageHeader";

export default function Html_P3() {
  return (
    <>
    <PageHeader title={"목록 태그"} iconType={2} />
    <div className="page">
      <section>
        <h3>항목태그 : li (List Item)</h3>
        <p></p>
      </section>
      <section>
        <h3>순서목록태그 : ol (Ordered List)</h3>
        <p></p>
      </section>
      <section>
        <h3>기호목록태그 : ul (Unordered List)</h3>
        <p></p>
      </section>
      <section className="important">
        <h3>HTML Validator</h3>
        <ol>
          <li>li요소는 ol요소와 ul요소 이외 다른 요소의 자식으로 허용되지 않습니다.</li>
          <li>ol요소, ul요소는 li요소만 자식으로 허용합니다.</li>
          <li>li요소는 다른 블럭요소를 자식으로 허용합니다.</li>
        </ol>
      </section>
    </div>
    </>
  );
}