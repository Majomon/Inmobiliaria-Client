import { useSelector } from "react-redux";
import { useSpringCarousel } from "react-spring-carousel";
import PropertyCard from "../PropertyCard/PropertyCard";
import { useEffect } from "react";
import { getAllProperties } from "../../redux/actions";

function PropertyArea() {
  const properties = useSelector((state) => state.propiedades);

  const carouselItems = properties.map((property) => ({
    id: property._id,
    renderItem: <PropertyCard key={property._id} property={property} />,
  }));
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      itemsPerSlide: Math.min(3, properties.length), // Asegúrate de no exceder la longitud de 'properties'
      withLoop: true,
      items: carouselItems,
    });

  return (
    <div className="w-full mx-auto h-full bg-gray-800">
      <div className="w-10/12 overflow-hidden mx-auto">
        <h2 className="text-center">Propiedades por la zona</h2>
        <div className="">
          <button onClick={slideToPrevItem} className=" text-white">
            Prev item
          </button>
          {carouselFragment}
          <button onClick={slideToNextItem}>Next item</button>
        </div>
      </div>
    </div>
  );
}

export default PropertyArea;
