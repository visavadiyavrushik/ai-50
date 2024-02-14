import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import { ReactComponent as BackArrow } from "../../assets/back.svg";
import { ReactComponent as EmailSvg } from "../../assets/email.svg";
import { ReactComponent as PasswordSvg } from "../../assets/password.svg";
import CommonLayout from "../../layout/AuthLayout";
import InputWithIcon from "../../components/InputWithIcon";

import signUpSchema from "../../validators/signUpSchema";

function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <CommonLayout description="Empower your business strategy with deep data insights. Transform complex information into actionable decisions, fostering growth and competitive advantage.">
      <div className="col-span-7 lg:col-span-3  bg-black text-white flex justify-center items-center lg:items-start flex-col h-screen order-0 lg:order-1">
        <div className="w-full max-w-[430px] pl-[0px] lg:ml-[40px] xl:ml-[140px] pr-0 md:pr-10 xl:pr-0">
          <div className="mb-[8]">
            <button className="mb-4" onClick={() => navigate(-1)}>
              <BackArrow />
            </button>
            <h1 className="text-4xl font-extrabold mb-2">Ready to Use AI50?</h1>
            <p className="text-base ">Sign Up</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="px-4 lg:px-0">
            <InputWithIcon
              icon={EmailSvg}
              placeholder="Full Name"
              type="text"
              {...register("full_name")}
              error={errors.full_name?.message}
            />
            <InputWithIcon
              icon={EmailSvg}
              placeholder="Email Address"
              type="email"
              {...register("email")}
              error={errors.email?.message}
            />
            <InputWithIcon
              icon={PasswordSvg}
              placeholder="Password"
              type="password"
              {...register("password")}
              error={errors.password?.message}
            />
            <InputWithIcon
              icon={PasswordSvg}
              placeholder="Confirm Password"
              type="password"
              {...register("confirm_password")}
              error={errors.confirm_password?.message}
            />
            <button className="bg-customGreen hover:bg-[#00b796d4] text-white font-bold py-2 px-4 rounded w-full mt-5">
              Sign Up
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

export default SignUp;
