import Welcome from './Welcomeyou';
import landing from '../../assets/Home_Assets/landing_banner.jpg';
import landingii from '../../assets/Home_Assets/landing_banneri.jpg';
import landingiii from '../../assets/Home_Assets/landing_bannerii.jpg';
import React, { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';

const Landingview = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [landing, landingii, landingiii];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePlayClick = () => {
    window.open('https://www.youtube.com/watch?v=Jlz4LmVHF0w', '_blank');
  };

  return (
    <div
      className="h-screen min-h-[600px] md:min-h-[700px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white transition-all duration-1000 px-4"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      {/* Welcome component - ensure it's responsive */}
      <div className="w-full max-w-[90vw] md:max-w-[80vw]">
        <Welcome />
      </div>

      {/* Text content with responsive sizing and spacing */}
      <div className="flex flex-col items-center mt-4 md:mt-8 w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw]">
        <h1 className="text-center font-[Raleway] text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#EEE183] leading-snug px-2">
          "Experience the Healing Touch of Ayurveda..."
        </h1>

        <h1 className="text-center font-[Raleway] text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#EEE183] leading-snug mt-2 md:mt-4 px-2">
          Unlock True Wellness with Herbal Excellence
        </h1>

        {/* Play Button with responsive sizing */}
        <button
          className="mt-6 md:mt-8 flex items-center justify-center border border-white px-5 py-2 md:px-6 md:py-3 rounded-full text-white text-sm sm:text-base md:text-lg transition-all duration-300 hover:bg-white hover:text-[#3D1E0D] hover:scale-105"
          onClick={handlePlayClick}
        >
          Discover the Story
          <FaPlay className="ml-2 text-xs sm:text-sm md:text-base" />
        </button>
      </div>
    </div>
  );
};

export default Landingview;