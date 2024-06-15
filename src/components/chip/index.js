import React from "react";
import { CloseIcon } from "../../assets";

const Data = [
  "Not factually correct",
  "Don't like the style",
  "Didn't fully follow instructions",
  "Refused when it shouldn't have",
  "Being lazy",
  "Not factually correct",
  "Don't like the style",
  "Didn't fully follow instructions",
  "Refused when it shouldn't have",
  "Being lazy",
  "More..",
];

const TellUsMore = ({ setTellUsMore }) => {
  return (
    <div className="card py-5 px-4 my-12">
      <div className="flex items-center justify-between w-full mb-2.5">
        <h1 className="text-xl font-medium">Tell us more:</h1>
        <button onClick={() => setTellUsMore(false)}>
          <CloseIcon />
        </button>
      </div>
      <div className="flex flex-wrap">
        {Data?.map((r, i) => (
          <div
            className="chip m-2.5 "
            key={i}
            onClick={() => console.log("click")}
          >
            <span>{r}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TellUsMore;
