import React from "react";
import { ReactComponent as BackArrow } from "../../assets/back.svg";
import { ReactComponent as EmailSvg } from "../../assets/email.svg";
import { ReactComponent as PasswordSvg } from "../../assets/password.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CommonLayout from "../../layout/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import InputWithIcon from "../../components/InputWithIcon";

// Define Yup schema for validation
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // Use yup resolver with react-hook-form
  });
  console.log("errors: ", errors);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
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
          <div className="mb-[32px]">
            <button className="mb-4" onClick={() => navigate(-1)}>
              <BackArrow />
            </button>
            <h1 className="text-4xl text-center lg:text-left font-extrabold mb-2">
              Ready to Use AI50?
            </h1>
            <p className="text-base text-center lg:text-left ">Sign In</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="px-4 lg:px-0">
            <InputWithIcon
              icon={EmailSvg}
              placeholder="Email Address"
              type="email"
              name="email" // Add name attribute for validation
              ref={register} // Register email field
            />
            {/* {errors?.email && (
              <p className="mt-1 mb-0 text-red-600">{errors?.email.message}</p>
            )}{" "} */}
            <InputWithIcon
              icon={PasswordSvg}
              placeholder="Password"
              type="password"
              name="password" // Add name attribute for validation
              ref={register} // Register password field
            />
            {/* {errors?.password && (
              <p className="mt-1 mb-0 text-red-600 text-base">
                {errors?.password.message}
              </p>
            )}{" "} */}
            {/* Display error message if password validation fails */}
            <p
              className="text-sm text-end text-customGreen  cursor-pointer"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </p>
            <button className="bg-customGreen hover:bg-[#00b796d4] text-white font-bold py-2 px-4 rounded w-full mt-5">
              Sign In
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

export default Login;
