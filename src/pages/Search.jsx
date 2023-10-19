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
    <div className="w-full h-full mt-[72px] dark:bg-black">
      <div className="w-full md:w-11/12 mx-auto flex flex-col md:flex-row justify-between">
        <FilterSearch />
        <ContainerProperty properties={properties} />
      </div>
      {/*       <div className="h-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#649ea7"
            fill-opacity="1"
            d="M0,96L21.8,85.3C43.6,75,87,53,131,69.3C174.5,85,218,139,262,181.3C305.5,224,349,256,393,229.3C436.4,203,480,117,524,122.7C567.3,128,611,224,655,250.7C698.2,277,742,235,785,192C829.1,149,873,107,916,96C960,85,1004,107,1047,144C1090.9,181,1135,235,1178,240C1221.8,245,1265,203,1309,181.3C1352.7,160,1396,160,1418,160L1440,160L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
          ></path>
        </svg>
      </div> */}
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
