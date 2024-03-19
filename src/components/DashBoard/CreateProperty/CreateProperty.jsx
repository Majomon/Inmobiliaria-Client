import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import ImgFirebase from "../ImgFirebase";

import {
  propertiesAddress,
  propertiesDescription,
  propertiesDetail,
  propertiesImages,
  propertiesOptions,
  propertiesOwner,
  propertiesPrice,
  propertiesServices,
} from "../optionsPostProperty.js";
import { getAllProperties } from "../../../redux/actions.js";
import { useDispatch } from "react-redux";

function CreateProperty() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    operation: "Alquiler",
    property: "Departamento",
    environments: 0,
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    garage: 0,
    state: "Bueno",
    name: "",
    description: "",
    province: "",
    zone: "",
    street: "",
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
    currency: "$",
    ownerNombre: "",
    ownerPhone: "",
    mount: 0,
    additionalExpense: "",
  });

  const newProperty = {
    operation: formData.operation,
    property: formData.property,
    environments: formData.environments,
    bedrooms: formData.bedrooms,
    bathrooms: formData.bathrooms,
    area: formData.area,
    garage: formData.garage,
    state: formData.state,
    name: formData.name,
    description: formData.description,
    address: {
      province: formData.province,
      zone: formData.zone,
      street: formData.street,
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
    owner: {
      ownerNombre: formData.ownerNombre,
      ownerPhone: formData.ownerPhone,
    },
    precio: {
      currency: formData.currency,
      mount: formData.mount,
      additionalExpense: formData.additionalExpense,
    },
  };

  function allFieldsCompleted() {
    const {
      operation,
      property,
      environments,
      bedrooms,
      bathrooms,
      area,
      state,
      name,
      description,
      province,
      zone,
      street,
      images,
      currency,
      mount,
      ownerNombre,
      ownerPhone,
    } = formData;

    return (
      operation &&
      property &&
      environments &&
      bedrooms &&
      bathrooms &&
      area &&
      state &&
      name &&
      description &&
      province &&
      zone &&
      street &&
      images.length > 0 &&
      currency &&
      mount &&
      ownerNombre &&
      ownerPhone
    );
  }

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
        `http://localhost:8080/properties`,
        newProperty
      );

      // Verifica el estado de la solicitud
      if (res.status === 200 || res.status === 201) {
        // Si la solicitud se realizó con éxito, muestra una alerta de propiedad creada
        toast.success("Propiedad creada con exito perrito");
        setFormData({
          operation: "Alquiler",
          property: "Departamento",
          environments: 0,
          bedrooms: 0,
          bathrooms: 0,
          area: 0,
          garage: 0,
          state: "Bueno",
          name: "",
          description: "",
          province: "",
          zone: "",
          street: "",
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
          currency: "$",
          mount: 0,
          additionalExpense: "",
          ownerNombre: "",
          ownerPhone: "",
        });
      } else {
        // En caso de que la solicitud no sea exitosa, muestra una alerta de error
        alert("Error al crear la propiedad");
      }
    } catch (error) {
      // Si hay un error en la solicitud, muestra una alerta con el mensaje de error
      alert("Hubo un error al procesar la solicitud");
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    dispatch(getAllProperties());
  }, [handleSubmit]);
  return (
    <div className="w-full h-full">
      <form className="">
        {/* Primeras opciones */}
        <div className="w-full h-full grid grid-cols-2  gap-x-6">
          {propertiesOptions.map((option, index) => (
            <div key={`${option.id}_${index}`} className="flex flex-col py-4">
              <label htmlFor={option.component} className="text-sm">
                {option.name}
              </label>
              {option.options ? (
                <select
                  id={option.component}
                  name={option.component}
                  value={formData[option.component]}
                  onChange={handleChange}
                  className="bg-gray-50 rounded-sm border"
                >
                  {option.options.map((optionValue, optionIndex) => (
                    <option key={optionIndex} value={optionValue}>
                      {optionValue}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  id={option.component}
                  name={option.component}
                  value={formData[option.component]}
                  onChange={handleChange}
                  className="bg-gray-50 rounded-sm border"
                />
              )}
            </div>
          ))}
        </div>
        {/* Descripción */}
        {propertiesDescription.map((option, index) => (
          <div
            key={`${option.id}_${index}`}
            className="flex flex-col h-64 py-4"
          >
            <label htmlFor={option.component} className="text-sm">
              {option.name}
            </label>
            <textarea
              type="text"
              id={option.component}
              name={option.component}
              value={formData[option.component]}
              onChange={handleChange}
              className="h-64  bg-gray-50 rounded-sm border"
            />
          </div>
        ))}
        {/* Detalles */}
        <div className="grid grid-cols-5 gap-x-6 py-4">
          {propertiesDetail.map((option, index) => (
            <div
              key={`${option.id}_${index}`}
              className="w-full h-full flex flex-col "
            >
              <label htmlFor={option.component} className="text-sm">
                {option.name}
              </label>
              <input
                type="number"
                id={option.component}
                name={option.component}
                value={formData[option.component]}
                onChange={handleChange}
                className=" bg-gray-50 rounded-sm border"
              />
            </div>
          ))}
        </div>
        {/* Dirección */}
        <div className="w-full h-full">
          <p className="text-sm py-4">Dirección</p>
          {propertiesAddress.map((option, index) => (
            <div
              key={`${option.id}_${index}`}
              className="grid grid-cols-3 gap-x-4"
            >
              {option.moreOptions.map((subOption, index) => (
                <div
                  key={`${option.id}_${index}`}
                  className="w-full h-full flex flex-col "
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
                    className=" bg-gray-50 rounded-sm border"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* Precio y dueño */}
        <div className="grid grid-cols-2 gap-x-6 py-4">
          {/* Precio */}
          <div className="w-full h-full">
            <p className="text-sm py-4">Precio</p>
            {propertiesPrice.map((option, index) => (
              <div
                key={`${option.id}_${index}`}
                className="grid grid-cols-2 gap-x-4"
              >
                {option.moreOptions.map((subOption, subIndex) => (
                  <div
                    key={`${option.id}_${subOption.id}_${subIndex}`}
                    className="w-full h-full flex flex-col "
                  >
                    <label htmlFor={subOption.component} className="text-sm">
                      {subOption.name}
                    </label>
                    {subOption.component === "currency" ? (
                      <select
                        id={subOption.component}
                        name={subOption.component}
                        value={formData[subOption.component]}
                        onChange={handleChange}
                        className="bg-gray-50 rounded-sm border"
                      >
                        {subOption.options.map(
                          (currencyOption, currencyIndex) => (
                            <option key={currencyIndex} value={currencyOption}>
                              {currencyOption}
                            </option>
                          )
                        )}
                      </select>
                    ) : (
                      <input
                        type="text"
                        id={subOption.component}
                        name={subOption.component}
                        value={formData[subOption.component]}
                        onChange={handleChange}
                        className="bg-gray-50 rounded-sm border"
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
          {/* Dueño */}
          <div className="w-full h-full">
            <p className="text-sm py-4">Dueño</p>
            {propertiesOwner.map((option, index) => (
              <div
                key={`${option.id}_${index}`}
                className="grid grid-cols-2 gap-x-4"
              >
                {option.moreOptions.map((subOption, index) => (
                  <div
                    key={`${option.id}_${index}`}
                    className="w-full h-full flex flex-col "
                  >
                    <label htmlFor={subOption.component} className="text-sm">
                      {subOption.name}
                    </label>
                    {subOption.component === "mount" ? (
                      <input
                        type="number"
                        id={subOption.component}
                        name={subOption.component}
                        value={formData[subOption.component]}
                        onChange={handleChange}
                        className=" bg-gray-50 rounded-sm border"
                      />
                    ) : (
                      <input
                        type="text"
                        id={subOption.component}
                        name={subOption.component}
                        value={formData[subOption.component]}
                        onChange={handleChange}
                        className=" bg-gray-50 rounded-sm border"
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        {/* Imagenes */}
        <div>
          {propertiesImages.map((option, index) => (
            <div key={`${option.id}_${index}`} className="">
              <p className="text-sm">Imagenes</p>
              {/*             <Cloudinary setFormData={setFormData} formData={formData} /> */}
              <ImgFirebase setFormData={setFormData} />
            </div>
          ))}
        </div>
        {/* Servicios */}
        <div className="w-full h-full">
          <p className="text-sm py-4">Servicios</p>
          {propertiesServices.map((option, index) => (
            <div
              key={`${option.id}_${index}`}
              className="grid grid-cols-3 gap-x-20"
            >
              {option.moreOptions.map((subOption, index) => (
                <div
                  key={`${option.id}_${index}`}
                  className="w-full h-full flex justify-between py-2"
                >
                  <label htmlFor={subOption.component} className="text-sm">
                    {subOption.name}
                  </label>
                  <input
                    type="checkbox"
                    id={subOption.component}
                    name={subOption.component}
                    checked={formData[subOption.component]}
                    onChange={handleChange}
                    className="w-6 h-6 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </form>
      <div className="w-full h-fit py-16 flex justify-center">
        <button
          onClick={handleSubmit}
          disabled={!allFieldsCompleted()}
          className={` py-2 px-10 rounded-sm text-white ${
            allFieldsCompleted() ? "w-8/12 bg-gray-800" : "w-6/12 bg-gray-400"
          }`}
        >
          CREAR
        </button>
      </div>
    </div>
  );
}

export default CreateProperty;
