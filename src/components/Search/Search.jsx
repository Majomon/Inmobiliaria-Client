import { useLocation } from "react-router-dom";

function Search({ theme }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const operation = queryParams.get("operation");
  const typeProperty = queryParams.get("typeProperty");
  const province = queryParams.get("province");
  const zone = queryParams.get("zone");
  const bedrooms = queryParams.get("bedrooms");

  return (
    <div className="w-full h-full">
      <div className="h-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#649ea7"
            fill-opacity="1"
            d="M0,224L34.3,197.3C68.6,171,137,117,206,122.7C274.3,128,343,192,411,186.7C480,181,549,107,617,90.7C685.7,75,754,117,823,144C891.4,171,960,181,1029,181.3C1097.1,181,1166,171,1234,186.7C1302.9,203,1371,245,1406,266.7L1440,288L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Search;
