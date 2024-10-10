import React, {useState} from "react";
import TopImageCarousel from "./TopImageCarousel"; // Import the slider component

function Villas() {
  const [highlightedImage, setHighlightedImage] = useState(null);

  return (
    <div className="container mx-auto">
      <TopImageCarousel onImageClick={setHighlightedImage} />
      <div className="content">
        {/* Other content here */}
        <div className="highlighted-image grid  grid-cols-3 gap-4">
          {highlightedImage && (
            <img src={highlightedImage.src} alt="Highlighted Image" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Villas;
