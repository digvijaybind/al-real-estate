import React from "react";
import PropertyCards from "../cards/PropertyCards";

function Button({label, onClick, className}) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {label}
    </button>
  );
}

const OffPlan = () => {
  return (
    <div className="flex flex-col justify-start items-start px-5 py-5 sm:px-3">
      {" "}
      {/* Added padding for mobile */}
      {/* Title Section */}
      <div className="flex flex-col items-center w-full mb-6">
        {" "}
        {/* Adjusted layout */}
        <h2 className="font-open-sans font-semibold text-3xl sm:text-2xl">
          {" "}
          {/* Responsive font size */}
          New Off-Plan Properties
        </h2>
        <div className="flex-grow">
          <hr className="bg-[#11B6E3] h-[6px] w-[100px] mt-2 sm:mt-3" />
        </div>
      </div>
      {/* Property Type Segment */}
      <div className="grid grid-cols-3 gap-4 mb-6 sm:grid-cols-1 sm:gap-2">
        {" "}
        {/* Responsive grid */}
        <div className="h-[60px] font-semibold rounded-sm text-[16px] flex justify-center items-center text-white bg-primary">
          APARTMENTS
        </div>
        <div className="h-[60px] font-semibold rounded-sm text-[16px] flex justify-center items-center text-white bg-primary">
          TOWNHOUSES
        </div>
        <div className="h-[60px] font-semibold rounded-sm text-[16px] flex justify-center items-center text-white bg-primary">
          VILLAS
        </div>
      </div>
      {/* Currency Buttons Segment */}
      <div className="flex justify-between space-x-4 mb-6 sm:mb-4">
        {" "}
        {/* Added spacing between buttons */}
        <Button
          className="w-full sm:w-[70px] h-[50px] border-2 rounded-md border-gray hover:border-[#00aee6] bg-[#e7f9ff] text-black hover:text-[#00aee6]"
          label="AED"
        />
        <Button
          className="w-full sm:w-[70px] h-[50px] border-2 rounded-md border-gray hover:border-[#00aee6] bg-[#e7f9ff] text-black hover:text-[#00aee6]"
          label="USD"
        />
        <Button
          className="w-full sm:w-[70px] h-[50px] border-2 rounded-md border-gray hover:border-[#00aee6] bg-[#e7f9ff] text-black hover:text-[#00aee6]"
          label="EUR"
        />
      </div>
      {/* Property Rendering Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-2">
        {/* Render your PropertyCards component here */}
        <PropertyCards />
      </div>
    </div>
  );
};

export default OffPlan;
