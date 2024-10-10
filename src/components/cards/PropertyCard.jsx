import React from "react";

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
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-700">{price}</p>
        <p className="text-gray-500">{location}</p>
        <div className="flex justify-between mt-2">
          <p className="text-gray-700">Developer: {developer}</p>
          <p className="text-gray-700">Handover: {handover}</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default PropertyCard;
