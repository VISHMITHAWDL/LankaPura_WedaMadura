
import React from "react";
import landing from "../assets/treatment.png";

import kidneyImage from "../assets/kidney disease.jpg";
import cancerImage from "../assets/cancer.jpg";
import liverImage from "../assets/liver disease.jpg";
import diabeticImage from "../assets/diabetic.avif";
import dengueImage from "../assets/dengue.jpg";
import leptospirosisImage from "../assets/leptospirosis.jpg";
import itpImage from "../assets/ITP.webp";
import infertilityImage from "../assets/infertility.jpg";
import covid19Image from "../assets/covid19.jpg";
import stdImage from "../assets/STD.webp";
import sciaticaImage from "../assets/sciatica.webp";
import nsdImage from "../assets/Nervous System Diseases.jpg";
import migraineImage from "../assets/Migraine.webp";
import lunginfectionImage from "../assets/Lung Insfection.webp";
import lungdiseasesImage from "../assets/Lung diseases.webp";
import catarrhImage from "../assets/Catarrh.webp";
import arthritisImage from "../assets/Arthritis.jpg";


import Card from "../components/Ourtreat_Compo/Card"; // Import Card component
import "../css/Ourtreat.css"; // Ensure this CSS file exists and includes styles





const Ourtreat = () => {
  const cards = [
    
    {
      title: "Covid 19",
      description: "Herbal treatments for COVID-19 have been a topic of interest and discussion throughout the pandemic, with researchers,...",
      image: covid19Image,
      link: "/covid19",
    },
    {
      title: "Dengue",
      description: "Dengue is the most common and high-risk mosquito-borne viral infection. The virus which causes dengue is …. ",
      image: dengueImage,
      link: "/dengue",
    },
    {
      title: "Kidney disease (C.K.D)",
      description: "The kidneys are a pair of fist-sized organs located at the bottom of the rib cage. There is one kidney on each side...",
      image: kidneyImage,
      link: "/kidneydisease",
    },
    {
      title: "Liver Diseases",
      description: "Your liver is the largest organ inside your body which performs hundreds of tasks related to metabolism...",
      image: liverImage,
      link: "/liverdisease",
    },
    {
      title: "All Type of Cancers",
      description: "Cancer is an umbrella term for a large group of diseases caused when abnormal cells divide rapidly...",
      image: cancerImage,
      link: "/alltypeofcancers",
    },
    {
      title: "Diabetic",
      description: "Diabetes mellitus, commonly known as diabetes, is a metabolic disease that causes high blood sugar...",
      image: diabeticImage,
      link: "/diabetic",
    },    
    {
      title: "Leptospirosis",
      description: "Leptospirosis is a relatively rare bacterial infection that affects people and animals. It can pass from animals to...",
      image: leptospirosisImage,
      link: "/leptospirosis",
    },
    {
      title: "Sexually transmitted diseases",
      description: "Leptospirosis is a relatively rare bacterial infection that affects people and animals. It can pass from animals to...",
      image: stdImage,
      link: "/std",
    },
    {
      title: "I.T.P",
      description: "I.T.P is an immune disorder in which the blood doesn’t clot normally. This is a blood disorder characterized by a...",
      image: itpImage,
      link: "/itp",
    },
    {
      title: "Infertility",
      description: "Infertility is defined as trying to get pregnant (with frequent intercourse) for at least a year with no...",
      image: infertilityImage,
      link: "/infertility",
    },
    
    {
      title: "Sciatica",
      description: "Sciatica refers to pain that radiates along the path of the sciatic nerve, which branches from your lower back…",
      image: sciaticaImage,
      link: "/sciatica",
    },
    {
      title: "Nervous System Diseases",
      description: "Principal organs of the nervous system-Eyes –Ears –Sensory organs of taste – Sensory organs of smell…",
      image: nsdImage,
      link: "/nsd",
    },
    {
      title: "Migraine",
      description: "A migraine can cause severe throbbing pain or a pulsing sensation, usually on one side of the head. It’s often…",
      image: migraineImage,
      link: "/migraine",
    },
    {
      title: "Lung Infection",
      description: "Pneumonia is an infection of the lungs that may be caused by bacteria, viruses, or fungi. The infection causes the…",
      image: lunginfectionImage,
      link: "/lunginfection",
    },
    {
      title: "Lung diseases",
      description: "Lung disease refers to several types of diseases or disorders that prevent the lungs from functioning…",
      image: lungdiseasesImage,
      link: "/lungdiseases",
    },
    {
      title: "Catarrh",
      description: "The term catarrh, or postnasal drip, describes a buildup of mucus in the back of the nose, throat, or sinuses….",
      image: catarrhImage,
      link: "/catarrh",
    },
    {
      title: "Arthritis",
      description: "Arthritis is the swelling and tenderness of one or more of your joints. The main symptoms of arthritis are joint…",
      image: arthritisImage,
      link: "/arthritis",
    },
  ];

  return (
    <div>

      <main
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
        // style={{ backgroundImage: `url(${landing})` }}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 80%), url(${landing})`
        }}
      >
        

      <div className="mb-4 text-center font-medium " style={{ marginTop: '350px' }}>  
        <h1
          className="title font-[playfair] text-7xl"
          initial={{ opacity: 0, y: 30 }} // Start slightly lower
          animate={{ opacity: 1, y: 0 }} // Move to final position
          transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }} // Smooth cubic bezier easing

        >
          Tailored Treatments to You Heal and Thrive
        </h1>
      </div>

        <h1 className="text-center font-[Raleway] text-2xl text-[#EEE183]" style={{ marginTop: '20px' }}>
        “Experience the perfect blend of care and expertise with 
        </h1>
        <h1 className="text-center font-[Raleway] text-2xl text-[#EEE183]">
        our personalized treatments designed just for you...!”
        </h1>

        
        <div className="animated-arrow-container">
          <span className="animated-arrow"></span> {/* Retain only the arrow */}
        </div>

      </main>
      <section
        className="py-12 px-6"
        style={{
          backgroundColor: "#FEF7FF", // Light wheat background  #FEF7FF
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p
            className="text-lg mb-6 text-center  font-[playfair]"
            style={{
              color: "#006400",
              // fontFamily: "'Playfair Display SC', serif",
              fontSize: "1.3rem",
              fontWeight: 540,
              marginTop: "2rem",
            }}
          >
            {"W e   c u r e   d i s e a s e s    w i t h   H e l a m e d i c i n e    i n    S r i L a n k a"
              .split("")
              .map((char, index) => (
                <span key={index} style={{ marginRight: char === " " ? "0.3em" : "0.001em" }}>
                  {char}
                </span>
              ))}
          </p>
          <p
            className="text-lg mb-6 font-[Raleway]"
            style={{ color: "black" }}
          >
            Our team of experts focuses on providing holistic treatments to ensure your complete well-being. Discover the difference of truly personalized care.
          </p>

          <div className="flip-boxes">
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
                link={card.link}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ourtreat;










