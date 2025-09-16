import React from "react";
import WPCU from "../../assets/Home_Assets/WWPC.png";
import Longcard from "./Longcard";

const Whypp2 = () => {
  return (
    <div className="relative px-4">
      {/* Title Section */}
      <div className="flex justify-center">
        <div className="text-center">
          <h1 className="font-[Raleway] mt-10 text-lg md:text-2xl tracking-[.3em] md:tracking-[.4em]">
            Trusted by people for authentic Ayurvedic care
          </h1>
          <h1 className="text-4xl md:text-6xl font-[playfair] font-bold text-black">
            Why People Choose
          </h1>
          <h1 className="text-[#348101] text-4xl md:text-6xl font-[playfair] font-bold">
            Us?
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-10">
        {/* Image on Mobile (Stacks Above Text) */}
        <div className="flex justify-center w-full md:w-[620px] mb-6 md:mb-0 md:mr-20">
          <img
            src={WPCU}
            alt="WHY PEOPLE CHOOSE US"
            className="w-[90%] md:w-full h-auto drop-shadow-2xl"
          />
        </div>

        {/* Long Cards */}
        <div className="flex flex-col items-center md:items-start">
          <div className="p-3 md:p-5">
            <Longcard
              title="Personalized Care"
              description="Experience quality service in a welcoming environment, offering treatments tailored to your unique needs through the power of Hela Osu."
            />
          </div>
          <div className="p-3 md:p-5">
            <Longcard
              title="Proven Expertise"
              description="Since 2012, we have consistently delivered exceptional results, demonstrating the effectiveness of Sri Lanka's indigenous medicine."
            />
          </div>
          <div className="p-3 md:p-5">
            <Longcard
              title="Holistic Healing"
              description="We believe no disease is incurable when traditional remedies are used with skill and care, ensuring the best outcomes for every treatment."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whypp2;
