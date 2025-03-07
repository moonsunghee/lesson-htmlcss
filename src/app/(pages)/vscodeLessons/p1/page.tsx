import PageHeader from "@/src/components/PageHeader";

export default function VSCode_P1() {
  return (
    <>
    <PageHeader title={"VS CODE 설치하기"} iconType={1} />
    <div className="page">
      <section>
        <h3>코딩에디터</h3>
        <p>
          코딩을 하기 위한 여러가지 코딩에디터가 있습니다. 우리는 Visual Studio에서 제공하는 Visual Studio Code Editer를 사용하도록 하겠습니다.
        </p>
        <p>
          <a href="http://code.visualstudio.com">http://code.visualstudio.com</a>에서 자신 OS에 맞는 최신 버전의 에디터를 다운 받아 설치 합니다.
        </p>
      </section>
      <section>
        <h3>VS Code - 추가 작업 선택</h3>
        <p>VS CODE설치 진행중 추가 작업에서 위와 같이 체크 후 설치를 진행하도록 합니다. 나중에 폴더에서 "코드로 열기"에 필요한 사항입니다.</p>
        <div className="img-box"><img src="/images/vsc-01.png" alt="VS Code 설치" style={{width:"100%", height:"auto"}}/></div>
        <div className="img-box"><img src="/images/vsc-02.png" alt="VS Code 설치" style={{width:"100%", height:"auto"}}/></div>
        <article>
          <h4>확장기능</h4>
          <p>VS CODE 왼쪽 패널에서 메뉴아이콘중 확장기능 아이콘을 클릭하여 확장 프로그램을 추가 설치 합니다. 추천 확장 프로그램은 다음과 같습니다.</p>
        </article>
        <article>
          <h4>Auto Rename Tag</h4>
          <p>시작태그 혹은 종료태그 어느 한쪽 이름을 수정하면 나머지 이름도 자동 수정 되는 기능 입니다.</p>
        </article>
        <article>
          <h4>Indent-Rainbow</h4>
          <p>코드의 시작과 종료를 구분 하기 쉽게 라인 색상이 적용 되는 기능 입니다. </p>
        </article>
        <article>
          <h4>Marterial Icon Theme</h4>
          <p>Explorer 패널에서 파일 종류에 따른 아이콘이 표시되는 기능 입니다.</p>
        </article>
        <article>
          <h4>Live Sass Compiler</h4>
          <p>HTML에 SCSS가 적용되도록 컴파일 해주는 기능 입니다.</p>
        </article>
        <article>
          <h4>Live Server</h4>
          <p>편집중인 HTML문서를 브라우저에 랜더링시 실시간으로 확인할 수 있는 기능 입니다.</p>
        </article>
      </section>
    </div>
    </>
  );
}