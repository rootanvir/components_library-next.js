'use client';

import React, { useState } from "react";
import Nav from "@/components/main/Nav";
import ComView from "@/components/main/ComView";
import dynamic from "next/dynamic";
import Template from "@/components/main/Template";

// Dynamically import Docs (client-side only)
const Docs = dynamic(() => import("@/components/main/Docs"), { ssr: false });

const Home: React.FC = () => {
  const [activePage, setActivePage] = useState<"comview" | "docs" | "template">("comview");

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-200">
      {/* Fixed Nav */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Nav setActivePage={setActivePage} />
      </div>

      {/* Scrollable Content */}
      <main className="flex-1 pt-[80px] overflow-y-auto">
        {activePage === "comview" && <ComView />}
        {activePage === "docs" && <Docs />}
        {activePage === "template" && <Template />}
      </main>
    </div>
  );
};

export default Home;
