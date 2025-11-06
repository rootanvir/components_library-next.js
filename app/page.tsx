import React from "react";
import Nav from "@/components/main/Nav";
import SideBar from "@/components/main/Sidebar";
import ComView from "@/components/main/ComView";
import CompSidebar from "@/components/main/compSidebar";

const Home: React.FC = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Nav />
      </div>

      <div className="flex flex-1 pt-[64px]">
        <CompSidebar />
      </div>
    </div>
  );
};

export default Home;
