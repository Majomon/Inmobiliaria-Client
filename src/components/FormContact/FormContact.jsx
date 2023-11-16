import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import WhatApp from "../../assets/whatsapp.png";
import { postResend } from "../../redux/actions";
import { Toaster, toast } from "sonner";
import Swal from "sweetalert2";
import LogoDark from "../../assets/darkMode.png";
import LogoLight from "../../assets/lightMode.png";

function FormContact({ theme }) {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  //Direccion completa de la URL
  const location = useLocation();
  const URL_BASE = "https://inmobiliaria-client.vercel.app";
  const currentURL = `${URL_BASE}${location.pathname}`;

  const [inputForm, setInputForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleWhatsAppShare = () => {
    const whatsappURL = `https://api.whatsapp.com/send?text= Hola, te comparto esta ficha: ${encodeURIComponent(
      currentURL
    )}`;

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

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  const handlerSubmit = (event) => {
    event.preventDefault();

    if (disabled) {
      toast.error(
        "Por favor, complete todos los campos antes de enviar el formulario",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
      return;
    }

    const formData = {
      name: inputForm.name,
      email: inputForm.email,
      phone: inputForm.phone,
      message: inputForm.message,
      url: currentURL,
    };
    dispatch(postResend(formData));
    setInputForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    Swal.fire("Email enviado. En breve se contactaran contigo. Gracias");
  };

  return (
    <div className="w-full md:w-6/12 h-full bg-white dark:bg-black sticky top-[80px] mt-4 rounded-lg">
      <Toaster />
      <div className="mb-4 p-4 shadow-md dark:shadow-gray-200 border rounded-lg">
        <h2 className="text-black dark:text-gray-100 text-center py-2">Contacta al vendedor</h2>
        <div className="w-full flex gap-4 justify-center">
          {theme === "light" ? (
            <img className="w-16" src={LogoLight} alt="LogoLight" />
          ) : (
            <img className="w-16" src={LogoDark} alt="LogoDark" />
          )}
          <div>
            <h2 className="text-base dark:text-gray-100"> Av. Siempre viva 1234</h2>
            <h2 className="text-base dark:text-gray-100">4422-4433</h2>
            <h2 className="text-base dark:text-gray-100">test@test.com</h2>
          </div>
        </div>
        <form className="pt-2" onSubmit={handlerSubmit}>
          <input
            type="text"
            name="name"
            value={inputForm.name}
            onChange={handlerChange}
            placeholder="Nombre"
            className={`w-full h-full my-1 py-1 border-b-4 dark:bg-black dark:text-white border-gray-100 focus:border-yellow-500 ${
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
            className={`w-full h-full my-1 py-1 border-b-4 dark:bg-black dark:text-white border-gray-100 focus:border-yellow-500 ${
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
            className={`w-full h-full my-1 py-1 border-b-4 dark:bg-black dark:text-white border-gray-100 focus:border-yellow-500 ${
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
            className={`w-full h-full my-1 py-1 border-b-4 dark:bg-black dark:text-white border-gray-100 focus:border-yellow-500 ${
              isFocused ? "outline-none" : ""
            }`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <button
            type="submit"
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
      <div className="h-[8rem] mt-2 flex flex-col justify-center items-center gap-2 shadow-md border rounded-lg px-2 dark:shadow-gray-200">
        <h3 className="text-lg font-bold dark:text-gray-100">Compartir</h3>
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
