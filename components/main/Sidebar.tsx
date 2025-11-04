import React, { FC, ReactNode } from 'react';
import Btn from '../lib/Btn';

interface SideBarProps {
  children?: ReactNode;
}

const SideBar: FC<SideBarProps> = ({ children }) => {
  return (
    <div className="h-screen w-60 border-r border-gray-800 flex flex-col bg-dark">
      {/* Header */}
      <h1 className="text-xl font-bold p-6 flex-shrink-0  border-gray-800 text-white">
        Components
      </h1>

      {/* Scrollable nav */}
      <nav className="flex-1 overflow-y-auto">
        {children}
        <Btn text="Button"/>

      </nav>
    </div>
  );
};

export default SideBar;
