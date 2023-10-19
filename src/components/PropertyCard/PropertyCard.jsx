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
    price,
    bedrooms,
    bathrooms,
    environments,
    area,
  } = properties.property;

  
  return (
    <Link to={`/detail/${_id}`}>
      <div data-aos="zoom-in" className="w-[280px] md:w-[320px]  2xl:w-[360px] mx-auto my-8 rounded-md shadow-xl duration-700 ease-in-out hover:shadow-2xl hover:shadow-yellow-300 border border-gray-300 dark:shadow-lg dark:shadow-red-100 overflow-hidden dark:hover:shadow-red-600">
        <h2 className="py-2 text-center font-bold bg-yellow-300">
          {property} en {operation}
        </h2>
        <div className="w-full h-[280px]  border-b-4 border-red-500 overflow-hidden">
          <img
            src={images[0]}
            className="w-full h-full transition-transform duration-700 ease-in-out transform hover:scale-110"
          />
        </div>
        <div className="w-full flex flex-col justify-between items-center py-2 px-4">
          <h2 className="font-bold text-base py-2 dark:text-gray-100 ">
            {name}
          </h2>
          <h3 className="py-2 text-gray-400 font-semibold">
            {address.street} | {address.zone}
          </h3>

          <h4 className="text-blue-400 my-4 text-xl dark:text-yellow-300 border-b-2 border-gray-100">
            <strong>Precio:</strong> ${price}
          </h4>
        </div>
        <div className="w-full grid grid-cols-3 bg-gray-300 p-2">
          <div className="flex flex-col justify-center items-center">
            <img src={Superficie} className="w-6" />
            <p className="text-base text-gray-600 dark:text-gray-700">
              {area} m²
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={Baño} className="w-6" />
            <p className="text-base text-gray-600 dark:text-gray-700">
              {bathrooms} {bathrooms > 1 ? "Baños" : "Baño"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={Habitacion} className="w-6" />
            <div>
              <p className="text-base text-gray-600 dark:text-gray-700">
                {environments === 1
                  ? "Monoambiente"
                  : `${environments} Amb - ${bedrooms} Dorm`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;
