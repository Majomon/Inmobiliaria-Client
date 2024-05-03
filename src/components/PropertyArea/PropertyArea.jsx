import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./PropertyArea.module.css";
import PropertyCardDetail from "../PropertyCardDetail/PropertyCardDetail";

function PropertyArea({ sliderProperty }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 560 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 559, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Carousel responsive={responsive} className={`${styles.container} z-40`}>
      {sliderProperty.map((elem) => (
        <PropertyCardDetail key={elem._id} property={elem} />
      ))}
    </Carousel>
  );
}

export default PropertyArea;
