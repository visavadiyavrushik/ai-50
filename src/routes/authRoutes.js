import { lazy, Suspense } from "react";
import Loading from "../components/Loading";

const SignIn = lazy(() => import("../pages/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp"));
const SocialSignup = lazy(() => import("../pages/SocialSignIn"));
const VerifyOtp = lazy(() => import("../pages/VerifyOtp"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const ResetPassword = lazy(() => import("../pages/ResetPassword"));

const authRoutes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        {" "}
        <SocialSignup />
      </Suspense>
    ),
  },
  {
    path: "signin",
    element: (
      <Suspense fallback={<Loading />}>
        <SignIn />
      </Suspense>
    ),
  },
  {
    path: "signup",
    element: (
      <Suspense fallback={<Loading />}>
        <SignUp />
      </Suspense>
    ),
  },
  {
    path: "verify-otp",
    element: (
      <Suspense fallback={<Loading />}>
        <VerifyOtp />
      </Suspense>
    ),
  },
  {
    path: "forgot-password",
    element: (
      <Suspense fallback={<Loading />}>
        <ForgotPassword />
      </Suspense>
    ),
  },
  {
    path: "reset-password",
    element: (
      <Suspense fallback={<Loading />}>
        <ResetPassword />
      </Suspense>
    ),
  },
];

export default authRoutes;
