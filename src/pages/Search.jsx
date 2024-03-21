import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ContainerPropertySearch from "../components/ContainerPropertySearch/ContainerPropertySearch";
import FilterSearch from "../components/FilterSearch/FilterSearch";
import { getSearchFilter } from "../redux/actions";

function Search({ theme }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dispatch = useDispatch();
  const allProperties = useSelector((state) => state.search);

  // Filtrar propiedades habilitadas
  const properties = allProperties.filter(
    (property) => property?.availability === true
  );

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
      <div className="w-full flex flex-col justify-betwee bg-white">
        <FilterSearch />
        <ContainerPropertySearch properties={properties} />
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
