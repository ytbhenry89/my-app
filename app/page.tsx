import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      {/* Brand Message Section */}
      <section className="py-32 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-400 mb-8 block">
            OUR PHILOSOPHY
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-12 break-keep">
            &quot;우리의 새로운 이야기를 들려드리겠습니다. 이것은 단순한 옷에 관한 것이 아닙니다. 더 나은 남자가 되기 위한 하나의 시도입니다.&quot;
          </h2>
          <Link href="#" className="text-[10px] font-bold tracking-[0.2em] border-b border-black pb-2 hover:opacity-60 transition-opacity uppercase">
            브랜드 스토리 읽기
          </Link>
        </div>
      </section>

      <ProductGrid />

      {/* Editorial Section: HOW TO BE A MAN */}
      <section className="py-32 px-6 bg-zinc-950 text-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-500 mb-4 block">
                JOURNAL
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">HOW TO BE A MAN.</h2>
            </div>
            <Link href="#" className="text-[10px] font-bold tracking-[0.2em] border-b border-white pb-2 hover:opacity-60 transition-opacity">
              전체 기사 보기
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group cursor-pointer">
              <div className="aspect-video bg-zinc-900 mb-8 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-800 text-[10px] font-bold tracking-widest uppercase">
                  [ EDITORIAL IMAGE ]
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4 block">
                Vol. 01 / Identity
              </span>
              <h3 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-zinc-300 transition-colors break-keep">
                미니멀리즘의 고요한 힘: 현대인의 옷장에서 &apos;적음&apos;이 &apos;많음&apos;이 되는 이유.
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xl break-keep">
                복장의 단순함이 어떻게 집중된 정신과 삶의 다양한 도전에 대한 절제된 접근 방식을 반영하는지 탐구합니다.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-video bg-zinc-900 mb-8 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-800 text-[10px] font-bold tracking-widest uppercase">
                  [ EDITORIAL IMAGE ]
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4 block">
                Vol. 02 / Routine
              </span>
              <h3 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-zinc-300 transition-colors break-keep">
                아침의 리추얼: 목적 있는 하루를 위한 토대 쌓기.
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xl break-keep">
                성공적인 사람들의 습관과 구조화된 아침이 어떻게 생산적인 오후로 이어지는지 깊이 있게 분석합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Shipping Promo */}
      <section className="py-24 px-6 text-center bg-white">
        <div className="max-w-xl mx-auto border border-zinc-100 p-12">
          <svg className="mx-auto mb-8 text-zinc-300" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          <h3 className="text-lg font-bold tracking-tight mb-4">WORLDWIDE SHIPPING</h3>
          <p className="text-sm text-zinc-500 mb-8 break-keep">
            우리는 전 세계 50개국 이상에 우리의 철학과 제품을 전달합니다. 어디에서나 SIIIIDO를 경험해 보세요.
          </p>
          <button className="text-[10px] font-bold tracking-[0.2em] border-b border-black pb-1 hover:opacity-60 transition-opacity uppercase">
            배송 가능 국가 확인하기
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
