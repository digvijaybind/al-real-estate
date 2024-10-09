import React, {useState, useEffect, useRef} from "react";
import {ImCross} from "react-icons/im";
import Logo from "../../assets/images/header/headrimage.svg";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems = [
    {label: "Properties in Dubai", path: "/"},
    {label: "Areas of Dubai", path: ""},
    {label: "Developers in Dubai", path: ""},
    {label: "Dubai's Lifestyles", path: ""},
    {label: "Real Estate Map", path: ""},
    {label: "360° Virtual Tours", path: ""},
    {label: "News, Insights & Tips", path: ""},
    {label: "Dubai's FAQ", path: ""},
  ];

  return (
    <div className="flex flex-col font-open-sans relative">
      {/* Header with Logo and Hamburger Button */}
      <div className="flex flex-row justify-between items-center px-4 py-2">
        <img alt="logo" src={Logo} className="h-10 w-10" />
        <button
          className="hamburger-button text-3xl text-gray-800"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <div className="flex justify-between items-center w-full p-4 bg-white shadow-sm ">
              <img
                alt="logo"
                src={Logo}
                className="h-[50px] w-[50px] z-50 hidden"
              />

              <button
                className="p-2 text-gray-800 focus:outline-none"
                onClick={toggleMenu}
              >
                <ImCross
                  style={{fontSize: "1.5rem", backgroundColor: "gray"}}
                />
              </button>
            </div>
          ) : (
            "☰"
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-90 flex justify-end z-40"
        >
          <div className="bg-white w-2/3 h-full shadow-lg flex flex-col items-center">
            <div className="flex justify-between items-center w-full p-4 bg-white shadow-sm ">
              <img alt="logo" src={Logo} className="h-[50px] w-[50px] z-50" />

              <button
                className="p-2 text-gray-800 focus:outline-none"
                onClick={toggleMenu}
              >
                <ImCross style={{fontSize: "1.0rem", color: "gray"}} />
              </button>
            </div>
            <ul className="text-center mt-10">
              {/* Loop through menu items */}
              <div className="flex justify-between">
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
                <div className="font-open-sans font-bold text-[16px] text-[#1E1E1E]">
                  {" "}
                  Find Your Property
                </div>
              </div>
              {menuItems.map((item) => (
                <li
                  key={item.label}
                  onClick={() => {
                    toggleMenu(); // Close the menu after navigation
                  }}
                  className="font-open-sans font-normal text-[16px] p-4 hover:bg-gray-200 cursor-pointer w-full text-center "
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
