import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className=" bg-emerald-950 flex-nowrap justify-between relative flex lg:flex-wrap lg:justify-start lg:py-4">
     <ul>
        <li>
          <Link href="/">
          Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
