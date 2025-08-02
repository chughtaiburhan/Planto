import React, { FC } from 'react';
import Paragraph from './Paragraph';
import Image from 'next/image';
import UserImage from '../../../public/user-icon.svg';

const Testimonials: FC = () => {
  return (
    <section
      className="cursor-pointer w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-4 sm:p-6 my-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-md mx-auto"
      aria-labelledby="testimonial-title"
    >
     <header className="flex items-center px-2 py-2 gap-x-4">
  <div className="relative w-[30px] h-[30px] rounded-full ring-2 ring-white/40 shadow-[0_0_8px_2px_rgba(255,255,255,0.2)]">
    <Image
      src={UserImage}
      alt="Profile picture of Sara Loren"
      height={30}
      width={30}
      loading="lazy"
      className="rounded-full object-cover w-full h-full"
    />
  </div>
  <h3
  id="testimonial-title"
  className="text-xs sm:text-sm md:text-base text-foreground bg-gradient-to-r from-white via-[#9AEBA3] to-white bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer font-semibold tracking-wide"
>
  Sara-Loren
</h3>

</header>


      <blockquote>
        <Paragraph />
      </blockquote>
    </section>
  );
};

export default Testimonials;
