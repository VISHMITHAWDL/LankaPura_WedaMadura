import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import background from '../../assets/Home_Assets/Treatmentbackground.png';
import virus from '../../assets/Home_Assets/virus.png';
import den from '../../assets/Home_Assets/Mosquito.png';

const Treatment = () => {
  const navigate = useNavigate();

  const tap = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'auto',
  };

  const [virusInView, setVirusInView] = useState(false);
  const [denInView, setDenInView] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // 1024px is typically the laptop breakpoint
    };

    // Set the initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const Section = ({ title, highlight, description, buttonText, path }) => (
    <div className="w-full px-4 text-center">
      <h1 className="font-[Raleway] text-black text-3xl md:text-4xl font-semibold">
        {title}{' '}
        <span className="font-[Raleway] text-red-600 text-3xl md:text-4xl font-semibold">{highlight}</span>
      </h1>
      {description.map((line, index) => (
        <p key={index} className="font-[Raleway] text-black text-lg md:text-xl mt-4">
          {line}
        </p>
      ))}
      <button
        onClick={() => navigate(path)}
        className="border border-black bg-black text-white px-6 py-2 rounded-lg mt-6 font-[Raleway] hover:bg-[#348101] hover:border-transparent transition duration-300"
      >
        {buttonText}
      </button>
    </div>
  );


  return (
    <div style={tap} className="relative flex flex-col ">
      {/* Header Section */}
      <div className="relative flex flex-col items-center text-center">
        <h1 className="text-lg md:text-2xl font-[Raleway] tracking-[.25em] md:tracking-[.39em] mt-6">
          We cure diseases with Hela medicine in Sri Lanka
        </h1>
        <h1 className="mt-4">
          <span className="text-3xl md:text-6xl font-[playfair] font-bold text-black">OUR AYURVEDHA </span>
          <span className="text-[#348101] text-3xl md:text-6xl font-[playfair] font-bold">TREATMENT</span>
        </h1>
      </div>

      {/* COVID-19 Section */}
      <div className="flex justify-center mt-10 md:mt-24">
        <Section
          title="Medication against"
          highlight="COVID 19"
          description={[
            "We've launched a medicine which can successfully fight",
            'against COVID 19',
            'by boosting your immunity system.',
          ]}
          buttonText="Read more"
          path="/covid19"
        />
      </div>

      {/* Dengue Section */}
      <div className="flex justify-center mt-10 md:mt-24 mb-8 md:mb-8">
        <Section
          title="A successful medicine for"
          highlight="Dengue"
          description={[
            'Our medicine for Dengue has successfully',
            'cured thousands',
            'of patients throughout the country.',
          ]}
          buttonText="Read more"
          path="/dengue"
        />
      </div>

      {/* Animated Images (Only shown on desktop/laptop screens) */}
      {isDesktop && (
        <>
          <motion.div
            className="absolute hidden lg:flex justify-center"
            style={{ top: '16%', left: '3%' }}
            initial={{ opacity: 0, x: '-30%' }}
            animate={virusInView ? { opacity: 1, x: 0 } : { opacity: 0, x: '-30%' }}
            whileInView={{ opacity: 1, x: 0 }}
            onViewportEnter={() => setVirusInView(true)}
            onViewportLeave={() => setVirusInView(false)}
            transition={{ duration: 2, ease: 'easeOut' }}
          >
            <img src={virus} alt="COVID-19 Virus" className="w-[200px] md:w-[430px] h-auto" />
          </motion.div>

          <motion.div
            className="absolute hidden lg:flex justify-center"
            style={{ top: '62%', right: '8%' }}
            initial={{ opacity: 0, x: '30%' }}
            animate={denInView ? { opacity: 1, x: 0 } : { opacity: 0, x: '30%' }}
            whileInView={{ opacity: 1, x: 0 }}
            onViewportEnter={() => setDenInView(true)}
            onViewportLeave={() => setDenInView(false)}
            transition={{ duration: 2, ease: 'easeOut' }}
          >
            <img src={den} alt="Dengue Mosquito" className="w-[120px] md:w-[295px] h-auto" />
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Treatment;