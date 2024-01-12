import { Switch } from "@headlessui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Toaster } from "sonner";
import { getAllProperties, putProperty } from "../../../redux/actions";
import ModalEdit from "../ModalEdit/ModalEdit";

function AllProperties() {
  const properties = useSelector((state) => state.propiedades);
  const orderProperties = properties.sort((a, b) => b.id - a.id);
  const [currentPage, setCurrentPage] = useState(0);
  const [countPage, setCountPage] = useState(1);
  const [activeEdit, setActiveEdit] = useState(false);
  const [propertyFound, setPropertyFound] = useState({});

  const dispatch = useDispatch();

  const handleEdit = (propertyId) => {
    const searchProperty = properties.find((prop) => prop._id === propertyId);
    setPropertyFound(searchProperty);
    setActiveEdit(true);
  };

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

  const handleToggle = (propertyId, availability) => {
    setTimeout(() => {
      dispatch(getAllProperties());
    }, 300);
    dispatch(putProperty(propertyId, { availability: `${!availability}` }));
  };

  const newDate = (date) => {
    const fecha = new Date(date);
    // Obtener el año, mes y día de la fecha
    const año = fecha.getFullYear();
    const mes = fecha.getMonth() + 1; // Se suma 1 porque los meses van de 0 a 11 en JavaScript
    const dia = fecha.getDate();

    const newFecha = `${año}-${mes}-${dia}`;
    return newFecha;
  };
  return (
    <ul className="w-full h-fit">
      <Toaster />

      <div className="w-full flex justify-between">
        <h1 className="text-lg font-bold ">Propiedades</h1>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-[#252728] text-gray-50 font-bold text-md text-center">
            <th className="text-xs px-4 border-r-2">Imagen</th>
            <th className="text-xs px-4 border-r-2">Nombre de propiedad</th>
            <th className="text-xs px-4 border-r-2">Tipo de propiedad</th>
            <th className="text-xs px-4 border-r-2">Operación</th>
            <th className="text-xs px-4 border-r-2">Ubicación</th>
            <th className="text-xs px-4 border-r-2">Fecha publicación</th>
            <th className="text-xs px-4 border-r-2">Nombre del propietario</th>
            <th className="text-xs px-4 border-r-2">Telefono</th>
            <th className="text-xs px-4 border-r-2">Editar</th>
            <th className="text-xs">Habilitado</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {/*       {pagination().map((prop, index) => ( */}
          {properties.map((prop, index) => (
            <tr
              className={`text-center ${
                index % 2 === 0 ? "bg-slate-100" : "bg-slate-200"
              }`}
              key={index}
            >
              <td className="">
                <Link to={`/detail/${prop._id}`} target="_blank">
                  <img
                    className="w-full h-14"
                    src={prop.images[0]}
                    alt={prop.name}
                  />
                </Link>
              </td>
              <td className="text-xs">{prop.name}</td>
              <td className="text-xs">{prop.property}</td>
              <td className="text-xs">{prop.operation}</td>
              <td className="text-xs">{prop.address.street}</td>
              <td className="text-xs">{newDate(prop.creacion)}</td>
              <td className="text-xs">{prop.owner.ownerNombre}</td>
              <td className="text-xs">{prop.owner.ownerPhone}</td>
              <td>
                <button onClick={() => handleEdit(prop._id)}>
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
      {/*       {properties.length ? (
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
      )} */}
      {activeEdit && (
        <ModalEdit
          propertyFound={propertyFound}
          setActiveEdit={setActiveEdit}
          activeEdit={activeEdit}
        />
      )}
    </ul>
  );
}

export default AllProperties;
