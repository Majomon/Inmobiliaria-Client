import { useLocation } from "react-router-dom";
import PropertyCard from "../PropertyCard/PropertyCard";
import Spinner from "../Spinner/Spinner";

function ContainerProperty({ properties }) {
  const location = useLocation();
  const pageSearch = location.pathname === "/search";
  return (
    <div className="w-full h-full dark:bg-black dark:border-white relative ">
      <div
        className={`${
          pageSearch
            ? "w-9/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10"
            : "w-9/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
        }`}
      >
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}

export default ContainerProperty;
