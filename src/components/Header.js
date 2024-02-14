import React, { useState } from "react";
import {
  Avtar,
  DarkModeIcon,
  FullScreenIcon,
  LanguageIcon,
  LightModeIcon,
  NotificationIcon,
  SearchIcon,
} from "../assets";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState("lightMode");

  const toggleMode = (value) => {
    setIsDarkMode(value);
    // if (value === "lightMode") {
    //   setIsDarkMode(false);
    // } else {
    //   setIsDarkMode(true);
    // }
    // You can add logic here to toggle between light and dark mode classes on your entire app
  };

  const handleFullScreen = () => {
    if (document.fullscreenEnabled) {
      document.documentElement.requestFullscreen();
    }
  };

  return (
    <header className="h-[72px] flex items-center justify-between px-6  bg-white w-full">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center ">
          <h1 className="text-lg font-semibold text-[22px] mr-3">AI Chat</h1>
          <div className="mr-3 bg-[#F2F2F2] px-3 py-2 rounded-lg">
            <span className="text-lg font-medium">120 Token Remaining</span>
          </div>
          <button className="border border-customGreen px-3 py-2 text-customGreen rounded b">
            Upgrade
          </button>
        </div>
        {/* Switch */}

        {/* Buttons */}
        <div className="flex items-center">
          <div className="max-w-24 flex items-center justify-between bg-[#F3F3F3] p-1 rounded mr-5">
            <button
              className={`mr-2 p-1 rounded ${
                isDarkMode === "lightMode" ? "bg-white " : ""
              }`}
              onClick={() => toggleMode("lightMode")}
            >
              <LightModeIcon />
            </button>
            <button
              className={` p-1 rounded ${
                isDarkMode === "darkMode" ? "bg-white " : ""
              }`}
              onClick={() => toggleMode("darkMode")}
            >
              <DarkModeIcon />
            </button>
          </div>
          <button className="mr-5">
            <NotificationIcon />
          </button>
          <button className="mr-5">
            <SearchIcon />
          </button>
          <button className="mr-5">
            <LanguageIcon />
          </button>
          <button className="mr-5" onClick={handleFullScreen}>
            <FullScreenIcon />
          </button>
          {/* Profile */}
          <div className="flex items-center gap-4">
            <img className="w-10 h-10 rounded" src={Avtar} alt="" />
            <div className="font-medium">
              <div>Mark Roastler</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Pro Trial
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
