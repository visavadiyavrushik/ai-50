import { lazy, Suspense } from "react";
import Loading from "../components/Loading";

import CommonLayout from "../layout/AuthLayout";

const SignIn = lazy(() => import("../pages/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp"));
const SocialSignup = lazy(() => import("../pages/SocialSignIn"));
const VerifyCode = lazy(() => import("../pages/VerifyCode"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const ResetPassword = lazy(() => import("../pages/ResetPassword"));

const authRoutes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        {" "}
        <CommonLayout>
          <SocialSignup />
        </CommonLayout>
      </Suspense>
    ),
  },
  {
    path: "signin",
    element: (
      <Suspense fallback={<Loading />}>
        <CommonLayout>
          <SignIn />
        </CommonLayout>
      </Suspense>
    ),
  },
  {
    path: "signup",
    element: (
      <Suspense fallback={<Loading />}>
        <CommonLayout>
          <SignUp />
        </CommonLayout>
      </Suspense>
    ),
  },
  {
    path: "verify-code",
    element: (
      <Suspense fallback={<Loading />}>
        <CommonLayout>
          <VerifyCode />
        </CommonLayout>
      </Suspense>
    ),
  },
  {
    path: "forgot-password",
    element: (
      <Suspense fallback={<Loading />}>
        <CommonLayout>
          <ForgotPassword />
        </CommonLayout>
      </Suspense>
    ),
  },
  {
    path: "reset-password",
    element: (
      <Suspense fallback={<Loading />}>
        <CommonLayout>
          <ResetPassword />
        </CommonLayout>
      </Suspense>
    ),
  },
];

export default authRoutes;
