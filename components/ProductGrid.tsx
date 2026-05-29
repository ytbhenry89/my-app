import React from "react";

const PRODUCTS = [
  { id: 1, name: "에센셜 오버사이즈 티셔츠", price: "₩45,000", category: "TOPS" },
  { id: 2, name: "미니멀리스트 치노 팬츠", price: "₩85,000", category: "BOTTOMS" },
  { id: 3, name: "울 블렌드 블레이저", price: "₩180,000", category: "OUTERWEAR" },
  { id: 4, name: "레더 첼시 부츠", price: "₩220,000", category: "FOOTWEAR" },
  { id: 5, name: "스트럭처드 캔버스 토트백", price: "₩65,000", category: "ACCESSORIES" },
  { id: 6, name: "리브드 코튼 비니", price: "₩35,000", category: "ACCESSORIES" },
];

const ProductGrid = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-24">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-xl font-bold tracking-tight">SELECTED ITEMS</h2>
        <button className="text-[10px] font-bold tracking-widest border-b border-black pb-1 hover:opacity-60 transition-opacity">
          전체 보기
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="aspect-[3/4] bg-zinc-50 mb-6 overflow-hidden relative">
              {/* Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-zinc-300 text-[10px] font-bold tracking-widest uppercase">
                [ PRODUCT IMAGE ]
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              
              {/* Quick Add Overlay */}
              <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-4 text-[10px] font-bold tracking-[0.2em] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                장바구니 담기
              </button>
            </div>
            
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">
                {product.category}
              </span>
              <div className="flex items-start justify-between">
                <h3 className="text-sm font-medium tracking-wide group-hover:opacity-60 transition-opacity">
                  {product.name}
                </h3>
                <span className="text-sm font-bold tracking-tighter">{product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
