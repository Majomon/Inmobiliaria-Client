import { useLocation } from "react-router-dom";
import PropertyCard from "../PropertyCard/PropertyCard";
import Spinner from "../Spinner/Spinner";

function ContainerProperty({ properties }) {
  const location = useLocation();
  const pageSearch = location.pathname === "/search";
  return (
    <div className="w-11/12 mx-auto h-full dark:bg-black dark:border-white relative py-4">
      <div
        className={`${
          pageSearch
            ? "w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10"
            : "w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4"
        }`}
      >
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))
        ) : (
          <div className={pageSearch ? "col-span-full" : "col-span-3"}>
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
}

export default ContainerProperty;
