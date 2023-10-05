import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/logo-removebg-preview.png";
import WhatApp from "../../assets/whatsapp.png";

function FormContact() {
  const [disabled, setDisabled] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [inputForm, setInputForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const URL_BASE = "http://localhost:3000";
  const location = useLocation();

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  const handleWhatsAppShare = () => {
    // URL actual de tu página
    const currentURL = `${URL_BASE}${location.pathname}`;

    // Crea el enlace de WhatsApp con la URL actual como parámetro
    const whatsappURL = `https://api.whatsapp.com/send?text= Hola, te comparto esta ficha: ${encodeURIComponent(
      currentURL
    )}`;

    // Abre la ventana de WhatsApp para compartir la URL
    window.open(whatsappURL, "_blank");
  };

  useEffect(() => {
    if (
      inputForm.name &&
      inputForm.email &&
      inputForm.phone &&
      inputForm.message
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [inputForm]);

  return (
    <div className="w-4/12 h-[100vh] mt-2 mr-16 bg-white sticky top-[80px]">
      <div className="p-4 shadow-md border rounded-lg ">
        <h2 className="">Contacta al vendedor</h2>
        <div className="w-full flex gap-4">
          <img src={Logo} alt="logo" className="w-[80px] " />
          <div>
            <h2 className="text-lg "> Av. Siempre viva 1234</h2>
            <h2 className="text-lg ">4422-4433</h2>
            <h2 className="text-lg ">test@test.com</h2>
          </div>
        </div>
        <form className="pt-2">
          <input
            type="text"
            name="name"
            value={inputForm.name}
            onChange={handlerChange}
            placeholder="Nombre"
            className={`w-full h-full my-1 py-1 border-b-2 border-gray-400 focus:border-yellow-500 ${
              isFocused ? "outline-none" : ""
            }`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <input
            type="text"
            name="email"
            value={inputForm.email}
            onChange={handlerChange}
            placeholder="Email"
            className={`w-full h-full my-1 py-1 border-b-2 border-gray-400 focus:border-yellow-500 ${
              isFocused ? "outline-none" : ""
            }`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <input
            type="text"
            name="phone"
            value={inputForm.phone}
            onChange={handlerChange}
            placeholder="Teléfono"
            className={`w-full h-full my-1 py-1 border-b-2 border-gray-400 focus:border-yellow-500 ${
              isFocused ? "outline-none" : ""
            }`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <textarea
            style={{ resize: "none" }}
            type="text"
            name="message"
            value={inputForm.message}
            onChange={handlerChange}
            placeholder="Vi esta propiedad y me gustaria que me contacten"
            className={`w-full h-full my-1 py-1 border-b-2 border-gray-400 focus:border-yellow-500 ${
              isFocused ? "outline-none" : ""
            }`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <button
            type="submit"
            disabled={disabled}
            className={`w-full mt-4 p-2 rounded-xl shadow-md transition-all duration-300 ease-out ${
              disabled
                ? "bg-gray-400 font-bold"
                : "bg-yellow-400 text-white font-bold text-lg border hover:scale-105"
            }`}
          >
            Enviar
          </button>
        </form>
      </div>
      <div className="h-[8rem] mt-2 flex flex-col justify-center gap-2 shadow-md border rounded-lg px-2">
        <h3 className="text-lg font-bold">Compartir</h3>
        <img
          src={WhatApp}
          onClick={handleWhatsAppShare}
          alt="whatapp"
          className="w-[40px] cursor-pointer"
        />
      </div>
    </div>
  );
}

export default FormContact;
