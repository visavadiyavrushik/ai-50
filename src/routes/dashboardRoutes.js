import { lazy, Suspense } from "react";
import AuthGuard from "../utils/AuthGuard";
import DashboardLayout from "../layout/DashboardLayout";

const Dashboard = lazy(() => import("../pages/Dashboard"));

const dashboardRoutes = [
  {
    path: "/dashboard",
    element: (
      <Suspense>
        <AuthGuard>
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        </AuthGuard>
      </Suspense>
    ),
  },
];

export default dashboardRoutes;
