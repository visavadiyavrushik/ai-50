// Sidebar.js
import React from "react";
import { PlusIcon, SideBarLogo } from "../assets";

const Sidebar = () => {
  return (
    <div className=" w-72 h-full bg-white  ">
      <div className="  flex justify-center py-3 b w-full side-bar-logo h-[72px]">
        <SideBarLogo className="" />
        {/* <h1 className="text-4xl font-extrabold hidden dark:flex dark:text-white ">
          AI50
        </h1> */}
      </div>
      <div className="mx-4">
        <button
          className="bg-customGreen text-lg mt-5 p-3  rounded inline-flex justify-center items-center w-full  "
          onClick={() => console.log("New Chat")}
        >
          <PlusIcon />
          <span className="text-white ml-3  "> New Chat</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
