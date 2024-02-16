import { lazy, Suspense } from "react";
import AuthGuard from "../utils/AuthGuard";

const Dashboard = lazy(() => import("../pages/Dashboard"));

const dashboardRoutes = [
  {
    path: "/dashboard",
    element: (
      <Suspense>
        {/* <AuthGuard> */}
        <Dashboard />
        {/* </AuthGuard> */}
      </Suspense>
    ),
  },
];

export default dashboardRoutes;
