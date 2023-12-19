import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ContainerProperty from "../components/ContainerProperty/ContainerProperty";
import FilterSearch from "../components/FilterSearch/FilterSearch";
import { getSearchFilter } from "../redux/actions";

function Search({ theme }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.search);

  // Obtiene los valores de los parámetros de consulta de la URL
  const operation = queryParams.get("operation");
  const typeProperty = queryParams.get("typeProperty");
  const province = queryParams.get("province");
  const zone = queryParams.get("zone");
  const bedrooms = queryParams.get("bedrooms");

  useEffect(() => {
    const queryObject = {
      operation,
      typeProperty,
      province,
      zone,
      bedrooms: bedrooms ? parseInt(bedrooms) : undefined,
    };

    dispatch(getSearchFilter(queryObject));
  }, [location.search]);

  return (
    <div className="w-full h-full mt-[3rem] dark:bg-black">
      <div className="w-full md:w-11/12 mx-auto flex flex-col md:flex-row justify-between">
        <FilterSearch />
        <ContainerProperty properties={properties} />
      </div>
    </div>
  );
}

export default Search;

/*   const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const operation = queryParams.get("operation");
  const typeProperty = queryParams.get("typeProperty");
  const province = queryParams.get("province");
  const zone = queryParams.get("zone");
  const bedrooms = queryParams.get("bedrooms"); */
