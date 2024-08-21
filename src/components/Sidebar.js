// Sidebar.js
import React from "react";
import {
  ArchiveIcon,
  ChatIcon,
  InputSearchIcon,
  KababIcon,
  MemberIcon,
  PinIcon,
  PlusIcon,
  SideBarLogo,
  WorkspaceIcon,
} from "../assets";
import InputWithIcon from "./InputWithIcon";
import ChatAccordion from "./ChatAccordion";
// import ChatAccordion from "./ChatAccordion";

const Sidebar = () => {
  return (
    <div className="relative w-[340px] h-full bg-white max-h-fit overflow-auto  sticky top-0">
      <div className="sticky top-0  flex justify-center py-3 b w-full side-bar-logo h-[72px]">
        <SideBarLogo className="" />
        {/* <h1 className="text-4xl font-extrabold hidden dark:flex dark:text-white ">
          AI Minds
        </h1> */}
      </div>
      <div className="px-4 chat-inner">
        <button
          className="bg-customGreen text-lg mt-5 p-3  rounded inline-flex justify-center items-center w-full  "
          onClick={() => console.log("New Chat")}
        >
          <PlusIcon />
          <span className="text-white ml-3  "> New Chat</span>
        </button>
        <hr className="my-4" />
        <InputWithIcon
          customClass="border-0"
          bgColor="bg-customGray"
          icon={InputSearchIcon}
          placeholder="Search"
          type="text"
        />
        {/* Pinned */}
        <div className="mt-4">
          <ChatAccordion
            title="Pinned"
            answer={
              <>
                <div className=" my-4">
                  <div className=" relative flex text-left items-center gap-2 bg-customGray border border-[#E0E0E0] p-2 rounded-lg kababIconVisible">
                    <PinIcon className="start-icon" />
                    <div className="font-medium">
                      <p className="m-0 overflow-hidden overflow-ellipsis whitespace-nowrap text-lg max-w-[232px]">
                        OT hours by Job Role
                      </p>
                      <label className="text-sm text-gray-500 dark:text-gray-400">
                        8 Jan
                      </label>
                    </div>
                    <div className=" absolute right-2 chat-icons bg-inherit flex ">
                      <KababIcon className="cursor-pointer" />
                      {/* <ArchiveIcon className="ms-1" /> */}
                    </div>
                  </div>
                </div>
                <div className=" my-4">
                  <div className=" relative flex text-left items-center gap-2 bg-customGray border border-[#E0E0E0] p-2 rounded-lg kababIconVisible">
                    <PinIcon className="start-icon" />
                    <div className="font-medium">
                      <p className="m-0 overflow-hidden overflow-ellipsis whitespace-nowrap text-lg max-w-[232px]">
                        OT hours by Job Role
                      </p>
                      <label className="text-sm text-gray-500 dark:text-gray-400">
                        8 Jan
                      </label>
                    </div>
                    <div className=" absolute right-2 chat-icons bg-inherit flex ">
                      <KababIcon className="cursor-pointer" />
                      {/* <ArchiveIcon className="ms-1" /> */}
                    </div>
                  </div>
                </div>
              </>
            }
          />
        </div>
        <div className="mt-4">
          {/* History */}
          <ChatAccordion
            title="History"
            answer={
              <>
                <div className="relative ">
                  <div className="my-4  flex text-left items-center gap-2 bg-customGray border border-[#E0E0E0] p-2 rounded-lg kababIconVisible">
                    <ChatIcon className="start-icon" />
                    <div className="font-medium">
                      <p className="m-0 overflow-hidden overflow-ellipsis whitespace-nowrap text-lg max-w-[232px]">
                        Make a Description about this
                      </p>
                      <label className="text-sm text-gray-500 dark:text-gray-400">
                        8 Jan
                      </label>
                    </div>
                    <div className=" absolute right-2 chat-icons bg-inherit flex ">
                      <KababIcon className="cursor-pointer" />
                      <ArchiveIcon className="cursor-pointer ms-1" />
                    </div>
                  </div>
                </div>
                <div className="relative ">
                  <div className="my-4  flex text-left items-center gap-2 bg-customGray border border-[#E0E0E0] p-2 rounded-lg kababIconVisible">
                    <ChatIcon className="start-icon" />
                    <div className="font-medium">
                      <p className="m-0 overflow-hidden overflow-ellipsis whitespace-nowrap text-lg max-w-[232px]">
                        Make a Description about this
                      </p>
                      <label className="text-sm text-gray-500 dark:text-gray-400">
                        8 Jan
                      </label>
                    </div>
                    <div className=" absolute right-2 chat-icons bg-inherit flex ">
                      <KababIcon className="cursor-pointer" />
                      <ArchiveIcon className="cursor-pointer ms-1" />
                    </div>
                  </div>
                </div>
                <div className="relative ">
                  <div className="my-4  flex text-left items-center gap-2 bg-customGray border border-[#E0E0E0] p-2 rounded-lg kababIconVisible">
                    <ChatIcon className="start-icon" />
                    <div className="font-medium">
                      <p className="m-0 overflow-hidden overflow-ellipsis whitespace-nowrap text-lg max-w-[232px]">
                        Make a Description about this
                      </p>
                      <label className="text-sm text-gray-500 dark:text-gray-400">
                        8 Jan
                      </label>
                    </div>
                    <div className=" absolute right-2 chat-icons bg-inherit flex ">
                      <KababIcon className="cursor-pointer" />
                      <ArchiveIcon className="cursor-pointer ms-1" />
                    </div>
                  </div>
                </div>
              </>
            }
          />
        </div>
      </div>

      <div className="mx-4 pt-4  bottom-5 bg-white">
        <button
          className=" text-lg  px-2  mb-7 rounded inline-flex  items-center w-full  "
          onClick={() => console.log("New Chat")}
        >
          <MemberIcon />
          <span className="ml-3"> New Chat</span>
        </button>
        <button
          className=" text-lg  px-2 mb-4 rounded inline-flex  items-center w-full  "
          onClick={() => console.log("New Chat")}
        >
          <WorkspaceIcon />
          <div className="flex flex-col">
            <span className="ml-3">Add Team workspace</span>
            <label className="text-sm text-gray-500 dark:text-gray-400">
              Collaborate on a Team plan
            </label>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
