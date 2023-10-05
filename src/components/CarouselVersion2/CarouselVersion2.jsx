import PropTypes from "prop-types";

function CarouselVersion2({
  dataAxiosImages,
  handleImageClick,
  currentImageIndex,
}) {
  return (
    <div className="w-full h-[450px] relative flex flex-col items-center mt-2 shadow-md">
      <div className="w-full h-full">
        {dataAxiosImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`absolute w-full h-full opacity-0 transition-opacity border rounded-lg duration-500 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : ""
            }`}
          />
        ))}
      </div>
      <div className="absolute w-full justify-center items-center bottom-2 flex space-x-4">
        {dataAxiosImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleImageClick(index)}
            className={`w-3 h-3 rounded-full bg-white m-0 cursor-pointer transition-all duration-300 ease-in-out ${
              index === currentImageIndex
                ? "p-2 bg-yellow-500 border border-black"
                : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}

CarouselVersion2.propTypes = {
  dataAxiosImages: PropTypes.array.isRequired,
  handleImageClick: PropTypes.func.isRequired,
  currentImageIndex: PropTypes.number.isRequired,
};

export default CarouselVersion2;
