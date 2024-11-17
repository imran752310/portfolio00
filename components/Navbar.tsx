import { Nav_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="padding-container relative z-30 rounded-lg bg-white shadow-xl ring-1 ring-slate-100">
      <div className="flex justify-between items-center h-16 px-4">
        <Link href="/" className="bold-32 capitalize relative">
          Imran <span className="text-blue-700">Khan</span>
        </Link>
        <ul className="hidden h-full gap-6 lg:flex px-6 py-3">
          {Nav_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="flexCenter text-[15px] font-[500] text-black hover:bg-blue-500 hover:text-white px-4 py-1 rounded-full cursor-pointer transition-all duration-300"
            >
              {link.lable}
            </Link>
          ))}
        </ul>

        <Image
          src="menu.svg"
          alt="menu"
          width={28}
          height={28}
          className="inline-block cursor-pointer lg:hidden"
        />
      </div>
    </nav>
  );
};

export default Navbar;
