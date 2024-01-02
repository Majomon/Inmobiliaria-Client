import properties from "../opcionesMenuLateral";

function MenuLateralDashBoard({ handleButtonClick, activeComponent }) {
  return (
    <ul className="w-3/12 fixed top-0 left-0 min-h-screen flex flex-col pl-24  pt-10 gap-4 bg-[#252728] list-none">
      {properties.map((elem) => (
        <li
          className="cursor-pointer"
          onClick={() => handleButtonClick(elem.component)}
          disabled={activeComponent === elem.component}
          key={elem.id}
        >
          <div
            className={`flex items-center p-2 gap-x-4
              ${
                activeComponent === elem.component
                  ? "bg-gray-50 text-black rounded-tl-lg rounded-bl-lg"
                  : "bg-[#252728] text-white"
              }`}
          >
            {activeComponent === elem.component ? elem.active : elem.inactive}
            <p className="text-xs font-bold ">{elem.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MenuLateralDashBoard;
