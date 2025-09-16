import React from 'react'

import landing from "../../assets/Home_Assets/landing_banner.jpg"
import plantImage from "../../assets/plantcrop.png";
import DiseaseNavigator from './diseaseNavigator';

export default function arthritis() {
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
            width: 25%; /* Adjust size to cover the right side */
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
            clip-path: polygon(0 0, 100% 0%, 100% 85%, 50% 100%, 0 85%); 
           
             
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
            Arthritis
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
          Arthritis
        </h2>
        <p
          className="font-[Raleway] text-justify"
          style={{
            
            fontWeight: 400,
            marginTop: "20px", // Additional margin for the second line
           
          }}
        >
          Arthritis is the swelling and tenderness of one or more of your joints. 
          The main symptoms of arthritis are joint pain and stiffness, which typically 
          worsen with age. The most common types of arthritis are osteoarthritis and 
          rheumatoid arthritis. Osteoarthritis causes cartilage — the hard, slippery 
          tissue that covers the ends of bones where they form a joint — to break down. 
          Rheumatoid arthritis is a disease in which the immune system attacks the joints, 
          beginning with the lining of joints.
        </p>
        
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
          The most common signs and symptoms of arthritis involve the joints. 
          Depending on the type of arthritis you have, your signs and symptoms may include:
        </p>

        <ul
          className="font-[Raleway] text-justify"
          style={{
            fontWeight: 400,
          }}
        >
          <li>Pain in joints</li>
          <li>Stiffness</li>
          <li>Swelling</li>
          <li>Redness</li>
          <li>Decreased range of motion</li>          
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
          Exercising to manage symptoms
        </h2>

        <p
          className="font-[Raleway] text-justify"
          style={{
            
            fontWeight: 400,
            marginTop: "20px", // Additional margin for the second line
           
          }}
        >
          If you have arthritis, you might not always feel like exercising. 
          And you might be worried that exercising will make your pain or your 
          condition worse that it was. No you’re wrong. Now it has found that 
          exercise can make better the symptoms like pain in joints and swelling 
          better. But it’s very important that you do the best type of exercise.
        </p>

        {/* Plant Image */}
        <img
          src={plantImage}
          alt="Plant"
          className="right-image"
        />
      </section>
      <DiseaseNavigator />
      {/* <Footer /> */}
    </div>
  )
}
