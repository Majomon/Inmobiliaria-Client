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
    console.log(files);
    const formData = new FormData();
    // Agregar cada archivo al objeto FormData
    for (let file of files) {
      formData.append("img", file);
    }

    const res = await axios.post("/cloudinary", formData, {
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
    <div className="w-full">
      <form onSubmit={handleSubmit}>
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
          <h2>Archivos subidos</h2>
        ) : (
          <button onClick={handleSubmit}>Cargarlos</button>
        )}
      </form>

      {loading && <p>Cargando...</p>}
    </div>
  );
}

export default Cloudinary;
