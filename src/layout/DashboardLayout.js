import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1">
          <Header />
          <div className="h-[calc(100%-72px)] bg-customGray ">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
