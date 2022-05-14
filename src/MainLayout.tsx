import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const MainLayout: FC = () => {
  return (
    <div className="flex items-stretch h-full ">
      <SideBar />
      <div className="p-5 bg-gray-100 grow">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
