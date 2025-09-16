import React, { useState } from 'react';
// Import your images
import image1 from '../../../src/assets/About_Assets/image1.jpg';
import image2 from '../../../src/assets/Contact_Assets/CONTACT.jpg';
import image3 from '../../../src/assets/About_Assets/image3.jpg';

const ExpandableCardRow = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Card data using your imported images
  const cardData = [
    {
      id: 1,
      subtitle: "Creative Vision",
      description: "Explore our stunning gallery collection featuring unique perspectives and artistic excellence.",
      image: image1

    },
    {
      id: 2,
      subtitle: "Connect With Us",
      description: "Ready to start your journey? Contact our team and let's bring your vision to life.",
      image: image2

    },
    {
      id: 3,
      subtitle: "About Our Journey",
      description: "Discover the passion and dedication behind our work and the values that drive us forward.",
      image: image3

    }

  ];

  const handleCardHover = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const handleKeyDown = (event, cardId) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setHoveredCard(hoveredCard === cardId ? null : cardId);
    }
    if (event.key === 'Escape') {
      setHoveredCard(null);
    }
  };

  return (
    <div className="w-full mx-auto p-6 bg-[#FEF7FF]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-[#5A3D00] font-[playfair]">
        Explore Her Legacy
      </h2>
      
      <div className="flex flex-wrap lg:flex-nowrap gap-4 justify-center items-stretch">
        {cardData.map((card) => {
          const isHovered = hoveredCard === card.id;
          const isOtherHovered = hoveredCard && hoveredCard !== card.id;
          
          return (
            <div
              key={card.id}
              className={`
                relative cursor-pointer rounded-xl overflow-hidden shadow-lg
                transition-all duration-500 ease-out
                focus:outline-none focus:ring-4 focus:ring-blue-300
                ${isHovered 
                  ? 'w-full lg:w-96 z-20 scale-105' 
                  : isOtherHovered 
                    ? 'w-full lg:w-32 z-10' 
                    : 'w-full lg:w-48 z-10'
                }
                h-96 flex-shrink-0
              `}
              onMouseEnter={() => handleCardHover(card.id)}
              onMouseLeave={handleCardLeave}
              onKeyDown={(e) => handleKeyDown(e, card.id)}
              tabIndex={0}
              role="button"
              aria-label={`${card.title} - ${card.subtitle}`}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              
              {/* Overlay */}
              <div className={`
                absolute inset-0 bg-black bg-opacity-40
                transition-opacity duration-300
                ${isHovered ? 'bg-opacity-50' : 'bg-opacity-40'}
              `} />
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white">

          
                {/* Expandable content - only show when hovered */}
                <div className={`
                  transition-all duration-300 overflow-hidden
                  ${isHovered 
                    ? 'max-h-40 opacity-100 transform translate-y-0' 
                    : 'max-h-0 opacity-0 transform translate-y-4'
                  }
                `}>
                  <p className="text-sm text-gray-100 mb-4 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
              
              {/* Hover indicator */}
              <div className={`
                absolute top-4 right-4 w-2 h-2 rounded-full bg-white
                transition-all duration-300
                ${isHovered ? 'scale-150 bg-blue-400' : 'scale-100'}
              `} />
            </div>
          );
        })}
      </div>
      
      <div className="flex justify-center mt-8">
        <button className="mt-6 md:mt-8 flex items-center justify-center border border-black px-5 py-2 md:px-6 md:py-3 rounded-full text-black text-sm sm:text-base md:text-lg transition-all duration-300 hover:bg-white hover:text-[#3D1E0D] hover:scale-105 ">
          Discover More
        </button>
      </div>
     
    </div>
  );
};

export default ExpandableCardRow;