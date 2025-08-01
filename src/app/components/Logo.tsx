import Link from 'next/link'
import React, { FC } from 'react'

const Logo:FC = () => {
  return (
    <>
      <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse"> 
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Planto<span className="text-[#20281d] font-extrabold px-1">.</span>
          </span>
        </Link>
    </>
  )
}

export default Logo
