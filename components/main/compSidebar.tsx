import React, { FC } from "react";
import SideBar from "./Sidebar";
import ComView from "./ComView";

interface Props {}

const CompSidebar: FC<Props> = ({}) => {
  return (
    <div className="flex w-full h-full">

      <div className="w-60 h-full border-r border-gray-300 bg-gray-900/40">
        <SideBar />
      </div>


      <div className="flex-1 overflow-y-auto h-full">
        <ComView className="p-6" />
      </div>
    </div>
  );
};

export default CompSidebar;
