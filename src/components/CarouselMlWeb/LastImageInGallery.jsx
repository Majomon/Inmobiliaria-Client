export default function LastImageInGallery({
  index,
  image,
  handlerImgModal,
  lengthDetailImage,
}) {
  return (
    <div
      className="w-[60px] h-[60px] relative cursor-pointer rounded-md object-cover  hover:shadow-md hover:shadow-gray-600"
      onClick={handlerImgModal}
    >
      <div className=" bg-black absolute top-0 left-0 w-full h-full opacity-40 rounded-lg z-10" />
      <p className="absolute top-0 left-0 w-full h-full flex items-center justify-center font-normal text-white text-3xl z-20">
        +{lengthDetailImage}
      </p>
      <img
        key={index}
        src={image}
        alt={`Image ${index + 1}`}
        className="w-full h-full rounded-lg"
      />
    </div>
  );
}
