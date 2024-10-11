import React, {useState, useEffect} from "react";
import PropertyCards from "../cards/PropertyCards";
import Properties from "../../data/offplan/properties.json";
function Button({label, onClick, className}) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {label}
    </button>
  );
}

const OffPlan = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("AED");
  const [totalcost, setTotalCost] = useState([]);
  const handleCurrencyChange = (Currency) => {
    setSelectedCurrency(Currency);
  };
  const getEUR = (price) => {
    const EuroPrice = price * 3.9;
    return EuroPrice.toFixed(2);
  };
  const getAED = (price) => {
    const PriceAED = price;
    return PriceAED;
  };

  const getUSD = (price) => {
    const PriceUsd = price * 3.5;
    return PriceUsd.toFixed(2);
  };

  console.log("totalcost of card", totalcost);
  useEffect(() => {
    // Create a new array to store the updated prices
    const updatedPrices = Properties.map((property) => {
      const actualTotalPrice = property.price;
      switch (selectedCurrency) {
        case "EUR":
          return getEUR(actualTotalPrice);
        case "AED":
          return getAED(actualTotalPrice);
        case "USD":
          return getUSD(actualTotalPrice);
        default:
          return actualTotalPrice;
      }
    });

    // Set the state with the updated prices array
    setTotalCost(updatedPrices);
  }, [selectedCurrency]);

  return (
    <div className="justify-start items-start p sm:px-3 xl:w-[1150px] mx-auto md:w-[85%] w-[90%] flex flex-col gap-10 sm:gap-5 py-10">
      {" "}
      {/* Added padding for mobile */}
      {/* Title Section */}
      {/* Title Section */}
      <div className="flex flex-col items-center w-full mb-6 sm:flex-row sm:justify-between sm:items-center">
        <strong
          className="font-open-sans font-semibold text-[37px] leading-none tracking-normal text-[#262626] mb-2 sm:text-2xl sm:mb-0"
          style={{fontFamily: '"Open Sans Light"'}}
        >
          New Off-Plan Properties
        </strong>

        <div className="flex-grow  sm:ml-4 sm:hidden">
          <hr className="bg-[#11B6E3] h-[4px] w-[80px] mt-8 sm:mt-0" />
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-2 mb-6">
          {/* Responsive flex layout */}
          <div className="h-[60px] font-semibold text-sm flex justify-center items-center text-white bg-[#00abe4] rounded-[2px] mb-2 sm:mb-0  px-[14px]  cursor-pointer">
            APARTMENTS
          </div>
          <div className="h-[60px] font-semibold text-sm flex justify-center items-center text-white bg-[#00abe4] rounded-[2px] mb-2 sm:mb-0  px-[14px]  cursor-pointer">
            TOWNHOUSES
          </div>
          <div className="h-[60px] font-semibold text-sm flex justify-center items-center text-white bg-[#00abe4] rounded-[2px] mb-2 sm:mb-0  px-[14px]  cursor-pointer">
            VILLAS
          </div>
        </div>
      </div>
      {/* Property Type Segment */}
      {/* Currency Buttons Segment */}
      <div className="flex justify-between space-x-4 mb-6 sm:mb-4 sm:space-x-2">
        {/* Added spacing between buttons */}
        <Button
          className="w-full sm:w-[100px] h-[50px] rounded-[8px] border border-[#e9e9e9] cursor-pointer transition duration-300 text-black bg-white text-[14px] font-normal leading-[20px] hover:bg-white hover:text-black hover:border-[#00aee6] outline-none sm:px-4"
          label="AED"
          onClick={() => handleCurrencyChange("AED")}
        />
        <Button
          className="w-full sm:w-[100px] h-[50px] rounded-[8px] border border-[#e9e9e9] cursor-pointer transition duration-300 text-black bg-white text-[14px] font-normal leading-[20px] hover:bg-white hover:text-black hover:border-[#00aee6] outline-none sm:px-4"
          label="USD"
          onClick={() => handleCurrencyChange("USD")}
        />
        <Button
          className="w-full sm:w-[100px] h-[50px] rounded-[8px] border border-[#e9e9e9] cursor-pointer transition duration-300 text-black bg-white text-[14px] font-normal leading-[20px] hover:bg-white hover:text-black hover:border-[#00aee6] outline-none"
          label="EUR"
          onClick={() => handleCurrencyChange("EUR")}
        />
      </div>
      {/* Property Rendering Section */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 sm:gap-4">
        {/* Render your PropertyCards component here */}
        {Properties.map((data, index) => {
          return (
            <PropertyCards
              key={index}
              planProgress={data.planProgress}
              apartmentType={data.apartmentType}
              landmark={data.landmark}
              totalcost={totalcost[index]} // Use totalcost array here
              selectedCurrency={selectedCurrency}
              Placelocation={data.Placelocation}
              developer={data.developer}
              handover={data.handover}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OffPlan;
