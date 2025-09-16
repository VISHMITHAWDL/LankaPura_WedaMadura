import React from "react";
import landing from "../assets/aboutus.jpg";
import plantImage from "./../assets/wedamedura-ayurveda.jpg";
import aboutthedoctorImage from "../assets/DOCTOR.jpg";
import { BsChevronDoubleDown } from "react-icons/bs";
import LankapuraVideo from './../assets/lankapuravideo.mp4';
import "../css/Aboutus.css"; // Ensure this CSS file exists and includes styles
import Collage from "../components/About_component/Collage";

const Aboutus = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <main
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-6"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1)), url(${landing})`,
        }}
      >
      <div className="mb-4 text-center font-medium " style={{ marginTop: '350px' }}>  
        <h1
          className="title font-[playfair] text-7xl"
          initial={{ opacity: 0, y: 30 }} // Start slightly lower
          animate={{ opacity: 1, y: 0 }} // Move to final position
          transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }} // Smooth cubic bezier easing

        >
          Crafted by nature, trusted by you
        </h1>
      </div>
        <h1 className="text-center font-[Raleway] text-2xl text-[#EEE183]" style={{ marginTop: '20px' }}>
        “Embracing Wellness Through the Wisdom of Ayurveda...”
        </h1>
        <div className="animated-arrow-container">
          <span className="animated-arrow"></span> {/* Retain only the arrow */}
        </div>


        
      </main>

      {/* About Section */}
      <section className="bg-[#FEF7FF] py-12 px-6">
        <h1 className="text-center text-xl sm:text-2xl font-[Raleway] text-black font-light mb-6">
          We have found many successful medicines for many diseases, relying only on Herbs.
        </h1>

        {/* Content Layout */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="lg:w-1/2">
            {/* <h2 className="text-3xl sm:text-4xl font-[playfair] font-bold text-[#5A3D00] mb-6">
              Our Story
            </h2> */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-[playfair] font-bold text-[#5A3D00] mb-6 text-center sm:text-left">
              Our Story
            </h2>

            <p className="text-justify text-lg font-[Raleway] leading-relaxed">
              Dr. Tharanga Kumari Wickramasuriya, the last surviving member of a 700-year-old lineage of medicine, 
              is a beacon of hope in the medical community. Known as the{" "}
              <span className="text-green-700 font-bold">“Dengue Doctor”</span>, she has developed a 100% successful 
              drug for dengue fever, curing over 100,000 patients. Her innovative treatments have also addressed{" "}
              <span className="text-green-700 font-bold">COVID-19</span>, providing care to both local and international patients.
            </p>

            <p className="text-justify text-lg font-[Raleway] leading-relaxed mt-6">
              At Lankapura Medical Center, we prioritize quality service in a serene and welcoming environment. 
              Our holistic approach ensures that each patient receives tailored care, promoting overall well-being and healing.
            </p>
          </div>

          
          <div className="video-container" >
            <video controls >
              <source src={LankapuraVideo} type="video/mp4"  />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

      </section>
      <div>
         <Collage />
      </div>
    </div>
  );
};

export default Aboutus;

