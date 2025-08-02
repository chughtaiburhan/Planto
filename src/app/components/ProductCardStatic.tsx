// components/ProductCardStatic.tsx

import Image from 'next/image';
import React, { FC } from 'react';

const ProductCardStatic:FC = () => {
  return (
    <article className="relative w-80 h-96 max-w-[400px] mr-0 rounded-4xl bg-gradient-glass backdrop-blur-xl border border-white/10 shadow-nature hover:shadow-2xl overflow-hidden transition-shadow duration-300"
      aria-labelledby="product-title"
      aria-describedby="product-description"
    >
      {/* Decorative top line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-32 h-3 bg-gradient-to-b from-white/30 to-transparent rounded-b-xl z-10" aria-hidden="true"></div>

      {/* Product Image */}
      <figure className="absolute left-1/2 transform -translate-x-1/2 w-[40rem] h-[22rem] ">
        <Image
          src="/Product-1.svg"
          alt="Dieffenbachia Seguine houseplant"
          height={200}
          width={200}  
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </figure>

      {/* Content */}
      <section className="absolute bottom-0 left-0 right-0 p-6  text-center space-y-3">
        <h4 id="product-title" className="text-xl font-semibold text-foreground">Premium Plant</h4>
        <p id="product-description" className="text-sm text-muted-foreground">Dieffenbachia Seguine</p>
        <div className="flex items-center justify-center space-x-2">
          <span className="text-lg font-bold text-primary">$24.99</span>
          <span className="text-sm text-muted-foreground line-through">$32.99</span>
        </div>
      </section>

      {/* Inner glow */}
      <div className="absolute inset-0 rounded-4xl bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" aria-hidden="true"></div>
    </article>
  );
};

export default ProductCardStatic;
