import React from 'react'

import landing from "../../assets/Home_Assets/landing_banner.jpg"
import plantImage from "../../assets/plantcrop.png"; // Replace with your actual image for the right side
import DiseaseNavigator from './diseaseNavigator';

export default function diabetic() {
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
            Diabetic
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
          Diabetic
        </h2>
        <p
          className="font-[Raleway] text-justify"
          style={{
            
            fontWeight: 400,
            marginTop: "20px", // Additional margin for the second line
           
          }}
        >
          Diabetes mellitus, commonly known as diabetes, is a metabolic disease that 
          causes high blood sugar. The hormone insulin moves sugar from the blood 
          into your cells to be stored or used for energy. With diabetes, your body 
          either doesn’t make enough insulin or can’t effectively use the insulin it 
          does make. Untreated high blood sugar from diabetes can damage your nerves, 
          eyes, kidneys, and other organs.
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
        <ul
          className="font-[Raleway] text-justify"
          style={{
            fontWeight: 400,
          }}
        >
          <li>Increased hunger</li>
          <li>Increased thirst</li>
          <li>Weight loss</li>
          <li>Frequent urination</li>
          <li>Blurry vision</li>
          <li>Irritability</li>
          <li>Extreme fatigue</li>
          <li>Sores that don’t heal</li>
          <li>Frequent infections, such as gums or skin infections and vaginal infections</li>
          
        </ul>


        <h2
          className="font-[playfair]"
          style={{
            
            fontWeight: 500,
            marginLeft: "1px", // Additional margin for the second line
            fontSize: "2rem",
          }}
        >
          When you need {" "}
          <span style={{ color: "#006400" }}>medical advice</span>?
        </h2>

        <ul
          className="font-[Raleway] text-justify"
          style={{
            fontWeight: 400,
          }}        
        >
          <li>If you suspect, you or your child may have diabetes.</li>
          <li>If you have already been diagnosed with diabetes.</li>
        </ul>
        <h2
          className="font-[playfair]"
          style={{
           
            fontWeight: 500,
            marginLeft: "1px", // Additional margin for the second line
            fontSize: "2rem",
          }}
        >
          Risk Factors
        </h2>
        <ul
          className="font-[Raleway] text-justify"
          style={{
            fontWeight: 400,
          }}        
        >
          <li>Family history – If a parent or sibling have diabetes</li>
          <li>Environmental factors such as exposure to some viral illness</li>
          <li>Geography- Some countries such as Finland and Sweden have higher risk of diabetes</li>
          <li>Over weight</li>
          <li>Inactivity</li>
          <li>High blood pressure</li>
        </ul>

        <h2
          className="font-[playfair]"
          style={{
            
            fontWeight: 500,
            marginLeft: "1px", // Additional margin for the second line
            fontSize: "2rem",
          }}
        >
          Prevention
        </h2>
        <ul
          className="font-[Raleway] text-justify"
          style={{
            fontWeight: 400,
          }}
        >
          <li>Consume healthy food</li>
          <li>Engage in more physical activities</li>
          <li>Avoid your body getting overweight</li>
          
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
