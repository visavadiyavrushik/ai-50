import React, { Fragment } from "react";
import {
  ArchiveIcon,
  ChatIcon,
  DeleteIcon,
  KababIcon,
  LogoutIcon,
  PenIcon,
  PricingIcon,
} from "../../assets";
import { Menu, Transition } from "@headlessui/react";

const ChatHistory = ({
  title,
  date,
  description,
  useChatIcon,
  useArchiveIcon,
}) => {
  const handleClick = () => {};
  return (
    <div className="relative ">
      <div className="my-4 flex text-left items-center gap-2 bg-customGray border border-[#E0E0E0] p-2 rounded-lg kababIconVisible">
        {useChatIcon ? useChatIcon : <ChatIcon className="start-icon" />}
        <div className="font-medium">
          <p className="m-0 overflow-hidden overflow-ellipsis whitespace-nowrap text-lg max-w-[232px]">
            {title || description}
          </p>
          <label className="text-sm text-gray-500 dark:text-gray-400">
            {date}
          </label>
        </div>
        <div className="absolute right-2 chat-icons bg-inherit flex">
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="">
              <KababIcon
                className="cursor-pointer"
                onClick={() => handleClick()}
              />
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-bottom-right divide-x divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-10">
                  <div>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-customGreen text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-base`}
                        >
                          Hide from Sidebar
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu.Button>
          </Menu>
          {useArchiveIcon && (
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="">
                <ArchiveIcon className="cursor-pointer ms-1" />
              </Menu.Button>
              <Transition
                as={Fragment}
                // show={true}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  //   aria-disabled="true"

                  className="absolute right-0 mt-2  p-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-10 "
                >
                  <div>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-customGreen text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-base`}
                        >
                          <LogoutIcon className="mr-2 h-5 w-5 !rotate-90" />
                          Share
                        </button>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-customGreen text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-base`}
                        >
                          <PenIcon className="mr-2 h-5 w-5" />
                          Rename
                        </button>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-customGreen text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-base`}
                        >
                          <DeleteIcon className="mr-2 h-5 w-5" />
                          Delete Chat
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatHistory;
