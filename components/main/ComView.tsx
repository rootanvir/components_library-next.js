'use client';

import React, { useState, useCallback, memo } from "react";
import SideBar from "./Sidebar";
import ComViewBtn from "./ComViewBtn";
import ComViewInput from "./ComViewInput";

const MemoizedComViewBtn = memo(ComViewBtn);
const MemoizedComViewInput = memo(ComViewInput);

const ComView: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<"btn" | "input">("btn");
  const handleSetActive = useCallback((value: "btn" | "input") => {
    setActiveComponent(value);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-950">
      <aside
        aria-label="Component navigation"
        className="fixed top-[80px] left-0 bottom-0 w-64 border-r border-gray-800 bg-gray-900 overflow-y-auto z-50"
      >
        <SideBar
          activeComponent={activeComponent}
          setActiveComponent={handleSetActive}
        />
      </aside>
      <main className="flex-1 ml-64 pt-[85px] px-6 pb-10 min-h-screen">
        <div className="max-w-[1200px] mx-auto">
          {activeComponent === "btn" ? (
            <MemoizedComViewBtn />
          ) : (
            <MemoizedComViewInput />
          )}
        </div>
      </main>
    </div>
  );
};

export default ComView;