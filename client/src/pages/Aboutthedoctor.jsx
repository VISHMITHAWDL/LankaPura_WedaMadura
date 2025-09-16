import React from 'react'

import landing from "../assets/treatment.png";
import plantImage from "./../assets/wedamedura-ayurveda.jpg";


export default function Aboutthedoctor() {
  return (
    <div>
        <style>
        {`
          .right-image {
            position: absolute;
            margin-top: 960px; /* Adjust as needed */
            margin-right: 110px; /* Adjust as needed */
            width: 40%; /* Adjust size to cover the right side */
            height: 105.3%;
            object-fit: cover;
            z-index: 10;
            right: 0;
            top: 0; /* Adjust as needed */
            max-width: 100%; /* Ensures responsiveness */
            height: 50%;
}
        `}


      </style>
        <main
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 100)), url(${landing})`,
        }}
      >
        <h1
          className="mb-4 font-[playfair] text-center font-medium text-7xl fade-in"
          style={{ marginTop: '390px' }}
        >
          Dr.Tharanga Kumari Wickramasooriya
        </h1>

          <h1 className="text-center font-[Raleway] text-2xl text-[#EEE183]"
          style={{
            marginRight: "100px", // Additional margin for the second line
            
          }}
          >
          - A Legacy in Herbal Healing - 
          </h1>
          
          

      </main>
      <section
        className="py-12 px-6"
        style={{
          backgroundColor: "#FEF7FF", 
          height: "800px",// Light wheat background  #FEF7FF
        }}
      >
        <h1
            className="font-[Raleway] text-center text-2xl mb-6"
            style={{ color: "black",
              fontWeight: "100",
             }}
          >
            We have found many successful medicines for many diseases, raying only on Herbs.
          </h1>
        <h2
          className="text-4xl font-[playfair] font-bold"
          style={{
            color: "#5A3D00",
            marginTop: "50px",
            fontWeight: 400,
            marginLeft: "150px", // Additional margin for the second line
            fontSize: "3rem",
          }}
        >
          Our Story
        </h2>
        <div className="max-w-6xl mx-auto text-center">
          
          

          <p
          className="font-[Raleway] font-normal w-1/2 text-justify leading-relaxed ml-0 mt-10"  
                   
          >
          Dr. Tharanga Kumari Wickramasuriya, the last surviving member 
          of a 700-year-old lineage of medicine, is a beacon of hope in 
          the medical community. Known as the <span style={{ color: "#006400", fontWeight: "bold" }}>“Dengue Doctor,”</span>{" "}she has 
          developed a 100% successful drug for dengue fever, curing over 
          100.000 patients. Her innovative treatments have also addressed 
          <span style={{ color: "#006400", fontWeight: "bold" }}>{" "}COVID-19,</span> providing care to both local and international patients. 
          At Lankapura Medical Center, Dr. Wickramasooriya offers comprehensive 
          medical care for all physical ailments.

          
          </p>

          <p
          className="font-[Raleway] font-normal w-1/2 text-justify leading-relaxed"  
          style={{marginTop: "30px"  }}         
          >
          
          Why People Choose Us At Lankapura Medical Center, we prioritize quality 
          service in a serene and welcoming environment. Our commitment to excellence 
          is reflected in our ability to offer a wide range of personalized treatments, 
          harnessing the power of Sri Lankan indigenous medicine. Our holistic approach 
          ensures that each patient receives tailored care that addresses their unique 
          needs. promoting overall well-being and healing
          </p>

          
        </div>

        <img
          src={plantImage}
          alt="Plant"
          className="right-image"
        />

        
        
        
      </section>
      {/* <Footer /> */}
        
    </div>
  )
}
