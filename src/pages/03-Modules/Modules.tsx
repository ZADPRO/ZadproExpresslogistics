import React from "react";
import "./Modules.css";

import centerImage from "../../assets/modules/booking.png";
import leftImage from "../../assets/modules/settings.png";
import rightImage from "../../assets/modules/upload.png";

const Modules: React.FC = () => {
  return (
    <div>
      <div className="modulesBanner">
        <div className="modulesBannerOverlay">
          <h1 className="modulesBannerTitle uppercase underline">MODULES</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="relative w-full h-[600px] mt-20">
          <img
            src={centerImage}
            alt="Center Module"
            className="w-[65%] mx-auto z-0 relative shadow-2xl rounded-xl transition duration-500 ease-in-out hover:scale-105"
          />

          <img
            src={leftImage}
            alt="Left Module"
            className="w-[40%] absolute top-[280px] left-0 z-10 shadow-xl rounded-xl transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
          />

          <img
            src={rightImage}
            alt="Right Module"
            className="w-[40%] absolute top-[200px] right-0 z-10 shadow-xl rounded-xl transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Modules;
