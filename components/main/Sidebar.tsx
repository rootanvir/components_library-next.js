import React, { FC } from 'react';

interface Props {
  
}

const SideBar: FC<Props> = ({  }) => {
  return (
    <div className="h-auto w-60 border-r border-gray-800">
      <h1 className="text-xl font-bold p-6">Components</h1>
      <nav className="flex flex-col">
        <a href="#" className="px-6 py-3 text-gray-500 hover:text-gray-200 transition-all">Button</a>
      </nav>
    </div>
  );
};

export default SideBar;