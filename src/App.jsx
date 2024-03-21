import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

// Axios default
axios.defaults.baseURL = "https://inmobiliaria-api-green.vercel.app";
/* axios.defaults.baseURL = "http://localhost:8080"; */

// Pages
/* import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos CSS de AOS */
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Dashboard from "./pages/Dashboard";
import DashboardEdit from "./pages/DashboardEdit";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const url = location.pathname; /*  */
  const shouldRenderNavbar = url !== "/dashboard";
  const [theme, setTheme] = useState(
    window.localStorage.getItem("color-theme") || "light"
  );

  const checkAdminUser = () => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    return user?.email;
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("color-theme", theme);
  }, [theme]);

  useEffect(() => {
    // Verifica si el usuario es admin@admin.com
    const isAdminUser = checkAdminUser();

    // Redirige según la verificación
    if (isAdminUser && url == "/adminYosef") {
      navigate("/dashboard");
    }
  }, [navigate]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

/*   useEffect(() => {
    AOS.init({
      duration: 1200, // Duración de la animación en milisegundos
    });
  }, []); */

  return (
    <div className="w-full h-full min-h-screen flex flex-col">
      {shouldRenderNavbar && <Navbar theme={theme} setTheme={setTheme} />}
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/detail/:id" element={<Detail theme={theme} />} />
        <Route path="/search" element={<Search theme={theme} />} />
        <Route path="/adminYosef" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:id" element={<DashboardEdit />} />
        <Route path="*" element={<NotFoundPage theme={theme} />} />
      </Routes>
      {shouldRenderNavbar && <Footer theme={theme} />}
    </div>
  );
}

export default App;
