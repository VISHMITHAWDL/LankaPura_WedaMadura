import React from "react";
import WWA from "../../assets/Home_Assets/WWA.png";
import logo from "../../assets/Home_Assets/Logoblack.png";
import { useNavigate } from "react-router-dom";

const Whoweare = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex justify-center items-center w-full relative bg-cover bg-center"
      style={{
        marginTop: "30px",
        backgroundImage: `url(${WWA})`,
        height: "990px",
        width: "100%",
      }}
    >
      {/* White document container */}
      <div className="bg-white bg-opacity-90 p-6 sm:p-8 rounded-lg shadow-lg max-w-2xl w-11/12 text-center relative">
        {/* Logo Section */}
        <div className="flex justify-center">
          <img src={logo} alt="Lankapura Logo" className="w-12 sm:w-16 mb-2" />
        </div>
        <p className="text-md sm:text-lg text-black font-[Raleway]">since 2012</p>

        {/* Title Section */}
        <h2 className="text-2xl sm:text-3xl font-bold mt-4 mb-4 font-[playfair]">
          WHO WE ARE <br /> LANKAPURA HERBAL MEDICINE
        </h2>

        {/* Description Section */}
        <p className="text-gray-700 mt-4 text-sm sm:text-lg leading-relaxed font-[Raleway]">
          Dr. Tharanga Kumari Wickramasuriya is the last surviving member of a proud
          700-year-old medical lineage. Inspired by her father, a medical doctor, and
          her grandfather, a hereditary internist, she developed a passion for healing
          from a young age. Known affectionately as the "Dengue Doctor," she made history
          by developing a 100% proven drug for dengue, curing over 100,000 patients, and
          earning a patent for her breakthrough. During the Covid-19 pandemic, she also
          created an effective treatment, saving countless local and international lives.
          Today, Dr. Tharanga continues her remarkable journey at Lankapura Medical Center,
          offering expert care for a wide range of physical ailments.
        </p>

        {/* Read More Button */}
        <button onClick={()=>navigate('/aboutus')}   className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 bg-black text-white rounded-lg hover:bg-[#348101] transition duration-300">
          Read More &gt;&gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default Whoweare;
