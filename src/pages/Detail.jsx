import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import CarouselVersion2 from "../components/CarouselVersion2/CarouselVersion2";
import DetailInfoTop from "../components/DetailInfoTop/DetailInfoTop";
import FormContact from "../components/FormContact/FormContact";
import DetailInfoBot from "../components/DetailInfoBot/DetailInfoBot";
import Footer from "../components/Footer/Footer"

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [dataAxios, setDataAxios] = useState(null); // Inicializa como null
  const [dataAxiosImages, setDataAxiosImages] = useState(null); // Inicializa como null
  const [selectedImage, setSelectedImage] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`/properties/${id}`)
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          setDataAxios(data);
          setDataAxiosImages(data.images); // Asigna el arreglo de imágenes a dataAxios
          setSelectedImage(data.images[0]);
          setLoading(false);
        } else {
          throw new Error("La solicitud no fue exitosa.");
        }
      })
      .catch((error) => {
        console.error("Error al obtener propiedades:", error);
        setLoading(false);
      });
  }, [id]);

  const handleImageClick = (image) => {
    // Maneja el clic en una imagen pequeña
    setSelectedImage(image);
    setCurrentImageIndex(image);
  };

  return (
    <div className="bg-white dark:bg-black">
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full h-full mt-16 flex flex-col ">
          <DetailInfoTop dataAxios={dataAxios} />
          <div className="w-full flex mt-4">
            <div className="w-8/12 h-full pl-16 pr-4">
              <CarouselVersion2
                handleImageClick={handleImageClick}
                currentImageIndex={currentImageIndex}
                selectedImage={selectedImage}
                dataAxiosImages={dataAxiosImages}
              />
              <div className="w-full text-center my-2 py-2 border shadow-md bg-yellow-400 hover:bg-yellow-500  hover:translate-y-[-2px] transition-all duration-300 ease-in-out rounded-lg text-white font-bold text-xl cursor-pointer ">
                <button>Quiero que me llamen</button>
              </div>
              <DetailInfoBot dataAxios={dataAxios} />
            </div>
            <FormContact />
          </div>
          <Footer/>
        </div>
      )}
    </div>
  );
}

export default Detail;
