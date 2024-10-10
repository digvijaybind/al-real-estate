import React, {useState} from "react";
import {homeCollapsable} from "../../data/constant";
import {FaMinus, FaPlus} from "react-icons/fa";

// FAQSection Component
const FAQSection = ({title, description}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Handle expanding/collapsing of the FAQ section
  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="w-full border-2 font-open-sans font-semibold border-opacity-50 border-gray-300 transition-all duration-300">
      {/* FAQ header */}
      <div
        className={`flex justify-between items-center px-4 py-3 sm:px-2 sm:py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 cursor-pointer ${
          isExpanded ? "text-[#fff] bg-[#01aee6]" : "bg-[#01aee6] text-[#fff]"
        } transition-all duration-300`}
        onClick={handleToggle}
      >
        {/* Increased font size for title */}
        <h4 className="font-open-sans font-semibold text-lg sm:text-lg md:text-xl lg:text-2xl">
          {title}
        </h4>
        <button className="flex items-center justify-center w-8 h-8">
          {isExpanded ? (
            <div>
              <FaMinus className="text-2xl" />
            </div>
          ) : (
            <div>
              <FaPlus className="text-2xl" />
            </div>
          )}
        </button>
      </div>

      {/* Collapsible content */}
      {isExpanded && (
        <div className="px-4 py-3 sm:px-2 sm:py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 border-t border-gray-200 bg-[#3fc6f4] rounded-b-md transition-all duration-300 flex justify-start text-[#fff]">
          <p className="text-[#fff] text-[18px] leading-relaxed font-open-sans font-light">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

// Main Faq Component
const Faq = () => {
  return (
    <div className="flex flex-col justify-start items-center px-10 py-16 lg:px-20 lg:py-20 md:px-14 md:py-14 sm:px-5 sm:py-5">
      {/* FAQ Section Title */}
      <div className="flex justify-start w-full flex-col sm:justify-center">
        {/* Title Font Size Responsive */}
        <div className="font-open-sans font-semibold text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-4 text-center sm:text-left">
          Frequently Asked Questions
        </div>

        {/* FAQ list container */}
        <div className="w-full space-y-6 sm:space-y-4">
          {homeCollapsable.map((item, index) => (
            <FAQSection
              key={index}
              title={item.header}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
