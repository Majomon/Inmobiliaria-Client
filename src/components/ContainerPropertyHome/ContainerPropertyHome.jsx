import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import PropertyCard from "../PropertyCard/PropertyCard";
import Spinner from "../Spinner/Spinner";

function ContainerPropertyHome({ properties }) {
  const [loading, setLoading] = useState(true);
  const [visibleProperties, setVisibleProperties] = useState([]);
  const location = useLocation();
  const pageSearch = location.pathname === "/search";
  const propertiesToShowInitially = 12;

  useEffect(() => {
    if (properties.length > 0) {
      setLoading(false);
      setVisibleProperties(properties.slice(0, propertiesToShowInitially));
    }
  }, [properties]);

  const handleShowMore = () => {
    setVisibleProperties(properties);
  };

  return (
    <div className="w-full h-full dark:bg-black dark:border-white relative py-4 object-cover">
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {loading ? (
          <div className="col-span-3">
            <Spinner />
          </div>
        ) : visibleProperties.length > 0 ? (
          visibleProperties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))
        ) : (
          <div className={pageSearch ? "col-span-full" : "col-span-3"}>
            <p className="text-center text-gray-500">
              No hay propiedades para mostrar.
            </p>
          </div>
        )}
      </div>
      {properties.length > propertiesToShowInitially && (
        <div className="w-full text-center mt-4">
          <Link
            to="/search"
            className="w-fit font-semibold bg-gray-950 text-gray-300 hover:text-gray-100  dark:text-red-500 py-2 px-4 rounded-md hover:bg-gray-800 hover:shadow-md hover:shadow-gray-500  dark:hover:text-red-400 dark:bg-gray-100 dark:hover:bg-gray-900 dark:hover:shadow-gray-100"
          >
            <button onClick={handleShowMore}>Ver más</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ContainerPropertyHome;
