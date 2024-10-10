import React from "react";
import Slider from "react-slick";
import "slick-carousel/style.css";
import "slick-carousel/slick-theme.css";
import Township from "../../assets/images/landing/villas/Township.jpg"
import BeachArea from "../../assets/images/landing/villas/beachesArea.jpg";
import Villas from "../../assets/images/landing/villas/villas.jpg";
function TopImageCarousel({onImageClick}) {
  const images = [
    {src: Township},
    {src: BeachArea},
    {src: Villas},
    // ... add more images
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="top-image-carousel">
      <Slider {...sliderSettings}>
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
