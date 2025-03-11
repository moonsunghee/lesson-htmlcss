import PageHeader from "@/src/components/PageHeader";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus, vs } from "react-syntax-highlighter/dist/cjs/styles/prism";
export default function Css_P3() {
  const prism_css = vscDarkPlus;
  const prism_html = vs;
  const hlStyles = { padding: 0, fontSize: "16px" };
  const code_1 = [`
  <ol>
    <li>Lorem Ipsum</li>
    <li>Lorem Ipsum</li>
  </ol>
  <ul>
    <li>Lorem Ipsum</li>
    <li>Lorem Ipsum</li>
  </ul>
  `,`
  parent>child{property: value;}
  ul>li{color: red;}
  `,
  ];
  const code_2 = [`
  <ol>
    <li><b>Lorem</b> Ipsum</li>
    <li>Lorem <b>Ipsum</b></li>
  </ol>
  <ul>
    <li><b>Lorem</b> Ipsum</li>
    <li>Lorem <b>Ipsum</b></li>
  </ul>
  `,`
  ancestor descendant{property: value;}
  ul b{color: red;}
  `,
  ];
  const code_3 = [`
  <h3>Lorem Ipsum</h3>
  <h4>Lorem Ipsum</h4>
  <p>Lorem Ipsum</p>
  <p>Lorem Ipsum</p>
  `,`
  prev+next{property: value;}
  `,`
  h3+p{color: blue;}
  `,`
  h4+p{color: red;}
  `
  ];
  const code_4 = [`
  <h3>Lorem Ipsum</h3>
  <h4>Lorem Ipsum</h4>
  <p>Lorem Ipsum</p>
  <p>Lorem Ipsum</p>
  `,`
  prev~siblings{property: value;}
  `,`
  h3~p{color: red;}
  `,`
  h4~p{color: red;}
  `
  ];
  return (
    <>
    <PageHeader title={"계층선택자"} iconType={3} />
    <div className="page">
      <section>
        <h3>자식선택자 : 부모요소&gt;자식요소&#123;&#125;</h3>
        <p>요소와 요소가 포함관계에 있을때 상위요소를 참조하여 하위요소를 선택합니다.</p>
        <SyntaxHighlighter language="html" style={prism_html} customStyle={hlStyles}>
          {code_1[0]}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="css" style={prism_css} customStyle={hlStyles}>
          {code_1[1]}
        </SyntaxHighlighter>
        <div className="sample">
          <ol>
            <li>1. Lorem Ipsum</li>
            <li>2. Lorem Ipsum</li>
          </ol>
          <ul>
            <li><span style={{color:'#F00'}}>•&nbsp;&nbsp;&nbsp;Lorem Ipsum</span></li>
            <li><span style={{color:'#F00'}}>•&nbsp;&nbsp;&nbsp;Lorem Ipsum</span></li>
          </ul>
        </div>
        <p>상위 ul요소를 참조하여 li요소를 선택합니다.
        이때 ol요소의 자식요소 li는 선택되지 않습니다.</p>
      </section>
      <section>
        <h3>후손선택자 : 조상요소 후손요소&#123;&#125;</h3>
        <p>요소와 요소들이 포함관계에 있을때 최상위요소를 참조하여 하위요소를 선택합니다.</p>
        <SyntaxHighlighter language="html" style={prism_html} customStyle={hlStyles}>
          {code_2[0]}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="css" style={prism_css} customStyle={hlStyles}>
          {code_2[1]}
        </SyntaxHighlighter>
        <div className="sample">
          <ol>
          <li>1.<b style={{fontWeight:'bold'}}>&nbsp;Lorem</b> <b>&nbsp;Ipsum</b></li>
          <li>2.&nbsp;Lorem <b style={{fontWeight:'bold'}}>&nbsp;Ipsum</b></li>
          </ol>
          <ul>
            <li>•<b style={{color:'#F00', fontWeight:'bold'}}>&nbsp;Lorem</b> <b>&nbsp;Ipsum</b></li>
            <li>•&nbsp;&nbsp;&nbsp;Lorem <b style={{color:'#F00', fontWeight:'bold'}}>&nbsp;Ipsum</b></li>
          </ul>
        </div>
        <p>최상위 ul요소를 참조하여 li요소를 선택합니다.
        이때 ol요소의 후손요소 b는 선택되지 않습니다.</p>
      </section>
      <section>
        <h3>동위 선택자 : 형요소+동생요소&#123;&#125;</h3>
        <p>요소들이 서로 이웃관계에 있을때 특정요소를 참조하여 동생요소와 일치 하는 요소를 선택합니다.</p>
        <SyntaxHighlighter language="html" style={prism_html} customStyle={hlStyles}>
          {code_3[0]}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="css" style={prism_css} customStyle={hlStyles}>
          {code_3[1]}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="css" style={prism_css} customStyle={hlStyles}>
          {code_3[2]}
        </SyntaxHighlighter>
        <p>
          h3+p&#123;&#125;는 h3요소의 바로 동생요소 p를 지정하였으나 html에서 h3요소의 다음 요소는 h4요소이므로 선택되지 않습니다.
        </p>
        <SyntaxHighlighter language="css" style={prism_css} customStyle={hlStyles}>
          {code_3[3]}
        </SyntaxHighlighter>
        <div className="sample">
          <h3>Lorem Ipsum</h3>
          <h4>Lorem Ipsum</h4>
          <p><span style={{color:'#F00'}}>Lorem Ipsum</span></p>
          <p>Lorem Ipsum</p>
        </div>
        
      </section>
      <section>
        <h3>동위 선택자 : 형요소~동생요소&#123;&#125;</h3>
        <p>특정 요소의 서로 이웃관계에 있을때 특정요소를 참조하여 동생요소와 일치 하는 요소를 선택합니다.</p>
        <SyntaxHighlighter language="html" style={prism_html} customStyle={hlStyles}>
          {code_4[0]}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="css" style={prism_css} customStyle={hlStyles}>
          {code_4[1]}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="css" style={prism_css} customStyle={hlStyles}>
          {code_4[2]}
        </SyntaxHighlighter>
        <div className="sample">
          <h3>Lorem Ipsum</h3>
          <h4>Lorem Ipsum</h4>
          <p><span style={{color:'#F00'}}>Lorem Ipsum</span></p>
          <p><span style={{color:'#F00'}}>Lorem Ipsum</span></p>
        </div>
      </section>
    </div>
    </>
  );
}