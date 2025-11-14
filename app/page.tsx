'use client';

import React, { useState } from "react";
import Nav from "@/components/main/Nav";
import ComView from "@/components/main/ComView";
import dynamic from "next/dynamic";
import Template from "@/components/main/Template";

const Docs = dynamic(() => import("@/components/main/Docs"), { ssr: false });
const Landing = dynamic(() => import("@/components/main/Landing"), { ssr: false });

const Home: React.FC = () => {
  const [activePage, setActivePage] = useState<"landing" | "comview" | "docs" | "template">("landing");

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-200">
      {/* Fixed Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900">
        <Nav setActivePage={setActivePage} />
      </div>

      {/* Full-height main with bg */}
      <main className="flex-1 pt-[80px] min-h-screen bg-gray-900 overflow-y-auto">
        {activePage === "landing" && <Landing setActivePage={setActivePage} />}
        {activePage === "comview" && <ComView />}
        {activePage === "docs" && <Docs />}
        {activePage === "template" && <Template />}
      </main>
    </div>
  );
};

export default Home;