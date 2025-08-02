'use client';

import React, { FC } from 'react';

const ProductCardSkeleton:FC = () => {
  return (
    <div className="relative  w-80 h-96 max-w-[400px] mr-0 rounded-4xl bg-gradient-glass backdrop-blur-xl border border-white/10 shadow-nature overflow-hidden transition-noneanimate-pulse">
      <article className="relative w-full h-full rounded-4xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-md overflow-hidden">
        
        {/* Top shimmer line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-32 h-3 bg-white/10 rounded-b-xl z-10" />

        {/* Image skeleton */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[40rem] h-[22rem] bg-gray-300/10 rounded-xl z-50" />

        {/* Content skeleton */}
        <section className="absolute bottom-0 left-0 right-0 p-6 pt-20 text-center space-y-4">
          <div className="h-5 w-32 mx-auto bg-gray-300/20 rounded" />
          <div className="h-3 w-24 mx-auto bg-gray-300/20 rounded" />
          <div className="flex justify-center items-center space-x-3">
            <div className="h-4 w-14 bg-gray-300/20 rounded" />
            <div className="h-3 w-10 bg-gray-300/10 rounded" />
          </div>
        </section>

        {/* Glow overlay */}
        <div className="absolute inset-0 rounded-4xl bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      </article>

      {/* Drop shadow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-primary/10 blur-xl rounded-full" />
    </div>
  );
};

export default ProductCardSkeleton;
