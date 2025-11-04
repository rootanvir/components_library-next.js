import React from "react";
import Nav from "@/components/main/Nav";
import SideBar from "@/components/main/Sidebar";
import ComView from "@/components/main/ComView";

const Home: React.FC = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      
      <div className="fixed top-0 left-0 right-0 z-50">
        <Nav />
      </div>

      
      <div className="flex flex-1 pt-[64px]"> 
        <div className="fixed top-[64px] left-0 h-[calc(100vh-64px)] w-60 border-r border-gray-300">
          <SideBar />
        </div>

       
        <div className="ml-60 flex-1 overflow-y-auto h-[calc(100vh-64px)]">
          <ComView className="p-6" />
        </div>
      </div>
    </div>
  );
};

export default Home;
