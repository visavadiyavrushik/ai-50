import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import OTPInput from "react-otp-input";

import { ReactComponent as BackArrow } from "../../assets/back.svg";
import CommonLayout from "../../layout/AuthLayout";
import { AuthApi } from "../../services/apis/AuthApis";
import { Toast } from "../../utils/Toasts";
import ButtonWithLoader from "../../components/ButtonWithLoader";
import CountDownTimer from "../../components/CountDownTImer";

const VerifyCode = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [OTP, setOTP] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [expiryTime, setExpiryTime] = useState(location.state?.expires || 0);

  useEffect(() => {
    if (!location.state || !location.state.data || !location.state?.expires) {
      navigate("/signup");
    }
  }, [location.state, navigate]);

  if (!location.state || !location.state.data || !location.state?.expires) {
    return null;
  }

  function handleChange(OTP) {
    setOTP(OTP);
  }

  const validateOtp = (otp) => {
    return /^\d{6}$/.test(otp);
  };

  const handleResendCode = async () => {
    try {
      const response = await AuthApi.sendOtp({
        email: location.state.data.email,
      });
      Toast.success(response.message);
      setExpiryTime(response.data[0].expires);
    } catch (error) {
      console.error("Failed to resend code:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateOtp(OTP)) {
      setIsLoading(false);
      Toast.error("Invalid Code format. Please enter a 6-digit Code.");
      return;
    }
    setIsLoading(true);
    try {
      await AuthApi.verifyOtp({
        otp: OTP,
        email: location.state.data.email,
      });

      const response = await AuthApi.signup(location.state.data);
      Toast.success(response.message);

      navigate("/signin");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CommonLayout>
      <div className="col-span-7 lg:col-span-3  bg-black text-white flex justify-center items-center lg:items-start flex-col h-screen order-0 lg:order-1 px-3 lg:px-0">
        <div className="w-full max-w-[430px] pl-[0px] lg:ml-[40px] 2xl:ml-[140px] pr-0 md:pr-10 xl:pr-0">
          <div className="mb-8 ">
            <button className="mb-4" onClick={() => navigate(-1)}>
              <BackArrow />
            </button>
            <h1 className="text-4xl text-center lg:text-left font-extrabold mb-2">
              Ready to Use AI50?
            </h1>
            <p className="text-lg text-center lg:text-left ">
              Verify your Email Address, Enter Code
            </p>
          </div>
          <form onSubmit={handleSubmit} className="text-center">
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

            <ButtonWithLoader
              isLoading={isLoading}
              disabled={isLoading || !OTP || OTP.length < 6}
            >
              Verify
            </ButtonWithLoader>
            <CountDownTimer expires={expiryTime} onResend={handleResendCode} />
          </form>
          <p className="mt-12 text-lg ">
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
          <p className="text-xl font-semibold text-center lg:text-left">
            <Link
              to="/signup"
              className="underline text-customGreen text-center lg:text-left "
            >
              {""}
              Sign up{""}
            </Link>{" "}
            &nbsp;If you don’t have an account
          </p>
        </div>
      </div>
    </CommonLayout>
  );
};

export default VerifyCode;
