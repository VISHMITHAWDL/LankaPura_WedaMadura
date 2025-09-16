import React from 'react'

import landing from "../../assets/Home_Assets/landing_banner.jpg"
import DiseaseNavigator from './diseaseNavigator';

import plantImage from "../../assets/plantcrop.png"; // Replace with your actual image for the right side

export default function alltypeofcancers() {
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
            height:auto;
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
            All type of cancers
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
          All type of cancers
        </h2>
        <p
          className="font-[Raleway] text-justify"
          style={{
            
            fontWeight: 400,
            marginTop: "20px", // Additional margin for the second line
           
          }}
        >
          Cancer is an umbrella term for a large group of diseases caused 
          when abnormal cells divide rapidly and uncontrollably, and spread to other 
          tissue and organs destroying them. This can create in anywhere of the 
          human body and spread throughout the body. Cancer is the second-leading
          cause of death in the world. But survival rates are improving for many types
          of cancer, thanks to improvements in cancer screening and cancer treatment.
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
          }}        
        >
          Signs and symptoms caused by cancer may vary according to which part of the body 
          is affected. Some general signs and symptoms associated with, but not specific to 
          cancer are there. These symptoms may also often cause by illness, injury, benign tumors, 
          or other problems. If you have symptoms that do not get better after a few weeks, 
          see your doctor so that problems can be diagnosed and treated as early as possible 
          for a speedy recovery. Often, cancer does not cause pain, so do not wait to feel pain 
          before going for a test.
          Some of the symptoms that cancer may cause include:
        </p>

        <ul
          className="font-[Raleway] text-justify"
          style={{
            fontWeight: 400,
          }}
        >
          <li>Breast changes</li>
          <li>Lump or firm feeling in your breast or under your arm</li>
          <li>Nipple changes or discharge</li>
          <li>Skin that is itchy, red, scaly, dimpled, or puckered</li>
          <li>Bladder changes</li>
          <li>Trouble urinating</li>
          <li>Pain when urinating</li>
          <li>Blood in the urine</li>
          <li>Bleeding or bruising, for no known reason</li>
          <li>Bowel changes</li>
          <li>Blood in the stools</li>
          <li>Changes in bowel habits</li>
          <li>Cough or hoarseness that does not go away</li>
          <li>Eating problems</li>
          <li>Pain after eating (heartburn or indigestion that doesn’t go away)</li>
          <li>Trouble swallowing</li>
          <li>Belly pain</li>
          <li>Nausea and vomiting</li>
          <li>Appetite changes</li>
          <li>Fatigue that is severe and lasts</li>
          <li>Fever or night sweats for no known reason</li>
          <li>Mouth changes</li>
          <li>A white or red patch on the tongue or in your mouth</li>
          <li>Bleeding, pain, or numbness in the lip or mouth</li>
          <li>Neurological problems</li>
          <li>Headaches</li>
          <li>Seizures</li>
          <li>Vision changes</li>
          <li>Hearing changes</li>
          <li>Drooping of the face</li>
          <li>Skin changes</li>
          <li>A flesh-colored lump that bleeds or turns scaly</li>
          <li>A new mole or a change in an existing mole</li>
          <li>A sore that does not heal</li>
          <li>Jaundice (yellowing of the skin and whites of the eyes)</li>
          <li>Swelling or lumps anywhere such as in the neck, underarm, stomach, and groin Weight gain or weight loss for no known reason</li>
          <li>Blood in the stools</li>
          <li>Changes in bowel habits</li>
          <li>Cough or hoarseness that does not go away</li>
          <li>Eating problems</li>
        </ul>


        {/* Plant Image */}
        <img
          src={plantImage}
          alt="Plant"
          className="right-image"
        />
      </section>
      <DiseaseNavigator />
    </div>
  )
}
