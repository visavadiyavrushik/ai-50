import React from "react";
import { NotFoundImage } from "../../assets";

const NotFound = () => {
  return (
    <div className="h-screen">
      <div className="flex items-center justify-center h-full flex-col ">
        {/* <div className="text-center"> */}
        <NotFoundImage />
        <h2 className="text-3xl font-bold mt-16">
          Whoops!! Something went wrong
        </h2>
        <p className="mt-5 opacity-60 text-[28px]">
          Sorry, the page you are looking for doesn’t exist or has been removed
        </p>
        {/* </div> */}
      </div>
    </div>
  );
};

export default NotFound;
