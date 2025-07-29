

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Glide from "@glidejs/glide";

import developersImg from "../../assets/about/dev.jpg";
import softwareImg from "../../assets/about/software.jpg";
import coreBeleif from "../../assets/about/coreBeleif.png";
import Mission from "../../assets/about/Mission.jpg";
import team from "../../assets/about/Team.jpg";
import { Tooltip } from "primereact/tooltip";

import decrypt from "../../Helper";
import "./About.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

interface Product {
  refProductsName: string;
  refProductDescription: string;
  refProductLink: string;
  refProductLogo: string;
  signedImageUrl?: string;
}

const About: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [_hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const glideRef = useRef<Glide | null>(null);

  const fetchProducts = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/UserRoutes/ourProducts`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response: any) => {
        const data = decrypt(
          response.data[1],
          response.data[0],
          import.meta.env.VITE_ENCRYPTION_KEY
        );

        if (data.success) {
          const productList = [...data.productImage, ...data.productImage];
          setProducts(productList);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (products.length === 0) return;

    const instance = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1000,
      animationDuration: 4000,
      animationTimingFunc: "linear",
      perView: 3,
      gap: 20,
      breakpoints: {
        1024: { perView: 2 },
        640: { perView: 1 },
      },
    });

    instance.mount();
    glideRef.current = instance;

    return () => {
      instance.destroy();
    };
  }, [products]);

  const handleMouseEnter = (index: number) => {
    if (!glideRef.current) return;
    const glide = glideRef.current;

    // Pause glide and freeze animation (as shared earlier)
    glide.pause();
    const track = document.querySelector(
      '.glide-09 [data-glide-el="track"]'
    ) as HTMLElement;
    if (track) {
      const style = window.getComputedStyle(track);
      track.style.transform = style.transform;
      track.style.transition = "none";
    }

    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    if (!glideRef.current) return;
    const glide = glideRef.current;
    const track = document.querySelector(
      '.glide-09 [data-glide-el="track"]'
    ) as HTMLElement;
    if (track) {
      track.style.transition = "";
    }
    glide.play();
    setHoveredIndex(null);
  };

  return (
    <div>
      <Tooltip target=".product-tooltip" />
      {/* Banner */}
      <div className="AboutBanner">
        <div className="AboutBannerOverlay">
          <h1 className="AboutBannerTitle uppercase underline">About</h1>
        </div>
      </div>
      {/* Intro Section */}
      <div className="px-4 mt-20 flex items-center">
        <div className="flex flex-col lg:flex-row max-w-7xl mx-auto gap-3">
          <div className="flex-1 py-10 relative flex justify-center items-center">
            <div className="relative w-[100%] left-[10%] lg:left-0 lg:w-[60%]">
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

          <div className="flex-1 text-center lg:text-left mt-35">
            <div className="flex items-center justify-start mb-4">
              <div className="w-[70px] h-[3px] bg-[#fca000] mr-4"></div>
              <span className="text-xl uppercase font-bold">About Us</span>
            </div>

            <p className="text-[24px] uppercase font-bold mb-2 ">
              The Story Behind{" "}
              <span className="text-[#fca000] font-bold">ZAdroit</span> IT
              Solutions
            </p>

            <div className="space-y-3 text-justify text-[19px]">
              <p>
                What started as a small team of tech experts has grown into a
                trusted global IT solutions provider. With over a decade of
                experience, we help businesses streamline operations, boost
                productivity, and stay ahead with cutting-edge technology.
              </p>
              <p>
                Driven by innovation and strong partnerships, our mission
                remains the same empowering businesses with future-ready
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Products Carousel */}
      <div className="w-full md:w-10/12 mx-auto py-10">
        <p className="text-center text-[25px] uppercase font-bold">
          Our Products
        </p>

        <div className="glide-09 relative w-full overflow-hidden py-6">
          <div data-glide-el="track">
            <ul className="flex relative w-full overflow-hidden p-0">
              {products.map((product, index) => (
                <li
                  key={index}
                  id={`product-tooltip-${index}`} // unique id for tooltip target
                  className="px-4 relative cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => window.open(product.refProductLink, "_blank")}
                >
                  <img
                    src={product.signedImageUrl || coreBeleif}
                    alt={product.refProductsName}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = coreBeleif;
                    }}
  className="m-auto h-24 w-24 md:h-32 md:w-32 object-contain rounded-md"
                  />
                  <div className="text-center mt-2 font-semibold">
                    {product.refProductsName}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PrimeReact Tooltip bound to each product by id */}
        {products.map((product, index) => (
          <Tooltip
            key={`tooltip-${index}`}
            target={`#product-tooltip-${index}`}
            content={product.refProductDescription}
            mouseTrack
            mouseTrackLeft={10}
            showDelay={100}
            hideDelay={100}
            position="bottom"
          />
        ))}
      </div>
      {/* Belief Section */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto gap-10 items-stretch p-6">
        <div className="flex-1 flex flex-col">
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="w-[60px] h-[3px] bg-[#fca000] mr-4"></div>
              <h2 className="text-xl uppercase font-bold tracking-wide text-[#333]">
                Our Core Beliefs
              </h2>
            </div>
            <p className="text-black lg:text-4xl text-2xl font-bold">
              Shaping the future of businesses through intelligent, scalable,
              and innovative technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-2xl text-[#fca000]">🎯</div>
                <h3 className="text-lg font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-justify leading-relaxed text-base md:text-lg">
                We empower businesses through technology, driving innovation,
                growth, and success in a constantly evolving world.
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-2xl text-[#fca000]">🚀</div>
                <h3 className="text-lg font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-justify leading-relaxed text-base md:text-lg">
                We simplify technology for businesses by delivering smart,
                scalable, and secure IT solutions that enhance efficiency, boost
                the productivity, and drive long-term success.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex">
          <img
            src={Mission}
            alt="Core Belief Illustration"
            className="w-full h-120  object-cover rounded-xl shadow-xl"
          />
        </div>
      </div>
      {/* Our Team */}
      <div className="flex flex-col max-w-7xl mx-auto items-stretch p-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#fca000] uppercase underline tracking-wider">
            Our Team
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Your vision, our technology, together we build the future.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex-1 w-full">
            <img
              src={team}
              alt="Team ZAdroit"
              className="w-full h-90  object-cover rounded-xl shadow-xl"
            />
          </div>

          <div className="flex-1 w-full flex flex-col gap-4">
            <p className="text-3xl font-semibold text-[#111]">
              Transforming challenges into opportunities with cutting-edge
              digital solutions.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
              At <span className="font-bold text-[#fca000]">ZAdroit</span>, we
              believe that technology is the key to unlocking limitless business
              potential. As a leading provider of digital transformation
              solutions, we empower businesses to embrace innovation, optimize
              operations, and achieve sustainable growth in today’s
              fast-evolving digital world.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
              With a deep understanding of{" "}
              <span className="font-medium">cloud computing</span>,
              <span className="font-medium"> software development</span>,{" "}
              <span className="font-medium">AI</span>, and
              <span className="font-medium"> cybersecurity</span>, we craft
              solutions that drive efficiency, security, and success. Whether
              you’re a startup, SME, or enterprise, ZAdroit delivers the
              cutting-edge technology solutions you need to stay ahead of the
              competition.
            </p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default About;
