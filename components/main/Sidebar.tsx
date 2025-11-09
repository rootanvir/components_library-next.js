import React, { FC, ReactNode } from 'react';
import Btn from '../lib/Btn';

interface SideBarProps {
  children?: ReactNode;
}

const SideBar: FC<SideBarProps> = ({ children }) => {
  return (
    <div className="h-screen w-60 border-r border-blue-800 flex flex-col bg-black shadow-md items-center">
      <h1 className="text-xl font-bold p-6 flex-shrink-0 text-white">Components</h1>

      <nav className="flex-1 w-full overflow-y-auto px-4 py-2 space-y-4 scrollbar scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-black hover:scrollbar-thumb-blue-500 scrollbar-thumb-rounded-md flex flex-col items-center">
        {children}
        <Btn text="Button" className="text-white" />
      </nav>
    </div>
  );
};

export default SideBar;
