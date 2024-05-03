import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import appFirebase from "../../utils/firebase";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";
const storage = getStorage(appFirebase);

function ImgFirebase({ setFormData, editForm }) {
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (imageUrls.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        images: imageUrls,
      }));
    }
  }, [imageUrls]);

  const fileHandler = async (e) => {
    const fileList = Array.from(e.target.files);
    setLoading(true);

    // Subir cada archivo al almacenamiento y obtener sus URL
    const uploadTasks = fileList.map(async (file) => {
      const uniqueFileName = `${uuidv4()}_${file.name}`;
      const storageRef = ref(storage, `Ruslux/${uniqueFileName}`);
      await uploadBytes(storageRef, file);
      return getDownloadURL(storageRef);
    });

    // Esperar a que todas las tareas de carga de archivos se completen y obtener las URL
    Promise.all(uploadTasks)
      .then((urls) => {
        setImageUrls(urls);
        setLoading(false);
        console.log("URLs de las imágenes subidas:", urls);
      })
      .catch((error) => {
        console.error("Error al subir las imágenes:", error);
      });
  };

  const deleteImage = async (urlToDelete) => {
    try {
      // Borrando imagenes desde firebase
      const storageRef = ref(storage, urlToDelete);
      await deleteObject(storageRef);

      const updatedImages = editForm.images.filter(
        (url) => url !== urlToDelete
      );

      setFormData((prevData) => ({
        ...prevData,
        images: updatedImages,
      }));

      const response = await axios.put(`/properties/${editForm._id}`, {
        ...editForm,
        images: updatedImages,
      });
      toast.success("Ya eliminaste la/s imagen/es de la base de datos");
      return response;
    } catch (error) {
      console.error("Error al eliminar la imagen:", error);
    }
  };

  // Para eliminar imagenes
  /* const deleteImage = async (imageUrl) => {
    try {
      const storageRef = ref(storage, imageUrl);
      await deleteObject(storageRef);
      setImageUrls((prevUrls) => prevUrls.filter((url) => url !== imageUrl));
    } catch (error) {
      console.error("Error al eliminar la imagen:", error);
    }
  }; */

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

      {imageUrls?.length > 0 ? (
        <div className="">
          <p className="text-sm">Imágenes subidas:</p>
          <ul className="grid grid-cols-6 gap-4">
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
      ) : (
        <div>
          <p className="text-sm">Imágenes subidas:</p>
          <ul className="grid grid-cols-6 gap-4">
            {editForm?.images.map((url, index) => (
              <li
                key={index}
                className="w-full text-center"
              >
                <img
                  src={url}
                  alt={`Imagen ${index}`}
                  className="w-[150px] h-[100px] rounded-t-md"
                />
                <button type="button" onClick={() => deleteImage(url)} className="w-full rounded-b-md bg-red-700">
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ImgFirebase;
