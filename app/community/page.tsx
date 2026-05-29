import React from "react";
import Footer from "@/components/Footer";

export default function CommunityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 border-b border-zinc-100">
        <div className="max-w-[1400px] mx-auto text-center">
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-400 mb-8 block">
            SIIIIDO COMMUNITY
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.2] break-keep uppercase">
            THE DIALOGUE: <br />
            영어 회화 모임.
          </h1>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto leading-relaxed break-keep">
            의복을 넘어, 우리는 현대 남성의 성장을 지향합니다. 라이프스타일, 철학, 그리고 글로벌 관점에 대해 논의하는 매주 영어 회화 모임에 참여하세요.
          </p>
        </div>
      </section>

      {/* Meeting Philosophy */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-xl font-bold tracking-tight mb-6">WHY WE GATHER.</h2>
              <p className="text-sm text-zinc-500 leading-relaxed mb-6 break-keep">
                언어는 단순한 도구가 아닙니다. 그것은 새로운 사고방식으로 가는 관문입니다. 우리의 모임은 시야를 넓히고 의미 있는 담론에 참여하고자 하는 분들을 위해 설계되었습니다.
              </p>
              <ul className="text-[10px] font-bold flex flex-col gap-3 tracking-[0.1em]">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-black rounded-full" />
                  글로벌 관점 (GLOBAL PERSPECTIVE)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-black rounded-full" />
                  문화 교류 (CULTURAL EXCHANGE)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-black rounded-full" />
                  지적 성장 (INTELLECTUAL GROWTH)
                </li>
              </ul>
            </div>
            <div className="bg-zinc-50 aspect-square flex items-center justify-center text-zinc-300 text-[10px] font-bold tracking-[0.2em] uppercase">
              [ MEETING ATMOSPHERE ]
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Location */}
      <section className="py-24 px-6 bg-zinc-950 text-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-16">
            <div className="flex-1">
              <h2 className="text-3xl font-bold tracking-tight mb-12">SCHEDULE & LOCATION.</h2>
              <div className="space-y-12">
                <div className="border-l border-zinc-800 pl-8">
                  <h3 className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 mb-2 uppercase">일시 (WHEN)</h3>
                  <p className="text-xl font-medium tracking-tight">매주 토요일, 15:00 - 17:00</p>
                </div>
                <div className="border-l border-zinc-800 pl-8">
                  <h3 className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 mb-2 uppercase">장소 (WHERE)</h3>
                  <p className="text-xl font-medium tracking-tight">시도 플래그십 스토어, 2층 라운지</p>
                  <p className="text-xs text-zinc-400 mt-2 italic tracking-wider">SEOUL, SOUTH KOREA</p>
                </div>
                <div className="border-l border-zinc-800 pl-8">
                  <h3 className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 mb-2 uppercase">방식 (FORMAT)</h3>
                  <p className="text-xl font-medium tracking-tight">자유 토론 및 주제 기반 디베이트</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[400px] bg-white text-black p-12">
              <h3 className="text-xl font-bold tracking-tight mb-6 uppercase">참여 방법 (JOIN).</h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-8 break-keep">
                대화의 깊이를 유지하기 위해 각 세션은 12명으로 제한됩니다. 미리 등록하여 자리를 확보하세요.
              </p>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="성함 (FULL NAME)" 
                  className="w-full border-b border-zinc-200 py-3 text-[10px] font-bold tracking-widest outline-none focus:border-black transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="이메일 주소 (EMAIL)" 
                  className="w-full border-b border-zinc-200 py-3 text-[10px] font-bold tracking-widest outline-none focus:border-black transition-colors"
                />
                <button className="w-full bg-black text-white py-4 mt-8 text-[10px] font-bold tracking-[0.3em] hover:bg-zinc-800 transition-colors uppercase">
                  세션 신청하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Community Gallery / Visuals */}
      <section className="py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-xl font-bold tracking-tight mb-12">MOMENTS OF DIALOGUE.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="aspect-[4/5] bg-zinc-50 flex items-center justify-center text-zinc-300 text-[10px] font-bold tracking-widest uppercase">[ IMAGE 01 ]</div>
            <div className="aspect-[4/5] bg-zinc-50 flex items-center justify-center text-zinc-300 text-[10px] font-bold tracking-widest uppercase">[ IMAGE 02 ]</div>
            <div className="aspect-[4/5] bg-zinc-50 flex items-center justify-center text-zinc-300 text-[10px] font-bold tracking-widest uppercase">[ IMAGE 03 ]</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
