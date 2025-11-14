// components/SideBar.tsx
'use client';

import React from "react";
import Btn from "../lib/Btn";

interface SideBarProps {
  activeComponent: "btn" | "input";
  setActiveComponent: (value: "btn" | "input") => void;
}

const SideBar: React.FC<SideBarProps> = ({
  activeComponent,
  setActiveComponent,
}) => {
  return (
    <nav className="p-4 flex flex-col h-full">
      {/* ---- Title ---- */}
      <h2 className=" mb-6 pl-2  text-2xl font-bold text-blue-400 uppercase tracking-wider">
        Components
      </h2>

      {/* ---- Menu Items ---- */}
      <div className="pl-5">
        {/* Button Component */}
        <Btn
          text="Button"
          variant="leftbar"
          onClick={() => setActiveComponent("btn")}
          className={`
            w-full justify-start text-left
            ${activeComponent === "btn"
              ? "text-white before:opacity-100 scale-105"
              : "text-gray-400 hover:text-gray-200"
            }
            transition-all duration-200
          `}
        />

        {/* Input Component */}
        <Btn
          text="Input "
          variant="leftbar"
          onClick={() => setActiveComponent("input")}
          className={`
            w-full justify-start text-left
            ${activeComponent === "input"
              ? "text-white before:opacity-100 scale-105"
              : "text-gray-400 hover:text-gray-200"
            }
            transition-all duration-200
          `}
        />
      </div>
    </nav>
  );
};

export default SideBar;