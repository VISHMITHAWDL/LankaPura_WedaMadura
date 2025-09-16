import React from "react";
import PropTypes from "prop-types";

const Treatcard = ({ imageUrl, title, onButtonClick = () => {} }) => {
  return (
    <div className="max-w-md bg-white rounded-3xl shadow-lg overflow-hidden w-80 h-50">
      <div className="relative w-full h-2/3 overflow-hidden">
        <img
          src={imageUrl}
        //   alt={title}
          className="w-full h-full object-cover"
        />
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
