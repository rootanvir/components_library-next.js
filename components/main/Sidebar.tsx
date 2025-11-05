import React, { FC, ReactNode } from 'react';
import Btn from '../lib/Btn';

interface SideBarProps {
  children?: ReactNode;
}

const SideBar: FC<SideBarProps> = ({ children }) => {
  return (
    <div className="h-screen w-60 border-r border-blue-800 flex flex-col bg-black shadow-md items-center">
      <h1 className="text-xl font-bold p-6 flex-shrink-0 text-white ">
        Components
      </h1>

      <nav className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
        {children}
        <Btn
          text="Button"
          className="w-full text-white "
        />
      </nav>
    </div>
  );
};

export default SideBar;
