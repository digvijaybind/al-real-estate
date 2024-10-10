import React, {useState, useRef} from "react";
import TopImageCarousel from "./TopImageCarousel";
import Township from "../../assets/images/landing/villas/Township.jpg";
import BeachArea from "../../assets/images/landing/villas/beachesArea.jpg";
import Villa from "../../assets/images/landing/villas/villas.jpg";

function Villas() {
  const [highlightedImage, setHighlightedImage] = useState(null);
  const sliderRef = useRef(null); // Create a ref to control the slider
  const images = [{src: Township}, {src: BeachArea}, {src: Villa}];

  // Set the first image as the default highlighted image when the component mounts
  React.useEffect(() => {
    if (images.length > 0) {
      setHighlightedImage(images[0]);
    }
  }, [images]);

  // Handle thumbnail click to change the highlighted image and slider position
  const handleThumbnailClick = (image, index) => {
    setHighlightedImage(image);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index); // Go to the selected image in the carousel
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top slider with the highlighted image */}
      <TopImageCarousel
        images={images}
        sliderRef={sliderRef} // Pass the slider ref to control it
        highlightedImage={highlightedImage}
        onImageClick={setHighlightedImage}
      />

      <div className="content ">
        {/* Thumbnails */}
        <div className="highlighted-image grid grid-cols-2 sm:grid-cols-3 gap-4 ">
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image.src}
                alt={`Thumbnail ${index + 1}`}
                className={`cursor-pointer w-full h-2/3 border rounded-md transition-all duration-300 ${
                  highlightedImage && highlightedImage.src === image.src
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
                onClick={() => handleThumbnailClick(image, index)} // Update the slider and highlighted image
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Villas;
