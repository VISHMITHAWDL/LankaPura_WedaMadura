import React from "react";
import landing3 from "../assets/Blog_Assets/blog2.jpeg";
import { ChevronDown } from "lucide-react";
import Cards2 from "../components/Blog_Compo/Cards";

const Blog = () => {
  const scrollToContent = () => {
    document.getElementById("content")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full overflow-hidden">
      <main
        className="relative flex flex-col items-center justify-center h-screen px-4 text-white bg-center bg-cover md:px-0"
        style={{ backgroundImage: `url(${landing3})` }}
      >
        <div className="mb-4 text-center font-medium " style={{ marginTop: '350px' }}>  
        <h1
          className="title font-[playfair] text-7xl"
          initial={{ opacity: 0, y: 30 }} // Start slightly lower
          animate={{ opacity: 1, y: 0 }} // Move to final position
          transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }} // Smooth cubic bezier easing

        >
          Welcome to the LankaPura Ayurveda Blog
        </h1>
        </div>

        <h1 className="text-center font-[Raleway] text-2xl text-[#EEE183]" style={{ marginTop: '20px' }}>
        “Discover the Healing Power of Herbs
        </h1>
        <h1 className="text-center font-[Raleway] text-2xl text-[#EEE183]">
        Ancient Wisdom, and Natural Remedies...!”
        </h1>
        <div className="animated-arrow-container">
          <span className="animated-arrow"></span> {/* Retain only the arrow */}
        </div>
      </main>

      {/* Vcards Section */}
      <div id="content" className="px-4 md:px-0">
        <div className="max-w-6xl mx-auto text-center">
          <p
            className="mb-6 text-base text-center md:text-md lg:text-lg"
            style={{
              color: "#006400",
              fontFamily: "'Playfair Display SC', serif",
              fontSize: "1.3rem",
              fontWeight: 540,
              marginTop: "2rem",
            }}
          >
            {"W e   c u r e   d i s e a s e s    w i t h   H e l a m e d i c i n e    i n    S r i L a n k a"
              .split("")
              .map((char, index) => (
                <span
                  key={index}
                  style={{ marginRight: char === " " ? "0.3em" : "0.001em" }}
                >
                  {char}
                </span>
              ))}
          </p>
          <p className="px-4 mb-6 text-base text-black md:text-md lg:text-lg">
            Our team of experts focuses on providing holistic treatments to
            ensure your complete well-being. Discover the difference of truly
            personalized care.
          </p>
        </div>

        <Cards2 />
      </div>
    </div>
  );
};

export default Blog;
