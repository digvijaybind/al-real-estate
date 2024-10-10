import React from "react";
import propertyImage from "../../assets/images/properties/dip5.jpeg";
import location from "../../assets/images/landing/location.svg";
function PropertyCard({
  image,
  title,
  price,
  location,
  developer,
  handover,
  buttonText,
}) {
  return (
    <div className="card bg-white shadow-md rounded-lg overflow-hidden">
      <img src={propertyImage} alt="" className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">from USD 5,450,000</h2>
        <p className="text-gray-700">The Alba</p>
        <p className="text-gray-500">Palm jumeriah</p>
        <div className="flex justify-between mt-2">
          <p className="text-gray-700">Developer: Omniyat</p>
          <p className="text-gray-700">Handover: Ask Managner</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
          Discover
        </button>
      </div>
    </div>
  );
}

const PropertyCards = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col cursor-pointer sm:w-full">
      <div>
        <img
          src={propertyImage}
          alt=""
          className="w-full h-64 sm:h-72 object-cover" // Adjusted height for better visibility on larger screens
        />
      </div>

      <div className="flex flex-col justify-start items-baseline px-5 py-4 sm:py-5">
        {" "}
        {/* Adjusted padding */}
        <div className="text-[#19ace4] text-lg font-semibold font-open-sans mb-3 sm:text-[20px]">
          {" "}
          {/* Responsive text size */}
          From USD 5,450,000
        </div>
        <div className="flex flex-col justify-start items-baseline">
          <div className="font-open-sans font-light text-[#333] mb-2 text-lg sm:text-[17px]">
            {" "}
            {/* Responsive text size */}
            The Alba
          </div>
          <div className="flex items-center">
            <img
              src={location}
              alt="location"
              className="h-[20px] w-[20px] mr-2" // Added margin-right for spacing
            />
            <div className="font-open-sans font-light text-[12px]">
              {" "}
              {/* Corrected text size class */}
              Palm Jumeirah
            </div>
          </div>
          <hr className="bg-[#11B6E3] h-[3px] w-[120px] mt-2 sm:mt-3" />
        </div>
        <div className="flex flex-col mt-4 space-y-4">
          {" "}
          {/* Adjusted margin */}
          {/* Developer Section */}
          <div className="flex justify-between items-center">
            <div className="text-[14px] text-[#9a9a9a] font-open-sans font-light">
              Developer
            </div>
            <div className="text-[#1c1c1c] text-[15px] mx-5 font-open-sans font-normal">
              OMNIYAT
            </div>
          </div>
          {/* HandOver Section */}
          <div className="flex justify-between items-center my-2">
            {" "}
            {/* Adjusted margin */}
            <div className="text-[14px] text-[#9a9a9a] font-open-sans font-light">
              HandOver
            </div>
            <div className="text-[#1c1c1c] text-[15px] mx-5 font-open-sans font-normal">
              Ask manager
            </div>
          </div>
        </div>
        {/* Button */}
        <div className="flex justify-center items-center font-open-sans font-bold text-[16px] rounded-md px-5 py-3 w-full h-[30px] text-[#fff] bg-[#10ADE5] mt-5 sm:mt-4 sm:py-4 sm:h-[40px]">
          {" "}
          {/* Adjusted padding and height */}
          Discover
        </div>
      </div>
    </div>
  );
};

export default PropertyCards;
