"use client";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap ring-white px-6 py-3">
      <div className="flex items-end flex-shrink-0 text-black mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Navigation Bar
        </span>
      </div>
      <div className="w-full block flex-grow justify-end lg:flex lg:items-end lg:mt-4 lg:w-auto">
        <div className="flex justify-center gap-4 mb-5">
          <Link
            href="/"
            className="border-2 border-green-600 rounded-lg px-5 py-3 hover:bg-green-600 hidden sm:block"
          >
            Home
          </Link>
        </div>
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex p-3 w-10 h-10 text-sm text-gray-500 rounded-lg sm:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <CiMenuBurger />
        </button>

        {/* Mobile devices Nav Bar */}
        {isOpen && (
          <div className="absolute top-16 right-0 bg-white p-4 shadow-lg sm:hidden">
            <Link href="/">Menu</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
