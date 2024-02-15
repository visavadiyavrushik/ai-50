// Sidebar.js
import React from "react";
import {
  ArchiveIcon,
  ChatIcon,
  InputSearchIcon,
  KababIcon,
  PlusIcon,
  SideBarLogo,
} from "../assets";
import InputWithIcon from "./InputWithIcon";
import Accordion from "./Accordion";

const Sidebar = () => {
  return (
    <div className=" w-[340px] h-full bg-white max-h-fit overflow-auto ">
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
        <InputWithIcon
          customclassName="border-0"
          bgColor="bg-customGray"
          icon={InputSearchIcon}
          placeholder="Search"
          type="text"
        />
        <Accordion
          title="Pinned"
          answer={
            <>
              <div className=" relative flex text-left items-center  gap-2 bg-customGray border border-[#E0E0E0] p-2 rounded-lg kababIconVisible">
                <ChatIcon />
                <div className="font-medium">
                  <p className="m-0 overflow-hidden overflow-ellipsis whitespace-nowrap text-lg max-w-[232px]">
                    Make a Description about this
                  </p>
                  <label className="text-sm text-gray-500 dark:text-gray-400">
                    8 Jan
                  </label>
                </div>
                <div className=" absolute right-2 chat-icons bg-inherit flex bg-[]">
                  <KababIcon />
                  <ArchiveIcon className="ms-1" />
                </div>
              </div>

              <div
                className={`relative flex text-left items-center mt-4 gap-2 border border-[#E0E0E0] p-2 rounded-lg kababIconVisible ${"bg-[#F1FFFD] "}`}
              >
                <ChatIcon />
                <div className="font-medium">
                  <p className="m-0 overflow-hidden overflow-ellipsis whitespace-nowrap text-lg max-w-[232px]">
                    Make a Description about this
                  </p>
                  <label className="text-sm text-gray-500 dark:text-gray-400">
                    8 Jan
                  </label>
                </div>
                <div className="absolute right-2 chat-icons bg-inherit flex bg-[]">
                  <KababIcon />
                  <ArchiveIcon className="ms-1" />
                </div>
              </div>
            </>
          }
        />
      </div>
    </div>
  );
};

export default Sidebar;
