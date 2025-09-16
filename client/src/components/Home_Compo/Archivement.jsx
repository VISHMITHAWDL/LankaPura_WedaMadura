import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, PauseCircle, PlayCircle } from "lucide-react";
import aw1 from "../../assets/Home_Assets/Archivement/aw1.png";
import aw2 from "../../assets/Home_Assets/Archivement/aw2.jpg";
import aw3 from "../../assets/Home_Assets/Archivement/aw3.png";
import aw4 from "../../assets/Home_Assets/Archivement/aw4.png";
import aw5 from "../../assets/Home_Assets/Archivement/aw5.png";

// Award information - replace with your actual award details
const awards = [
  {
    id: 1,
    title: "Excellence in Ayurvedic Innovation",
    year: "2023",
    organization: "National Ayurvedic Association",
    image: aw4
  },
  {
    id: 2,
    title: "Best Organic Product Range",
    year: "2022",
    organization: "Organic Products Council",
    image: aw2
  },
  {
    id: 3,
    title: "Sustainability Champion Award",
    year: "2021",
    organization: "Green Business Forum",
    image: aw3
  },
  {
    id: 4,
    title: "Quality Leadership Award",
    year: "2020",
    organization: "Quality Certification Body",
    image: aw5
  },
  {
    id: 5,
    title: "Customer Satisfaction Excellence",
    year: "2019",
    organization: "Consumer Choice Awards",
    image: aw1
  }
];

export default function Awards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  
  // Auto slide functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying && !isHovering) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === awards.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovering]);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? awards.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === awards.length - 1 ? 0 : prev + 1));
  };

  // Toggle autoplay
  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-10 w-full">
      <div className="text-center mt-20 px-4 mb-8">
        <h2 className="font-[Raleway] text-lg md:text-2xl tracking-[.4em] text-gray-600 uppercase mb-2">
          Honoring Excellence, Celebrating Success, Inspiring Future.
        </h2>
        <div className="flex justify-center flex-wrap">
          <span className="text-4xl md:text-6xl font-[playfair] font-bold text-black">
            OUR{" "}
          </span>
          <span className="text-4xl md:text-6xl font-[playfair] font-bold text-[#348101] ml-2 md:ml-4">
            ACHIVEMENTS
          </span>
        </div>
      </div>

      {/* Image Carousel */}
      <div 
        className="relative h-[550px] flex flex-col justify-center items-center w-full max-w-xl md:max-w-3xl lg:max-w-4xl rounded-3xl overflow-hidden bg-transparent p-8"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 md:p-3 rounded-full shadow-md hover:bg-[#348101] hover:text-white transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label="Previous award"
        >
          <ChevronLeft size={28} />
        </button>

        <div className="overflow-hidden w-full flex justify-center h-[350px] mb-4">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={awards[currentIndex].image}
              alt={`${awards[currentIndex].title} award`}
              className="rounded-lg w-full h-auto max-h-[350px] object-contain transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>

        <div className="text-center max-w-2xl">
          <h3 className="text-2xl font-[Raleway] font-semibold text-[#348101] mb-2">
            {awards[currentIndex].title}
          </h3>
          <p className="text-gray-700 font-[Raleway] text-lg mb-1">
            {awards[currentIndex].organization}
          </p>
          <p className="text-gray-600 font-[Raleway]">
            {awards[currentIndex].year}
          </p>
        </div>

        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 md:p-3 rounded-full shadow-md hover:bg-[#348101] hover:text-white transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label="Next award"
        >
          <ChevronRight size={28} />
        </button>
        
        <button 
          onClick={toggleAutoPlay}
          className="absolute bottom-2 right-2 text-gray-500 hover:text-[#348101] focus:outline-none focus:text-[#348101]"
          aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
        >
          {isAutoPlaying ? <PauseCircle size={24} /> : <PlayCircle size={24} />}
        </button>
      </div>

      {/* Indicators */}
      <div className="flex mt-6 space-x-2">
        {awards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-[#348101] w-6" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to award ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}