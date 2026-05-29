import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full bg-zinc-950 overflow-hidden flex items-center justify-center">
      {/* Background Visual Element */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Placeholder for a high-quality background image/video */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=2560&auto=format&fit=crop')] bg-cover bg-center opacity-60 scale-105" />
      </div>
      
      <div className="relative z-20 text-center px-6 max-w-5xl">
        <div className="overflow-hidden mb-6">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase text-zinc-400 block animate-fade-up opacity-0">
            SINCE 2024 — SIIIIDO ARCHIVE
          </span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-10 leading-[0.9] break-keep animate-fade-up opacity-0 delay-100">
          THE ART OF <br />
          <span className="text-zinc-500 italic font-serif font-light">REFINEMENT.</span>
        </h1>
        
        <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto mb-12 leading-relaxed break-keep animate-fade-up opacity-0 delay-200">
          단순함은 궁극의 정교함입니다. 우리는 본질에 집중하며, <br className="hidden md:block" />
          당신의 일상에 깊이를 더하는 시각적 문법을 제안합니다.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-up opacity-0 delay-300">
          <button className="group relative px-12 py-5 bg-white text-black text-[10px] font-bold tracking-[0.3em] uppercase overflow-hidden transition-all hover:pr-16">
            <span className="relative z-10">EXPLORE COLLECTION</span>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-6 transition-all duration-300">
              →
            </span>
          </button>
          <button className="px-12 py-5 bg-transparent text-white border border-white/20 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-500">
            BRAND STORY
          </button>
        </div>
      </div>

      {/* Side Label */}
      <div className="absolute left-8 bottom-12 hidden lg:block">
        <span className="text-[9px] font-bold tracking-[0.4em] text-zinc-500 vertical-text uppercase transform -rotate-90 origin-left">
          SCROLL TO DISCOVER
        </span>
      </div>

      {/* Subtle bottom indicator */}
      <div className="absolute bottom-12 right-12 hidden md:block">
        <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent opacity-20" />
      </div>
    </section>
  );
};

export default Hero;
