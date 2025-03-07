import PageHeader from "@/src/components/PageHeader";

export default function Html_P1() {
  return (
    <>
    <PageHeader title={"html"} iconType={2} />
    <div className="page">
      <section>
        <p>
          책, 신문, 잡지 등 정보를 전달하는 매체를 미디어라고 합니다. <br/>
          미디어에서 제공하는 정보를 내용이라고 하는데 내용은 글자, 그림 등 다양한 형태로 구분할 수 있습니다.<br/>
          웹사이트 또한 다양한 형태의 내용을 전달하는 멀티미디어로 HTML은 웹에 다양한 내용을 화면에 표기하는 가장 기본적인 언어입니다.
        </p>
      </section>
      <section>
        <h3>HyperText Markup Language</h3>
        <p>
          HTML을 직역하면 초월 문자를 표기하는 언어라는 뜻을 가지고 있습니다.<br />
          초월문자, 즉 <b>Hyper Text</b>는 <b>Text</b>의 기본 기능이라 할수 있는 ‘읽기, 쓰기’ 이외 다른 기능이 추가된 형식의 문자로 <b>Text</b>와 구분할 수 있습니다.<br />
          <b>Hyper Text</b>를 표기 할 때에는 &lt;, &gt; 를 사용하고 이러한 상태를 <b>태그(Tag), 요소(Element), 객체(Object)</b> 라 부릅니다.
        </p>
        <pre>
          <code>
            &lt;제목l&gt; Lorem Ipsum &lt;/제목l&gt;
          </code>
        </pre>
        <p>
          HTML을 직역하면 초월 문자를 표기하는 언어라는 뜻을 가지고 있습니다.<br />
          초월문자, 즉 <b>Hyper Text</b>는 <b>Text</b>의 기본 기능이라 할수 있는 ‘읽기, 쓰기’ 이외 다른 기능이 추가된 형식의 문자로 <b>Text</b>와 구분할 수 있습니다.<br />
          <b>Hyper Text</b>를 표기 할 때에는 &lt;, &gt; 를 사용하고 이러한 상태를 <b>태그(Tag), 요소(Element), 객체(Object)</b> 라 부릅니다.
        </p>
      </section>
      
        
      
    </div>
    </>
  );
}