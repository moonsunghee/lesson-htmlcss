import PageHeader from "@/src/components/PageHeader";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus, vs } from "react-syntax-highlighter/dist/cjs/styles/prism";
export default function Css_P4() {
  const prism_css = vscDarkPlus;
  const prism_html = vs;
  const hlStyles = { padding: 0, fontSize: "16px" };
  const code_1 = [`
  요소:first-child{property: value;}
  `,`
  요소:last-child{property: value;}
  `,`
  요소:nth-child(n){property: value;}
  `,`
  요소:first-of-type{property: value;}
  `,`
  요소:last-of-tyle{property: value;}
  `,`
  요소:nth-of-type(n){property: value;}
  `
    ];
  return (
    <>
    <PageHeader title={"필터선택자자 "} iconType={3} />
    <div className="page">
      <section>
        <p>
        필터 선택자는 요소에 조건을 추가 하여 선택된 요소가 조건을 만족 할때 선택 됩니다.
        </p>
      </section>
      <section>
        <h3>자식필터 선택자</h3>
        <SyntaxHighlighter language="css" style={prism_css} customStyle={hlStyles}>
          {code_1[0]}
        </SyntaxHighlighter>
        <p>선택된 요소는 첫 번째 자식 요소 이어야 합니다.</p>
        <SyntaxHighlighter language="css" style={prism_css} customStyle={hlStyles}>
          {code_1[1]}
        </SyntaxHighlighter>
        <p>선택된 요소는 마지막 자식 요소 이어야 합니다.</p>
        <SyntaxHighlighter language="css" style={prism_css} customStyle={hlStyles}>
          {code_1[2]}
        </SyntaxHighlighter>
        <p>선택된 요소는 마지막 n 번째 자식 요소 이어야 합니다.</p>
      </section>
      <section>
        <h3>형제필터 선택자</h3>
        <SyntaxHighlighter language="css" style={prism_css} customStyle={hlStyles}>
          {code_1[3]}
        </SyntaxHighlighter>
        <p>선택된 요소는 동위의 같은 요소 중 첫 번째 요소 이어야 합니다.</p>
        <SyntaxHighlighter language="css" style={prism_css} customStyle={hlStyles}>
          {code_1[4]}
        </SyntaxHighlighter>
        <p>선택된 요소는 동위의 같은 요소 중 마지막 요소 이어야 합니다.</p>
        <SyntaxHighlighter language="css" style={prism_css} customStyle={hlStyles}>
          {code_1[5]}
        </SyntaxHighlighter>
        <p>선택된 요소는 동위의 같은 요소 중 n번째 요소 이어야 합니다.</p>
      </section>
    </div>
    </>
  );
}