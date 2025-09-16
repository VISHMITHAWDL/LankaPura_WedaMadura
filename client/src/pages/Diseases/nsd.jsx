import React from 'react'

import landing from "../../assets/Home_Assets/landing_banner.jpg"
import plantImage from "../../assets/plantcrop.png";
import DiseaseNavigator from './diseaseNavigator';

export default function nsd() {
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
            display: flex;
            justify-content: center;
            margin-top: 204px;
            
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
                    /* Desktop and larger screens (default styles) */

.content-section ul {
  font-size: 1.2rem; /* Larger font size for list items */
}

/* Tablet and smaller screens */
@media (max-width: 768px) {
  .content-section {
    height: auto; /* Adjust the height for tablets or smaller screens */
    padding: 60px; /* Reduce padding for smaller devices */
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



  .content-section ul {
    font-size: 0.9rem; /* Adjust font size for mobile list items */
  }

  .content-section ul li {
    font-size: 0.9rem; /* Adjust font size for list items */
  }

  .content-section p {
    font-size: 0.9rem; /* Adjust font size for mobile paragraph */
  }
}
        `}
      </style>

      <main className="landing-page">
        {/* Overlay Layer */}
        <div className="landing-overlay"></div>


        <div className="landing-content fade-in text-center">
        
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

         
          <h1
            className="text-4xl font-[playfair] font-bold mb-2 mx-auto md:mx-0 md:ml-[240px] md:text-left"
            style={{
              fontWeight: 500,
              color:'white',
              fontSize: "3rem",
            }}
          >
            Nervous System Diseases
          </h1>
        </div>

       
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
          Nervous System Diseases
        </h2>


        <h2
          className="font-[playfair]"
          style={{
            
            fontWeight: 500,
            marginLeft: "1px", // Additional margin for the second line
            fontSize: "2rem",
          }}
        >
          Principal organs of the nervous system
        </h2>

        <p
          className="font-[Raleway] text-justify"
          style={{
            fontWeight: 400,
          }}        
        >
          –Eyes –Ears –Sensory organs of taste – Sensory organs of smell
        </p>

        <p
          className="font-[Raleway] text-justify"
          style={{
            fontWeight: 400,
          }}        
        >
          –Sensory receptors in skin, joints, muscles and other parts of the body
        </p>


        <p
          className="font-[Raleway] text-justify"
          style={{
            fontWeight: 400,
          }}        
        >
          Nervous system disease or disorders that affect the functioning 
          of the human nervous system. Everything that human’s sense, consider, 
          and effect and all the unlearned reflexes of the body depend on 
          the functioning of the nervous system. The skeleton and muscles 
          support and transport the body, and the digestive system, heart, 
          and lungs provide nutrients; but the nervous system contains the 
          epitome of the human—the mind—and commands all perception, thought, 
          and action. Disturbance or malfunction of the functions of the nervous 
          system causes changes felt throughout the body.
        </p>

        <h2
          className="font-[playfair]"
          style={{
            fontFamily: "'Playfair Display SC', serif",
            fontWeight: 500,
            marginLeft: "1px", // Additional margin for the second line
            fontSize: "2rem",
          }}
        >
          Symptoms
        </h2>
        <ul
          className="font-[Raleway] text-justify"
          style={{
            fontWeight: 400,
          }}
        >
          <li>Persistent or sudden onset of a headache</li>
          <li>A headache that changes or is different</li>
          <li>Loss of feeling or tingling</li>
          <li>Weakness or loss of muscle strength</li>
          <li>Loss of sight or double vision</li>
          <li>Memory loss</li>
          <li>Impaired mental ability</li>
          <li>Lack of coordination</li>
          <li>Muscle rigidity</li>
          <li>Tremors and seizures</li>
          <li>Back pain which radiates to the feet, toes, or other parts of the body</li>
          <li>Muscle wasting and slurred speech</li>
          <li>New language impairment (expression or comprehension)</li>
         
        </ul>

        <h2
          className="font-[playfair]"
          style={{
            fontFamily: "'Playfair Display SC', serif",
            fontWeight: 500,
            marginLeft: "1px", // Additional margin for the second line
            fontSize: "2rem",
          }}
        >
          Your nervous system can be  {" "}
          <span style={{ color: "#006400" }}>damaged</span>{" "}by the followings
        </h2>

        <ul
          className="font-[Raleway] text-justify"
          style={{
            fontWeight: 400,
          }}        
        >
          <li>Injury</li>
          <li>Infections</li>
          <li>Degeneration</li>
          <li>Tumors</li>
          <li>Blood flow disruption</li>
          <li>Autoimmune disorders</li>
          
        </ul>

        {/* Plant Image */}
        <img
          src={plantImage}
          alt="Plant"
          className="right-image"
        />
      </section>
    <DiseaseNavigator/>
    </div>
  )
}
