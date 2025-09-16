import React from "react";
import PropTypes from "prop-types";

const Treatcard = ({ imageUrl, title, onButtonClick = () => {} }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full xs:w-64 sm:w-72 h-[400px] flex flex-col mx-auto">
      {/* Image Container - Fixed Height */}
      <div className="h-[240px] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Text Container - Fixed Height with better mobile centering */}
      <div className="h-[160px] p-4 flex flex-col justify-center items-center text-center">
        <h3 className="text-lg sm:text-xl font-[Raleway] font-semibold text-black mb-3 sm:mb-4 px-2">
          {title}
        </h3>
        <button
          className="w-[140px] sm:w-[160px] px-4 sm:px-6 py-2 bg-black text-white text-xs sm:text-sm font-[Raleway] rounded-lg hover:bg-[#348101] transition-colors"
          onClick={onButtonClick}
        >
          Read more
        </button>
      </div>
    </div>
  );
};

Treatcard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
};

export default Treatcard;