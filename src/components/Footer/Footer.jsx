import Facebook from "../../assets/redes/facebook.png";
import Instagram from "../../assets/redes/instagram.png";
import Linkedin from "../../assets/redes/linkedin.png";
import Logo from "../../assets/logo-removebg-preview.png";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  const email = "test@test.com";
  const phoneNumber = "1138612819";

  const openEmailClient = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="mt-4 bg-gray-100">
      {/* Redes */}
      <div className="my-4">
        <h2 className="text-center text-3xl font-bold">
          Visitanos en nuestras redes
        </h2>
        <lu className="w-1/3 mx-auto my-4 flex justify-between">
          <li className="list-none">
            <img
              src={Facebook}
              alt="Facebook"
              className="w-[50px] opacity-70 hover:opacity-100 hover:scale-105 duration-500 ease-out cursor-pointer"
            />
          </li>
          <li className="list-none">
            <img
              src={Instagram}
              alt="Instagram"
              className="w-[50px] opacity-70 hover:opacity-100 hover:scale-105 duration-500 ease-out cursor-pointer"
            />
          </li>
          <li className="list-none">
            <img
              src={Linkedin}
              alt="Linkedin"
              className="w-[50px] opacity-70 hover:opacity-100 hover:scale-105 duration-500 ease-out cursor-pointer"
            />
          </li>
        </lu>
      </div>
      {/* Footer */}
      <div className="w-10/12 h-[10rem]  mx-auto my-10 flex px-4 justify-between">
        {/* Logo */}
        <div>
          <img src={Logo} alt="Logo" className="w-[150px]" />
        </div>

        {/* Menu */}
        <div>
          <h2 className="text-4xl font-bold border-b-2 border-black">Menu</h2>
          <div>
            <NavLink to={"/"}>
              <h3 className="pl-2 my-2 text-gray-400 hover:text-black">
                Inicio
              </h3>
            </NavLink>
            <NavLink to={"/alquiler"}>
              <h3 className="pl-2 my-2 text-gray-400 hover:text-black">
                Alquiler
              </h3>
            </NavLink>
            <NavLink to={"/venta"}>
              <h3 className="pl-2 my-2 text-gray-400 hover:text-black">
                Venta
              </h3>
            </NavLink>
          </div>
        </div>

        {/* Contacto */}
        <div>
          <h2 className="text-4xl font-bold border-b-2 border-black">
            Contacto
          </h2>
          <div className="h-[2rem] flex items-center my-2">
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
              className="ml-2 text-gray-400 cursor-pointer"
            >
              {phoneNumber}
            </a>
          </div>
          <div className="h-[2rem] flex items-center my-2">
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
              className="ml-2 text-gray-400 cursor-pointer"
              onClick={openEmailClient}
            >
              {email}
            </h2>
          </div>
        </div>
      </div>
      {/* Developer */}
      <div className="w-full h-[3rem] bg-black flex justify-center items-center gap-10">
        <NavLink
          to={"https://www.instagram.com/maurimonzon_j/"}
          target="_blank"
        >
          <img src={Instagram} alt="Linkedin " className="w-[30px]" />
        </NavLink>
        <h3 className=" text-white">
          Proyecto desarrollado por Mauricio Monzon
        </h3>
        {/* Redes propias */}
        <NavLink
          to={"https://www.linkedin.com/in/monzon-mauricio/"}
          target="_blank"
        >
          <img src={Linkedin} alt="Linkedin " className="w-[30px]" />
        </NavLink>
      </div>
    </div>
  );
}

export default Footer;
