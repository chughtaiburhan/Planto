'use client';

import React, { FC } from 'react';

const TrendyCardSkeleton:FC = () => {
  return (
    <section className="w-full px-4 py-10 animate-pulse">
      <article className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center w-full bg-white/5 border border-white/10 backdrop-blur-sm rounded-4xl shadow-lg overflow-hidden">

        {/* Text Content Skeleton */}
        <div className="w-full px-6 py-8 md:px-10 space-y-4">
          <div className="h-6 w-3/4 bg-gray-300/20 rounded" />
          <div className="h-4 w-full bg-gray-300/10 rounded" />
          <div className="h-4 w-5/6 bg-gray-300/10 rounded" />
          <div className="h-4 w-2/3 bg-gray-300/10 rounded" />

          <div className="flex items-center gap-3 py-4">
            <div className="h-5 w-16 bg-gray-300/20 rounded" />
            <div className="h-4 w-10 bg-gray-300/10 rounded" />
          </div>

          <div className="h-10 w-32 bg-gray-300/20 rounded-md" />
        </div>

        {/* Image Skeleton */}
        <div className="w-full h-full flex justify-center items-center p-6 md:p-10 bg-gradient-to-br from-white/10 to-transparent">
          <div className="w-full h-[250px] max-w-sm bg-gray-300/10 rounded-xl" />
        </div>
      </article>
    </section>
  );
};

export default TrendyCardSkeleton;
