import React, { FC, ReactNode } from 'react';
import Btn from '../lib/Btn';

interface SideBarProps {
  children?: ReactNode;
}

const SideBar: FC<SideBarProps> = ({ children }) => {
  return (
    <div className="h-screen w-60 border-r border-blue-800 flex flex-col bg-black shadow-md items-left">

      <nav className="flex flex-col justify-start items-start p-5">
        {children}
        <h1 className="font-bold text-white">Components</h1>

        <div className="flex flex-col space-y-0  items-start mt-5">
            <Btn text="Button" variant="leftbar" />
            <Btn text="Input"  variant="leftbar" />
            <Btn text="Toast" variant="leftbar" />
        </div>

      </nav>


    </div>

  );
};

export default SideBar;
