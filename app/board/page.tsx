import React from "react";
import Footer from "@/components/Footer";
import Link from "next/link";

const POSTS = [
  { id: 1, title: "SIIIIDO 2024 여름 컬렉션 룩북 공개", author: "관리자", date: "2024.05.28", views: 1240 },
  { id: 2, title: "영어 회화 모임 'THE DIALOGUE' 6월 참가자 모집", author: "커뮤니티 매니저", date: "2024.05.25", views: 856 },
  { id: 3, title: "미니멀리즘 가이드: 지속 가능한 옷장을 만드는 방법", author: "에디터", date: "2024.05.20", views: 2102 },
  { id: 4, title: "배송 지연 공지 (6월 초 연휴 관련)", author: "CS팀", date: "2024.05.18", views: 432 },
  { id: 5, title: "멤버십 등급별 혜택 개편 안내", author: "마케팅팀", date: "2024.05.15", views: 1567 },
  { id: 6, title: "시도 플래그십 스토어 팝업 이벤트 안내", author: "관리자", date: "2024.05.10", views: 3421 },
];

export default function BoardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-400 mb-6 block">
            Bulletin Board
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">공지사항 & 소식</h1>
          <p className="text-sm text-zinc-500 max-w-xl break-keep">
            SIIIIDO의 새로운 소식과 다양한 이벤트를 가장 먼저 만나보세요.
          </p>
        </div>
      </section>

      {/* Board List Section */}
      <section className="pb-32 px-6">
        <div className="max-w-[1400px] mx-auto border-t border-black">
          {/* Table Header - Desktop Only */}
          <div className="hidden md:flex items-center py-6 px-4 text-[10px] font-bold tracking-widest text-zinc-400 border-b border-zinc-100">
            <div className="w-16">번호</div>
            <div className="flex-1">제목</div>
            <div className="w-32">작성자</div>
            <div className="w-24">날짜</div>
            <div className="w-16 text-right">조회</div>
          </div>

          {/* List Items */}
          <div className="flex flex-col">
            {POSTS.map((post) => (
              <Link 
                key={post.id} 
                href="#" 
                className="flex flex-col md:flex-row md:items-center py-6 px-4 border-b border-zinc-100 hover:bg-zinc-50 transition-colors group"
              >
                <div className="hidden md:block w-16 text-xs text-zinc-400 font-medium">
                  {post.id.toString().padStart(2, '0')}
                </div>
                <div className="flex-1 text-sm font-medium tracking-tight group-hover:opacity-60 transition-opacity mb-2 md:mb-0">
                  {post.title}
                </div>
                <div className="flex items-center gap-4 md:block md:w-32 text-[10px] font-bold text-zinc-500 md:text-zinc-950 uppercase tracking-tighter">
                  <span className="md:hidden">작성자: </span>{post.author}
                </div>
                <div className="flex items-center gap-4 md:block md:w-24 text-[10px] font-medium text-zinc-400 tracking-tighter">
                  <span className="md:hidden">날짜: </span>{post.date}
                </div>
                <div className="hidden md:block w-16 text-right text-[10px] font-medium text-zinc-400 tracking-tighter">
                  {post.views.toLocaleString()}
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination Placeholder */}
          <div className="flex items-center justify-center gap-4 mt-12 text-[10px] font-bold tracking-[0.2em]">
            <button className="opacity-30 cursor-not-allowed">PREV</button>
            <div className="flex items-center gap-6">
              <span className="border-b border-black pb-1">01</span>
              <span className="opacity-30 hover:opacity-100 cursor-pointer transition-opacity">02</span>
              <span className="opacity-30 hover:opacity-100 cursor-pointer transition-opacity">03</span>
            </div>
            <button className="hover:opacity-60 transition-opacity">NEXT</button>
          </div>

          {/* Search Bar Placeholder */}
          <div className="mt-24 flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <input 
                type="text" 
                placeholder="검색어를 입력하세요" 
                className="w-full border-b border-zinc-200 py-4 text-xs font-medium outline-none focus:border-black transition-colors px-4"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
