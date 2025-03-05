import { VscVscode } from "react-icons/vsc";
import { FaHtml5, FaCss3Alt, FaChevronDown,FaSass } from "react-icons/fa6";
import PageHeader from "@/src/components/PageHeader";

export default function Home() {
  return (
    <>
      <PageHeader title={"목차"} iconType={0}/>
      <div className="page global-nav">
        <nav>
          <h3><VscVscode/> Visual Studio Code</h3>
          <ul className="global-nav_list">
            <li><a href="/vscode/p1">VS Code 설치하기</a></li>
            <li><a href="/vscode/p2">프로젝트 디렉토리 설정하기</a></li>
          </ul>
          <h3><FaHtml5/> HTML</h3>
          <ul className="global-nav_list">
            <li><a href="/">HTML이란?</a></li>
            <li><a href="/">제목, 문단 태그</a></li>
            <li><a href="/">목록 태그</a></li>
            <li><a href="/">글자강조 태그</a></li>
            <li><a href="/">이미지 태그</a></li>
            <li><a href="/">하이퍼링크 태그</a></li>
            <li><a href="/">입력양식 태그</a></li>
            <li><a href="/">영역 태그</a></li>
          </ul>
          <h3><FaCss3Alt/> CSS</h3>
          <ul className="global-nav_list">
            <li><a href="/">CSS 개요</a></li>
          </ul>
          <h4><FaChevronDown/> 선택자</h4>
          <ul className="global-nav_list">
            <li><a href="/">기본 선택자</a></li>
            <li><a href="/">계층 선택자</a></li>
            <li><a href="/">필터 선택자</a></li>
            <li><a href="/">상태 및 가상 선택자</a></li>
          </ul>
          <h4><FaChevronDown/> 문자속성, 배경속성</h4>
          <ul className="global-nav_list">
            <li><a href="/">글자 속성</a></li>
            <li><a href="/">문자 속성</a></li>
            <li><a href="/">배경 속성</a></li>
          </ul>
          <h4><FaChevronDown/> 박스모델</h4>
          <ul className="global-nav_list">
            <li><a href="/">블럭레벨요소의 이해</a></li>
            <li><a href="/">박스모델의 이해</a></li>
            <li><a href="/">마진속성의 이해</a></li>
            <li><a href="/">너비 속성과 높이 속성</a></li>
          </ul>
          <h4><FaChevronDown/> Position 레이아웃</h4>
          <ul className="global-nav_list">
            <li><a href="/">위치, 좌표, 중첩 속성</a></li>
            <li><a href="/">position: absolute</a></li>
            <li><a href="/">position: relative</a></li>
            <li><a href="/">position: fixed</a></li>
            <li><a href="/">position: sticky</a></li>
            <li><a href="/">관계 속성의 이해</a></li>
          </ul>
          <h4><FaChevronDown/> Flexible 레이아웃</h4>
          <ul className="global-nav_list">
            <li><a href="/">Flexibl의 이해</a></li>
            <li><a href="/">Flexibl Layout</a></li>
            <li><a href="/">flex-[direction] [wrap]</a></li>
            <li><a href="/">justify-content</a></li>
            <li><a href="/">align-[items] [content]</a></li>
            <li><a href="/">요소 정중앙 배치</a></li>
          </ul>
          <h4><FaChevronDown/> Grid 레이아웃</h4>
          <ul className="global-nav_list">
            <li><a href="/">Grid의 이해</a></li>
          </ul>
          <h3><FaSass/> SCSS</h3>
          <ul className="global-nav_list">
            <li><a href="/">MENU</a></li>
            <li><a href="/">MENU</a></li>
            <li><a href="/">MENU</a></li>
          </ul>
        </nav>
      </div>
    </>
    
  );
}
