import axios from "axios";
import { Route, Routes, useLocation } from "react-router-dom";

// Axios default
axios.defaults.baseURL = "https://inmobiliaria-api-green.vercel.app/";

// Pages
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Detail from "./pages/Detail";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
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

  return (
    <div className="w-full h-full min-h-screen flex flex-col">
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
