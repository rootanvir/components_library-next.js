'use client';

import React, { FC, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import '../../styles/globals.css';
import Btn from '../lib/Btn';

const Nav: FC = () => {
  
  return (
    <nav className="flex justify-between items-center h-20 px-12  border-gray-800 bg-green-500">
      <Link href="#" className="flex items-center gap-5 flex-shrink-0">
        <Image
          src ="/images/dragon.svg"
          width={40}
          height={40}
          alt="Our Logo"
        />
        <h1 className="text-white font-bold text-3xl" >DRACARYS</h1>
      </Link>
      <div className="flex gap-4 text-white">
        <Btn text="Docs" />
        <Btn text="Template" />
        <Btn text="UI Block" />
        <Btn text="Ui kits" />
        <Btn text="Sign Up" />
      </div>
    </nav>
  );
}
export default Nav;