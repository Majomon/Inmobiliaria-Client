import Habitacion from "../../assets/iconos/habitacion.png";
import Baño from "../../assets/iconos/ducha.png";
import Superficie from "../../assets/iconos/superficie.png";
import { Link } from "react-router-dom";

function PropertyCard(properties) {
  const {
    _id,
    address,
    property,
    operation,
    name,
    images,
    precio,
    bedrooms,
    bathrooms,
    environments,
    area,
  } = properties.property;

  return (
    <Link to={`/detail/${_id}`}>
      <div
        data-aos="zoom-in"
        className="w-[240px] md:w-[280px]  2xl:w-[360px] mx-auto my-8 rounded-sm  shadow-lg shadow-gray-700  duration-700 ease-in-out hover:shadow-xl hover:shadow-gray-900  dark:shadow-lg dark:hover:shadow-xl  dark:shadow-gray-300 overflow-hidden dark:hover:shadow-gray-100"
      >
        <h2 className="py-2 text-center font-bold bg-gray-900 text-gray-100 text-sm">
          {property} en {operation}
        </h2>
        <div className="w-full h-[240px]  border-b-2 border-gray-900 overflow-hidden">
          <img
            src={images[0]}
            className="w-full h-full transition-transform duration-700 ease-in-out transform hover:scale-110"
          />
        </div>
        <div className="w-full flex flex-col justify-between  px-4">
          <h2 className="font-bold text-sm py-2 dark:text-gray-100 ">{name}</h2>
          <h3 className="text-sm py-2 text-gray-400 font-semibold">
            {address.street} | {address.zone}
          </h3>

          <h4 className="text-base text-gray-600 my-2 dark:text-gray-100">
            <strong>Precio:</strong>{" "}
            {precio.currency === "$" ? precio.currency  : precio.currency}
          </h4>
        </div>
        <div className="w-full flex justify-around items-center bg-gray-300 p-2">
          <div className="flex flex-col justify-center items-center">
            <img src={Superficie} className="w-6" />
            <p className="text-sm text-gray-900 font-semibold dark:text-gray-700">
              {area} m²
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={Baño} className="w-6" />
            <p className="text-sm text-gray-900 font-semibold dark:text-gray-700">
              {bathrooms} {bathrooms > 1 ? "Baños" : "Baño"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={Habitacion} className="w-6" />
            <div>
              <p className="text-sm text-gray-900 font-semibold dark:text-gray-700">
                {environments === 1 ? "Monoambiente" : `${bedrooms} Dorm`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;
