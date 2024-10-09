import {useState} from "react";
import Companylogo from "../../assets/images/header/headrimage.svg";
import countryflag from "../../assets/images/header/countryflag.svg";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-[#fff] pt-6 pb-2 px-10 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo flex justify-between items-center">
          <img src={Companylogo} alt="Dubai Properties Logo" className="h-12" />

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-4 font-open-sans font-light ml-10 sm:">
            {/* Properties Button with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="text-[#606060] text-[18px]  font-light flex items-center hover:bg-[#00ACE4] hover:text-[#fff] transition duration-200 ease-in-out px-3 py-2 rounded-md">
                Properties
              </button>
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                  >
                    Residential
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                  >
                    Commercial
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                  >
                    Luxury
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                  >
                    Open Houses
                  </a>
                </div>
              )}
            </div>

            {/* Other Menu Items */}
            {[
              "New Projects",
              "Developers",
              "Areas",
              "Map",
              "Virtual Tours",
              "Videos",
              "FAQ",
              "Blog",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#606060] text-[18px] font-open-sans font-light flex items-center hover:bg-[#00ACE4] hover:text-[#fff] transition duration-200 ease-in-out px-3 py-2 rounded-md"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Right-side buttons and language selector */}
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200 ease-in-out">
            Call Us
          </button>
          <div className="flex items-center">
            <img src={countryflag} alt="" className="w-[70px] h-[30px]" />
            <select className="p-2 font-open-sans font-bold" defaultValue="en">
              <option value="en">EN</option>
              <option value="ar">AR</option>
              <option value="ru">RU</option>
            </select>
          </div>
          <button className="bg-[#00ACE4] rounded-full border  p-2 hover:bg-gray-100 transition duration-200 ease-in-out">
            <svg
              className="h-5 w-5 text-[#fff]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0 1 14 0z"
              ></path>
            </svg>
          </button>
          <div className="font-open-sans font-bold">Find</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
