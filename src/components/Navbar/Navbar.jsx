import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoBTC from "../../assets/Logo_btc.webp";
import RusluxTexto from "../../assets/logos/light/ruslux.png";
import RusluxLogoLIght from "../../assets/logos/light/logoCasa.png";
import RusluxTextoDark from "../../assets/logos/dark/texto.png";
import RusluxLogoDark from "../../assets/logos/dark/casa.png";

const options = [
  { name: "Inicio", to: "/" },
  { name: "Alquiler", to: "/search?operation=Alquiler" },
  { name: "Alquiler temporario", to: "/search?operation=Alquiler+temporario" },
  { name: "Venta", to: "/search?operation=Venta" },
];

// eslint-disable-next-line react/prop-types
function Navbar({ theme, setTheme }) {
  const [activeMenu, setActiveMenu] = useState(false);
  const location = useLocation();
  const fullPath = `${location.pathname}${location.search}`;

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="w-full h-[3.5em] px-10 fixed  bg-white dark:bg-black shadow-md dark:shadow-yellow-600 dark: z-50">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        {/* Icono */}
        <div className="">
          <Link to="/">
            {theme === "light" ? (
              <div className="flex justify-center items-center">
                <img className="w-16" src={RusluxLogoLIght} alt="LogoLight" />
                <img className="w-16" src={RusluxTexto} alt="RusluxTexto" />
              </div>
            ) : (
              <div className="flex justify-center items-center">
                <img className="w-16" src={RusluxLogoDark} alt="LogoLight" />
                <img className="w-16" src={RusluxTextoDark} alt="RusluxTexto" />
              </div>
            )}
          </Link>
        </div>
        {/* Toogle Theme */}
        <div className="lg:order-1 flex gap-x-2">
          <img className="w-10 rounded-full" src={LogoBTC} alt="LogoBTC" />
          <button
            onClick={toggleTheme}
            className={theme === "light" ? "block" : "hidden"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="w-6 h-6 stroke-yellow-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </button>
          <button
            onClick={toggleTheme}
            className={theme === "dark" ? "block" : "hidden"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-blue-800"
            >
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="w-6/12 h-full hidden lg:flex justify-around items-center">
          {options.map((option, index) => (
            <Link key={index} to={option.to}>
              <p
                className={
                  `${
                    theme === "dark"
                      ? "text-gray-100 hover:text-gray-300 text-lg"
                      : "text-black hover:text-gray-500 hover:border-b-gray-500 text-lg"
                  }` +
                  `${
                    fullPath === option.to
                      ? " border-b-2 border-gray-900 dark:border-red-700 font-semibold text-lg"
                      : ""
                  }`
                }
              >
                {option.name}
              </p>
            </Link>
          ))}
        </div>

        {/* Menu Responsive */}
        <div className="h-full flex flex-row-reverse lg:hidden">
          {activeMenu ? (
            <button onClick={() => setActiveMenu(!activeMenu)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                className="w-6 h-6 stroke-black dark:stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          ) : (
            <button onClick={() => setActiveMenu(!activeMenu)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                className="w-7 h-7 stroke-black dark:stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Menu activo */}
        {activeMenu && (
          <div
            className={`bg-white dark:bg-black absolute top-[3rem] right-0 w-48 rounded-bl-md shadow-md ${
              theme === "dark"
                ? "text-gray-100 text-xl"
                : "text-xl text-gray-900"
            }`}
          >
            {options.map((option, index) => (
              <Link
                onClick={() => setActiveMenu(!activeMenu)}
                key={index}
                to={option.to}
                className="block py-2 px-4   hover:bg-gray-950 dark:hover:bg-yellow-400"
              >
                {option.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
