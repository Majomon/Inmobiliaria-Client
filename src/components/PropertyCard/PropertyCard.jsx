import Habitacion from "../../assets/iconos/habitacion.png";
import Baño from "../../assets/iconos/ducha.png";
import { Link } from "react-router-dom";
function PropertyCard(property) {
  const {
    _id,
    address,
    name,
    /*     description, */
    images,
    price,
    bedrooms,
    bathrooms,
    /*     area,
    availability,
    category, */
  } = property.property;
  return (
    <Link to={`/detail/${_id}`}>
      <div className="w-[330px] h-[550px] m-8 rounded-md border shadow-xl hover:bg-slate-100">
        <img src={images[0]} className="w-full h-[280px] rounded-t-md" />
        <div className="w-full h-[270px] flex flex-col justify-between p-2">
          <h2 className="font-bold text-base h-14">{name}</h2>
          <div>
            <h3>
              {address.country}, {address.province}, {address.city},{" "}
              {address.street}, {address.postalCode}
            </h3>
          </div>
          <div className="flex  justify-start gap-4">
            <div className="my-2">
              <h3>Habitaciones</h3>
              <div className="flex gap-4">
                <img src={Habitacion} className="w-6" />
                <p>{bedrooms}</p>
              </div>
            </div>
            <div className="my-2">
              <h3>Baños</h3>
              <div className="flex gap-4">
                <img src={Baño} className="w-6" />
                <p>{bathrooms}</p>
              </div>
            </div>
          </div>
          <div className="">
            <h4>
              <strong>Precio:</strong> ${price} al mes
            </h4>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;
