import React, { FC } from 'react'
import Navbar from '@/app/components/Navbar' 
import Home from '@/app/Home/page'
const Page: FC = () => {
  return (
    <div className="pt-24 min-h-screen w-full bg-gradient-custom">
  <Navbar />
  <Home />
</div>

  )
}

export default Page
