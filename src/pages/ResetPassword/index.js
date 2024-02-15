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
      <div className="col-span-7 lg:col-span-3  bg-black text-white flex justify-center items-center lg:items-start flex-col h-screen order-0 lg:order-1 px-3 lg:px-0">
        <div className="w-full max-w-[430px] pl-[0px] lg:ml-[40px] xl:ml-[140px] pr-0 md:pr-10 xl:pr-0">
          <div className="mb-8">
            <button className="mb-4" onClick={() => navigate(-1)}>
              <BackArrow />
            </button>
            <h1 className="text-4xl text-center lg:text-left font-extrabold mb-2">
              Ready to Use AI50?
            </h1>
            <p className="text-base text-center lg:text-left ">
              Reset Password
            </p>
          </div>
          <form onSubmit={handleSubmit} className="">
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
          <p className="text-lg font-semibold text-center lg:text-left">
            <Link
              to="/signin"
              className="underline text-customGreen text-center lg:text-left "
            >
              {""}
              Sign in{""}
            </Link>{" "}
            &nbsp;If you have an account
          </p>
        </div>
      </div>
    </CommonLayout>
  );
}

export default ResetPassword;
