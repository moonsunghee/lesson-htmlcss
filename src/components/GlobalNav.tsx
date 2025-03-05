"use client";
import { useState } from "react";
import { useRouter } from "next/router";

const folders = ["vscode", "html", "css", "scss"]; // 최상위 폴더 목록
const pages = ["p1", "p2", "p3", "p4", "p5"]; // 각 폴더 안의 하위 폴더
export default function GlobalNav() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const totalPages = folders.length * pages.length;
    const nextIndex = (currentIndex + 1) % totalPages;

    const folderIndex = Math.floor(nextIndex / pages.length);
    const pageIndex = nextIndex % pages.length;

    setCurrentIndex(nextIndex);
    router.push(`/${folders[folderIndex]}/${pages[pageIndex]}`);
  };

  return (
    <div className="pageNavigation">
      <nav>
        <a href="">NEXT</a>
        <button onClick={handleNext}>다음</button>
      </nav>
    </div>
  );
}