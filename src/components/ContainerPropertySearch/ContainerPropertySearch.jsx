import { useState, useEffect } from "react";
import PropertyCard from "../PropertyCard/PropertyCard";
import Spinner from "../Spinner/Spinner";

function ContainerPropertySearch({ properties }) {
  const [loading, setLoading] = useState(true);
  const [visibleProperties, setVisibleProperties] = useState([]);
  const [page, setPage] = useState(1);
  const [priceSortOrder, setPriceSortOrder] = useState("asc");
  const [alphabeticalSortOrder, setAlphabeticalSortOrder] = useState("asc");
  const propertiesPerPage = 12;

  useEffect(() => {
    if (properties?.length > 0) {
      let sortedProperties;
      if (priceSortOrder === "asc") {
        sortedProperties = properties.sort(
          (a, b) => a.precio.mount - b.precio.mount
        );
      } else {
        sortedProperties = properties.sort(
          (a, b) => b.precio.mount - a.precio.mount
        );
      }
      setVisibleProperties(sortedProperties.slice(0, propertiesPerPage));
    } else {
      setVisibleProperties([]);
    }
    setLoading(false);
  }, [properties, priceSortOrder]);

  useEffect(() => {
    if (properties?.length > 0) {
      let sortedProperties;
      if (alphabeticalSortOrder === "asc") {
        sortedProperties = properties.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else {
        sortedProperties = properties.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
      setVisibleProperties(sortedProperties.slice(0, propertiesPerPage));
    } else {
      setVisibleProperties([]);
    }
    setLoading(false);
  }, [properties, alphabeticalSortOrder]);

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

  const handleSortByPrice = () => {
    setPriceSortOrder(priceSortOrder === "asc" ? "desc" : "asc");
  };

  const handleSortAlphabetically = () => {
    setAlphabeticalSortOrder(alphabeticalSortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="w-full h-full dark:bg-black dark:border-white relative py-4 object-cover">
      <div className="flex justify-center mt-4">
        <button
          onClick={handleSortByPrice}
          className="w-fit font-semibold bg-gray-950 text-gray-300 hover:text-gray-100 dark:text-red-500 py-2 px-4 rounded-md hover:bg-gray-800 hover:shadow-md hover:shadow-gray-500 dark:hover:text-red-400 dark:bg-gray-100 dark:hover:bg-gray-900 dark:hover:shadow-gray-100 mr-4"
        >
          Ordenar por precio (
          {priceSortOrder === "asc" ? "de menor a mayor" : "de mayor a menor"})
        </button>
        <button
          onClick={handleSortAlphabetically}
          className="w-fit font-semibold bg-gray-950 text-gray-300 hover:text-gray-100 dark:text-red-500 py-2 px-4 rounded-md hover:bg-gray-800 hover:shadow-md hover:shadow-gray-500 dark:hover:text-red-400 dark:bg-gray-100 dark:hover:bg-gray-900 dark:hover:shadow-gray-100"
        >
          Ordenar alfabéticamente (
          {alphabeticalSortOrder === "asc" ? "A-Z" : "Z-A"})
        </button>
      </div>
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visibleProperties?.length > 0 ? (
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
