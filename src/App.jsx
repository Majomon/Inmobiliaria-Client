import axios from "axios";
import { Route, Routes, useLocation } from "react-router-dom";

// Axios default
axios.defaults.baseURL = "https://inmobiliaria-api-green.vercel.app";

// Pages
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Contact from "./pages/Contact";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

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
        <Route path="/detail/:id" element={<Detail />} theme={theme}/>
        <Route path="/contact" element={<Contact />} theme={theme}/>
        <Route path="*" element={<NotFoundPage />} theme={theme}/>
      </Routes>
      <Footer theme={theme}/>
    </div>
  );
}

export default App;
