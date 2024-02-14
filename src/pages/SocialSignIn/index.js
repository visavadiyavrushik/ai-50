import React from "react";

import CommonLayout from "../../layout/AuthLayout";
import { Link } from "react-router-dom";

function SocialSignIn() {
  return (
    <CommonLayout>
      <div className="col-span-7 lg:col-span-3  bg-black text-white flex justify-center items-center lg:items-start flex-col h-screen order-0 lg:order-1">
        <div className="w-full max-w-[430px] pl-[0px] lg:ml-[40px] xl:ml-[140px] pr-0 md:pr-10 xl:pr-0">
          <div className="mb-[32px]">
            <h1 className="text-4xl font-extrabold mb-2">Ready to Use AI50?</h1>
            <p className="text-base ">Sign Up</p>
          </div>
          <button className="bg-customGreen hover:bg-[#00b796d4] text-white font-bold py-2 px-4 rounded w-full mb-[20px]">
            Sign Up with Email
          </button>
          <button className="bg-customGreen hover:bg-[#00b796d4] text-white font-bold py-2 px-4 rounded w-full">
            Sign Up with Google
          </button>
          <p className="mt-8 text-base ">
            By signing up, you agree to the{" "}
            <Link to="#" className="underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="#" className="underline">
              Privacy Policy
            </Link>
            .
          </p>

          <p className="my-10 border-t border-gray-400 text-sm text-center mt-5"></p>
          <p className="text-lg font-semibold">
            <Link to="/signin" className="underline text-customGreen">
              {""}
              Sign in{""}&nbsp;
            </Link>{" "}
            If you have an account
          </p>
        </div>
      </div>
    </CommonLayout>
  );
}

export default SocialSignIn;
