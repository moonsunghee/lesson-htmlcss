import PageHeader from "@/src/components/PageHeader";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula,okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Html_P2() {
  const html_1 = `
  <h1>Lorem Ipsum</h1>
  <h2>Lorem Ipsum</h2>
  <h3>Lorem Ipsum</h3>
  <h4>Lorem Ipsum</h4>
  <h5>Lorem Ipsum</h5>
  <h6>Lorem Ipsum</h6>
  `;
  const html_2 = `
  <p>Lorem ipsum dolor sit amet.<br/>Consectetur adipisicing elit.</p>
  <p>
    Lorem ipsum dolor sit amet. 
    <br/>Consectetur adipisicing elit.
  </p>
  `;
  return (
    <>
    <PageHeader title={"제목, 문단 태그"} iconType={2} />
    <div className="page">
      <section>
        <h3>제목태그 : hn (Heading1~6)</h3>
        <p>
          내용의 제목으로 표현 하는 태그 입니다.
          제목은 6종류가 있으며 숫자에 따라 다른 제목의 형태로 표현합니다.
          h1이 제일 큰 제목입니다.
        </p>
        <SyntaxHighlighter language="html" style={dracula} customStyle={{ padding: 0 }}>
          {html_1}
        </SyntaxHighlighter>
        <div className="sample">
          <h1>Lorem Ipsum</h1>
          <h2>Lorem Ipsum</h2>
          <h3>Lorem Ipsum</h3>
          <h4>Lorem Ipsum</h4>
          <h5>Lorem Ipsum</h5>
          <h6>Lorem Ipsum</h6>
        </div>
      </section>
      <section>
        <h3>문단 태그</h3>
        <p>
        문자 형태 내용을 문장이나 문단으로 표현 하는 태그 입니다.
        문단이 여러 개일 경우 p태그를 여러 개 사용 합니다.
        </p>
        <SyntaxHighlighter language="html" style={dracula} customStyle={{ padding: 0 }}>
          {html_2}
        </SyntaxHighlighter>
        <div className="sample">
          <p>
          Lorem ipsum dolor sit amet. 
          <br/>Consectetur adipisicing elit.
          </p>
          <p>
          Lorem ipsum dolor sit amet. 
          <br/>Consectetur adipisicing elit.
          </p>
        </div>
      </section>
      <section>
        <h3>개행 태그</h3>
        <p>
          한 줄의 문장을 여러 줄로 나눌 때 사용하는 태그입니다.
        </p>
      </section>
      <section className="important">
        <h3>HTML Validator</h3>
        <ol>
          <li>hn태그와 p태그는 서로 포함관계가 될 수 없습니다.</li>
        </ol>
      </section>
    </div>
    </>
  );
}