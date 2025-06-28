import React from "react";

import developersImg from "../../assets/about/dev.jpg";
import softwareImg from "../../assets/about/software.jpg";
import coreBeleif from "../../assets/about/coreBeleif.png";

import "./About.css";

const About: React.FC = () => {
  return (
    <div>
      <div className="AboutBanner">
        <div className="AboutBannerOverlay">
          <h1 className="AboutBannerTitle uppercase underline">About</h1>
        </div>
      </div>

      <div className="px-4 mt-20 lg:mt-20 flex items-center">
        <div
          className="flex flex-col lg:flex-row items-center justify-content-center lg:items-start max-w-7xl mx-auto gap-3"
          style={{ alignItems: "center" }}
        >
          {/* Right Side: Image */}
          <div className="flex-1 py-10">
            <div className="flex-1 relative flex justify-center items-center">
              <div className="relative w-[100%] left-[10%] lg:left-[0] lg:w-[60%]">
                <img
                  src={softwareImg}
                  alt="Main"
                  className="lg:w-[400px] w-[280px] lg:h-[420px] h-[330px] rounded-lg shadow-lg rounded-ss-lg rounded-se-[40%]"
                />
              </div>

              <div className="absolute top-[65%] lg:left-[35%] left-[25%] w-4/6 lg:w-[70%] transform -translate-x-1/2 -translate-y-1/2">
                <img
                  src={developersImg}
                  alt="Sub"
                  className="w-[350px] h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Left Side: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Title with horizontal line */}
            <div className="flex items-center justify-start mb-4">
              <div className="w-[70px] h-[3px] bg-[#fca000] mr-4"></div>
              <span className="text-xl whitespace-nowrap uppercase font-bold">
                About Us
              </span>
            </div>

            <p className="text-[24px] uppercase font-bold mb-2">
              The Story Behind{" "}
              <span className="text-[#fca000] font-bold"> ZAdroit </span> IT
              SolutionS
            </p>

            <div className="flex flex-col space-y-3 text-justify text-[19px]">
              <p>
                What started as a small team of tech experts has grown into a
                trusted global IT solutions provider. With over a decade of
                experience, we help businesses streamline operations, boost
                productivity, and stay ahead with cutting-edge technology.
              </p>
              <p>
                Driven by innovation and strong partnerships, our mission
                remains the same—empowering businesses with future-ready
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto gap-8">
        <div className="flex-1">
          <div className="flex items-center justify-start mb-4">
            <div className="w-[70px] h-[3px] bg-[#fca000] mr-4"></div>
            <span className="text-xl whitespace-nowrap uppercase font-bold">
              Our Core Beliefs{" "}
            </span>
          </div>
          <p>
            Shaping the future of businesses through intelligent, scalable, and
            innovative technology solutions.
          </p>
          <div className="flex">
            <div className="flex-1">
              <div className="flex flex-col">
                <p>Icon</p>
                <p>Our Vision</p>
              </div>
              <p>
                We empower businesses through technology, driving innovation,
                growth, and success in a constantly evolving world.
              </p>
            </div>
            <div className="flex-1">
              <div className="flex flex-col">
                <p>Icon</p>
                <p>Our Mission</p>
              </div>
              <p>
                We simplify technology for businesses by delivering smart,
                scalable, and secure IT solutions that enhance efficiency, boost
                productivity, and drive long-term success.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img src={coreBeleif} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
