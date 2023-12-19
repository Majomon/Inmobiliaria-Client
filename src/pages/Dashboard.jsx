import React from "react";
import NavbarDashBoard from "../components/DashBoard/NavbarDashBoard/NavbarDashBoard";
import MainDashBoard from "../components/DashBoard/MainDashBoard/MainDashBoard";

function Dashboard() {
  return (
    <div className="w-full min-h-screen">
      <NavbarDashBoard />
      <MainDashBoard/>
    </div>
  );
}

export default Dashboard;
