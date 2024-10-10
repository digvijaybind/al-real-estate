import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TopImageCarousel({images, sliderRef, highlightedImage, onImageClick}) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    // Set the initial slide to match the highlighted image index
    initialSlide: images.findIndex(
      (image) => image.src === highlightedImage?.src
    ),
  };

  return (
    <div className="top-image-carousel">
      <Slider ref={sliderRef} {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index} onClick={() => onImageClick(image)}>
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              className="w-full max-h-[1400px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TopImageCarousel;
