import React from "react";

const Hero = () => {
  return (
    <section className="relative h-[80vh] w-full bg-zinc-100 overflow-hidden flex items-center justify-center">
      {/* Visual Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
      
      <div className="relative z-10 text-center px-6">
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block animate-fade-in text-zinc-500">
          SUMMER COLLECTION 2024
        </span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 max-w-2xl mx-auto leading-[1.2] break-keep">
          현대적 남성 미학의 <br />새로운 기준을 제시합니다.
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-10 py-4 bg-black text-white text-[10px] font-bold tracking-[0.2em] hover:bg-zinc-800 transition-colors">
            지금 쇼핑하기
          </button>
          <button className="px-10 py-4 bg-white text-black border border-black text-[10px] font-bold tracking-[0.2em] hover:bg-zinc-50 transition-colors">
            브랜드 스토리
          </button>
        </div>
      </div>

      {/* Subtle bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m7 13 5 5 5-5"/><path d="m7 6 5 5 5-5"/></svg>
      </div>
    </section>
  );
};

export default Hero;
