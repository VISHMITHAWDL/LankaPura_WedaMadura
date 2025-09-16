import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Treatcard from "../../components/Ourtreat_Compo/Highlightcard"; 
import { MdOutlineArrowBack } from "react-icons/md";
import { MdOutlineArrowForward } from "react-icons/md";


import D1 from '../../assets/dengue1.jpg';
import D2 from '../../assets/dengue2.jpeg';
import D3 from '../../assets/dengue3.jpeg';
import D4 from '../../assets/dengue4.jpeg';
import D5 from '../../assets/dengue5.jpeg';
import D6 from '../../assets/dengue6.jpg';
import D7 from '../../assets/dengue7.jpeg';
import D8 from '../../assets/dengue8.jpeg';
import D9 from '../../assets/dengue9.jpeg';
import D10 from '../../assets/dengue10.jpeg';
import D11 from '../../assets/dengue11.jpeg';
import D12 from '../../assets/dengue12.jpeg';



const Covidcardanimate = () => {
  const treatCardsData = [
    { id: 1, imageUrl: D1, },
    { id: 2, imageUrl: D2, },
    { id: 3, imageUrl: D3, },
    { id: 4, imageUrl: D4, },
    { id: 5, imageUrl: D5, },
    { id: 6, imageUrl: D6, },
    { id: 7, imageUrl: D7, },
    { id: 8, imageUrl: D8, },
    { id: 9, imageUrl: D9, },
    { id: 10, imageUrl: D10, },
    { id: 11, imageUrl: D11, },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Get the three visible cards based on the current index
  const getVisibleCards = () => {
    const totalCards = treatCardsData.length;
    const cardsToShow = [];
    for (let i = 0; i < 3; i++) {
      cardsToShow.push(treatCardsData[(currentIndex + i) % totalCards]);
    }
    return cardsToShow;
  };

  // Navigate to the previous card
  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? treatCardsData.length - 3 : prevIndex - 1
    );
  };

  // Navigate to the next card
  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % treatCardsData.length);
  };

  // Auto-slide the cards every second
  useEffect(() => {
    if (!paused) {
      const interval = setInterval(goNext, 3000); // 1000ms = 1 second
      return () => clearInterval(interval); // Clear interval when component unmounts or paused
    }
  }, [currentIndex, paused]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        transform: "scale(0.95)", // Scale down the container slightly (you can adjust the value as needed)
        transition: "transform 0.3s ease", // Smooth transition for the scaling effect
      }}
      className="flex justify-center mt-4"
    >
      {/* Sliding Cards Container */}
      <div
        className="h-1000 justify-center items-center"
        style={{
            marginTop: "10px",
          display: "flex",
          transition: "transform 1s ease",
        }}
      >
        {getVisibleCards().map((card, index) => (
          <motion.div
            key={card.id}
            onMouseEnter={() => setPaused(true)} // Pause the animation
            onMouseLeave={() => setPaused(false)} // Resume the animation
            style={{
              width: "300px",
              margin: "0 16px",
              opacity: index === 1 ? 1 : 0.6,
              transform: `scale(${index === 1 ? 1 : 0.9})`,
              filter: index === 1 ? "none" : "blur(4px)",
              transition: "opacity 0.3s, transform 0.3s",
              transformOrigin: "center", // Ensures the zoom happens from the center of the card
            }}
            className="card"
          >
            <Treatcard
              imageUrl={card.imageUrl}
              title={card.title}
              onButtonClick={() => alert(`You clicked ${card.title}`)}
            />
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goPrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white border-none p-2 cursor-pointer rounded-full hover:bg-[#348101] text-7xl"
      >
        <MdOutlineArrowBack />
      </button>

      <button
        onClick={goNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white border-none p-2 cursor-pointer hover:bg-[#348101] text-7xl rounded-full"
      >
        <MdOutlineArrowForward />
      </button>
    </div>
  );
};

export default Covidcardanimate;
