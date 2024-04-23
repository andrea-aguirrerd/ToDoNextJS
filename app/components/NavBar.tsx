import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap ring-white px-6 py-3">
  <div className="flex items-end flex-shrink-0 text-black mr-6">
    <span className="font-semibold text-xl tracking-tight">Navigation Bar</span>
  </div>
  <div className="w-full block flex-grow justify-end lg:flex lg:items-end lg:mt-4 lg:w-auto xs:hidden sm:hidden ">
    <div className="flex justify-center gap-4 mb-5">
    <Link href="/" className="border-2 border-green-600 rounded-lg px-5 py-3 hover:bg-green-600 ">Home</Link>
    </div>
  </div>
</nav>
  );
};

export default NavBar;


{/*  <div className="block lg:hidden md:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-black border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>*/}