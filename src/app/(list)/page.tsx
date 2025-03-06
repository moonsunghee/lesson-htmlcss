import { VscVscode } from "react-icons/vsc";
import { FaHtml5, FaCss3Alt, FaChevronDown,FaSass } from "react-icons/fa6";
import PageHeader from "@/src/components/PageHeader";

import "@/src/styles/list.page.scss";

export default function ListPage() {
  const vscodeLessons = [
    { name: "VS CODE 설치하기", link: "/vscodeLessons/p1" },
    { name: "프로젝트 디렉토리 설정하기", link: "/vscodeLessons/p2" },
  ];
  const htmlLessons = [
    { name: "HTML이란?", link: "/htmlLessons/p1" },
    { name: "제목, 문단 태그", link: "/htmlLessons/p2" },
    { name: "목록 태그", link: "/htmlLessons/p3" },
    { name: "글자강조 태그", link: "/htmlLessons/p4" },
    { name: "이미지 태그", link: "/htmlLessons/p5" },
    { name: "하이퍼링크 태그", link: "/htmlLessons/p6" },
    { name: "입력양식 태그", link: "/htmlLessons/p7" },
    { name: "영역 태그", link: "/htmlLessons/p8" },
  ];
  const cssLessons = [
    {
      title: "CSS 개요",
      items: [{ name: "CSS 개요", link: "/cssLessons/p1" }],
    },
    {
      title: "선택자",
      items: [
        { name: "기본 선택자", link: "/cssLessons/p2" },
        { name: "계층 선택자", link: "/cssLessons/p3" },
        { name: "필터 선택자", link: "/cssLessons/p4" },
        { name: "상태 및 가상 선택자", link: "/cssLessons/p5" },
      ],
    },
    {
      title: "문자속성, 배경속성",
      items: [
        { name: "글자 속성", link: "/cssLessons/p6" },
        { name: "문자 속성", link: "/cssLessons/p7" },
        { name: "배경 속성", link: "/cssLessons/p8" },
      ],
    },
    {
      title: "박스모델",
      items: [
        { name: "블럭레벨요소의 이해", link: "/cssLessons/p9" },
        { name: "박스모델의 이해", link: "/cssLessons/p10" },
        { name: "마진속성의 이해", link: "/cssLessons/p11" },
        { name: "너비 속성과 높이 속성", link: "/cssLessons/p12" },
      ],
    },
    {
      title: "Position 레이아웃",
      items: [
        { name: "위치, 좌표, 중첩 속성", link: "/cssLessons/p13" },
        { name: "position: absolute", link: "/cssLessons/p14" },
        { name: "position: relative", link: "/cssLessons/p15" },
        { name: "position: fixed", link: "/cssLessons/p16" },
        { name: "position: sticky", link: "/cssLessons/p17" },
        { name: "관계 속성의 이해", link: "/cssLessons/p18" },
      ],
    },
    {
      title: "Flexible 레이아웃",
      items: [
        { name: "Flexible의 이해", link: "/cssLessons/p19" },
        { name: "Flexible Layout", link: "/cssLessons/p20" },
        { name: "flex-[direction] [wrap]", link: "/cssLessons/p21" },
        { name: "justify-content", link: "/cssLessons/p22" },
        { name: "align-[items] [content]", link: "/cssLessons/p23" },
        { name: "요소 정중앙 배치", link: "/cssLessons/p24" },
      ],
    },
    {
      title: "Grid 레이아웃",
      items: [{ name: "Grid의 이해", link: "/cssLessons/p25" }],
    },
  ];
  const scssLessons = [
    { name: "SCSS란?", link: "/scssLessons/p1" },
    { name: "VS CODE에서 SCSS Compile 환경설정하기", link: "/scssLessons/p2" },
    { name: "변수와 연산자", link: "/scssLessons/p3" },
    { name: "데이터 유형", link: "/scssLessons/p4" },
    { name: "중첩 규칙", link: "/scssLessons/p5" },
    { name: "중첩 규칙과 상위 참조", link: "/scssLessons/p6" },
  ];
  return (
    <>
      <PageHeader title={"목차"} iconType={0}/>
      <div className="page global-nav">
        <nav>
          <h3><VscVscode/> Visual Studio Code</h3>
          <article>
            <ul className="global-nav_list">
              {vscodeLessons.map((lesson, index) => (
                <li key={index}>
                  <a href={lesson.link}>{lesson.name}</a>
                </li>
              ))}
            </ul>
          </article>
          <h3><FaHtml5/> HTML</h3>
          <article>
            <ul className="global-nav_list">
            {htmlLessons.map((lesson, index) => (
              <li key={index}>
                <a href={lesson.link}>{lesson.name}</a>
              </li>
            ))}
            </ul>
          </article>
          <h3><FaCss3Alt/> CSS</h3>
          {cssLessons.map((section, index) => (
            <article key={index}>
              <h4>
                <FaChevronDown /> {section.title}
              </h4>
              <ul className="global-nav_list">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
          
          <h3><FaSass/> SCSS</h3>
          <article>
            <ul className="global-nav_list">
              {scssLessons.map((lesson, index) => (
                <li key={index}>
                  <a href={lesson.link}>{lesson.name}</a>
                </li>
              ))}
            </ul>
          </article>
        </nav>
      </div>
    </>
    
  );
}
