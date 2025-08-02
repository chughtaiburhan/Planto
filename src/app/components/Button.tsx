'use client';

import React, { FC, useCallback, useState } from 'react';
import throttle from 'lodash.throttle';

const Button: FC = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  // Throttled calculation function (receives only numbers, no event)
  const updateRotation = useCallback(
    throttle((x: number, y: number, width: number, height: number) => {
      const centerX = width / 2;
      const centerY = height / 2;
      const rotateX = (y - centerY) / 7;
      const rotateY = (centerX - x) / 7;

      setRotate({ x: rotateX, y: rotateY });
    }, 100),
    []
  );

  const onMouseMove = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;

    updateRotation(x, y, box.width, box.height); // pass values only
  };

  const onMouseLeave = ():void => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <button
      className=" cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#20281d] to-[#1f271c] group-hover:from-[#182015] group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.03, 1.03, 1)`,
        transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99)",
      }}
    >
      <span className="relative px-12 py-2.5 transition-all ease-in duration-75 bg-transparent rounded-md border border-white">
        Explore
      </span>
    </button>
  );
};

export default Button;
