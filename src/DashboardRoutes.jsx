import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DashboardEdit from "./pages/DashboardEdit";

function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="/:id" element={<DashboardEdit />} />
    </Routes>
  );
}

export default DashboardRoutes;
