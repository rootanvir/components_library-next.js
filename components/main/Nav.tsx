'use client';

import React, { FC } from 'react';
import Link from "next/link";
import Image from "next/image";
import '../../styles/globals.css';
import Btn from '../lib/Btn';
import { useRouter } from 'next/navigation';


interface NavProps {
  setActivePage: (page: 'comview' | 'docs' | 'template') => void;
}

const Nav: FC<NavProps> = ({ setActivePage }) => {
  const router = useRouter();

  return (
    <nav className="flex justify-between items-center h-20 px-12 border-b border-blue-800 bg-[#1d4ed8] shadow-md ">
      <Link
        href="#"
        className="flex items-center gap-4 flex-shrink-0 "
      >
        <Image src="/images/dragon.svg" width={40} height={40} alt="Logo" />
        <h1 className="text-white font-extrabold text-3xl tracking-wider drop-shadow-md">
          DRACARYS
        </h1>
      </Link>

      <div className="flex gap-5">
        <Btn text="Docs" className="text-white" onClick={() => setActivePage('docs')} />
        <Btn text="Components" className="text-white" onClick={() => setActivePage('comview')} />
        <Btn text="Template" className="text-white"  onClick={() => setActivePage('template')}/>
        <a className="mr-5" href="https://github.com/rootanvir/components_library-next.js" target="_blank" rel="noopener noreferrer">
          <Image
            alt="GitHub logo"
            src="/images/github.png"
            width={30}
            height={20}
          />
        </a>


        <Btn
          text="Login"
          className="bg-white text-[#1d4ed8] font-semibold hover:bg-blue-100 transition-all duration-300"
          onClick={() => router.push('/auth/login')}
        />
      </div>
    </nav>
  );
};

export default Nav;