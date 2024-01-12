import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  propertiesAddress,
  propertiesDescription,
  propertiesDetail,
  propertiesOptions,
  propertiesOwner,
  propertiesPrice,
  propertiesServices,
} from "../optionsPostProperty.js";
import { FaX } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { getAllProperties } from "../../../redux/actions.js";

function ModalEdit({ propertyFound, setActiveEdit, activeEdit }) {
  const dispatch = useDispatch();
  const [editForm, setEditForm] = useState({ ...propertyFound });
  const upParrayImg = (index) => {
    const updatedImages = [...editForm.images];
    updatedImages.splice(index, 1);
    setEditForm({
      ...editForm,
      images: updatedImages,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setEditForm({
        ...editForm,
        services: {
          ...editForm.services,
          [name]: checked,
        },
      });
    } else if (name === "street" || name === "zone" || name === "province") {
      setEditForm({
        ...editForm,
        address: {
          ...editForm.address,
          [name]: value,
        },
      });
    } else if (
      name === "currency" ||
      name === "mount" ||
      name === "additionalExpense"
    ) {
      setEditForm({
        ...editForm,
        precio: {
          ...editForm.precio,
          [name]: value,
        },
      });
    } else if (name === "ownerNombre" || name === "ownerPhone") {
      setEditForm({
        ...editForm,
        owner: {
          ...editForm.owner,
          [name]: value,
        },
      });
    } /* else if (propertiesServices.some((option) => option.component === name)) {
      setEditForm({
        ...editForm,
        services: {
          ...editForm.services,
          [name]: value,
        },
      });
    }  */ else {
    }
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://inmobiliaria-api-green.vercel.app/properties/${editForm._id}`,
        editForm
      );
      setActiveEdit(false);
      console.log("Response:", response.data);
    } catch (error) {
      // Manejar cualquier error que pueda ocurrir durante la solicitud
      console.error("Error:", error);
      // Aquí podrías mostrar un mensaje de error al usuario
    }
  };

  useEffect(() => {
    dispatch(getAllProperties());
  }, [handlerSubmit]);
  return (
    <div className="w-full absolute top-0 left-0 bottom-0 right-0 z-10 bg-black">
      <div className="w-full mx-auto bg-gray-100 rounded-lg relative">
        {/* Ícono de cerrar */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-black flex justify-center items-center rounded-full cursor-pointer">
          <FaX onClick={() => setActiveEdit(false)} color="red" />
        </div>
        <form onSubmit={handlerSubmit}>
          <div className="pt-12 px-10">
            {/* Primeras opciones */}
            <div className="w-full h-full grid grid-cols-4 gap-x-6 pb-4 ">
              {propertiesOptions.map((option, index) => (
                <div key={`${option.id}_${index}`} className="flex flex-col">
                  <label
                    htmlFor={option.component}
                    className="text-sm font-bold"
                  >
                    {option.name}
                  </label>
                  {option.options ? (
                    <select
                      id={option.component}
                      name={option.component}
                      value={editForm[option.component]}
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
                      value={editForm.name}
                      onChange={handleChange}
                      className="bg-gray-50 rounded-sm border"
                    />
                  )}
                </div>
              ))}
            </div>
            {/* Descripción y detalles */}
            <div className="grid grid-cols-2 gap-x-2 my-2 pb-2">
              {/* Descripción */}
              {propertiesDescription.map((option, index) => (
                <div
                  key={`${option.id}_${index}`}
                  className="flex flex-col h-40"
                >
                  <label
                    htmlFor={option.component}
                    className="text-sm font-bold"
                  >
                    {option.name}
                  </label>
                  <textarea
                    type="text"
                    id={option.component}
                    name={option.component}
                    value={editForm[option.component]}
                    onChange={handleChange}
                    className="h-64  bg-gray-50 rounded-sm border"
                  />
                </div>
              ))}
              {/* Detalles */}
              <div className="grid grid-cols-2 gap-x-6">
                {propertiesDetail.map((option, index) => (
                  <div
                    key={`${option.id}_${index}`}
                    className="w-full h-full flex flex-col "
                  >
                    <label
                      htmlFor={option.component}
                      className="text-sm font-bold"
                    >
                      {option.name}
                    </label>
                    <input
                      type="number"
                      id={option.component}
                      name={option.component}
                      value={editForm[option.component]}
                      onChange={handleChange}
                      className=" bg-gray-50 rounded-sm border"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Dirección */}
            <div className="w-full h-full my-2 pb-2">
              <p className="text-sm font-bold mb-2">Dirección</p>
              {propertiesAddress.map((addressOption, addressIndex) => (
                <div
                  key={`${addressOption.id}_${addressIndex}`}
                  className="grid grid-cols-3 gap-x-4"
                >
                  {addressOption.moreOptions.map((subOption, subIndex) => (
                    <div
                      key={`${addressOption.id}_${subIndex}`}
                      className="w-full h-full flex flex-col"
                    >
                      <label
                        htmlFor={subOption.component}
                        className="text-sm font-bold"
                      >
                        {subOption.name}
                      </label>
                      <input
                        type="text"
                        id={subOption.component}
                        name={subOption.component}
                        value={editForm.address[subOption.component]}
                        onChange={handleChange}
                        className="bg-gray-50 rounded-sm border"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            {/* Precio y Dueño */}
            <div className="w-full h-full my-2 pb-2">
              <div className="grid grid-cols-2 gap-x-6">
                {/* Precio */}
                <div className="w-full h-full">
                  <p className="text-sm font-bold my-2">Precio</p>
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
                          <label
                            htmlFor={subOption.component}
                            className="text-sm font-bold"
                          >
                            {subOption.name}
                          </label>
                          {subOption.component === "currency" ? (
                            <select
                              id={subOption.component}
                              name={subOption.component}
                              value={editForm.precio[subOption.component]}
                              onChange={handleChange}
                              className="bg-gray-50 rounded-sm border"
                            >
                              {subOption.options.map(
                                (currencyOption, currencyIndex) => (
                                  <option
                                    key={currencyIndex}
                                    value={currencyOption}
                                  >
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
                              value={editForm.precio[subOption.component]}
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
                  <p className="text-sm font-bold my-2">Dueño</p>
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
                          <label
                            htmlFor={subOption.component}
                            className="text-sm font-bold"
                          >
                            {subOption.name}
                          </label>
                          <input
                            type="text"
                            id={subOption.component}
                            name={subOption.component}
                            value={editForm.owner[subOption.component]} // Accede a la estructura correcta del objeto owner
                            onChange={handleChange}
                            className=" bg-gray-50 rounded-sm border"
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Servicios */}
            <div className="w-full h-full">
              <p className="text-sm font-bold">Servicios</p>
              {propertiesServices.map((option, index) => (
                <div
                  key={`${option.id}_${index}`}
                  className="grid grid-cols-6 gap-x-10"
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
                        checked={editForm.services[subOption.component]}
                        onChange={handleChange}
                        className="w-6 h-6 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            {/* Imagenes */}
            <div className="w-full h-full flex flex-col">
              <p className="text-sm font-bold my-2">Imagenes</p>
              <div className="w-full h-full flex flex-wrap gap-x-10">
                {editForm.images.map((image, index) => (
                  <div key={`${index}`} className="relative w-fit">
                    <img
                      className="w-24 h-24 "
                      src={image}
                      alt={`Image ${index}`}
                    />
                    <button
                      className="absolute top-0 right-0 p-2 bg-red-500 text-white rounded"
                      onClick={() => upParrayImg(index)}
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
              <div className="w-4/12 mx-auto h-full flex justify-center items-center py-10">
                <button className="w-full h-fit bg-gray-950 text-white py-4 rounded-lg">
                  Guardar cambios
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalEdit;
