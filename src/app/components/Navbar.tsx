'use client';

import Logo from './Logo';
import { FC, useEffect, useState } from 'react';
import NavItem from '@/app/data/navItems.json';
import { ShoppingCartIcon, Bars3Icon } from '@heroicons/react/24/outline';
import NavDropdown from './NavDropdown'; // ✅ New Component 
import UserDropdown from './UserDropDown';

type NavLink = {
  title: string;
  href: string;
  children?: NavLink[];
};

const Navbar: FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
 const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () :void=> {
      setIsScrolled(window.scrollY > 20); // Add threshold if needed
    };

    window.addEventListener('scroll', onScroll);
    return () :void=> window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`fixed w-full z-20 top-0 start-0 transition-colors duration-300 ${
        isScrolled ? 'bg-black/20 backdrop-blur text-white drop-shadow' : 'bg-transparent'
      }`}>
      <div className="max-w-screen-xl flex flex-wrap items-center  justify-between mx-auto p-4">
        <Logo />

        {/* Icons (Cart + Menu) */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <span className="md:hidden p-2 cursor-pointer text-gray-200 hover:text-white">
            <Bars3Icon className="h-6 w-6" />
          </span>
          {/* Bucket-Icon */}
          <span className="relative p-2 text-gray-200 hover:text-white">
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </span>
           {/* User Icon */}
          <span className="relative p-2 text-gray-200 hover:text-white">
            <UserDropdown/>
          </span>
        </div>

        {/* Nav Links */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 text-white">
            {Object.entries(NavItem).map(([key, item]: [string, NavLink], index) => (
              <NavDropdown
                key={index}
                navKey={key}
                item={item}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
