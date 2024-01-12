import React, { useEffect, useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import appFirebase from "../../utils/firebase";
import { v4 as uuidv4 } from "uuid";
const storage = getStorage(appFirebase);

function ImgFirebase({ setFormData }) {
  const [imageUrls, setImageUrls] = useState([]); // Estado para almacenar las URLs de las imágenes
  const [loading, setLoading] = useState(false); // Inicialmente, no estamos cargando

  useEffect(() => {
    if (imageUrls.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        images: imageUrls,
      }));
    }
  }, [imageUrls]);

  const fileHandler = async (e) => {
    const fileList = Array.from(e.target.files); // Obtener la lista de archivos
    setLoading(true);

    // Subir cada archivo al almacenamiento y obtener sus URL
    const uploadTasks = fileList.map(async (file) => {
      const uniqueFileName = `${uuidv4()}_${file.name}`;
      const storageRef = ref(storage, `Ruslux/${uniqueFileName}`);
      /*   const storageRef = ref(storage, `Ruslux/${file.name}`); */
      await uploadBytes(storageRef, file);
      return getDownloadURL(storageRef);
    });

    // Esperar a que todas las tareas de carga de archivos se completen y obtener las URL
    Promise.all(uploadTasks)
      .then((urls) => {
        setImageUrls(urls); // Actualizar el estado con la lista de URL de las imágenes
        setLoading(false);
        console.log("URLs de las imágenes subidas:", urls);
      })
      .catch((error) => {
        console.error("Error al subir las imágenes:", error);
      });
  };

  return (
    <div className="">
      <div className="w-full p-2 grid grid-cols-3">
        <input type="file" multiple onChange={fileHandler} />

        {loading && (
          <div className="w-full flex justify-center">
            <p className="py-2 border-b-2">Subiendo...</p>
          </div>
        )}
      </div>

      {imageUrls.length > 0 && (
        <div>
          <p className="text-sm">Imágenes subidas:</p>
          <ul className="grid grid-cols-6">
            {imageUrls.map((url, index) => (
              <li key={index}>
                <img
                  src={url}
                  alt={`Imagen ${index}`}
                  className="w-[150px] h-[100px]"
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ImgFirebase;
