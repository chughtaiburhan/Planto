import React, { FC, lazy, Suspense  } from 'react' 
import TrendyCardSkeleton from "@/app/components/TrendyCardSkeleton";
// Lazy-load the actual component
const TrendyCard = lazy(() => import('@/app/components/TrendyCard'));

const TrendyProduct:FC = () => {
  return (
    <main className='relative  sm:space-y-20 '>
    <div className='flex items-center justify-center'>
    <h2 className='text-4xl py-20 sm:py-0 font-semibold text-foreground'> 
        Our Trendy Products
    </h2>
    </div>
     <Suspense fallback={<TrendyCardSkeleton />}>
        <TrendyCard />
      </Suspense>
    </main>
  )
}

export default TrendyProduct
