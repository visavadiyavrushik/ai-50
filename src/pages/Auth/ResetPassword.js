import React from "react";
import { ReactComponent as BackArrow } from "../../assets/back.svg";
import { ReactComponent as PasswordSvg } from "../../assets/password.svg";
import CommonLayout from "../../layout/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import InputWithIcon from "../../components/InputWithIcon";

function ResetPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <CommonLayout>
      <div className="col-span-6 lg:col-span-2  bg-black text-white flex justify-center items-center lg:items-start flex-col h-screen order-0 lg:order-1">
        <div className="w-full max-w-[430px] pl-[0px] lg:pl-[48px] px-5 lg:px-0">
          <div className="mb-[32px]">
            <button className="mb-4" onClick={() => navigate(-1)}>
              <BackArrow />
            </button>
            <h1 className="text-4xl font-extrabold mb-2">Ready to Use AI50?</h1>
            <p className="text-base ">Reset Password</p>
          </div>
          <form onSubmit={handleSubmit} className="px-4 lg:px-0">
            <InputWithIcon
              icon={PasswordSvg}
              placeholder="New Password"
              type="password"
            />
            <InputWithIcon
              icon={PasswordSvg}
              placeholder="Confirm New Password"
              type="password"
            />
            <button className="bg-customGreen hover:bg-[#00b796d4] text-white font-bold py-2 px-4 rounded w-full mt-5">
              Reset
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
            <Link to="/login" className="underline text-customGreen">
              Sign In &nbsp;
            </Link>
            {"   "}
            If you have an account
          </p>
        </div>
      </div>
    </CommonLayout>
  );
}

export default ResetPassword;
