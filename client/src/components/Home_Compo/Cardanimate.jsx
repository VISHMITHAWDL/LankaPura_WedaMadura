
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import cancer from '../../assets/Home_Assets/disease images/All type of cancers.jpg';
import art from '../../assets/Home_Assets/disease images/Arthritis.jpg';
import Catarrh from '../../assets/Home_Assets/disease images/Catarrh.webp';
import Diabetic from '../../assets/Home_Assets/disease images/Diabetic.jpg';
import Infertility from '../../assets/Home_Assets/disease images/Infertility.jpg';
import ITP from '../../assets/Home_Assets/disease images/ITP.webp';
import Kidney from '../../assets/Home_Assets/disease images/Kidney disease.jpg';
import Leptospirosis from '../../assets/Home_Assets/disease images/Leptospirosis.jpg';
import Liver from '../../assets/Home_Assets/disease images/Liver disease.jpg';
import Lung from '../../assets/Home_Assets/disease images/Lung diseases.webp';
import LungInsfection from '../../assets/Home_Assets/disease images/Lung Insfection.webp';
import Migraine from '../../assets/Home_Assets/disease images/Migraine.webp';
import Nervous from '../../assets/Home_Assets/disease images/Nervous System Diseases.jpg';
import Sciatica from '../../assets/Home_Assets/disease images/Sciatica.webp';
import STD from '../../assets/Home_Assets/disease images/STD.webp';

const EnhancedTreatmentCarousel = () => {
  const navigate = useNavigate();
  const treatCardsData = [
    { id: 3, imageUrl: cancer, title: "ALL TYPE OF CANCERS", path: '/alltypeofcancers' },
    { id: 4, imageUrl: art, title: "ARTHRITIS", path: '/arthritis' },
    { id: 5, imageUrl: Catarrh, title: "CATARRH", path: '/catarrh' },
    { id: 6, imageUrl: Diabetic, title: "DIABETIC", path: '/diabetic' },
    { id: 7, imageUrl: Infertility, title: "INFERTILITY", path: '/infertility' },
    { id: 8, imageUrl: ITP, title: "I.T.P", path: '/itp' },
    { id: 9, imageUrl: Kidney, title: "KIDNEY DISEASES", path: '/kidneydisease' },
    { id: 10, imageUrl: Leptospirosis, title: "LEPTOSPIROSIS", path: '/leptospirosis' },
    { id: 11, imageUrl: Liver, title: "LIVER DISEASES", path: '/liverdisease' },
    { id: 12, imageUrl: Lung, title: "LUNG DISEASES", path: '/lungdiseases' },
    { id: 13, imageUrl: LungInsfection, title: "LUNG INFECTIONS", path: '/lunginfection' },
    { id: 14, imageUrl: Migraine, title: "MIGRAINE", path: '/migraine' },
    { id: 15, imageUrl: Nervous, title: "NERVOUS SYSTEM DISEASES", path: '/nsd' },
    { id: 16, imageUrl: Sciatica, title: "SCIATICA", path: '/sciatica' },
    { id: 17, imageUrl: STD, title: "S.T.D", path: '/std' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCardsToShow = () => {
    if (windowWidth < 640) return 1; // Mobile
    if (windowWidth < 1024) return 2; // Tablet
    return 3; // Desktop
  };

  const getVisibleCards = () => {
    const cardsToShow = getCardsToShow();
    return Array.from({ length: cardsToShow }, (_, i) => 
      treatCardsData[(currentIndex + i) % treatCardsData.length]
    );
  };

  const goPrev = () => {
    const cardsToShow = getCardsToShow();
    setCurrentIndex(prev => 
      prev === 0 ? treatCardsData.length - cardsToShow : prev - 1
    );
  };

  const goNext = () => {
    setCurrentIndex(prev => (prev + 1) % treatCardsData.length);
  };

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(goNext, 4000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, paused]);

  const handleTreatmentClick = (path) => {
    navigate(path);
  };

  const handleViewAll = () => {
    navigate('/ourtreat');
  };

  return (
    <div className="relative w-full px-4 py-12 bg-white">
      <div className="text-center mt-10 px-4 mb-10">
        <h1 className="font-[Raleway] text-lg md:text-2xl tracking-[.4em]">
          Lankapura - Advanced Natural Treatment Solutions
        </h1>
        <div className="flex justify-center flex-wrap">
          <span className="text-4xl md:text-6xl font-[playfair] font-bold text-black">
            OUR{" "}
          </span>
          <span className="text-4xl md:text-6xl font-[playfair] font-bold text-[#348101] ml-2 md:ml-4">
            TREATMENTS
          </span>
        </div>
      </div>
      
      {/* Carousel Container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Navigation Arrows */}
        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-[#348101] text-[#348101] hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-[#348101] text-[#348101] hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        >
          <ChevronRight size={24} />
        </button>

        {/* Treatment Cards Grid */}
        <div 
          className="flex justify-center items-center gap-6 transition-all duration-500 ease-in-out"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {getVisibleCards().map((treatment, index) => (
            <div
              key={treatment.id}
              className={`relative group transform transition-all duration-500 ${
                getCardsToShow() === 1 
                  ? 'scale-100 opacity-100' 
                  : index === 1 
                    ? 'scale-105 opacity-100' 
                    : 'scale-95 opacity-80 hover:scale-100 hover:opacity-100'
              }`}
              style={{
                width: windowWidth < 640 ? '256px' : '288px',
                height: '400px',
              }}
            >
              {/* Treatment Card */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col">
                {/* Image Container - Fixed Height */}
                <div className="h-[240px] overflow-hidden">
                  <img
                    src={treatment.imageUrl}
                    alt={treatment.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Text Container - Fixed Height with better centering */}
                <div className="h-[160px] p-4 flex flex-col justify-center items-center text-center">
                  <h3 className="text-lg sm:text-xl font-[Raleway] font-semibold text-black mb-3 sm:mb-4 px-2">
                    {treatment.title}
                  </h3>
                  <button
                    className="w-[140px] sm:w-[160px] px-4 sm:px-6 py-2 bg-black text-white text-xs sm:text-sm font-[Raleway] rounded-lg hover:bg-[#348101] transition-colors"
                    onClick={() => handleTreatmentClick(treatment.path)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {treatCardsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[#348101] w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <button
          onClick={handleViewAll}
          className="relative inline-flex items-center gap-2 bg-transparent border-2 border-[#348101] text-[#348101] hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-[#348101] hover:shadow-lg hover:scale-105 overflow-hidden group"
        >
          <span className="relative z-10">VIEW ALL TREATMENTS</span>
          <ChevronRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          <div className="absolute inset-0 bg-[#348101] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
        </button>
      </div>
    </div>
  );
};

export default EnhancedTreatmentCarousel;