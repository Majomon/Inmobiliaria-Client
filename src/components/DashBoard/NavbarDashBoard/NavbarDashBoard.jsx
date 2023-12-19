import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";

function NavbarDashBoard() {
  const user = JSON.parse(window.localStorage.getItem("user"));

  return (
    <header className="w-full p-2 border-b-2">
      <nav className="flex justify-between items-center px-10">
        <Link to={"/"}>
          <img src={Logo} alt="Logo" className="w-12 h-12 " />
        </Link>
        <div>
          <input placeholder="Buscar" />
        </div>
        <div>
          <h1 className=" text-sm font-semibold">{user.name}</h1>
          <span className=" text-sm">{user.email}</span>
        </div>
      </nav>
    </header>
  );
}

export default NavbarDashBoard;
