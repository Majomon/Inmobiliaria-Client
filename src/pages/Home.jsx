import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import img1 from "../assets/img/1.webp";
import img2 from "../assets/img/2.webp";
import img3 from "../assets/img/3.webp";
import img4 from "../assets/img/4.webp";
import CarouselHome from "../components/CarouselHome/CarouselHome";
import ContainerProperty from "../components/ContainerProperty/ContainerProperty";
import FilterHome from "../components/FilterHome/FilterHome";
import { getAllProperties } from "../redux/actions";

function Home() {
  const images = [img1, img2, img3, img4];
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.propiedades);

  useEffect(() => {
    dispatch(getAllProperties());
  }, []);

  /*   useEffect(() => {
    setTimeout(() => {
      axios
        .get("/properties")
        .then((response) => {
          if (response.status === 200) {
            const data = response.data;
            setDataAxios(data);
            setLoading(false);
          } else {
            throw new Error("La solicitud no fue exitosa.");
          }
        })
        .catch((error) => {
          console.error("Error al obtener propiedades:", error);
          setLoading(false);
        });
    }, 1500);
  }, []); */

  return (
    <div className="w-full h-full mt-[72px]">
      <CarouselHome images={images} />
      <div className="relative">
        <FilterHome />
      </div>
      <h2 className="text-center py-4 font-bold dark:bg-black dark:text-white text-xl md:text-2xl lg:text-3xl">
        Todas las propiedades
      </h2>
      <ContainerProperty properties={properties} />
    </div>
  );
}

export default Home;
