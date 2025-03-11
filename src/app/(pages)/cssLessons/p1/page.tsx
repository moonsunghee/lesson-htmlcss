import PageHeader from "@/src/components/PageHeader";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus, vs } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Css_P1() {
  const prism_css = vscDarkPlus;
  const prism_html = vs;
  const hlStyles = { padding: 0, fontSize: "16px" };
  const code_1 = [`
  <head>
    <link rel="stylesheet" href="css/style.css">
  </head>
  `,`
  selector{
    property: value;
    property: value;
  }
  `,`
  property: value;
  `
  ];
  return (
    <>
    <PageHeader title={"CSS 개요"} iconType={3} />
    <div className="page">
      <section>
        <p>
        CSS는 Cascading Style Sheet의 약자로 종속형스타일 이라고 합니다.
        html요소에 글꼴, 글자크기, 영역크기, 색상등의 형태를 적용하기 위해 사용하며 상위 요소에 스타일을 적용하면 그 스타일이 하위요소에도 적용되는 성질이 있습니다.
        </p>
      </section>
      <section>
        <h3>Style적용 방식-외부정의방식</h3>
        <p>
        style을 적용하는 방식에 따라 직접적용방식, 내부정의방식, 외부정의방식으로 구분할 수 있습니다.
        대표적으로 많이 사용하는 외부정의방식에 대해 살펴보겠습니다.
        </p>
        <div className="img-wrap"></div>
        <p>
        css파일로 style문서를 만들고 css폴더에 저장합니다. (폴더명은 필요에 따라 css가 아닌 다른 이름을 사용할 수 있습니다.)
        style을 적용할 현재 html문서 head태그 안에 아래와 같이 링크로 style을 적용합니다.
        </p>
        <SyntaxHighlighter language="html" style={prism_html} customStyle={hlStyles}>
          {code_1[0]}
        </SyntaxHighlighter>
      </section>
      <section>
        <h3>CSS의 구조</h3>
        <SyntaxHighlighter language="css" style={prism_css} customStyle={hlStyles}>
          {code_1[1]}
        </SyntaxHighlighter>
        <p>
        style은 한 요소에 여러개의 스타일을 적용할 수 있어 중괄호, Braces, {} 로 스타일 묶음을 만듭니다.
        그리고 selector를 통해 어느 요소에 적용 할지 선택하는 구조를 가지고 있습니다.
        </p>
        <SyntaxHighlighter language="css" style={prism_css} customStyle={hlStyles}>
          {code_1[2]}
        </SyntaxHighlighter>
        <p>
        스타일은 속성과 값으로 구분할 수 있습니다. 
        속성과 값은 콜론(:)으로 구분 하고 하나의 스타일 작성을 마치면 세미콜론(;)으로 종결을 표기한뒤 다음 스타일을 작성합니다.
        </p>
      </section>
    </div>
    </>
  );
}