import React from "react";
import Rectangle9 from "../assets/Rectangle9.png";

const CommonLayout = ({ title, description, children }) => (
  <div className="grid grid-cols-6 h-screen">
    <div className="col-span-6 lg:col-span-4 flex justify-center items-center order-1 lg:order-0 h-screen hidden lg:flex dark:bg-[#18171B]">
      <div className="flex justify-center items-center flex-col max-w-[690px]">
        <h1 className="text-4xl font-extrabold mb-5 dark:text-white">AI50</h1>
        <img src={Rectangle9} alt="" />
        <h2 className="text-xl font-semibold mt-9 dark:text-white">
          {title || "Harness Data For Smarter Decisions."}
        </h2>
        <p className="text-base mt-9 text-center dark:text-white">
          {description ||
            "As AI creators, we must embed our highest ethical standards into these technologies, ensuring they serve humanity responsibly and protec individual rights and dignity."}
        </p>
      </div>
    </div>
    {children}
  </div>
);

export default CommonLayout;
