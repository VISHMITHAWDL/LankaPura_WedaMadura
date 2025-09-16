import React from 'react';
import Checkmark from './Checkmark';
import DoctorImage from './Doctor';
import { useNavigate } from 'react-router-dom';

const Aboutthedoctor = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-full px-4 sm:px-6 md:px-8 lg:px-4 bg">
      {/* Doctor's Image - Stacked on top for mobile/tablet, side by side for laptop */}
      <DoctorImage className="w-full md:w-1/2 lg:w-1/4 mb-8 lg:mb-0" />

      {/* About Content */}
      <div className="w-full lg:max-w-[600px] lg:w-1/2 lg:-ml-24 flex flex-col items-center">
        <h1 className="font-[playfair] text-4xl md:text-5xl lg:text-6xl mb-6 lg:mb-14 text-center">
          <span className="text-black">ABOUT THE </span>
          <span className="text-[#348101]">DOCTOR</span>
        </h1>
        
        {/* Centered Content Container */}
        <div className="flex flex-col items-center text-center w-full">
          <div className="w-full flex flex-col items-center">
            <h2 className="text-2xl font-medium font-[Raleway]">
              Dr. Tharanga Kumari Wickramasooriya
            </h2>
            <h2 className="text-2xl font-medium mb-8 lg:mb-12 font-[Raleway] text-[#348101]">
              - A Legacy in Herbal Healing -
            </h2>
          </div>
          
          <p className="text-gray-600 mb-7 font-[Raleway] max-w-[90%] lg:max-w-[85%] mx-auto">
            Dr. Tharanga Kumari Wickramasooriya is the proud torchbearer of a 700-year-old legacy
            of healing, blending traditional wisdom with modern medical expertise. Inspired by her
            father, a respected doctor, and her grandfather, a renowned hereditary healer, she grew up
            surrounded by dedication and care. Their passion ignited her sense of responsibility to
            continue this extraordinary family tradition, combining precision, compassion, and timeless
            knowledge in her practice.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-12 mb-10 justify-center w-full">
            <div className="flex items-center gap-2 p-2 sm:p-4">
              <span><Checkmark /></span>
              <p>Professional Therapist</p>
            </div>
            <div className="flex items-center gap-2 p-2 sm:p-4">
              <span><Checkmark /></span>
              <p>Organic Herbal</p>
            </div>
            <div className="flex items-center gap-2 p-2 sm:p-4">
              <span><Checkmark /></span>
              <p>24/7 Support</p>
            </div>
          </div> 
          
          {/* Read More Button - Always centered */}
          <div className="w-full flex justify-center mt-6">
            <button  onClick={() => navigate('/abd')} className="px-6 py-3 text-black rounded-lg shadow-md border border-black hover:bg-[#348101] hover:text-white hover:border-transparent">
              Read More {'>>>'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutthedoctor;