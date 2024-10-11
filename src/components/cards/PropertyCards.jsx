import React from "react";
import propertyImage from "../../assets/images/properties/dip5.jpeg";
import location from "../../assets/images/landing/location.svg";

const PropertyCards = ({
  planProgress,
  apartmentType,
  landmark,
  totalcost,
  Placelocation,
  developer,
  handover,
  selectedCurrency,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col cursor-pointer sm:w-full group relative">
      {/* Image container with labels overlay */}
      <div className="relative overflow-hidden">
        <img
          src={propertyImage}
          alt=""
          className="w-full h-64 sm:h-72 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        {/* Payment Plan & Apartment labels */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          {planProgress && (
            <div className="text-white text-[12px] font-semibold normal-case leading-[20px]  rounded-[5px] bg-[#c51619] py-[5px] px-4 py-2 mb-[10px] w-fit z-[5]">
              {planProgress}
            </div>
          )}

          <div className="text-[#333] text-[12px] normal-case font-semibold leading-[20px] uppercase rounded-[5px] bg-[#fff] py-[5px] px-[9px] w-fit z-[5]">
            {apartmentType}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start items-baseline px-5 py-4 sm:py-5 ">
        <div className="text-[#19ace4] text-lg font-semibold font-open-sans mb-3 sm:text-[20px]">
          From {selectedCurrency} {totalcost}
        </div>

        <div className="flex flex-col justify-start items-baseline">
          <div className="font-open-sans font-light text-[#333] mb-2 text-lg sm:text-[17px]">
            {Placelocation}
          </div>
          <div className="flex items-center">
            <img
              src={location}
              alt="location"
              className="h-[20px] w-[20px] mr-2"
            />
            <div className="font-open-sans font-light text-[12px]">
              {landmark}
            </div>
          </div>
          <hr className="bg-[#11B6E3] h-[3px] w-[120px] mt-2 sm:mt-3" />
        </div>
        <div className="flex flex-col mt-4 space-y-4">
          <div className="flex justify-between items-center">
            <div className="text-[14px] text-[#9a9a9a] font-open-sans font-light">
              Developer
            </div>
            <div className="text-[#1c1c1c] text-[15px] mx-5 font-open-sans font-normal">
              {developer}
            </div>
          </div>
          <div className="flex justify-between items-center my-2">
            <div className="text-[14px] text-[#9a9a9a] font-open-sans font-light">
              HandOver
            </div>
            <div className="text-[#1c1c1c] text-[15px] mx-5 font-open-sans font-normal">
              {handover}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center font-open-sans font-bold text-[16px] rounded-md px-10 py-10 w-full h-[50px] text-[#fff] bg-[#10ADE5] mt-5 sm:mt-4   hover:bg-[#005a8c] sm:px-5 sm:py-5 sm:h-[25px]">
          Discover
        </div>
      </div>
    </div>
  );
};

export default PropertyCards;
