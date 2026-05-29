import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Hero />
      
      {/* Narrative Section */}
      <section className="py-40 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[4/5] bg-zinc-100 overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550995694-3f5f4a7b1bd2?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />
          </div>
          
          <div className="max-w-xl">
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-zinc-400 mb-10 block">
              PHILOSOPHY 01
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-10 leading-[1.1] break-keep">
              침묵 속에서 찾은 <br />진정한 대화.
            </h2>
            <p className="text-zinc-500 text-base md:text-lg leading-relaxed mb-12 break-keep">
              우리는 화려한 수식어보다는 정교한 마감에, 일시적인 트렌드보다는 지속 가능한 가치에 집중합니다. 
              SIIIIDO가 제안하는 것은 단순한 의복이 아닌, 자신의 내면에 집중할 수 있는 고요한 시간입니다.
            </p>
            <Link href="#" className="group flex items-center gap-4 text-[11px] font-bold tracking-[0.3em] uppercase">
              <span>LEARN MORE</span>
              <div className="w-12 h-[1px] bg-black transition-all duration-300 group-hover:w-20" />
            </Link>
          </div>
        </div>
      </section>

      {/* Full-width Statement */}
      <section className="py-32 bg-zinc-50 border-y border-zinc-100 overflow-hidden">
        <div className="whitespace-nowrap flex animate-fade-in">
          {[1, 2, 3].map((i) => (
            <span key={i} className="text-[120px] md:text-[200px] font-bold tracking-tighter text-zinc-100 uppercase select-none px-12">
              Modern Aesthetics — Minimal Logic — Pure Form —
            </span>
          ))}
        </div>
      </section>

      {/* Grid Editorial Section */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-zinc-400 mb-6 block">
                JOURNAL ARCHIVE
              </span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">THE JOURNAL.</h2>
            </div>
            <Link href="#" className="text-[10px] font-bold tracking-[0.3em] uppercase border-b border-zinc-200 pb-2 hover:border-black transition-colors">
              VIEW ALL ARTICLES
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12">
            <div className="md:col-span-7 group cursor-pointer">
              <div className="aspect-[16/10] bg-zinc-100 mb-10 overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="max-w-xl">
                <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-400 uppercase mb-4 block">
                  Vol. 01 / Space
                </span>
                <h3 className="text-3xl font-bold tracking-tight mb-6 group-hover:text-zinc-600 transition-colors break-keep leading-tight">
                  여백이 주는 해방감: <br />우리가 머무는 공간과 의복의 상관관계.
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed break-keep">
                  미니멀리즘은 단순히 버리는 것이 아닙니다. 가장 소중한 것들을 위해 충분한 자리를 마련하는 과정입니다.
                </p>
              </div>
            </div>

            <div className="md:col-span-5 md:pt-32 group cursor-pointer">
              <div className="aspect-[4/5] bg-zinc-100 mb-10 overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-400 uppercase mb-4 block">
                  Vol. 02 / Material
                </span>
                <h3 className="text-2xl font-bold tracking-tight mb-6 group-hover:text-zinc-600 transition-colors break-keep leading-tight">
                  본질을 만지는 시간: <br />우리가 선택한 소재의 이야기.
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed break-keep">
                  피부에 닿는 감촉은 시각적인 것보다 더 깊은 인상을 남깁니다. 타협하지 않는 품질에 대한 우리의 집착.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-60 px-6 bg-zinc-950 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-12 h-[1px] bg-zinc-700 mx-auto mb-16" />
          <h2 className="text-3xl md:text-5xl font-light font-serif italic leading-snug break-keep text-zinc-300">
            &quot;Style is a way to say who you are without having to speak.&quot;
          </h2>
          <span className="mt-12 block text-[10px] font-bold tracking-[0.5em] uppercase text-zinc-500">
            — RACHEL ZOE
          </span>
        </div>
      </section>

      <Footer />
    </div>
  );
}
