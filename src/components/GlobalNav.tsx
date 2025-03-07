"use client";

import { useRouter, usePathname } from "next/navigation";

const page_counts: Record<string, number> = {
  "vscodeLessons": 2,
  "htmlLessons": 8,
  "cssLessons": 25,
  "scssLessons": 5,
};

const folders = Object.keys(page_counts);

export default function GlobalNav() {
  const router = useRouter();
  const pathname = usePathname();

  // 현재 폴더와 페이지 번호 추출
  const pathParts = pathname.split("/").filter(Boolean);
  const currentFolder = pathParts[0] || folders[0];
  const currentPage = pathParts[1] ? parseInt(pathParts[1]?.replace("p", ""), 10) || 1 : 1;

  const folderIndex = folders.indexOf(currentFolder);
  const totalPages = page_counts[currentFolder] || 1;
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  // 비활성화 조건
  const isFirstPage = folderIndex === 0 && currentPage === 1;
  const isLastPage = folderIndex === folders.length - 1 && currentPage >= totalPages;

  const handleNext = () => {
    if (nextPage <= totalPages) {
      router.prefetch(`/${currentFolder}/p${nextPage}`);
      router.push(`/${currentFolder}/p${nextPage}`);
    } else if (folderIndex < folders.length - 1) {
      const nextFolder = folders[folderIndex + 1];
      router.prefetch(`/${nextFolder}/p1`);
      router.push(`/${nextFolder}/p1`);
    }
  };

  const handlePrev = () => {
    if (prevPage > 0) {
      router.prefetch(`/${currentFolder}/p${prevPage}`);
      router.push(`/${currentFolder}/p${prevPage}`);
    } else if (folderIndex > 0) {
      const prevFolder = folders[folderIndex - 1];
      const prevFolderPages = page_counts[prevFolder];
      router.prefetch(`/${prevFolder}/p${prevFolderPages}`);
      router.push(`/${prevFolder}/p${prevFolderPages}`);
    }
  };

  return (
    <div className="pageNavigation">
      <nav>
        <button className="bt-left" onClick={handlePrev} disabled={isFirstPage}>
          이전
        </button>
        <button className="bt-center">
          <a href="/">목차</a>
        </button>
        <button className="bt-right" onClick={handleNext} disabled={isLastPage}>
          다음
        </button>
      </nav>
    </div>
  );
}
