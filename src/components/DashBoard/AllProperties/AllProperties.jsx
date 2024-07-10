import { Switch } from "@headlessui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Toaster } from "sonner";
import { getAllProperties, putProperty } from "../../../redux/actions";
import ModalEdit from "../ModalEdit/ModalEdit";

function AllProperties() {
  const allProperties = useSelector((state) => state.propiedades);
  const [activeEdit, setActiveEdit] = useState(false);
  const [propertyFound, setPropertyFound] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 10;

  const dispatch = useDispatch();

  const handleEdit = (propertyId) => {
    const searchProperty = allProperties.find(
      (prop) => prop._id === propertyId
    );
    setPropertyFound(searchProperty);
    setActiveEdit(true);
  };

  const handleToggle = (propertyId, availability) => {
    dispatch(putProperty(propertyId, { availability: `${!availability}` }));
    setTimeout(() => {
      dispatch(getAllProperties());
    }, 300);
  };

  // Filtrar por nombre
  const filteredProperties = allProperties.filter((prop) =>
    prop.name?.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );


  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);

  // Función para obtener las propiedades de la página actual
  const getPageProperties = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProperties.slice(startIndex, endIndex);
  };

  const newDate = (date) => {
    const fecha = new Date(date);
    const año = fecha.getFullYear();
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();
    const newFecha = `${año}-${mes}-${dia}`;
    return newFecha;
  };

  return (
    <ul className="w-full h-fit">
      <Toaster />

      <div className="w-full flex justify-between py-4">
        <h1 className="text-lg font-bold ">Propiedades</h1>
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-md px-2 py-1"
        />
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
          {getPageProperties().map((prop, index) => (
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
                <Link to={`/dashboard/${prop._id}`}>
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
                </Link>
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
      {/* Controles de paginación */}
      <div className="flex justify-center my-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={currentPage === 0}
          className="mr-2 px-4 py-2 bg-[#252728] text-white rounded-md"
        >
          Anterior
        </button>
        {/* Mostrar la cantidad de páginas */}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`mx-2 px-4 py-2 rounded-md ${
              currentPage === i ? "bg-[#252728] text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
          }
          disabled={currentPage === totalPages - 1}
          className="ml-2 px-4 py-2 bg-[#252728] text-white rounded-md"
        >
          Siguiente
        </button>
      </div>
      {activeEdit && (
        <ModalEdit
          propertyFound={propertyFound}
          setActiveEdit={setActiveEdit}
        />
      )}
    </ul>
  );
}

export default AllProperties;
