import React from 'react'
import DiseaseNavigator from './diseaseNavigator';

import landing from "../../assets/Home_Assets/landing_banner.jpg"
import plantImage from "../../assets/plantcrop.png"; // Replace with your actual image for the right side
import EpirepiesImage from "../../assets/epi.jpg"; 

import Highlight from "../../components/Ourtreat_Compo/Covidcardanimate"


export default function covid19() {

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
            width: 20%; /* Adjust size to cover the right side */
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



        .left-image {
  
  width: 80%;
  height: auto;
  object-fit: contain;
  align-items: center; 
  z-index: 10;
  margin: auto; 
  max-width: 36%;
}

// .center-paragraph {
//   margin-left: 570px;
//     marginTop: "24px",
  
//     fontWeight: 400,
//     width: "58%",
// }

/* Mobile responsiveness */
@media (max-width: 768px) {
  .left-image {
 
  width: 90%;
  height: auto;
  object-fit: contain;
  align-items: center; 
  z-index: 10;
  margin: auto; 
  max-width: 96%;
        }
 
    
   
//     width: 100%;
//     max-width: 100%;
//   }

//     .center-paragraph {
//     margin-left: auto;
//     marginTop: auto,
//     width: 100%; /* Adjust width for mobile */
//     text-align: justify;
//   }


// }

/* Tablet responsiveness */
@media (max-width: 1024px) {
  .left-image {
  width: 90%;
  height: auto;
  object-fit: contain;
  align-items: center; 
  z-index: 10;
  margin: auto; 
  max-width: 150%;
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

  .content-section p {
    font-size: 1rem; /* Adjust font size for mobile paragraph */
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
            Covid 19
          </h1>
        </div>

        
      </main>

      <section
        className="py-12 px-6 content-section "
        
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
          Covid 19
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
          What is this {" "}
          <span style={{ color: "#006400" }}>EPIREPIES</span>?
        </h2>

        <p
          className="font-[Raleway] text-justify"
          style={{
            
            fontWeight: 400,
            marginTop: "20px", // Additional margin for the second line
           
          }}
        >
          Epirepies is a Natural Herbal Medicine, Containing the Extracts 
          of Timeless Medicinal Herbs. It Aids the Body in Curing Ailments 
          such as Phlegm, Dry Cough, Shortness of Breath, Runny Nose and 
          Pulmonary Fibrosis. This Natural Formulation is Especially 
          Capable of Boosting the immunity system to help prevent corona virus. 
          This herbal medicine is suitable for children, older people and pregnant women alike.
        </p>


        <p
          className="font-[Raleway] text-justify"
          style={{
            
            fontWeight: 400,
            marginTop: "20px", // Additional margin for the second line
           
          }}
        >
          EPIREPIES”, The drug manufactured against the COVID 19 virus, 
          was launched few months ago with MP Sisira Jayakody, the State 
          Minister of Indigenous Medicine, Rural and Ayurveda Hospital 
          Development and Community Health in Sri Lanka.
        </p>


        

        {/* Plant Image */}
        <img
          src={plantImage}
          alt="Plant"
          className="right-image"
        />

        <h2
          className="font-[playfair]"
          style={{
            
            fontWeight: 500,
            marginTop: "50px", // Additional margin for the second line
            marginLeft: "1px", // Additional margin for the second line
            fontSize: "2rem",
          }}
        >
          How does it {" "}
          <span style={{ color: "#006400" }}>work</span>?
        </h2>
        
        <h2
          className="font-[playfair] "
          style={{
            
            fontWeight: 500,
            marginLeft: "1px", // Additional margin for the second line
            fontSize: "2rem",
            color: "#5A3D00",
          }}
        >
          Epirepies
        </h2>
        {/* <h1 className="font-[Raleway] font-bold" >Let us stop the death of Covid19</h1> */}

    
        {/* <div className=" text-center " style={{width:"100%"}}>        
          <p
            className="font-[Raleway] font-normal  text-justify leading-relaxed ml-auto " style={{marginLeft: "570px" ,marginTop:"24px",fontWeight: 400, width:"58%",}}
          >
            According to Dr. Tharanga, Covid-19 causes tissue damage, increase of both LDH and 
            the accumulation of fluids in lungs, blood clotting and failure of internal organs and 
            Epirepies is capable of blocking all these conditions. Up to this time, Dr. Tharanga 
            has earned commendations for her medicine for dengue and several types of cancer. She has 
            altered and modified a particular medicine she has been using to treat lung cancer, blood 
            clotting and paralysis to make Epirepies. “I modified the medicine according to the symptoms 
            and the blood reports of Covid-19 patients. I have been using this medicine since 2012 to 
            treat lung cancer. When altering it, I had to change only the initial stages of the process”.
          </p>
          <p
            className="font-[Raleway] text-justify leading-relaxed ml-auto mt-10" style={{fontWeight: 400, width:"100%",}}
          >
            Dr. Tharanga’s Epirepies formulation decreases the excess level of WBC (which are infected with the 
            Covid-19 virus) till ‘real WBC’ comes. (Though there’s an excessive level of WBC due to the virus, 
            these WBC are not real WBC, they are infected.) “This medicine can remove the virus and bring the WBC 
            to its normal level. The virus also increases reactive protein. Epirepies lowers down the level of 
            reactive protein as well. Covid-19 dwindles the platelets count after blood clotting and decreases CD4. 
            Epirepies increases CD4 and brings all these complications to the usual level”.
          </p>
          <img
          src={EpirepiesImage}          
          className="left-image"
          />
        </div> */}


<div className="text-center" style={{ width: "100%" }}>
<p
  className="font-[Raleway] font-normal text-justify leading-relaxed ml-auto center-paragraph"
  
>
  According to Dr. Tharanga, Covid-19 causes tissue damage, increase of both LDH and
  the accumulation of fluids in lungs, blood clotting and failure of internal organs and
  Epirepies is capable of blocking all these conditions. Up to this time, Dr. Tharanga
  has earned commendations for her medicine for dengue and several types of cancer. She has
  altered and modified a particular medicine she has been using to treat lung cancer, blood
  clotting and paralysis to make Epirepies. “I modified the medicine according to the symptoms
  and the blood reports of Covid-19 patients. I have been using this medicine since 2012 to
  treat lung cancer. When altering it, I had to change only the initial stages of the process”.
</p>

  <p
    className="font-[Raleway] text-justify leading-relaxed ml-auto mt-10"
    style={{
      fontWeight: 400,
      width: "100%",
    }}
  >
    Dr. Tharanga’s Epirepies formulation decreases the excess level of WBC (which are infected with the
    Covid-19 virus) till ‘real WBC’ comes. (Though there’s an excessive level of WBC due to the virus,
    these WBC are not real WBC, they are infected.) “This medicine can remove the virus and bring the WBC
    to its normal level. The virus also increases reactive protein. Epirepies lowers down the level of
    reactive protein as well. Covid-19 dwindles the platelets count after blood clotting and decreases CD4.
    Epirepies increases CD4 and brings all these complications to the usual level”.
  </p>
  <div >
    <img src={EpirepiesImage} className="left-image" />
  </div>
  
</div>







        {/* <Highlight /> */}
        <div className='mt-3  justify-center '>
        <h1 className='flex justify-center pt-8'>
            <span className='text-5xl font-[playfair] blod text-center text-black font-semibold'>Highlights</span>
            
        </h1>
        <div className='flex justify-center' >
        <Highlight />
        </div>
        
        </div>

      </section>

      <DiseaseNavigator/>
    </div>
  )
}
