import { useSelector } from "react-redux";
import CardPropertiesDashboard from "../CardPropertiesDashboard/CardPropertiesDashboard";
import { Switch } from "@headlessui/react";
import { useState } from "react";
import { getAllProperties, getPropertiesId } from "../../../redux/actions";
import CreateProperty from "../CreateProperty";
import { Toaster, toast } from "sonner";

function AllProperties() {
  const properties = useSelector((state) => state.propiedades);
  const orderProperties = properties.sort((a, b) => b.id - a.id);
  const [currentPage, setCurrentPage] = useState(0);
  const [countPage, setCountPage] = useState(1);
  const [activeFormCreate, setActiveFormCreate] = useState(false);

  const pagination = () => {
    return properties.slice(currentPage, currentPage + 8);
  };

  const nextPage = () => {
    if (orderProperties.length > currentPage + 8) {
      setCurrentPage(currentPage + 8);
      setCountPage(countPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 8);
      setCountPage(countPage - 1);
    }
  };

  const handleToggle = (propertyId, activeProperty) => {
    setTimeout(() => {
      dispatch(getAllProperties());
    }, 300);
    dispatch(
      getPropertiesId(propertyId, { activeProperty: `${!activeProperty}` })
    );
  };

  return (
    <ul className="w-full h-fit px-4">
      <Toaster />

      <div className="w-full flex justify-between">
        <h1 className="text-lg font-bold ">Propiedades</h1>
        <button
          className="text-xs font-semibold p-2 bg-green-500 rounded-md"
          onClick={() => setActiveFormCreate(true)}
        >
          Crear propiedad
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="h-10 font-bold text-md text-left">
            <th>Imagen</th>
            <th>ID</th>
            <th>Operación</th>
            <th>Propiedad</th>
            <th>Precio</th>
            <th></th>
            <th className="w-24 pr-2">Habilitado</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {pagination().map((prop, index) => (
            <tr
              className={`h-16 ${
                index % 2 === 0 ? "bg-slate-100" : "bg-slate-200"
              }`}
              key={index}
            >
              <td className="">
                <img
                  className="w-16 h-16"
                  src={prop.images[0]}
                  alt={prop.name}
                />
              </td>
              <td>{prop._id}</td>
              <td>{prop.operation}</td>
              <td>{prop.property}</td>
              <td>{prop.price}</td>
              <td>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="#000000"
                      d="m12 17l-6 4V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4m.42 4.61a2.1 2.1 0 1 1 2.97 2.97L18 22h-3v-3z"
                    />
                  </svg>
                </button>
              </td>
              <td>
                <Switch
                  className={`relative inline-flex h-5 w-10 items-center rounded-full ${
                    prop.availability ? "bg-green-500" : "bg-red-500"
                  }`}
                  checked={prop.availability}
                  onChange={() => handleToggle(prop._id, prop.availability)}
                >
                  <span
                    aria-hidden="true"
                    className={`${
                      prop.availability ? "translate-x-5" : "translate-x-0"
                    }
                            pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                  />
                </Switch>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {properties.length ? (
        <div className="w-full flex justify-center items-center py-4">
          <button
            onClick={prevPage}
            className="bg-gray-400 rounded-md p-1 mx-2"
            type="text"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="w-5 h-5 stroke-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <span className="dark:text-black">{countPage}</span>
          <button
            onClick={nextPage}
            className="bg-gray-400 rounded-md p-1 mx-2"
            type="text"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="w-5 h-5 stroke-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      ) : (
        <div className="w-full flex justify-center items-center pt-4">
          <h2 className="">No hay resultados encontrados</h2>
        </div>
      )}
      {activeFormCreate && (
        <CreateProperty setActiveFormCreate={setActiveFormCreate} />
      )}
    </ul>
  );
}

export default AllProperties;
