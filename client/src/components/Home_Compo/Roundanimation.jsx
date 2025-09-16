import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Product images
import img1 from "../../assets/Home_Assets/products/products/Clear liver.png";
import img2 from "../../assets/Home_Assets/products/products/Dengue Medicine.png";
import img3 from "../../assets/Home_Assets/products/products/Epi oil.png";
import img4 from "../../assets/Home_Assets/products/products/Epirepies.png";
import img5 from "../../assets/Home_Assets/products/products/Hair oil.png";
import img6 from "../../assets/Home_Assets/products/products/Hebal Balm.png";
import img7 from "../../assets/Home_Assets/products/products/Real ph.png";
import img8 from "../../assets/Home_Assets/products/products/Kidney Clear.png";

const productData = [
  { id: 1, imageUrl: img1, title: "Clear Liver", path: '/productdes/67b6dc23cb72ff4ab0a46789' },
  { id: 2, imageUrl: img2, title: "Dengue Medicine", path: '/productdes/67cbc86f77cd34f38533d45c' },
  { id: 3, imageUrl: img3, title: "Epi Oil", path: '/productdes/67b6cfa4cb72ff4ab0a46782' },
  { id: 4, imageUrl: img4, title: "Epirepies", path: '/productdes/67b6d447cb72ff4ab0a46788' },
  { id: 5, imageUrl: img5, title: "Hair Oil", path: '/productdes/67cbc83b77cd34f38533d45a' },
  { id: 6, imageUrl: img6, title: "Herbal Balm", path: '/productdes/67cbc89577cd34f38533d45d' },
  { id: 7, imageUrl: img7, title: "Real Ph", path: '/productdes/687155995b6371c89fa5649f' },
  { id: 8, imageUrl: img8, title: "Kidney CleaR", path: '/productdes/67b6d447cb72ff4ab0a46788' },
];

const EnhancedProductCarousel = () => {
  const navigate = useNavigate();
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
      productData[(currentIndex + i) % productData.length]
    );
  };

  const goPrev = () => {
    const cardsToShow = getCardsToShow();
    setCurrentIndex(prev => 
      prev === 0 ? productData.length - cardsToShow : prev - 1
    );
  };

  const goNext = () => {
    setCurrentIndex(prev => (prev + 1) % productData.length);
  };

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(goNext, 4000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, paused]);

  const handleProductClick = (path) => {
    navigate(path);
  };

  const handleViewAll = () => {
    navigate('/products');
  };

  return (
    <div className="relative w-full px-4 py-12 bg-gradient-to-b from-white to-green-50">
      <div className="text-center mt-10 px-4 mb-10">
        <h1 className="font-[Raleway] text-lg md:text-2xl tracking-[.4em]">
          Lankapura - Where Nature Meets Pure Wellness
        </h1>
        <div className="flex justify-center flex-wrap">
          <span className="text-4xl md:text-6xl font-[playfair] font-bold text-black">
            OUR{" "}
          </span>
          <span className="text-4xl md:text-6xl font-[playfair] font-bold text-[#348101] ml-2 md:ml-4">
            PRODUCTS
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

        {/* Products Grid */}
        <div 
          className="flex justify-center items-center gap-6 transition-all duration-500 ease-in-out"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {getVisibleCards().map((product, index) => (
            <div
              key={product.id}
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
              {/* Product Card */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col">
                {/* Image Container - Fixed Height */}
                <div className="h-[240px] overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Text Container - Fixed Height with better centering */}
                <div className="h-[160px] p-4 flex flex-col justify-center items-center text-center">
                  <h3 className="text-lg sm:text-xl font-[Raleway] font-semibold text-black mb-3 sm:mb-4 px-2">
                    {product.title}
                  </h3>
                  <button
                    className="w-[140px] sm:w-[160px] px-4 sm:px-6 py-2 bg-black text-white text-xs sm:text-sm font-[Raleway] rounded-lg hover:bg-[#348101] transition-colors"
                    onClick={() => handleProductClick(product.path)}
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {productData.map((_, index) => (
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
          <span className="relative z-10">VIEW ALL PRODUCTS</span>
          <ChevronRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          <div className="absolute inset-0 bg-[#348101] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
        </button>
      </div>

    </div>
  );
};

export default EnhancedProductCarousel;