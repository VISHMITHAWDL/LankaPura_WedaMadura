import React from 'react'
import DiseaseNavigator from './diseaseNavigator';

import landing from "../../assets/Home_Assets/landing_banner.jpg"
import plantImage from "../../assets/plantcrop.png"; // Replace with your actual image for the right side


import Overlapcollection from "../../components/Ourtreat_Compo/Overlappingsquares";
import DengueVideo from '../../assets/denguevideo.mp4';


export default function dengue() {
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
            width: 30%; /* Adjust size to cover the right side */
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
          
  
    

}



        .content-section {
  height: auto; /* Adjusted to be dynamic */
  padding: 100px; /* Regular padding for larger screens */
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
            Dengue
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
          Dengue
        </h2>


        <h2
          className="font-[playfair]"
          style={{
            
            fontWeight: 500,
            marginTop: "50px", // Additional margin for the second line
            marginLeft: "1px", // Additional margin for the second line
            fontSize: "2rem",
          }}
        >
          What is{" "}
          <span style={{ color: "#006400" }}>Dengue</span>?
        </h2>

        <p
          className="font-[Raleway] text-justify"
          style={{
            
            fontWeight: 400,
            marginTop: "20px", // Additional margin for the second line
            
          }}
        >
          Dengue is a viral infection caused by the dengue virus (DENV), which is transmitted to humans through the bites of infected female Aedes mosquitoes, primarily Aedes aegypti. This disease is common in tropical and subtropical regions, including Southeast Asia, South America, and Africa.
        </p>


        <p
          className="font-[Raleway] text-justify"
          style={{
            
            fontWeight: 400,
            marginTop: "20px", // Additional margin for the second line
          
          }}
        >
          Dengue typically manifests as a sudden onset of high fever, severe headache, pain behind the eyes, joint and muscle pain, fatigue, nausea, vomiting, skin rash, and mild bleeding (like nosebleeds or gum bleeding). These symptoms usually appear 4-10 days after being bitten by an infected mosquito and can last up to a week.
        </p>


        <p
          className="font-[Raleway] text-justify"
          style={{
            
            fontWeight: 400,
            marginTop: "20px", // Additional margin for the second line
            
          }}
        >
          In some cases, dengue can progress to severe forms, such as dengue hemorrhagic fever (DHF) or dengue shock syndrome (DSS), which involve severe bleeding, organ damage, and dangerously low blood pressure. These complications can be life-threatening without immediate medical attention.
        </p>

        <p
          className="font-[Raleway] text-justify"
          style={{
            
            fontWeight: 400,
            marginTop: "20px", // Additional margin for the second line
          
          }}
        >
          There is no specific antiviral treatment for dengue. Management focuses on supportive care, such as hydration and pain relief, with severe cases requiring hospitalization. Preventing dengue involves controlling mosquito populations, using insect repellents, wearing protective clothing, and eliminating stagnant water where mosquitoes breed. Vaccines like Dengvaxia are available in some regions, but they are not suitable for everyone. Early detection and prevention are key to reducing dengue’s impact.
        </p>

        {/* Plant Image */}
        <img
          src={plantImage}
          alt="Plant"
          className="right-image"
        />

        {/* <div className='mt-10  justify-center '>
        <h1 className='flex justify-left pt-8' style={{marginLeft:'600px'}}>
            <span className='text-5xl font-[playfair] blod text-center text-black font-semibold' >Highlights</span>
            
        </h1>
        <div className='flex justify-left' style={{marginTop:'30px',marginLeft:'170px'}} >
          <Overlapcollection/>
       
        </div>

        <div className="video-container" >
            <video controls>
              <source src={DengueVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </div>
        
        </div> */}


<div className="mt-10 flex flex-col items-center ">
  <h1 className="text-3xl mb-4 sm:text-4xl md:text-5xl font-[playfair] font-semibold text-black text-center pt-8">
    Highlights
  </h1>


  
    <Overlapcollection />

    <div className="flex justify-center items-center w-full mt-4">
      {/* <video 
        controls 
        className="w-full max-w-[1200px] max-h-[800px] rounded-lg shadow-md 
                  tab:max-w-[400px] tab:max-h-[200px] 
                  md:max-w-[500px] md:max-h-[350px] 
                  mx-auto"
      >
        <source src={DengueVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}


      <video 
        controls 
        className="w-full mt-4 max-w-[1000px] max-h-[700px] rounded-lg shadow-md 
                  tab:max-w-[200px] tab:max-h-[300px] 
                  md:max-w-[700px] md:max-h-[600px] 
                  mx-auto"
      >
        <source src={DengueVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </div>

  




  {/* <div className="flex flex-col md:flex-row w-full">
  
  <div className="mt-8 w-full flex justify-center md:justify-start md:ml-[120px] md:mt-[33px] md:height-[10px] md:w-auto tab:justify-center tab:ml-0 tab:mt-6">
    <Overlapcollection />
  </div>

 
  <div className="flex justify-center w-full mt-4 md:ml-[120px] md:mt-6 tab:mt-4 tab:flex tab:justify-center tab:w-full">
    <video 
      controls 
      className="w-full max-w-[600px] max-h-[400px] rounded-lg shadow-md tab:max-w-[400px] tab:max-h-[200px] md:max-w-[500px] md:max-h-[350px]"
    >
      <source src={DengueVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div> */}

{/* <div className="flex flex-col md:flex-row w-full">
 
  <div className="mt-8 w-full flex justify-center md:justify-start md:ml-[120px] md:mt-[33px] md:height-[10px] md:w-auto tab:justify-center tab:ml-0 tab:mt-6">
    <Overlapcollection />
  </div>

  
  <div className="flex justify-center mt-4 md:ml-[120px] md:mt-6 tab:mt-4 tab:flex tab:justify-center">
    <video 
      controls 
      className="w-full max-w-[600px] max-h-[400px] rounded-lg shadow-md tab:max-w-[400px] tab:max-h-[250px] md:max-w-[500px] md:max-h-[350px]"
    >
      <source src={DengueVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div> */}






{/* <div className='flex flex-col md:flex-row w-full'>

  <div className=" mt-8 w-full flex justify-center md:justify-start md:ml-[120px] md:mt-[33px] md:height-[10px] md:w-auto">
    <Overlapcollection />
  </div>

  <div className=" max-w-[650px] flex justify-center mt-4 md:absolute md:top-[735px] md:right-[150px] md:mt-0">
    <video controls className="w-full max-w-[600px] max-h-[400px] rounded-lg shadow-md">
      <source src={DengueVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

</div> */}


{/* <div className="flex flex-col md:flex-col lg:flex-row w-full">
  
  <div className="mt-8 w-full flex justify-center md:justify-start md:ml-[120px] md:mt-[33px] md:w-auto">
    <Overlapcollection />
  </div>

  
  <div className="max-w-[650px] flex justify-center mt-4 md:mt-6 lg:absolute lg:top-[735px] lg:right-[150px]">
    <video controls className="w-full max-w-[600px] max-h-[400px] rounded-lg shadow-md">
      <source src={DengueVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div> */}

 
</div>
        
      </section>
      <DiseaseNavigator />

      {/* <Footer /> */}
    </div>
  )
}
