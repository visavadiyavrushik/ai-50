import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as BackArrow } from "../../assets/back.svg";
import CommonLayout from "../../layout/AuthLayout";
import OTPInput from "react-otp-input";

function Verify() {
  const navigate = useNavigate();

  const [OTP, setOTP] = useState("");

  function handleChange(OTP) {
    setOTP(OTP);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/reset-password");
  };

  return (
    <CommonLayout
      title="Harness Data For Smarter Decisions."
      description=" As AI creators, we must embed our highest ethical standards into these
    technologies, ensuring they serve humanity responsibly and protect
    individual rights and dignity."
    >
      <div className="col-span-7 lg:col-span-3  bg-black text-white flex justify-center items-center lg:items-start flex-col h-screen order-0 lg:order-1">
        <div className="w-full max-w-[430px] pl-[0px] lg:ml-[40px] xl:ml-[140px] pr-0 md:pr-10 xl:pr-0">
          <div className="mb-[32px] ">
            <button className="mb-4" onClick={() => navigate(-1)}>
              <BackArrow />
            </button>
            <h1 className="text-4xl text-center lg:text-left font-extrabold mb-2">
              Ready to Use AI50?
            </h1>
            <p className="text-base text-center lg:text-left ">
              Verify your Email Address, Enter OTP
            </p>
          </div>
          <form onSubmit={handleSubmit} className="px-4 lg:px-0 text-center">
            <OTPInput
              className="p-2 bg-transparent"
              value={OTP}
              onChange={handleChange}
              numInputs={6}
              inputStyle={
                {
                  // background: "transparent",
                  // padding: "10px",
                  // color: "#fff",
                }
              }
              skipDefaultStyles
              renderSeparator={<span className="mr-2"> </span>}
              renderInput={(props) => (
                <input
                  {...props}
                  className="p-4 border bg-transparent border-[#312E36] rounded-lg focus:outline-none w-full focus:border-customGreen text-center"
                />
              )}
            />

            <button className="bg-customGreen hover:bg-[#00b796d4] text-white font-bold py-2 px-4 rounded w-full mt-5">
              Verify
            </button>
          </form>
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

          <p className="my-10 border-t border-gray-400 text-sm text-center"></p>
          <p className="text-lg font-semibold">
            <Link to="/signup" className="underline text-customGreen">
              {" "}
              Sign up{"  "} &nbsp;
            </Link>
            {"   "}
            If you don’t have an account
          </p>
        </div>
      </div>
    </CommonLayout>
  );
}

export default Verify;
