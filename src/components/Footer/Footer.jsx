import Facebook from "../../assets/redes/facebook.png";
import Instagram from "../../assets/redes/instagram.png";
import Linkedin from "../../assets/redes/linkedin.png";
import LogoDark from "../../assets/darkMode.png";
import LogoLight from "../../assets/lightMode.png";
import { NavLink } from "react-router-dom";

function Footer({ theme }) {
  const email = "test@test.com";
  const phoneNumber = "1138612819";

  const openEmailClient = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className=" bg-gray-100  dark:bg-black">
      {/* Redes */}
      <div className="my-4">
        <h2 className="my-8 text-center  font-bold dark:text-white text-xl md:text-2xl lg:text-3xl">
          Visitanos en nuestras redes
        </h2>
        <lu className="w-2/3 lg:w-1/3 mx-auto my-4 flex justify-between">
          <li className="list-none">
            <NavLink to={"https://www.facebook.com"} target="_blank">
              <img
                src={Facebook}
                alt="Facebook"
                className="w-[40px] lg:w-[50px] opacity-70 hover:opacity-100 hover:scale-105 duration-500 ease-out cursor-pointer hover:shadow-white hover:shadow-md rounded-full"
              />
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink to={"https://www.instagram.com"} target="_blank">
              <img
                src={Instagram}
                alt="Instagram"
                className="w-[40px] lg:w-[50px] opacity-70 hover:opacity-100 hover:scale-105 duration-500 ease-out cursor-pointer hover:shadow-white hover:shadow-md rounded-full"
              />
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink to={"https://www.linkedin.com"} target="_blank">
              <img
                src={Linkedin}
                alt="Linkedin"
                className="w-[40px] lg:w-[50px] opacity-70 hover:opacity-100 hover:scale-105 duration-500 ease-out cursor-pointer hover:shadow-white hover:shadow-md rounded-full"
              />
            </NavLink>
          </li>
        </lu>
      </div>
      {/* Footer */}
      <div className="w-10/12 mx-auto my-10 flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-start">
        {/* Logo */}
        <div className="py-4">
          {theme === "light" ? (
            <NavLink to={"/"}>
              <img className="w-20" src={LogoLight} alt="LogoLight" />
            </NavLink>
          ) : (
            <NavLink to={"/"}>
              <img className="w-20" src={LogoDark} alt="LogoDark" />
            </NavLink>
          )}
        </div>

        {/* Menu */}
        <div className="text-center py-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold  dark:text-gray-100">
            Menu
          </h2>
          <div className="flex lg:flex-col lg:items-start">
            <NavLink to={"/"}>
              <h3 className="text-xl md:text-2xl pl-2 my-2 text-gray-400 hover:text-black dark:hover:text-gray-100">
                Inicio
              </h3>
            </NavLink>
            <NavLink to={"/search?operation=Alquiler"}>
              <h3 className="text-xl md:text-2xl pl-2 my-2 text-gray-400 hover:text-black  dark:hover:text-gray-100">
                Alquiler
              </h3>
            </NavLink>
            <NavLink to={"/search?operation=Venta"}>
              <h3 className="text-xl md:text-2xl pl-2 my-2 text-gray-400 hover:text-black  dark:hover:text-gray-100">
                Venta
              </h3>
            </NavLink>
          </div>
        </div>

        {/* Contacto */}
        <div className="text-center py-4 lg:text-start  lg:items-start">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold  dark:text-gray-100">
            Contacto
          </h2>
          <div className="h-[2rem] flex items-center my-2 text-xl md:text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-phone"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#E9B824"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
            <a
              href={`tel:${phoneNumber}`}
              onClick={handleCall}
              className="ml-2 text-gray-400 cursor-pointer hover:text-black  dark:hover:text-gray-100"
            >
              {phoneNumber}
            </a>
          </div>
          <div className="h-[2rem] flex items-center my-2 text-xl md:text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-mail"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#E9B824"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
            <h2
              className="ml-2 text-gray-400 cursor-pointer hover:text-black  dark:hover:text-gray-100"
              onClick={openEmailClient}
            >
              {email}
            </h2>
          </div>
        </div>
      </div>
      {/* Developer */}
      <div className="w-full h-[3rem] bg-black flex justify-center items-center gap-2 lg:gap-10">
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
