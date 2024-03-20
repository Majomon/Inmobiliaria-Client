import AguaCorriente from "../../assets/services/agua.png";
import AireAcondicionado from "../../assets/services/aireAcondicionado.png";
import Balcon from "../../assets/services/balcon.png";
import Cocina from "../../assets/services/cocina.png";
import Estacionamiento from "../../assets/services/estacionamiento.png";
import Gas from "../../assets/services/gas.png";
import Gym from "../../assets/services/gym.png";
import Lavadero from "../../assets/services/lavadero.png";
import Luz from "../../assets/services/luz.png";
import Mascotas from "../../assets/services/mascotas.png";
import Mucama from "../../assets/services/mucama.png";
import Parrilla from "../../assets/services/parrilla.png";
import Patio from "../../assets/services/patio.png";
import Piscina from "../../assets/services/piscina.png";
import Seguridad from "../../assets/services/seguridad.png";
import Termotanque from "../../assets/services/termotanque.png";
import Vestidor from "../../assets/services/vestidor.png";
import Wifi from "../../assets/services/wifi.png";
import GoogleMaps from "../../assets/google_maps.png";

function DetailInfoBot({ dataAxios, theme }) {
  const services = dataAxios.services;

  // Define un objeto que mapea nombres de servicios a sus imágenes correspondientes
  const serviceImages = {
    runningWater: { value: "Agua Corriente", img: AguaCorriente },
    airConditioning: { value: "Aire Acondicionado", img: AireAcondicionado },
    balcony: { value: "Balcón", img: Balcon },
    kitchen: { value: "Cocina", img: Cocina },
    parking: { value: "Estacionamiento", img: Estacionamiento },
    gas: { value: "Gas", img: Gas },
    gym: { value: "Gym", img: Gym },
    laundry: { value: "Lavadero", img: Lavadero },
    light: { value: "Luz", img: Luz },
    petfriendly: { value: "Apto mascotas", img: Mascotas },
    houseMaid: { value: "Mucama", img: Mucama },
    grill: { value: "Parrilla", img: Parrilla },
    yard: { value: "Sum", img: Patio },
    swimmingpool: { value: "Piscina", img: Piscina },
    security: { value: "Seguridad 24hs", img: Seguridad },
    waterHeater: { value: "Termotanque", img: Termotanque },
    dressingRoom: { value: "Vestidor", img: Vestidor },
    wifi: { value: "Internet", img: Wifi },
  };

  const handleOpenGoogleMaps = () => {
    const address = `${dataAxios?.address?.street}, ${dataAxios?.address?.zone}`;
    const googleMapsURL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;

    window.open(googleMapsURL, "_blank");
  };

  let statePrecio = dataAxios ? dataAxios?.precio?.mount.toLocaleString() : "";

  return (
    <div className="w-full md:w-9/12 h-full">
      {/* Info extra del la publicacion */}
      <div className="h-full shadow-md  shadow-gray-700 dark:shadow-yellow-600 border-2 border-gray-200 dark:border-gray-900 rounded-lg my-4">
        {dataAxios.operation === "Venta" ? (
          <div className="w-full py-2">
            <h2 className="px-4 font-bold text-base">PRECIO VENTA</h2>
            <div className="px-10 py-2 flex gap-x-2">
              <p>
                <strong className="text-base font-bold dark:text-gray-100">
                  {dataAxios.precio.currency}
                </strong>
              </p>
              <span className=" text-gray-600 dark:text-gray-100">
                {statePrecio}
              </span>
            </div>
          </div>
        ) : (
          <div className="w-full py-2">
            <div className="flex justify-between items-center">
              {/* Dirección */}
              <div className="w-5/12 flex justify-center items-center px-10 py-2  gap-x-2">
                <h3 className="text-sm font-bold">
                  {dataAxios?.address?.street} | {dataAxios?.address?.zone}
                </h3>
                <button
                  onClick={handleOpenGoogleMaps}
                  className="w-full flex items-center bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 px-2 py-1 rounded-lg shadow-md"
                >
                  <img
                    src={GoogleMaps}
                    alt="Google Maps"
                    className="w-6 h-6 mr-2"
                  />
                  <span className="text-xs">Ver mapa</span>
                </button>
              </div>
              {/* Ingreso */}
              <div className="w-2/12 text-sm font-bold px-10 py-2 flex gap-x-2">
                Ingreso: {dataAxios?.admission}
              </div>
              {/* Precio */}
              <div className="w-5/12 text-sm  px-10 py-2 flex justify-center items-center gap-x-2">
                <p>
                  <strong className="font-bold dark:text-gray-100">
                    {dataAxios.precio.currency}
                  </strong>
                </p>
                <span className=" text-gray-600 dark:text-gray-100">
                  {statePrecio}
                </span>
                <span className=" text-gray-600 dark:text-gray-100">
                  {dataAxios.precio.additionalExpense &&
                    ` + ${dataAxios.precio.additionalExpense}`}
                </span>
                <p className="text-gray-400">Por mes</p>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Descripción */}
      <div className="rounded-lg my-4 shadow-md  shadow-gray-700 dark:shadow-yellow-600 border-2 border-gray-200 dark:border-gray-900">
        <h2 className="px-4 py-2 font-bold text-sm dark:text-gray-100">
          Descripción
        </h2>
        <div className="px-10 py-2 text-sm dark:text-gray-100">
          <p>{dataAxios.description}</p>
        </div>
      </div>

      {/* Detalles de la propiedad */}
      <div className="h-full shadow-md  shadow-gray-700 dark:shadow-yellow-600 border-2 border-gray-200 dark:border-gray-900 rounded-lg my-4">
        <h2 className="px-4 py-2 font-bold text-sm dark:text-gray-100">
          Detalles de la propiedad
        </h2>
        <div className="px-10 py-2 grid grid-cols-1 sm:grid-cols-3 text-sm">
          <div className="flex flex-col md:flex-rowjustify-between py-2">
            <h3 className="dark:text-gray-100">Operación</h3>
            <p className="text-gray-500">{dataAxios.operation}</p>
          </div>
          <div className="flex flex-col md:flex-rowjustify-between py-2">
            <h3 className="dark:text-gray-100">Propiedad</h3>
            <p className="text-gray-400">{dataAxios.property}</p>
          </div>
          <div className="flex flex-col md:flex-rowjustify-between py-2">
            <h3 className="dark:text-gray-100">Provincia</h3>
            <p className="text-gray-400"> {dataAxios.address.province}</p>
          </div>
          <div className="flex flex-col md:flex-rowjustify-between py-2">
            <h3 className="dark:text-gray-100">Zona</h3>
            <p className="text-gray-400">{dataAxios.address.zone}</p>
          </div>
          <div className="flex flex-col md:flex-rowjustify-between py-2">
            <h3 className="dark:text-gray-100">Dirección</h3>
            <p className="text-gray-400">{dataAxios.address.street}</p>
          </div>
          <div className="flex flex-col md:flex-rowjustify-between py-2">
            <h3 className="dark:text-gray-100">Baños</h3>
            <p className="text-gray-400">{dataAxios.bathrooms}</p>
          </div>
          {dataAxios.bedrooms > 0 && (
            <div className="flex flex-col md:flex-rowjustify-between py-2">
              <h3 className="dark:text-gray-100">Habitaciones</h3>
              <p className="text-gray-400">{dataAxios.bedrooms}</p>
            </div>
          )}
          {dataAxios.garage > 0 && (
            <div className="flex flex-col md:flex-rowjustify-between py-2">
              <h3 className="dark:text-gray-100">Garage</h3>
              <p className="text-gray-400">{dataAxios.garage}</p>
            </div>
          )}
          {dataAxios.state && (
            <div className="flex flex-col md:flex-rowjustify-between py-2">
              <h3 className="dark:text-gray-100">Estado</h3>
              <p className="text-gray-400">{dataAxios.state}</p>
            </div>
          )}
        </div>
      </div>
      {/* Caracteristicas */}
      <div className="h-full shadow-md  shadow-gray-700 dark:shadow-yellow-600 border-2 border-gray-200 dark:border-gray-900 rounded-lg my-4">
        <h2 className="px-4 py-2 font-bold text-sm">Caracteristicas</h2>
        <div className="w-full px-4 py-2">
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-4 px-8 place-items-center text-sm">
            {Object.keys(services).map((serviceKey) =>
              services[serviceKey] ? (
                <div
                  key={serviceKey}
                  className="w-full h-16 sm:w-1/2 md:w-1/3 lg:w-1/4 col-span-1 mb-4 flex flex-col justify-between items-center text-center"
                >
                  <img
                    src={serviceImages[serviceKey].img}
                    alt={serviceImages[serviceKey].value}
                    className="w-[30px] sm:w-[40px] mx-auto mb-2"
                  />
                  <p className="text-xs dark:text-gray-100">
                    {serviceImages[serviceKey].value}
                  </p>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailInfoBot;
