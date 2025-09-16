import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Treatcard from "../../components/Ourtreat_Compo/Highlightcard"; 
import { MdOutlineArrowBack } from "react-icons/md";
import { MdOutlineArrowForward } from "react-icons/md";


import A1 from '../../assets/animatec1.jpg';
import A2 from '../../assets/animatec2.jpg';
import A3 from '../../assets/animatec3.jpg';
import A4 from '../../assets/animatec4.jpg';

const Covidcardanimate = () => {
  const treatCardsData = [
    { id: 1, imageUrl: A1 },
    { id: 2, imageUrl: A2 },
    { id: 3, imageUrl: A3 },
    { id: 4, imageUrl: A4 },
    
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
      {/* <button
        onClick={goPrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black border-none p-2 cursor-pointer rounded-full hover:bg-[#348101] text-7xl"
      >
        <MdOutlineArrowBack />
      </button>

      <button
        onClick={goNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black border-none p-2 cursor-pointer hover:bg-[#348101] text-7xl rounded-full"
      >
        <MdOutlineArrowForward />
      </button> */}
    </div>
  );
};

export default Covidcardanimate;
