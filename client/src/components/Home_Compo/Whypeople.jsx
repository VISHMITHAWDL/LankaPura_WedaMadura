import React from "react";
import WPCU from "../../assets/Home_Assets/WPCU.webp";
import Roundanimation from "./Roundanimation";
import Whypp2 from "./Whypp2";
import Archivement from "./Archivement";
import Ourlocation from "./Ourlocation";
import Pcetification from "./Product_cerifications";

const Whypeople = () => {
  const back = {
    backgroundImage: `url(${WPCU})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "auto", // Adjusted to auto for better responsiveness
    minHeight: "3050px", // Ensures minimum height
  };

  return (
    <div style={back} className="flex flex-col items-center">

      {/* Round Animation */}
      <div className="flex justify-center w-full ">
        <Roundanimation />
      </div>

      {/* Sections */}
      <div className="w-full">
        <Whypp2 />
      </div>
      <div className="w-full ">
        <Archivement />
      </div>
      <div className="w-full">
        <Pcetification />
      </div>
      <div className="w-full">
        <Ourlocation />
      </div>
    </div>
  );
};

export default Whypeople;
