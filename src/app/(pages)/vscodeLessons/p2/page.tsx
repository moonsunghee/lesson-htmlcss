import PageHeader from "@/src/components/PageHeader";

export default function VSCode_P2() {
  return (
    <>
    <PageHeader title={"프로젝트 디렉토리 설정"} iconType={1} />
    <div className="page">
      <section>
        <h3>디렉토리 설정</h3>
        <p>
        프로젝트를 개발하기 위한 폴더를 디렉토리라 하고 폴더 이름에 따라 디렉토리 역할이 나뉩니다.
        디렉토리 폴더는 프로젝트이름 혹은 파일의 종류 별로 구분 합니다.
        </p>
        <img src="/images/testimg.png" alt="VS Code 설치" style={{width:"100%", height:"auto"}}/>
        <p>
        각 디렉토리(폴더) 역할을 살펴 보면 다음과 같습니다.
        </p>
        <ol>
          <li>[프로젝트명] : 개발할 프로젝트의 이름입니다.</li>
          <li>[root] & [reference] : 프론트에 배포되는 기초폴더와 프로젝트를 개발하기 위해 참조한 자료의 폴더입니다.</li>
          <li>[css] / [styles]: [root]폴더의 하위 폴더이고 html문서에 style을 적용한 파일들의 폴더입니다. 파일의 확장자를 따르기도 하지만 styles라 사용하기도 합니다.</li>
          <li>[img] / [images] : [root]폴더의 하위 폴더이고 html문서에 이미지 경로를 사용하기 위한 이미지 파일들의 폴더 입니다. 파일의 종류를 따르기도 하지만 images라 사용하기도 합니다.</li>
          <li>[js] / [scripts] :[root]폴더의 하위 폴더이고 html문서에 script 언어인 java-script, jQuery등의 파일 폴더입니다. 파일의 확장자를 따르기도 하지만 scripts라 사용하기도 합니다.</li>
          <li>[scss] : [root]폴더의 하위 폴더이고 html문서에 style을 적용한 css파일을 컴파일 파일들의 폴더입니다.</li>
          <li>그 외 필요에 따라 [mov], [snd]등 다양한 디렉토리가 있습니다.</li>
        </ol>
      </section>
    </div>
    </>
  );
}