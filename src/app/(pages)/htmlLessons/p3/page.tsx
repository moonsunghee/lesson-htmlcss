import PageHeader from "@/src/components/PageHeader";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula,okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";
export default function Html_P3() {
  const html_1 = `
  <li>List Item A</li>
  <li>List Item B</li>
  <li>List Item C</li>
  `;
  const html_2 = `
  <ol>
    <li>List Item A</li>
    <li>List Item B</li>
    <li>List Item C</li>
  </ol>
  `;
  const html_3 = `
  <ol>
    <li>List Item A</li>
    <li>List Item B</li>
    <li>List Item C</li>
  </ol>
  `;
  return (
    <>
    <PageHeader title={"목록 태그"} iconType={2} />
    <div className="page">
      <section>
        <h3>항목태그 : li (List Item)</h3>
        <p>
        li태그는 목록에서 각 항목을 구성하는 요소입니다. 여러개의 항목요소가 모여 하나의 목록을 구성하며 목록 요소에 따라 순서 또는 기호가 적용됩니다.
        </p>
        <SyntaxHighlighter language="html" style={dracula} customStyle={{ padding: 0 }}>
          {html_1}
        </SyntaxHighlighter>
        <div className="sample">
          <li>&nbsp;•&nbsp;&nbsp;List Item A</li>
          <li>&nbsp;•&nbsp;&nbsp;List Item B</li>
          <li>&nbsp;•&nbsp;&nbsp;List Item C</li>
        </div>
      </section>
      <section>
        <h3>순서목록태그 : ol (Ordered List)</h3>
        <p>
        ol태그는 li태그만 자식으로 허용하며 허용된 항목 요소들은 1. 2. 3.. 혹은 A. B. C.. 등의 순서 형태의 목록으로 화면에 표기 됩니다.
        </p>
        <SyntaxHighlighter language="html" style={dracula} customStyle={{ padding: 0 }}>
          {html_2}
        </SyntaxHighlighter>
        <div className="sample">
          <ol>
            <li>1.&nbsp;List Item A</li>
            <li>2.&nbsp;List Item B</li>
            <li>3.&nbsp;List Item C</li>
          </ol>
        </div>
      </section>
      <section>
        <h3>기호목록태그 : ul (Unordered List)</h3>
        <p>
        ul태그는 li태그만 자식으로 허용하며 허용된 항목 요소들은  • • • 혹은 ▫ ▫ ▫ 등의 기호 형태의 목록으로 화면에 표기 됩니다.
        </p>
        <SyntaxHighlighter language="html" style={dracula} customStyle={{ padding: 0 }}>
          {html_2}
        </SyntaxHighlighter>
        <div className="sample">
          <ul>
            <li>&nbsp;•&nbsp;&nbsp;List Item A</li>
            <li>&nbsp;•&nbsp;&nbsp;List Item B</li>
            <li>&nbsp;•&nbsp;&nbsp;List Item C</li>
          </ul>
        </div>
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