import { Link, NavLink } from "react-router-dom";
import LogoDark from "../../assets/darkMode.png";
import LogoLight from "../../assets/lightMode.png";
import Instagram from "../../assets/redes/instagram.png";
import Linkedin from "../../assets/redes/linkedin.png";

function Footer({ theme }) {
  const email = "iruslux@gmail.com";
  const phoneNumber = "+5491144451012";

  const openEmailClient = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className=" bg-gradient-to-b  from-grisClaro-100 to-grisOscuro-100 dark:bg-gradient-to-t dark:from-blue-500 dark:to-blue-950 ">
      {/* Redes */}
      <div className="py-2">
        <h2 className="text-center  font-bold dark:text-white text-base md:text-lg lg:text-xl">
          Visitanos en nuestras redes
        </h2>
        {/*  <ul className="w-2/3 lg:w-1/3 mx-auto my-4 flex justify-between">
          <li className="list-none">
            <NavLink to={"https://www.facebook.com"} target="_blank">
              <img
                src={Facebook}
                alt="Facebook"
                className="w-[30px] lg:w-[40px]  hover:scale-105 duration-500 ease-out cursor-pointer hover:shadow-white hover:shadow-md rounded-full"
              />
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink to={"https://www.instagram.com"} target="_blank">
              <img
                src={Instagram}
                alt="Instagram"
                className="w-[30px] lg:w-[40px]  hover:scale-105 duration-500 ease-out cursor-pointer hover:shadow-white hover:shadow-md rounded-full"
              />
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink to={"https://www.linkedin.com"} target="_blank">
              <img
                src={Linkedin}
                alt="Linkedin"
                className="w-[30px] lg:w-[40px]  hover:scale-105 duration-500 ease-out cursor-pointer hover:shadow-white hover:shadow-md rounded-full"
              />
            </NavLink>
          </li>
        </ul> */}
        {/*  */}
      </div>
      {/* Footer */}
      <div className="w-10/12 mx-auto flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-start">
        {/* Logo */}
        <div className="py-4">
          {theme === "light" ? (
            <div className="w-full flex justify-center">
              <NavLink to={"/"}>
                <img className="w-20" src={LogoLight} alt="LogoLight" />
              </NavLink>
            </div>
          ) : (
            <div className="w-full flex justify-center">
              <NavLink to={"/"}>
                <img className="w-20" src={LogoDark} alt="LogoDark" />
              </NavLink>
            </div>
          )}
          <div className="text-xs mt-2 flex flex-col gap-2 text-gray-50">
            <h3>
              Somos inmobiliarios expertos en Alquileres Temporarios y Ventas
            </h3>
            <Link
              to={
                "https://boletinoficial.buenosaires.gob.ar/normativaba/norma/535188"
              }
              target="_blank"
              className="hover:text-gray-950"
            >
              Normativa de Alquiler temporario y fines Turísticos
            </Link>
            <h3>Asociado con Cucicba 6874</h3>
          </div>
        </div>

        {/* Menu */}
        <div className="text-center py-4">
          <h2 className="text-base md:text-lg lg:text-2xl font-semibold  dark:text-gray-100">
            Menu
          </h2>
          <div className="flex lg:flex-col lg:items-start">
            <NavLink to={"/"}>
              <h3 className="text-base md:text-lg pl-2 my-2 text-gray-200 hover:text-gray-950 dark:hover:text-gray-400">
                Inicio
              </h3>
            </NavLink>
            <NavLink to={"/search?operation=Alquiler"}>
              <h3 className="text-base md:text-lg  pl-2 my-2 text-gray-200 hover:text-gray-950  dark:hover:text-gray-400">
                Alquiler
              </h3>
            </NavLink>
            <NavLink to={"/search?operation=Venta"}>
              <h3 className="text-base md:text-lg pl-2 my-2 text-gray-200 hover:text-gray-950  dark:hover:text-gray-400">
                Venta
              </h3>
            </NavLink>
          </div>
        </div>

        {/* Contacto */}
        <div className="text-center py-4 lg:text-start  lg:items-start">
          <h2 className="text-base md:text-lg lg:text-xl font-semibold  dark:text-gray-100">
            Contacto
          </h2>
          <div className="h-[2rem] flex items-center my-2 text-xl md:text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              stroke="#E9B824"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
            <a
              href={`tel:${phoneNumber}`}
              onClick={handleCall}
              className="text-base md:text-lg pl-2 my-2 text-gray-200 hover:text-gray-950 dark:hover:text-gray-400"
            >
              {phoneNumber}
            </a>
          </div>
          <div className="h-[2rem] flex items-center my-2 text-xl md:text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              stroke="#E9B824"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
            <h2
              className="text-base md:text-lg pl-2 my-2 text-gray-200 hover:text-gray-950 dark:hover:text-gray-400 cursor-pointer"
              onClick={openEmailClient}
            >
              {email}
            </h2>
          </div>
        </div>
      </div>
      {/* Derechos reservados */}
      <div className="flex w-6/12 text-center mx-auto md:w-full md:justify-center md:items-center py-2 font-bold text-sm">
        <h2>© 2023-2024 Ruslux Todos los derechos reservados</h2>
      </div>
      <div></div>
      {/* Developer */}
      <div className="w-full h-[3rem] bg-gray-950 flex justify-center items-center gap-2 lg:gap-10">
        <NavLink
          to={"https://www.instagram.com/maurimonzon_j/"}
          target="_blank"
        >
          <img src={Instagram} alt="Linkedin " className="w-[30px]" />
        </NavLink>
        <h3 className=" text-white">Programador: Mauricio Monzon</h3>
        {/* Redes propias */}
        <NavLink
          to={"https://www.linkedin.com/in/mauricio-monzon/"}
          target="_blank"
        >
          <img src={Linkedin} alt="Linkedin " className="w-[30px]" />
        </NavLink>
      </div>
    </div>
  );
}

export default Footer;
