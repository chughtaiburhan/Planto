import React, { FC } from 'react';

const TestimonialsSkeleton:FC = () => {
  return (
    <section
      className="cursor-pointer w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-4 sm:p-6 my-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-md mx-auto animate-pulse"
    >
      <header className="flex items-center gap-x-4 px-2 py-2">
        <div className="w-[30px] h-[30px] rounded-full bg-gray-300 dark:bg-gray-700" />
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-24" />
      </header>

      <div className="space-y-3 mt-4 px-2">
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-full" />
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-5/6" />
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-[60%]" />
      </div>
    </section>
  );
};

export default TestimonialsSkeleton;
