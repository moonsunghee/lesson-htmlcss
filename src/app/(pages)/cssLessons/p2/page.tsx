import PageHeader from "@/src/components/PageHeader";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus, vs } from "react-syntax-highlighter/dist/cjs/styles/prism";
export default function Css_P2() {
  const prism_css = vscDarkPlus;
  const prism_html = vs;
  const hlStyles = { padding: 0, fontSize: "16px" };

  const css_1 = `
  *{ property: value; }
  `;
  
  const code_2 = [`
  tagName{property: value;}
  h1{property: value;}
  `,`
  <tagName>Lorem Ipsum</tagName>
  <h1>Lorem Ipsum</h1>
  `
  ];
  const code_3 = [`
  #idName{property: value;}
  `,`
  <tag id="idName">Lorem Ipsum</tag>
  `
  ];
  const code_4 = [`
  .className{property: value;}
  `,`
  <tagName class="className">Lorem Ipsum</tagName>
  `
  ];
  const code_5 = [`
  tagNmae,.className{property: value;}
  `,`
  <tagName class="className">Lorem Ipsum</tagName>
  <tag class="className">Lorem Ipsum</tag>
  `
  ];
  const code_6 = [`
  tagName.className{property: value;}
  `,`
  <tagName>Lorem Ipsum</tagName>
  <tag class="className">Lorem Ipsum</tag>
  `
  ];
  const code_7 = [`
  tagA.idName{property: value;}
  tagB.className{property: value;}
  `,`
  <tagA id="idName">Lorem Ipsum</tagA>
  <tagB class="className">Lorem Ipsum</tagB>
  `
  ];
  return (
    <>
    <PageHeader title={"기본선택자"} iconType={3} />
    <div className="page">
      <section>
        <h3>전체 선택자 : *&#123;&#125;</h3>
        <SyntaxHighlighter language="css" style={prism_css} customStyle={hlStyles}>
          {css_1}
        </SyntaxHighlighter>
        <p>
          <b>태그</b>는 <b>요소</b>라고도 부르며 전체선택자인 '<b>*</b>'기호는 html 문서의 모든 요소를 선택 합니다.
        </p>
      </section>
      <section>
        <h3>타입 선택자 : 요소명&#123;&#125; or 태그명&#123;&#125;</h3>
        <SyntaxHighlighter language="css" style={prism_css} customStyle={hlStyles}>
          {code_2[0]}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="html" style={prism_html} customStyle={hlStyles}>
          {code_2[1]}
        </SyntaxHighlighter>
        <p>
          <b>요소</b>명 또는 <b>태그</b>명과 일치 하는 모든 요소를 선택 합니다.
        </p>
      </section>
      <section>
        <h3>아이디 선택자 : #아이디명&#123;&#125;</h3>
        <SyntaxHighlighter language="css" style={prism_css} customStyle={hlStyles}>
          {code_3[0]}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="html" style={prism_html} customStyle={hlStyles}>
          {code_3[1]}
        </SyntaxHighlighter>
        <p>
        아이디명이 요소의 id 특성의 값과 일치 하는 요소를 선택 합니다.
        아이디명을 선택자로 사용할때는 #기호를 표기하여 다른 선택자와 구분 합니다.
        </p>
      </section>
      <section>
        <h3>클래스 선택자 : .클래스명&#123;&#125;</h3>
        <SyntaxHighlighter language="css" style={prism_css} customStyle={hlStyles}>
          {code_4[0]}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="html" style={prism_html} customStyle={hlStyles}>
          {code_4[1]}
        </SyntaxHighlighter>
        <p>
        클래스명이 요소의 class 특성의 값과 일치 하는 요소를 선택 합니다.
        클래스명을 선택자로 사용할때는 .기호를 표기하여 다른 선택자와 구분 합니다.
        </p>
      </section>
      <section>
        <h3>그룹 선택자 : 선택자,선택자,선택자&#123;&#125;</h3>

        <SyntaxHighlighter language="css" style={prism_css} customStyle={hlStyles}>
          {code_5[0]}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="html" style={prism_html} customStyle={hlStyles}>
          {code_5[1]}
        </SyntaxHighlighter>
        <p>
        여러 선택자를 사용하여 선택자와 일치 하는 다수의 요소를 선택 합니다.
        </p>
      </section>
      <section>
        <h3>종속 선택자 : 요소#아이디명&#123;&#125; or 요소.클래스명&#123;&#125;</h3>

        <SyntaxHighlighter language="css" style={prism_css} customStyle={hlStyles}>
          {code_6[0]}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="html" style={prism_html} customStyle={{ padding: 0, fontSize: "16px"}}>
          {code_6[1]}
        </SyntaxHighlighter>
        <p>
        아이디선택자나 클래스선택자를 요소명과 함께 사용하는 선택자입니다.
        다른 선택자 보다 우선 순위를 갖습니다.
        </p>
      </section>
    </div>
    </>
  );
}