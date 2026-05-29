import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-100 py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-[0.2em] block mb-8">
              SIIIIDO
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs break-keep">
              현대 남성을 위한 디지털 플래그십. 라이프스타일, 철학, 그리고 미학이 만나는 지점을 탐구합니다.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-8">SHOP</h4>
            <ul className="flex flex-col gap-4 text-xs font-bold tracking-widest">
              <li><Link href="#" className="hover:opacity-60 transition-opacity">신상품</Link></li>
              <li><Link href="#" className="hover:opacity-60 transition-opacity">베스트셀러</Link></li>
              <li><Link href="#" className="hover:opacity-60 transition-opacity">모든 컬렉션</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-8">INFO</h4>
            <ul className="flex flex-col gap-4 text-xs font-bold tracking-widest">
              <li><Link href="#" className="hover:opacity-60 transition-opacity">브랜드 스토리</Link></li>
              <li><Link href="#" className="hover:opacity-60 transition-opacity">커뮤니티</Link></li>
              <li><Link href="#" className="hover:opacity-60 transition-opacity">배송 및 반품</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-8">CONNECT</h4>
            <ul className="flex flex-col gap-4 text-xs font-bold tracking-widest">
              <li><Link href="#" className="hover:opacity-60 transition-opacity">인스타그램</Link></li>
              <li><Link href="#" className="hover:opacity-60 transition-opacity">핀터레스트</Link></li>
              <li><Link href="#" className="hover:opacity-60 transition-opacity">뉴스레터</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-zinc-200 text-[9px] font-bold tracking-[0.2em] text-zinc-400">
          <p>© 2024 SIIIIDO. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-8">
            <Link href="#" className="hover:text-black transition-colors">개인정보처리방침</Link>
            <Link href="#" className="hover:text-black transition-colors">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
