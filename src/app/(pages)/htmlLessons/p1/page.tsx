import PageHeader from "@/src/components/PageHeader";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula,okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Html_P1() {
  const html_1 = `
  <제목> Lorem Ipsum </제목>
  `;
  const html_2 = `
  <요소명 특성명="특성값">문자</요소명>
  <element attribute="value">TEXT</element>
  `;
  const css_1 = `
  properties: value;
  `;
  return (
    <>
      <PageHeader title={"html"} iconType={2} />
      <div className="page">
        <section>
          <p>
            책, 신문, 잡지 등 정보를 전달하는 매체를 미디어라고 합니다. <br />
            미디어에서 제공하는 정보를 내용이라고 하는데 내용은 글자, 그림 등 다양한 형태로 구분할 수 있습니다.<br />
            웹사이트 또한 다양한 형태의 내용을 전달하는 멀티미디어로 HTML은 웹에 다양한 내용을 화면에 표기하는 가장 기본적인 언어입니다.
          </p>
        </section>
        <section>
          <h3>HyperText Markup Language</h3>
          <p>
            HTML을 직역하면 초월 문자를 표기하는 언어라는 뜻을 가지고 있습니다.<br />
            초월문자, 즉 <b>Hyper Text</b>는 <b>Text</b>의 기본 기능이라 할 수 있는 ‘읽기, 쓰기’ 이외 다른 기능이 추가된 형식의 문자로 <b>Text</b>와 구분할 수 있습니다.<br />
            <b>Hyper Text</b>를 표기할 때에는 &lt;, &gt; 를 사용하고 이러한 상태를 <b>태그(Tag), 요소(Element), 객체(Object)</b> 라 부릅니다.
          </p>
          
          <p>
            HTML을 직역하면 초월 문자를 표기하는 언어라는 뜻을 가지고 있습니다.<br />
            초월문자, 즉 <b>Hyper Text</b>는 <b>Text</b>의 기본 기능이라 할 수 있는 ‘읽기, 쓰기’ 이외 다른 기능이 추가된 형식의 문자로 <b>Text</b>와 구분할 수 있습니다.<br />
            <b>Hyper Text</b>를 표기할 때에는 &lt;, &gt; 를 사용하고 이러한 상태를 <b>태그(Tag), 요소(Element), 객체(Object)</b> 라 부릅니다.
          </p>
        </section>
        <section>
          <h3>표기 형태</h3>
          <p>
          Hyper Text는 내용에 따라 표기하는 형태가 다릅니다.
          그래서 내용의 종류를 살펴 보자면
          </p>
          <p>
          등 다양한 형태의 내용으로 구분 할 수 있습니다.
          </p>
        </section>
        <section>
          <h3>표기 규칙</h3>
          <p>
          어떤 문자를 제목으로 표현 하려면 Hyper Text인 태그로 표기하여 제목으로 표현 할 수 있습니다.
          </p>
          <SyntaxHighlighter language="html" style={dracula}>
            {html_1}
          </SyntaxHighlighter>
          <p>
          이와 같이 표기된 상태를 요소(Element)라고 합니다.
          </p>
        </section>
        <section>
          <h3>요소의 구조</h3>
          <p>
          태그 + 내용으로 된 형태를 요소라 하고 태그를 분석하면 다음과 같이 볼 수 있습니다.
          </p>
          <SyntaxHighlighter language="html" style={dracula}>
            {html_2}
          </SyntaxHighlighter>
          <p>
          요소명에 따라 내용은 제목이나 문단 또는 목록으로 표현 할 수 있습니다.
          </p>
        </section>
      </div>
    </>
  );
}
