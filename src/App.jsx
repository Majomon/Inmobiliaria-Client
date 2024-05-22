import axios from "axios";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

// Axios default
// axios.defaults.baseURL = "https://inmobiliaria-api-green.vercel.app";
axios.defaults.baseURL = "http://localhost:8080";

// Pages
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";
import DashboardRoutes from "./DashboardRoutes";

function App() {
  const location = useLocation();
  const url = location.pathname;
  const shouldRenderNavbar = url !== "/dashboard";
  const [theme, setTheme] = useState(
    window.localStorage.getItem("color-theme") || "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("color-theme", theme);
  }, [theme]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  const isLoggedIn = localStorage.getItem("user");

  return (
    <div className="w-full h-full min-h-screen flex flex-col bg-gray-100">
      {shouldRenderNavbar && <Navbar theme={theme} setTheme={setTheme} />}
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/detail/:id" element={<Detail theme={theme} />} />
        <Route path="/search" element={<Search theme={theme} />} />
        <Route path="/adminYosef" element={<Login />} />

        <Route
          path="/dashboard/*"
          element={isLoggedIn ? <DashboardRoutes /> : <Navigate to="/" />}
        />

        <Route path="*" element={<NotFoundPage theme={theme} />} />
      </Routes>
      {shouldRenderNavbar && <Footer theme={theme} />}
    </div>
  );
}

export default App;
