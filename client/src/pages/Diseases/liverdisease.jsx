import React from 'react'

import landing from "../../assets/Home_Assets/landing_banner.jpg"
import plantImage from "../../assets/plantcrop.png"; // Replace with your actual image for the right side
import DiseaseNavigator from './diseaseNavigator';

export default function liverdisease() {
  return (
    <div>
     
      {/* Inline CSS for animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateX(-5px); /* Subtle left-to-right animation */
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .fade-in {
            animation: fadeIn 2s ease-in-out;
          }

          /* CSS for the right-side image */
          .right-image {
            position: absolute;
            top: 0;
            right: 0;
            width: 35%; /* Adjust size to cover the right side */
            height: 105.3%;
            object-fit: cover;
            z-index: 10;
            opacity: 0.3; /* Reduced opacity */
          }

          /* Curved bottom edge of the landing page */
          .landing-page {
            background-image: url(${landing});
            background-size: cover;
            background-position: center;
            height: 500px; /* Fixed height for the background image */
            position: relative;
            clip-path: polygon(0 0, 100% 0%, 100% 85%, 50% 100%, 0 85%); /* Curved bottom edge */
            overflow: hidden; /* Ensures the content doesn't spill over */
          }

          /* Overlay Layer */
          .landing-overlay {
            position: absolute;
            inset: 0;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1;
          }

          /* Content Layer */
          .landing-content {
            position: relative;
            z-index: 10;
            flex-direction: column;
            align-items: start;
            padding-left: 40px;
            display: flex;
            justify-content: center;
            height: 100%;
          }

          .landing-content h1 {
            font-family: 'Playfair Display SC', serif;
            font-weight: 700;
            color: white; /* Change the text color to white */
          }

          .content-section {
            height: auto;
            padding: 80px;
            text-align: left;
            font-family: Arial, sans-serif;
            font-size: 1.1rem;
            position: relative; /* Added relative positioning to contain the absolute image */
          }

          .content-section h2 {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
          }

          .content-section ul {
            list-style-type: disc;
            margin-left: 20px;
          }

          .content-section ul li {
            margin-bottom: 0.5rem;
          }

          .content-section p {
            margin-bottom: 1rem;
          }
          .footer-section {
      
            overflow: hidden; /* Hide the bottom part of the image */
          }

              /* Tablet and smaller screens */
    @media (max-width: 768px) {
      .content-section {
        height: auto; /* Adjust the height for tablets or smaller screens */
        padding: 60px; /* Reduce padding for smaller devices */
      }

      .content-section h2 {
        font-size: 1.4rem; /* Adjust heading size */
      }

      .content-section ul {
        font-size: 1rem; /* Adjust font size for list items */
      }
    }

    /* Mobile screens */
@media (max-width: 480px) {
  .content-section {
    height: auto; /* Adjust the height for mobile screens */
    padding: 40px; /* Reduce padding for mobile devices */
  }

  .content-section h2 {
    font-size: 1.0rem; /* Adjust heading size for mobile */
  }

  .content-section ul {
    font-size: 0.8rem; /* Adjust font size for mobile list items */
  }

  .content-section ul li {
    font-size: 0.8rem; /* Adjust font size for list items */
  }

  .content-section p {
    font-size: 0.8rem; /* Adjust font size for mobile paragraph */
  }
        `}
      </style>

      <main className="landing-page">
        {/* Overlay Layer */}
        <div className="landing-overlay"></div>

        
      

<div className="landing-content fade-in text-center">
          {/* First Line */}
          <h1
            className="text-4xl font-[playfair] font-bold mb-2 mx-auto md:mx-0 md:ml-[190px] md:text-left"
            style={{
              
              color: 'white',  
              fontWeight: 500,
              fontSize: "3rem",
            }}
          >
            Ayurvedic Treatments for
          </h1>

          {/* Second Line */}
          <h1
            className="text-4xl font-[playfair] font-bold mb-2 mx-auto md:mx-0 md:ml-[240px] md:text-left"
            style={{
              fontWeight: 500,
              color:'white',
              fontSize: "3rem",
            }}
          >
            Liver Disease
          </h1>
        </div>

        {/* Curved Image on the Right */}
        {/* <img
          src={kidneyImage} // Replace with the image path
          alt="Curved Right Image"
          className="curved-image"
        /> */}
      </main>

      <section
        className="py-12 px-6 content-section"
        
      >
        <h2
          className="text-4xl font-[playfair] font-bold"
          style={{
            color: "#5A3D00",
            
            fontWeight: 600,
            marginLeft: "1px", // Additional margin for the second line
            fontSize: "3rem",
          }}
        >
          Liver Disease
        </h2>
        <p
          className="font-[Raleway] text-justify"
          style={{
            fontWeight: 400,
            marginTop: "20px", // Additional margin for the second line
            
          }}
        >
          Your liver is the largest organ inside your body which performs hundreds 
          of tasks related to metabolism, energy storage, and detoxification of waste. 
          It helps your body digest food, store energy, and remove poisons and store the energy until you need it.
          Liver disease is a general term that refers to any condition affecting your liver. These conditions
          may develop for different reasons, but they can all damage your liver and impact its function.
        </p>
        

        <h2
          className="font-[playfair]"
          style={{
            
            fontWeight: 500,
            marginLeft: "1px", // Additional margin for the second line
            fontSize: "2rem",
          }}
        >
          Liver Disease Types
        </h2>

        <p
          className="font-[Raleway] "
          style={{
            fontWeight: 400,
            marginTop: "20px", // Additional margin for the second line
           
          }}
        >
          Liver diseases are categorized as follows,
        </p>

        <ul
          className="font-[Raleway] text-justify"
          style={{
            fontWeight: 400,
            
          }}        
        >
          <li>Diseases caused by viruses, such as hepatitis A, hepatitis B, and hepatitis C</li>
          <li>Diseases caused by drugs, poisons, or too much alcohol. Examples include fatty liver disease and cirrhosis</li>
          <li>Liver cancer</li>
          <li>Inherited diseases, such as hemochromatosis and Wilson disease</li>
          
        </ul>

        <h2
          className="font-[playfair]"
          style={{
            
            fontWeight: 500,
            marginLeft: "1px", // Additional margin for the second line
            fontSize: "2rem",
          }}
        >
          Symptoms
        </h2>
        <p
          className="font-[Raleway] text-justify"
          style={{
            fontWeight: 400,
            marginTop: "20px", // Additional margin for the second line
           
          }}
        >
          Liver disease symptoms vary, depending on the underlying cause. 
          However, there are some general symptoms that may indicate some kind of liver disease.
        </p>
        <ul
          className="font-[Raleway] text-justify"
          style={{
            fontWeight: 400,
            
          }}        
        >
          <li>Yellow skin and eyes, known as jaundice</li>
          <li>Dark urine</li>
          <li>Pale, bloody, or black stool</li>
          <li>Swollen ankles, legs, or abdomen</li>
          <li>Nausea</li>
          <li>Vomiting</li>
          <li>Decreased appetite</li>
          <li>Ongoing fatigue</li>
          <li>Itchy skin</li>
          <li>Easy bruising</li>
          
        </ul>

        {/* Plant Image */}
        <img
          src={plantImage}
          alt="Plant"
          className="right-image"
        />
      </section>
      <DiseaseNavigator/>
      {/* <Footer /> */}
    </div>
  )
}
