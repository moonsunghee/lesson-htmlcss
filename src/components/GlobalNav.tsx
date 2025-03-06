"use client";

const folders = ["vscode", "html", "css", "scss"]; // 최상위 폴더 목록
const pages = ["p1", "p2", "p3", "p4", "p5"]; // 각 폴더 안의 하위 폴더
export default function GlobalNav() {
  

  return (
    <div className="pageNavigation">
      <nav>
        <button className="bt-left">이전</button>
        <button className="bt-center"><a href="/">목차</a></button>
        <button className="bt-right">다음</button>
      </nav>
    </div>
  );
}