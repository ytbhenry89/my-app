"use client";

import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold tracking-[0.2em]">
              SIIIIDO
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium tracking-wide">
              <Link href="#" className="hover:opacity-60 transition-opacity">브랜드</Link>
              <Link href="#" className="hover:opacity-60 transition-opacity">에디토리얼</Link>
              <Link href="/community" className="hover:opacity-60 transition-opacity">커뮤니티</Link>
              <Link href="/board" className="hover:opacity-60 transition-opacity">게시판</Link>
            </nav>
          </div>

          <div className="flex items-center gap-4 text-sm font-medium tracking-wide">
            <Link href="#" className="hidden sm:block hover:opacity-60 transition-opacity">로그인</Link>
            <button className="md:hidden hover:opacity-60 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
