'use client';

import Link from 'next/link';
import { FC } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { AnimatePresence, motion } from 'framer-motion';

type NavLink = {
  title: string;
  href: string;
  children?: NavLink[];
};

interface NavDropdownProps {
  navKey: string;
  item: NavLink;
  openDropdown: string | null;
  setOpenDropdown: (key: string | null) => void;
}

const NavDropdown: FC<NavDropdownProps> = ({ navKey, item, openDropdown, setOpenDropdown }) => {
  const isOpen = openDropdown === navKey;

  const handleToggle = ():void => {
    if (item.children) {
      setOpenDropdown(isOpen ? null : navKey);
    }
  };

  return (
    <li className="relative">
      <div
        onClick={handleToggle}
        className="flex items-center cursor-pointer py-2 px-3 rounded md:p-0 text-gray-200 hover:text-white transition"
      >
        <Link href={item.href}>{item.title}</Link>
        {item.children && (
          <ChevronDownIcon
            className={`w-4 h-4 ml-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          />
        )}
      </div>

      {item.children && (
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded z-50 backdrop-blur-md"
            >
              {item.children.map((child, idx) => (
                <li key={idx}>
                  <Link
                    href={child.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded"
                  >
                    {child.title}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      )}
    </li>
  );
};

export default NavDropdown;
