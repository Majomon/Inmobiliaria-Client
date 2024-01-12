import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Toaster } from "sonner";
import CarouselMlWeb from "../components/CarouselMlWeb/CarouselMlWeb";
import DetailInfoBot from "../components/DetailInfoBot/DetailInfoBot";
import DetailInfoTop from "../components/DetailInfoTop/DetailInfoTop";
import FormContact from "../components/FormContact/FormContact";
import PropertyArea from "../components/PropertyArea/PropertyArea";
import Spinner from "../components/Spinner/Spinner";
import {
  clearDetailsState,
  getAllProperties,
  getPropertiesId,
} from "../redux/actions";

function Detail({ theme }) {
  /*   const [selectedImage, setSelectedImage] = useState("");
    const [currentImageIndex, setCurrentImageIndex] = useState(0); */
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const property = useSelector((state) => state.details);
  const properties = useSelector((state) => state.propiedades);
  const [sliderProperty, setSliderProperty] = useState([]);

  useEffect(() => {
    dispatch(getAllProperties());
    dispatch(getPropertiesId(id));
    setLoading(false);
    /*     dispatch(getPropertiesId(id))
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

  useEffect(() => {
    if (property._id && properties.length > 0) {
      const foundProperty = properties.filter((elem) => {
        return (
          elem._id !== property._id &&
          /* elem.address && // Verificar si 'address' está definido
          elem.address.zone && // Verificar si 'zone' está definido */
          elem.address.province === property.address.province 
        );
      });

      // Mezclar propiedades
      const shuffledProperties = foundProperty.sort(() => Math.random() - 0.5);

      // Tomar los primeros 4 elementos (o menos si hay menos de 5)
      const randomProperties = shuffledProperties.slice(0, 5);

      setSliderProperty(randomProperties);
      setLoading(false);
    }
  }, [property._id, properties]);

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
          {sliderProperty.length && (
            <div className="w-10/12 mx-auto h-full py-6 mt-20">
              <h3 className=" font-bold text-lg text-center">
                Otras propiedades
              </h3>
              <PropertyArea sliderProperty={sliderProperty} />
            </div>
          )}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default Detail;

{
  /*         <div className="w-full h-[100vh] ">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <img src={Error} alt="error" className="w-[400px] h-[300px]" />
            <h2 className="text-3xl">
              No existe la propiedad de ID: <strong>{id}</strong>
            </h2>
          </div>
        </div> */
}
