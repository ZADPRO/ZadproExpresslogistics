import React from "react";
import "./Modules.css";

import centerImage from "../../assets/modules/booking.png";
import leftImage from "../../assets/modules/settings.png";
import rightImage from "../../assets/modules/upload.png";

import Module001 from "../../assets/modules/001.jpg";

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
      <div className="flex">
        <div className="flex w-full md:w-10/12 mx-auto lg:flex-row flex-col p-4 gap-8">
          <div className="flex-1">
            <img src={Module001} alt="" />
          </div>
          <div className="flex-1 gap-3 w-full flex flex-col justify-center">
            <div className="flex items-center justify-start mb-2">
              <span
                className="text-[24px] font-semibold whitespace-nowrap uppercase"
                style={{
                  borderBottom: "3px solid #fca000",
                  color: "#000000",
                  paddingBottom: "2px",
                }}
              >
                <span className="text-[#fca000] font-bold">Role-Based </span>{" "}
                Dashboard :
              </span>
            </div>
            <p className="text-[20px] text-justify">
              Empower your team with tailored dashboards. Super Admin, Admin,
              Finance, and Employees each get access to what they need — and
              nothing they don't.{" "}
            </p>
            <div className="flex items-center justify-start mb-2 mt-5">
              <span
                className="text-[24px] font-semibold whitespace-nowrap uppercase"
                style={{
                  borderBottom: "3px solid #fca000",
                  color: "#000000",
                  paddingBottom: "2px",
                }}
              >
                <span className="text-[#fca000] font-bold">Parcel </span>
                Booking:{" "}
              </span>
            </div>{" "}
            <p className="text-[20px] text-justify">
              Book parcels with leading courier partners in just a few clicks.
              Choose document/non-document types, walk-in vs regular users, and
              auto-fill sender/receiver details.
            </p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Modules;
