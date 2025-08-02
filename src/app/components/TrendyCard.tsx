'use client';

import Image from 'next/image';
import React, { FC } from 'react';
import ProductImg from '../../../public/product2.svg';
import Paragraph from './Paragraph';
import Button from './Button';
import { motion } from 'framer-motion';

const TrendyCard: FC = () => {
  return (
    <section
      className="w-full px-4  "
      aria-labelledby="trendy-card-title"
      role="region"
    >
      <article className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center w-full bg-white/5 border border-white/10 backdrop-blur-sm rounded-4xl shadow-lg overflow-hidden">
        {/* Text content */}
        <div className="w-full px-6 py-8 md:px-10">
          <h3
            id="trendy-card-title"
            className="text-2xl md:text-3xl font-semibold text-foreground leading-tight mb-4"
          >
            For Small Décor AI Plant
          </h3>
          <Paragraph />
          <div className="flex items-center gap-3 py-4">
            <span className="text-lg font-bold text-primary">$24.99</span>
            <span className="text-sm text-muted-foreground line-through">
              $32.99
            </span>
          </div>
          <Button />
        </div>

        {/* Image */}
        <figure className="w-full h-full flex justify-center items-center p-6 md:p-10 bg-gradient-to-br from-white/10 to-transparent">
          <motion.div
    whileHover={{
      scale: 1.1,
      rotate: 2,
    }}
    whileTap={{
      scale: 0.95,
    }}
    transition={{
      type: 'spring',
      stiffness: 300,
      damping: 20,
    }}
    className="w-full h-auto max-w-sm"
  >
    <Image
      src={ProductImg}
      alt="AI-generated decorative houseplant"
      width={400}
      height={400}
      className="object-contain w-full cursor-pointer h-auto max-w-sm"
      loading="lazy"
    />
  </motion.div>
        </figure>
      </article>
    </section>
  );
};

export default TrendyCard;
