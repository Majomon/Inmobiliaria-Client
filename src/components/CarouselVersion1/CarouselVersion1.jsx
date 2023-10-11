import PropTypes from "prop-types";

function CarouselVersion1({ selectedImage, dataAxiosImages, handleImageClick }) {
  return (
    <div>
      <div className="w-4/12">
        {selectedImage && <img src={selectedImage} alt={`Image`} />}
      </div>
      <div className="mt-4 flex">
        {dataAxiosImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className={`w-1/12 cursor-pointer ${
              selectedImage === image ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
    </div>
  );
}
CarouselVersion1.propTypes = {
    selectedImage: PropTypes.string.isRequired,
    dataAxiosImages: PropTypes.array.isRequired,
    handleImageClick: PropTypes.func.isRequired,
  };

export default CarouselVersion1;
