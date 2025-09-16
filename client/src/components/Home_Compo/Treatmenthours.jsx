import React from "react";
import TB from "../../assets/Home_Assets/Treatmenttimebanner.jpg";

const Treatmenthours = () => {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-center p-4">
      {/* Banner Image */}
      <div className="w-full md:w-auto flex justify-center">
        <img src={TB} alt="TREATMENT HOURS" className="max-w-full md:w-[1000px]" />
      </div>

      {/* Treatment Hours Section */}
      <div className="p-4 text-black text-center rounded-lg w-full md:w-auto">
        <h1 className="text-4xl md:text-6xl font-bold font-[playfair]">
          <span className="text-black">TREATMENT </span>
          <span className="text-[#348101]">HOURS</span>
        </h1>

        {/* Dengue & Corona Section */}
        <div className="mt-4 md:mt-6 text-base md:text-lg font-[Raleway]">
          <h2 className="font-bold text-lg md:text-xl">Dengue & Corona</h2>
          <div className="flex items-center gap-2 justify-center mt-2">
            <span className="text-lg md:text-xl">✔</span>
            <p>Everyday : 9:00 am – 5:00 pm</p>
          </div>
        </div>

        {/* Other Diseases Section */}
        <div className="mt-4 md:mt-6 text-base md:text-lg font-[Raleway]">
          <h2 className="font-bold text-lg md:text-xl">For All Other Diseases</h2>

          {/* Saturday */}
          <div className="flex items-center gap-2 justify-center mt-2">
            <span className="text-lg md:text-xl">✔</span>
            <p>Saturday : 9:00 am – 5:00 pm</p>
          </div>

          {/* Sunday */}
          <div className="flex items-center gap-2 justify-center mt-2">
            <span className="text-lg md:text-xl">✔</span>
            <p>Sunday &nbsp;&nbsp;: 9:00 am – 5:00 pm</p>
          </div>

          {/* Monday */}
          <div className="flex items-center gap-2 justify-center mt-2">
            <span className="text-lg md:text-xl">✔</span>
            <p>Monday &nbsp;&nbsp;: 9:30 am – 4:00 pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatmenthours;
