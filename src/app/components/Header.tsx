'use client';
import React, { FC, Suspense } from 'react';
import Paragraph from '../components/Paragraph';
import Button from './Button';
import TestimonialsSkeleton from '@/app/components/TestimonialsSkeleton';
import ProductCardSkeleton from '@/app/components/ProductCardSkeleton'; 

const Testimonials = React.lazy(() => import('@/app/components/Testimonials'));
const ProductCardStatic = React.lazy(() => import('@/app/components/ProductCardStatic'));
const Header: FC = () => {
  return (
    <main className="relative flex flex-col md:flex-row flex-wrap rounded-sm overflow-hidden min-h-screen bg-no-repeat bg-center">
      {/* Left content */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <h1 className="font-semibold leading-[1.1] text-[clamp(1rem,8vw,5rem)] bg-gradient-to-r from-white via-[#9AEBA3] to-white bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer drop-shadow">
          Breath Natural
        </h1>

        <Paragraph className="text-white/90" />
        <Button />

        <Suspense fallback={<TestimonialsSkeleton />}>
          <Testimonials />
        </Suspense>
      </div>

      {/* Product Card (Right) */}
      <div className="md:w-1/2 relative flex cursor-pointer justify-center md:justify-end items-center px-4"> 
          <Suspense fallback={<ProductCardSkeleton />}>
            <ProductCardStatic />
          </Suspense>
      </div>
    </main>
  );
};

export default Header;
