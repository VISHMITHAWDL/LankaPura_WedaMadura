import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, image, link }) => {
  // Function to navigate to the top of the page
  const navigateToTop = () => {
    window.location.href = "#"; // This will take you to the top of the page
  };

  return (
    <div className="w-full sm:w-[30%] md:w-[40%] lg:w-[32%] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300 group">
      {/* Image with overlay text */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center p-4">
          <h2 className="text-2xl font-[playfair] font-bold text-white" style={{ marginTop: '130px' }}>
            {title}
          </h2>
        </div>
      </div>

      {/* Description */}
      <div className="p-4">
        <p className="text-gray-700 text-sm font-[Raleway]">{description}</p>
      </div>

      {/* Learn More Button */}
      <div className="px-4 pb-4">
        <Link
          to={link}
          onClick={navigateToTop} // Navigate to the top when clicked
          className="font-[Raleway] w-full block text-center bg-[#50270be4] text-white font-bold py-2 rounded-lg hover:bg-[#331806e4] transition"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Card;
