import React, { FC, Suspense, lazy } from 'react';

// Lazy load components
const Header = lazy(() => import('../components/Header'));
const TrendyProduct = lazy(() => import('../components/TrendyProduct'));

const SkeletonLoader:FC= () => (
  <div role="status" className="max-w-sm animate-pulse space-y-2 px-4 py-6">
    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div> 
    <span className="sr-only">Loading...</span>
  </div>
);

const Page: FC = () => {
  return (
    <main
      className="px-6 md:px-10 lg:px-14 overflow-hidden min-h-screen bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/back.svg')",
        backgroundSize: '100%',
        backgroundPosition: 'center 60px',
      }}
    >
      {/* Header with skeleton fallback */}
      <Suspense fallback={<SkeletonLoader />}>
        <Header />
      </Suspense>

      {/* Product with skeleton fallback */}
      <Suspense fallback={<SkeletonLoader />}>
        <TrendyProduct />
      </Suspense>
    </main>
  );
};

export default Page;
