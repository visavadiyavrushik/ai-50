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
} from "../../assets";
import InputWithIcon from "../InputWithIcon";
import SidebarAccordion from "../SidebarAccordion";
import ChatHistory from "../ChatHistory";

const Sidebar = () => {
  return (
    <div className="sidebar ">
      <div className="sidebar-inner">
        <div className="sticky top-0  flex justify-center py-3 b w-full side-bar-logo h-[72px]">
          <SideBarLogo className="" />
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
            <SidebarAccordion
              title="Pinned"
              answer={
                <>
                  <ChatHistory
                    description="OT hours by Job Role"
                    date="8 Jan"
                    useChatIcon={<PinIcon className="start-icon" />}
                    // useArchiveIcon
                  />

                  <ChatHistory
                    description="OT hours by Job Role"
                    date="8 Jan"
                    useChatIcon={<PinIcon className="start-icon" />}
                    // useArchiveIcon
                  />
                </>
              }
            />
          </div>
          <div className="mt-4">
            {/* History */}
            <SidebarAccordion
              title="History"
              answer={
                <>
                  <ChatHistory
                    description="Make a Description about this"
                    date="8 Jan"
                    useArchiveIcon
                  />
                  <ChatHistory
                    description="Make a Description about this"
                    date="8 Jan"
                    useArchiveIcon
                  />
                  <ChatHistory
                    description="Make a Description about this"
                    date="8 Jan"
                    useArchiveIcon
                  />
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
      {/* <div className="sidebarcloseicon">
        <ArchiveIcon />
      </div> */}
    </div>
  );
};

export default Sidebar;
