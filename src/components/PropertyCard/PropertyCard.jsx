import React from "react";
import Baño from "../../assets/iconos/ducha.png";
import Habitacion from "../../assets/iconos/habitacion.png";
import Superficie from "../../assets/iconos/superficie.png";
import WhatApp from "../../assets/whatsapp.png";
import { CarouselImgCard } from "../CarouselImgCard/CarouselImgCart";

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
    admission,
  } = properties.property;

  const URL_BASE = "https://inmobiliaria-client.vercel.app";
  const currentURL = `${URL_BASE}/detail/${_id}`;

  let statePrecio = precio ? precio.mount.toLocaleString() : "";

  const handleWhatsAppShare = () => {
    const phoneNumber = "+5491144451012";
    const message = `Hola, me interesa esta propiedad: ${currentURL}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="w-[210px] bg-white md:w-[240px] 2xl:w-[280px] mx-auto my-8 rounded-sm  shadow-lg shadow-gray-700  duration-700 ease-in-out hover:shadow-xl hover:shadow-gray-900  dark:shadow-lg dark:hover:shadow-xl  dark:shadow-gray-300  dark:hover:shadow-blue-900 relative">
      <h3 className="py-2 text-center font-bold bg-gray-900 text-gray-100 text-xs ">
        {property} en {operation}
      </h3>
      <CarouselImgCard images={images} id={_id} />
      <div className="w-full px-4 flex justify-between items-center">
        <div className="text-sm  font-bold  text-gray-600 my-2 dark:text-gray-100 mt-2">
          <p>
            {precio.currency} <span>{statePrecio}</span>
          </p>
        </div>
        <div className="text-xs font-semibold text-gray-600 my-2 dark:text-gray-100 mt-2">
          <h4>Ingreso: {admission}</h4>
        </div>
      </div>
      <div className="w-full flex justify-around items-center  p-2">
        <div className="flex flex-col justify-center items-center">
          <img src={Superficie} className="w-5" />
          <p className="text-xs text-gray-900 font-semibold dark:text-gray-700">
            {area} m²
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={Baño} className="w-5" />
          <p className="text-xs text-gray-900 font-semibold dark:text-gray-700">
            {bathrooms} {bathrooms > 1 ? "Baños" : "Baño"}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={Habitacion} className="w-5" />
          <div>
            <p className="text-xs text-gray-900 font-semibold dark:text-gray-700">
              {environments === 1 ? "Monoambiente" : `${bedrooms} Dorm`}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-between  px-4">
        {/*       <h2 className="font-bold text-sm py-2 dark:text-gray-100 ">{name}</h2> */}
        <h3 className="text-sm py-2 text-gray-500 font-semibold">
          {address.street} | {address.zone}
        </h3>
      </div>
      <div className="absolute -bottom-2 -right-4 z-10">
        <button
          onClick={handleWhatsAppShare}
          className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-full hover:bg-green-600 focus:outline-none"
        >
          <img src={WhatApp} className="w-8 h-8" alt="WhatsApp" />
        </button>
      </div>
    </div>
  );
}

export default PropertyCard;
