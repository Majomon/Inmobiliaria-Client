import AireAcondicionado from "../../assets/services/aireAcondicionado.png";
import AguaCorriente from "../../assets/services/grifo.png";
import Pavimento from "../../assets/services/pavimento.png";
import Termotanque from "../../assets/services/termotanque.png";
import Luz from "../../assets/services/luz.png";
import Cocina from "../../assets/services/cocina.png";
import Desague from "../../assets/services/desague.png";
import Balcon from "../../assets/services/balcon.png";
import Lavadero from "../../assets/services/lavadero.png";
import Patio from "../../assets/services/patio.png";
import Vestidor from "../../assets/services/vestidor.png";

function DetailInfoBot({ dataAxios,theme }) {
  const services = dataAxios.services;

  // Define un objeto que mapea nombres de servicios a sus imágenes correspondientes
  const serviceImages = {
    airConditioning: { value: "Aire Acondicionado", img: AireAcondicionado },
    runningWater: { value: "Agua Corriente", img: AguaCorriente },
    pavement: { value: "Pavimento", img: Pavimento },
    waterHeater: { value: "Termotanque", img: Termotanque },
    light: { value: "Luz", img: Luz },
    kitchen: { value: "Cocina", img: Cocina },
    sewageDrain: { value: "Desague", img: Desague },
    balcony: { value: "Balcón", img: Balcon },
    laundry: { value: "Lavadero", img: Lavadero },
    yard: { value: "Patio", img: Patio },
    dressingRoom: { value: "Vestidor", img: Vestidor },
  };
  return (
    <div className="w-full h-full">
      <div className="border rounded-lg my-4 shadow-md dark:shadow-gray-200">
        <h2 className="px-4 py-2 font-bold text-base dark:text-gray-100">Descripción</h2>
        <div className="px-10 py-2 dark:text-gray-100">
          <p>{dataAxios.description}</p>
        </div>
      </div>
      {/* Detalles de la propiedad */}
      <div className="h-full shadow-md dark:shadow-gray-200 border rounded-lg my-4">
        <h2 className="px-4 py-2 font-bold text-base dark:text-gray-100">
          Detalles de la propiedad
        </h2>
        <div className="px-10 py-2 grid grid-cols-2 gap-4">
          <div className="flex justify-between">
            <h3 className="dark:text-gray-100">Operación</h3>
            <p className="text-gray-500">{dataAxios.operation}</p>
          </div>
          <div className="flex justify-between">
            <h3 className="dark:text-gray-100">Propiedad</h3>
            <p className="text-gray-400">{dataAxios.property}</p>
          </div>
          <div className="flex justify-between">
            <h3 className="dark:text-gray-100">Provincia</h3>
            <p className="text-gray-400"> {dataAxios.address.province}</p>
          </div>
          <div className="flex justify-between">
            <h3 className="dark:text-gray-100">Zona</h3>
            <p className="text-gray-400">{dataAxios.address.zone}</p>
          </div>
          <div className="flex justify-between">
            <h3 className="dark:text-gray-100">Dirección</h3>
            <p className="text-gray-400">{dataAxios.address.street}</p>
          </div>
          <div className="flex justify-between">
            <h3 className="dark:text-gray-100">Baños</h3>
            <p className="text-gray-400">{dataAxios.bathrooms}</p>
          </div>
          <div className="flex justify-between">
            <h3 className="dark:text-gray-100">Habitaciones</h3>
            <p className="text-gray-400">{dataAxios.bedrooms}</p>
          </div>
          {dataAxios.garage && (
            <div className="flex justify-between">
              <h3 className="dark:text-gray-100">Garage</h3>
              <p className="text-gray-400">{dataAxios.garage}</p>
            </div>
          )}
          {dataAxios.state && (
            <div className="flex justify-between">
              <h3 className="dark:text-gray-100">Estado</h3>
              <p className="text-gray-400">{dataAxios.state}</p>
            </div>
          )}
        </div>
      </div>
      {/* Caracteristicas */}
      <div className="h-full shadow-md dark:shadow-gray-200 border rounded-lg my-4">
        <h2 className="px-4 py-2 font-bold text-base">Caracteristicas</h2>
        <div className="w-full  my-4">
          <div className=" grid grid-cols-4 gap-10">
            {Object.keys(services).map((serviceKey) =>
              services[serviceKey] ? (
                <div
                  key={serviceKey}
                  className="flex flex-col justify-center items-center text-center"
                >
                  <img
                    src={serviceImages[serviceKey].img}
                    alt={serviceImages[serviceKey].value}
                    className="w-[50px]"
                  />
                  <p className="text-xs dark:text-gray-100">{serviceImages[serviceKey].value}</p>
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
