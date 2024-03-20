import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CarouselMlWebModal from "./CarouselModal";
import LastImageInGallery from "./LastImageInGallery";

function CarouselMlWeb() {
  const property = useSelector((state) => state.details);
  const [firstImage, setFirstImage] = useState(null);
  const [imgSelected, setImgSelected] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [arrayImg, setArrayImg] = useState([]);
  const filteredImages = arrayImg.filter((image) => image !== imgSelected);
  const [newArrayImg, setNewArrayImg] = useState([]);
  const maxItems = 6;

  useEffect(() => {
    if (imgSelected) {
      setNewArrayImg([imgSelected, ...filteredImages]);
    }
  }, [imgSelected]);

  useEffect(() => {
    if (property.images && property.images.length > 0) {
      setFirstImage(property.images[0]);
      const imagesToShow = property.images.slice(0, maxItems - 1); // -1 to leave space for the LastImageInGallery
      setArrayImg(imagesToShow);
    }
  }, [property.images]);

  const handlerSelectImg = (image) => {
    setImgSelected(image);
  };

  const handlerImgModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-full flex  rounded-md py-4 shadow-md  shadow-gray-700 dark:shadow-yellow-600 border-2 border-gray-200 dark:border-gray-900">
      <div className="w-2/12 h-full flex flex-col justify-center items-center  gap-y-4">
        {arrayImg.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-[60px] h-[60px] rounded-lg cursor-pointer hover:shadow-md hover:shadow-gray-600 object-cover"
            onClick={() => handlerSelectImg(image)}
          />
        ))}
        {property.images.length > maxItems && (
          <LastImageInGallery
            image={property.images[maxItems - 1]}
            handlerImgModal={handlerImgModal}
            lengthDetailImage={property.images.length - maxItems + 1} // +1 for the current image
          />
        )}
      </div>

      <div className="w-10/12  pr-4 mx-auto">
        {imgSelected ? (
          <img
            src={imgSelected}
            alt="Descripción de la imagen"
            className="w-full mx-auto h-[450px] rounded-lg cursor-pointer  object-cover"
            onClick={handlerImgModal}
          />
        ) : (
          <img
            src={firstImage}
            alt="Descripción de la imagen"
            className="w-full mx-auto h-[450px] rounded-lg cursor-pointer  object-cover"
            onClick={handlerImgModal}
          />
        )}
      </div>

      {isModalOpen && (
        <CarouselMlWebModal
          images={property.images}
          closeModal={closeModal}
          newArrayImg={newArrayImg}
        />
      )}
    </div>
  );
}

export default CarouselMlWeb;
