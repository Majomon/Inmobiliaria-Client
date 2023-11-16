import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Error from "../assets/pageNotFound/5203299.jpg";
import CarouselVersion2 from "../components/CarouselVersion2/CarouselVersion2";
import DetailInfoBot from "../components/DetailInfoBot/DetailInfoBot";
import DetailInfoTop from "../components/DetailInfoTop/DetailInfoTop";
import FormContact from "../components/FormContact/FormContact";
import Spinner from "../components/Spinner/Spinner";
import { clearDetailsState, getAllProperties, getPropertiesId } from "../redux/actions";
import { Toaster, toast } from "sonner";
import CarouselMlWeb from "../components/CarouselMlWeb/CarouselMlWeb";
import PropertyArea from "../components/PropertyArea/PropertyArea";

function Detail({ theme }) {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dispatch = useDispatch();
  const property = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getPropertiesId(id))
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error al obtener propiedades:", error);
      });
/*     dispatch(getAllProperties())
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error al obtener propiedades:", error);
      }); */

    return () => {
      dispatch(clearDetailsState());
    };
  }, [id]);

  /*  const handleImageClick = (image) => {
    // Maneja el clic en una imagen pequeña
    setSelectedImage(image);
    setCurrentImageIndex(image);
  };
  // Verifica si los datos están cargados antes de renderizar */
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="bg-white dark:bg-black">
      <Toaster />
      {property.name ? (
        <div className="w-full h-full mt-12 flex flex-col">
          <DetailInfoTop dataAxios={property} />
          <div className="w-10/12 mx-auto flex flex-col md:flex-row mt-4 gap-16">
            <div className="w-full h-full">
              {/*    <CarouselVersion2
                handleImageClick={handleImageClick}
                currentImageIndex={currentImageIndex}
              /> */}
              {/*     <div className="w-full text-center my-2 py-2 border shadow-md bg-yellow-400 hover:bg-yellow-500  hover:translate-y-[-2px] transition-all duration-300 ease-in-out rounded-lg text-white font-bold text-xl cursor-pointer dark:shadow-gray-200">
                <button>Quiero que me llamen</button>
              </div> */}
              <CarouselMlWeb />
              <DetailInfoBot dataAxios={property} theme={theme} />
            </div>
            <FormContact theme={theme} />
          </div>
          <PropertyArea />
        </div>
      ) : (
        <div className="w-full h-[100vh] ">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <img src={Error} alt="error" className="w-[400px] h-[300px]" />
            <h2 className="text-3xl">
              No existe la propiedad de ID: <strong>{id}</strong>
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
