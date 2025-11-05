'use client';

import React, { FC } from 'react';
import Link from "next/link";
import Image from "next/image";
import '../../styles/globals.css';
import Btn from '../lib/Btn';

const Nav: FC = () => {
  return (
    <nav className="flex justify-between items-center h-20 px-12 border-b border-blue-800 bg-[#1d4ed8] shadow-md">
      <Link
        href="#"
        className="flex items-center gap-4 flex-shrink-0 hover:scale-105 transition-transform duration-300"
      >
        <Image
          src="/images/dragon.svg"
          width={40}
          height={40}
          alt="Our Logo"
        />
        <h1 className="text-white font-extrabold text-3xl tracking-wider drop-shadow-md">
          DRACARYS
        </h1>
      </Link>

      <div className="flex gap-3">
        <Btn text="Docs"     className="text-white " />
        <Btn text="Components" className="text-white " />
        <Btn text="UI Block" className="text-white " />
        <Btn text="UI Kits"  className="text-white " />
        <Btn
          text="Sign Up"
          className="bg-white text-[#1d4ed8] font-semibold hover:bg-blue-100 transition-all duration-300"
        />
      </div>
    </nav>
  );
};

export default Nav;
