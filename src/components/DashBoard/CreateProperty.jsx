import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";
import Cloudinary from "../../components/DashBoard/Cloudinary.jsx";
import propertiesOptions from "./optionsPostProperty.js";

function CreateProperty({ setActiveFormCreate }) {
  const [formData, setFormData] = useState({
    operation: "",
    property: "",
    environments: 0,
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    garage: 0,
    state: "",
    availability: "",
    name: "",
    description: "",
    province: "",
    zone: "",
    street: "",
    postalCode: "",
    runningWater: false,
    airConditioning: false,
    balcony: false,
    kitchen: false,
    parking: false,
    gas: false,
    gym: false,
    laundry: false,
    light: false,
    petfriendly: false,
    houseMaid: false,
    grill: false,
    yard: false,
    swimmingpool: false,
    security: false,
    waterHeater: false,
    dressingRoom: false,
    wifi: false,
    images: [],
    price: 0,
  });

  const newProperty = {
    operation: formData.operation,
    property: formData.property,
    environments: formData.environments,
    bedrooms: formData.bedrooms,
    bathroom: formData.bathroom,
    area: formData.area,
    garage: formData.garage,
    state: formData.state,
    availability: formData.availability,
    name: formData.name,
    description: formData.description,
    address: {
      province: formData.province,
      zone: formData.zone,
      street: formData.street,
      postalCode: formData.postalCode,
    },
    services: {
      runningWater: formData.runningWater,
      airConditioning: formData.airConditioning,
      balcony: formData.balcony,
      kitchen: formData.kitchen,
      parking: formData.parking,
      gas: formData.gas,
      gym: formData.gym,
      laundry: formData.laundry,
      light: formData.light,
      petfriendly: formData.petfriendly,
      houseMaid: formData.houseMaid,
      grill: formData.grill,
      yard: formData.yard,
      swimmingpool: formData.swimmingpool,
      security: formData.security,
      waterHeater: formData.waterHeater,
      dressingRoom: formData.dressingRoom,
      wifi: formData.wifi,
    },
    images: formData.images,
    price: formData.price,
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envío de la información para crear la propiedad mediante la acción correspondiente
      const res = await axios.post(
        `https://inmobiliaria-api-green.vercel.app/properties`,
        newProperty
      );

      // Verifica el estado de la solicitud
      if (res.status === 200 || res.status === 201) {
        // Si la solicitud se realizó con éxito, muestra una alerta de propiedad creada
        toast.success("Propiedad creada con exito perrito");
        setActiveFormCreate(false); // Cerrar el formulario después de enviar la información
      } else {
        // En caso de que la solicitud no sea exitosa, muestra una alerta de error
        alert("Error al crear la propiedad");
      }
    } catch (error) {
      // Si hay un error en la solicitud, muestra una alerta con el mensaje de error
      alert("Hubo un error al procesar la solicitud");
      console.error("Error:", error);
    }
    setActiveFormCreate(false); // Cerrar el formulario después de enviar la información
  };

  return (
    <div className="w-full h-full fixed top-0 left-0 bottom-0 right-0 z-10 bg-gray-950">
      <form
        onSubmit={handleSubmit}
        className="w-10/12 fixed top-0 left-0 bottom-0 right-0 z-20 flex flex-col p-4 mx-auto my-10 bg-slate-600 rounded"
      >
        <button
          type="button"
          className="absolute right-0 top-0 m-4"
          onClick={() => setActiveFormCreate(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8 fill-red-600 text-xs"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <h2>Crear Propiedad</h2>
        <div className="w-full h-full grid grid-cols-4 gap-x-2 ">
          {propertiesOptions.map((option) => (
            <div key={option.id} className="flex my-1 justify-center">
              {option.component !== "services" &&
                option.component !== "address" &&
                option.component !== "images" && (
                  <div className="flex flex-col">
                    <label htmlFor={option.component} className="text-sm">
                      {option.name}
                    </label>
                    <input
                      type="text"
                      id={option.component}
                      name={option.component}
                      value={formData[option.component]}
                      onChange={handleChange}
                      className="h-6 rounded-sm"
                    />
                  </div>
                )}
            </div>
          ))}
        </div>
        <div className="w-full grid grid-cols-2">
          {propertiesOptions.map((option) => {
            if (option.component === "address") {
              return (
                <div key={option.id}>
                  <p className="text-sm">{option.name}</p>
                  {option.moreOptions.map((subOption) => (
                    <div
                      key={subOption.id}
                      className="w-full flex justify-between px-4 py-1"
                    >
                      <label htmlFor={subOption.component} className="text-sm">
                        {subOption.name}
                      </label>
                      <input
                        type="text"
                        id={subOption.component}
                        name={subOption.component}
                        value={formData[subOption.component]}
                        onChange={handleChange}
                        className="h-6"
                      />
                    </div>
                  ))}
                </div>
              );
            }
            return null;
          })}
          {propertiesOptions.map((option) => {
            if (option.component === "services") {
              return (
                <div key={option.id} className="">
                  <p className="text-lg">{option.name}</p>
                  <div className="w-full grid grid-cols-3 gap-2">
                    {option.moreOptions.map((subOption) => (
                      <div
                        key={subOption.name}
                        className="flex justify-between py-2 px-6 border"
                      >
                        <label
                          htmlFor={subOption.component}
                          className="text-sm"
                        >
                          {subOption.name}
                        </label>
                        <input
                          type="checkbox"
                          id={subOption.component}
                          name={subOption.component}
                          checked={formData[subOption.component]}
                          onChange={handleChange}
                          className="w-6 h-6"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>

        <div className="w-full grid grid-cols-2 py-2">
          {propertiesOptions.map((option) => {
            if (option.component === "images") {
              return (
                <div key={option.id} className="">
                  <p className="text-sm">Imagenes</p>
                  <Cloudinary setFormData={setFormData} formData={formData} />
                </div>
              );
            }
            return null;
          })}
          <button
            type="submit"
            className="w-fit text-white py-2 px-10 bg-gray-950 rounded-sm "
          >
            CREAR
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProperty;
