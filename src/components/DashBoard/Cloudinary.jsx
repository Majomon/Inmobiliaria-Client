import axios from "axios";
import { useState, useEffect } from "react";

function Cloudinary({ setFormData, formData }) {
  const [files, setFiles] = useState([]); // Arreglo de archivos
  const [imageUrls, setImageUrls] = useState([]); // Arreglo de URLs
  const [loading, setLoading] = useState(false); // Inicialmente, no estamos cargando
  const [upOk, setUpOk] = useState(false);

  useEffect(() => {
    if (imageUrls.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        images: imageUrls,
      }));
      setUpOk(true);
    } else {
      setUpOk(false);
    }
  }, [imageUrls, setFormData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Comenzamos la carga
    const formData = new FormData();
    // Agregar cada archivo al objeto FormData
    for (let file of files) {
      formData.append("img", file);
    }

    const res = await axios.post("https://inmobiliaria-api-green.vercel.app/cloudinary", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const { message, urls } = res.data;

    console.log(message, urls);
    setLoading(false);
    setImageUrls(urls);
    /*     const res = await fetch("http://localhost:8080/cloudinary", {
      method: "POST",
      body: formData,
    }); */
  };

  return (
    <div className="w-full p-2 grid grid-cols-2">
      <form
        onSubmit={handleSubmit}
        className="w-full flex justify-between items-center"
      >
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          multiple // Permitir la selección de múltiples archivos
          required
          onChange={(e) => {
            // Convertir el objeto FileList en un arreglo
            setFiles(Array.from(e.target.files));
          }}
        />
        {upOk ? (
          <h2 className="font-bold py-2 px-4 bg-green-500 rounded-lg">
            Archivos subidos
          </h2>
        ) : (
          <button
            onClick={handleSubmit}
            className="py-2 px-4 text-gray-50 bg-[#252728] rounded-lg"
          >
            Subir imagenes
          </button>
        )}
      </form>

      {loading && (
        <div className="w-full flex justify-center">
          <p className="py-2 border-b-2">Subiendo...</p>
        </div>
      )}
    </div>
  );
}

export default Cloudinary;
