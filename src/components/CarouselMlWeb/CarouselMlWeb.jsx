import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CarouselMlWebModal from "./CarouselModal";

function CarouselMlWeb() {
  const property = useSelector((state) => state.details);
  const [firstImage, setFirstImage] = useState(null);
  const [imgSelected, setImgSelected] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [arrayImg, setArrayImg] = useState([]);
  const filteredImages = arrayImg.filter((image) => image !== imgSelected);
  const [newArrayImg, setNewArrayImg] = useState([]);

  useEffect(() => {
    if (imgSelected) {
      setNewArrayImg([imgSelected,...filteredImages]);
    }
  }, [imgSelected]);

  useEffect(() => {
    if (property.images && property.images.length > 0) {
      setFirstImage(property.images[0]);
      property.images.forEach((image) => {
        setArrayImg((prevArrayImg) => [...prevArrayImg, image]);
      });
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
    <div className="w-full h-full flex  rounded-md mt-4 p-4 shadow-md  shadow-gray-700 dark:shadow-yellow-600 border-2 border-gray-200 dark:border-gray-900">
      <div className="w-2/12 h-full flex flex-col justify-center items-center gap-2 pt-4">
        {property.images?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-[45px] h-[45px] rounded-lg cursor-pointer hover:shadow-md hover:shadow-gray-600 object-cover"
            onClick={() => handlerSelectImg(image)}
          />
        ))}
      </div>

      <div className="w-9/12 pt-4 mx-auto">
        {imgSelected ? (
          <img
            src={imgSelected}
            alt="Descripción de la imagen"
            className="w-full mx-auto h-[450px] rounded-lg cursor-pointer"
            onClick={handlerImgModal}
          />
        ) : (
          <img
            src={firstImage}
            alt="Descripción de la imagen"
            className="w-full mx-auto h-[450px] rounded-lg cursor-pointer"
            onClick={handlerImgModal}
          />
        )}
      </div>

      {isModalOpen && (
        <CarouselMlWebModal
          images={arrayImg}
          closeModal={closeModal}
          newArrayImg={newArrayImg}
        />
      )}
    </div>
  );
}

export default CarouselMlWeb;
