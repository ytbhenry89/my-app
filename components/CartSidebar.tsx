"use client";

import React from "react";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/20 transition-opacity duration-300 z-[60] ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-[400px] bg-white z-[70] shadow-2xl transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-xl font-bold tracking-tight">장바구니 (0)</h2>
            <button 
              onClick={onClose}
              className="hover:opacity-60 transition-opacity p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <p className="text-zinc-400 mb-8 font-medium">장바구니가 비어 있습니다.</p>
            <button 
              onClick={onClose}
              className="px-8 py-3 bg-black text-white text-xs font-bold tracking-[0.2em] hover:bg-zinc-800 transition-colors"
            >
              쇼핑 계속하기
            </button>
          </div>

          <div className="border-t border-zinc-100 pt-8 mt-auto">
            <div className="flex items-center justify-between mb-4 font-bold text-xs tracking-widest">
              <span>소계</span>
              <span>₩0</span>
            </div>
            <button className="w-full py-4 bg-zinc-100 text-zinc-400 text-xs font-bold tracking-[0.2em] cursor-not-allowed uppercase">
              결제하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
