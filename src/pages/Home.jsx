import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarouselHome from "../components/CarouselHome/CarouselHome";
import ContainerPropertyHome from "../components/ContainerPropertyHome/ContainerPropertyHome";
import FilterHome from "../components/FilterHome/FilterHome";
import { getAllProperties } from "../redux/actions";

function Home() {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state?.propiedades);
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    dispatch(getAllProperties());
  }, []);

  useEffect(() => {
    const filtered = properties.filter((property) => property?.availability);
    setFilteredProperties(filtered);
  }, [properties]);

  return (
    <div className="w-full mt-[3rem]">
      <CarouselHome />
      <div className="w-full relative lg:absolute">
        <FilterHome />
      </div>
      <h2 className="text-center py-4 font-bold dark:bg-black dark:text-white text-xl md:text-2xl lg:text-3xl">
        Todas las propiedades
      </h2>
      <ContainerPropertyHome properties={filteredProperties} />
    </div>
  );
}

export default Home;
