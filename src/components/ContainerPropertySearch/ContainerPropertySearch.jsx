import { useState, useEffect } from "react";
import PropertyCard from "../PropertyCard/PropertyCard";
import Spinner from "../Spinner/Spinner";

function ContainerPropertySearch({ properties }) {
  const [loading, setLoading] = useState(true);
  const [visibleProperties, setVisibleProperties] = useState([]);
  const [page, setPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc"); // Estado para controlar el orden de las propiedades
  const propertiesPerPage = 12;

  useEffect(() => {
    setLoading(true);
    if (properties.length > 0) {
      setVisibleProperties(properties.slice(0, propertiesPerPage));
      setLoading(false);
    } else {
      setVisibleProperties([]);
      setLoading(false);
    }
  }, [properties]);

  const handleShowMore = () => {
    const nextPage = page + 1;
    const startIndex = (nextPage - 1) * propertiesPerPage;
    const endIndex = startIndex + propertiesPerPage;
    const nextProperties = properties.slice(startIndex, endIndex);
    setVisibleProperties((prevProperties) => [
      ...prevProperties,
      ...nextProperties,
    ]);
    setPage(nextPage);
  };

  // Función para cambiar el orden de las propiedades
  const handleSortProperties = () => {
    const sortedProperties = [...visibleProperties].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.precio.mount - b.precio.mount;
      } else {
        return b.precio.mount - a.precio.mount;
      }
    });
    setVisibleProperties(sortedProperties);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Cambiar el orden en función del estado actual
  };

  return (
    <div className="w-full h-full dark:bg-black dark:border-white relative py-4 object-cover">
      <div className="flex justify-center mt-4">
        <button
          onClick={handleSortProperties}
          className="w-fit font-semibold bg-gray-950 text-gray-300 hover:text-gray-100 dark:text-red-500 py-2 px-4 rounded-md hover:bg-gray-800 hover:shadow-md hover:shadow-gray-500 dark:hover:text-red-400 dark:bg-gray-100 dark:hover:bg-gray-900 dark:hover:shadow-gray-100 mr-4"
        >
          Ordenar por precio (
            {sortOrder === "asc" ? "de menor a mayor" : "de mayor a menor"})
        </button>
      </div>
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visibleProperties.length > 0 ? (
            visibleProperties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))
          ) : (
            <div className="col-span-full w-full h-[80vh] flex justify-center items-center">
              <p className="text-center text-gray-500">
                No hay propiedades que coincidan con el filtro.
              </p>
            </div>
          )}
        </div>
      )}
      {visibleProperties.length < properties.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleShowMore}
            className="w-fit font-semibold bg-gray-950 text-gray-300 hover:text-gray-100 dark:text-red-500 py-2 px-4 rounded-md hover:bg-gray-800 hover:shadow-md hover:shadow-gray-500 dark:hover:text-red-400 dark:bg-gray-100 dark:hover:bg-gray-900 dark:hover:shadow-gray-100"
          >
            Ver más
          </button>
        </div>
      )}
    </div>
  );
}

export default ContainerPropertySearch;
