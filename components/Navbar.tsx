import React, { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const links = [
    {
      id: 1,
      link: "about",
    },
    {
      id: 2,
      link: "skills",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "contact me",
    },
  ];
  return (
    <div className="w-screen z-20 absolute">
      <div className="max-w-[2560px] m-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <div>
          <Link href="/">Mitoru Dev</Link>
        </div>
        <div className="flex items-center">
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <li key={id} className="capitalize px-4 hover:underline underline-offset-4 text-sm">
                <Link href={link}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div   className="hidden md:flex ml-4 text-black cursor-pointer bg-white  drop-shadow-md px-3 py-[0.18rem] hover:text-zinc-700 rounded-lg">Hire me</div>
      </div>
    </div>
  );
};

export default Navbar;
