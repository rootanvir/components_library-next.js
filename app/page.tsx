import React from "react";
import Nav from "@/components/main/Nav";
import SideBar from "@/components/main/Sidebar";
import ComView from "@/components/main/ComView";
import Input from "@/components/lib/Input";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex flex-1">
        <SideBar />
        <ComView className="flex-1" />
      </div>
      
    </div>
    

  );
};

export default Home;
