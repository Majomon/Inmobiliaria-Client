import React, { useState } from "react";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export const CarouselImgCard = ({ images, id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full h-[200px] border-b-2 border-gray-900 relative z-0">
      <button
        onClick={goToPrevImage}
        className="absolute left-0 top-1/2 z-50 pl-2"
      >
        <IoArrowBackCircleSharp
          size={25}
          className="bg-gray-200 rounded-full"
        />
      </button>
      <Link to={`/detail/${id}`}>
        {images.map((image, index) => (
          <img
            key={index}
            className={`absolute w-full h-full ease-in-out transition-opacity ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            src={image}
            alt={`Image ${index + 1}`}
          />
        ))}
      </Link>
      <button onClick={goToNextImage} className="absolute right-0 top-1/2 pr-2">
        <IoArrowForwardCircleSharp
          size={25}
          className="bg-gray-200 rounded-full"
        />
      </button>
    </div>
  );
};
