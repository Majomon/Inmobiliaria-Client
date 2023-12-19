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

  return (
    <div className="w-full h-full mt-[3rem]">
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
