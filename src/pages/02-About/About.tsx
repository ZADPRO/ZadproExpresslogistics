// import React, { useEffect, useState } from "react";
// import axios from "axios";

// import developersImg from "../../assets/about/dev.jpg";
// import softwareImg from "../../assets/about/software.jpg";
// import coreBeleif from "../../assets/about/coreBeleif.png";

// import team from "../../assets/about/team.png";

// import Glide from "@glidejs/glide";

// import "./About.css";
// import decrypt from "../../Helper";

// // const clientImages = [
// //   coreBeleif,
// //   coreBeleif,
// //   coreBeleif,
// //   coreBeleif,
// //   coreBeleif,
// //   coreBeleif,
// //   coreBeleif,
// //   coreBeleif,
// //   coreBeleif,
// //   coreBeleif,
// // ];

// interface Product {
//   refProductsName: string;
//   refProductDescription: string;
//   refProductLink: string;
//   refProductLogo: string;
//   signedImageUrl: string;
// }

// const About: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [isHovering, setIsHovering] = useState(false);
//   let glideInstance: Glide | null = null;

//   // Fetch products from API
//   const fetchProducts = () => {
//     axios
//       .get(`${import.meta.env.VITE_API_URL}/UserRoutes/ourProducts`, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then((response: any) => {
//         const data = decrypt(
//           response.data[1],
//           response.data[0],
//           import.meta.env.VITE_ENCRYPTION_KEY
//         );
//         console.log("Decrypted product data:", data);

//         if (data.success) {
//           setProducts(data.productImage); // Or whatever the payload key is for products list
//         }
//       })
//       .catch((error) => {
//         console.error("Failed to fetch products:", error);
//       });
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // useEffect(() => {
//   //   const slider1 = new Glide(".glide-09", {
//   //     type: "carousel",
//   //     autoplay: 1,
//   //     animationDuration: 2500,
//   //     animationTimingFunc: "linear",
//   //     perView: 3,
//   //     classes: {
//   //       swipeable: "glide__swipeable",
//   //       dragging: "glide__dragging",
//   //       direction: {
//   //         ltr: "glide__ltr",
//   //         rtl: "glide__rtl",
//   //       },
//   //       type: {
//   //         slider: "glide__slider",
//   //         carousel: "glide__carousel",
//   //       },
//   //       slide: {
//   //         active: "glide__slide--active",
//   //         clone: "glide__slide--clone",
//   //       },
//   //       arrow: {
//   //         disabled: "glide__arrow--disabled",
//   //       },
//   //       nav: {
//   //         active: "glide__nav--active",
//   //       },
//   //     },
//   //     breakpoints: {
//   //       1024: {
//   //         perView: 2,
//   //       },
//   //       640: {
//   //         perView: 1,
//   //         gap: 36,
//   //       },
//   //     },
//   //   }).mount();

//   //   return () => {
//   //     slider1.destroy();
//   //   };
//   // }, []);

//   useEffect(() => {
//     if (products.length === 0) return;

//     glideInstance = new Glide(".glide-09", {
//       type: "carousel",
//       autoplay: 1000,
//       animationDuration: 2500,
//       animationTimingFunc: "linear",
//       perView: 3,
//       classes: {
//         swipeable: "glide__swipeable",
//         dragging: "glide__dragging",
//         direction: {
//           ltr: "glide__ltr",
//           rtl: "glide__rtl",
//         },
//         type: {
//           slider: "glide__slider",
//           carousel: "glide__carousel",
//         },
//         slide: {
//           active: "glide__slide--active",
//           clone: "glide__slide--clone",
//         },
//         arrow: {
//           disabled: "glide__arrow--disabled",
//         },
//         nav: {
//           active: "glide__nav--active",
//         },
//       },
//       breakpoints: {
//         1024: {
//           perView: 2,
//         },
//         640: {
//           perView: 1,
//           gap: 36,
//         },
//       },
//     });

//     glideInstance.mount();

//     return () => {
//       glideInstance?.destroy();
//     };
//   }, [products]);

//   // Handlers for hover to pause and play glide
//   const handleMouseEnter = () => {
//     glideInstance?.pause();
//     setIsHovering(true);
//   };

//   const handleMouseLeave = () => {
//     glideInstance?.play();
//     setIsHovering(false);
//   };
//   return (
//     <div>
//       <div className="AboutBanner">
//         <div className="AboutBannerOverlay">
//           <h1 className="AboutBannerTitle uppercase underline">About</h1>
//         </div>
//       </div>

//       <div className="px-4 mt-20 lg:mt-20 flex items-center">
//         <div
//           className="flex flex-col lg:flex-row items-center justify-content-center lg:items-start max-w-7xl mx-auto gap-3"
//           style={{ alignItems: "center" }}
//         >
//           {/* Right Side: Image */}
//           <div className="flex-1 py-10">
//             <div className="flex-1 relative flex justify-center items-center">
//               <div className="relative w-[100%] left-[10%] lg:left-[0] lg:w-[60%]">
//                 <img
//                   src={softwareImg}
//                   alt="Main"
//                   className="lg:w-[400px] w-[280px] lg:h-[420px] h-[330px] rounded-lg shadow-lg rounded-ss-lg rounded-se-[40%]"
//                 />
//               </div>

//               <div className="absolute top-[65%] lg:left-[35%] left-[25%] w-4/6 lg:w-[70%] transform -translate-x-1/2 -translate-y-1/2">
//                 <img
//                   src={developersImg}
//                   alt="Sub"
//                   className="w-[350px] h-auto rounded-lg shadow-xl"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Left Side: Text Content */}
//           <div className="flex-1 text-center lg:text-left">
//             {/* Title with horizontal line */}
//             <div className="flex items-center justify-start mb-4">
//               <div className="w-[70px] h-[3px] bg-[#fca000] mr-4"></div>
//               <span className="text-xl whitespace-nowrap uppercase font-bold">
//                 About Us
//               </span>
//             </div>

//             <p className="text-[24px] uppercase font-bold mb-2">
//               The Story Behind{" "}
//               <span className="text-[#fca000] font-bold"> ZAdroit </span> IT
//               SolutionS
//             </p>

//             <div className="flex flex-col space-y-3 text-justify text-[19px]">
//               <p>
//                 What started as a small team of tech experts has grown into a
//                 trusted global IT solutions provider. With over a decade of
//                 experience, we help businesses streamline operations, boost
//                 productivity, and stay ahead with cutting-edge technology.
//               </p>
//               <p>
//                 Driven by innovation and strong partnerships, our mission
//                 remains the same: empowering businesses with future-ready
//                 solutions.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-full md:w-10/12 mx-auto py-10">
//         <p className="text-center text-[25px] uppercase font-bold">
//           Our Products
//         </p>

//         <div className="glide-09 relative w-full overflow-hidden py-6">
//           <div data-glide-el="track">
//             <ul className="flex relative w-full overflow-hidden p-0">
//               {/* {products.map((product, index) => (
//                 <li
//                   key={index}
//                   className="px-4 relative cursor-pointer"
//                   onMouseEnter={handleMouseEnter}
//                   onMouseLeave={handleMouseLeave}
//                   onClick={() => window.open(product.refProductLink, "_blank")}
//                 >
//                   <img
//                     src={product.refProductLogo}
//                     alt={product.refProductsName}
//                     className="m-auto h-30 max-h-full w-auto max-w-full rounded-md"
//                   />
//                   <div className="text-center mt-2 font-semibold">
//                     {product.refProductsName}
//                   </div>

//                   {isHovering && (
//                     <div
//                       className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 max-w-xs p-3 bg-black bg-opacity-75 text-white text-sm rounded shadow-lg z-50"
//                       style={{ pointerEvents: "none" }}
//                     >
//                       {product.refProductDescription}
//                     </div>
//                   )}
//                 </li>
//               ))} */}
//               {products.map((product, index) => (
//                 <li
//                   key={index}
//                   className="px-4 relative cursor-pointer"
//                   onMouseEnter={handleMouseEnter}
//                   onMouseLeave={handleMouseLeave}
//                   onClick={() => window.open(product.refProductLink, "_blank")}
//                 >
//                   <img
//                     src={product.refProductLogo || "/coreBeleif"} // fallback if undefined
//                     alt={product.refProductsName}
//                     onError={(e) => {
//                       e.currentTarget.onerror = null; // prevent infinite loop
//                       e.currentTarget.src = "/coreBeleif"; // set default image
//                     }}
//                     className="m-auto h-30 max-h-full w-auto max-w-full rounded-md"
//                   />
//                   <div className="text-center mt-2 font-semibold">
//                     {product.refProductsName}
//                   </div>

//                   {isHovering && (
//                     <div
//                       className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 max-w-xs p-3 bg-black bg-opacity-75 text-white text-sm rounded shadow-lg z-50"
//                       style={{ pointerEvents: "none" }}
//                     >
//                       {product.refProductDescription}
//                     </div>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col lg:flex-row max-w-7xl mx-auto gap-10 items-stretch p-6">
//         {/* Left Content */}
//         <div className="flex-1 flex flex-col">
//           {/* Section Heading */}
//           <div className="mb-6">
//             <div className="flex items-center mb-4">
//               <div className="w-[60px] h-[3px] bg-[#fca000] mr-4"></div>
//               <h2 className="text-xl uppercase font-bold tracking-wide text-[#333]">
//                 Our Core Beliefs
//               </h2>
//             </div>
//             <p className="text-black lg:text-4xl text-2xl font-bold">
//               Shaping the future of businesses through intelligent, scalable,
//               and innovative technology solutions.
//             </p>
//           </div>

//           {/* Vision and Mission Blocks */}
//           <div className="grid md:grid-cols-2 gap-6">
//             {/* Vision */}
//             <div className="p-5 bg-white rounded-xl shadow-lg border border-gray-200">
//               <div className="flex items-center gap-3 mb-2">
//                 <div className="text-2xl text-[#fca000]">🎯</div>
//                 <h3 className="text-lg font-bold text-gray-900">Our Vision</h3>
//               </div>
//               <p className="text-gray-600 text-lg text-justify">
//                 We empower businesses through technology, driving innovation,
//                 growth, and success in a constantly evolving world.
//               </p>
//             </div>

//             {/* Mission */}
//             <div className="p-5 bg-white rounded-xl shadow-lg border border-gray-200">
//               <div className="flex items-center gap-3 mb-2">
//                 <div className="text-2xl text-[#fca000]">🚀</div>
//                 <h3 className="text-lg font-bold text-gray-900">Our Mission</h3>
//               </div>
//               <p className="text-gray-600 text-lg text-justify">
//                 We simplify technology for businesses by delivering smart,
//                 scalable, and secure IT solutions that enhance efficiency, boost
//                 productivity, and drive long-term success.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="flex-1 flex">
//           <img
//             src={coreBeleif}
//             alt="Core Belief Illustration"
//             className="w-full h-auto lg:h-full object-cover rounded-xl shadow-xl"
//           />
//         </div>
//       </div>

//       <div className="flex flex-col max-w-7xl mx-auto items-stretch p-6">
//         {/* Section Header */}
//         <div className="text-center mb-10">
//           <h2 className="text-3xl font-bold text-[#fca000] uppercase underline tracking-wider">
//             Our Team
//           </h2>
//           <p className="text-lg text-gray-600 mt-2">
//             Your vision, our technology, together we build the future.
//           </p>
//         </div>

//         {/* Content */}
//         <div className="flex flex-col lg:flex-row gap-8 items-center">
//           {/* Image */}
//           <div className="flex-1 w-full">
//             <img
//               src={team}
//               alt="Team ZAdroit"
//               className="w-full h-auto lg:h-full object-cover rounded-xl shadow-xl"
//             />
//           </div>

//           {/* Text Block */}
//           <div className="flex-1 w-full flex flex-col gap-4">
//             <p className="text-3xl font-semibold text-[#111]">
//               Transforming challenges into opportunities with cutting-edge
//               digital solutions.
//             </p>
//             <p className="text-gray-700 leading-relaxed text-justify">
//               At <span className="font-bold text-[#fca000]">ZAdroit</span>, we
//               believe that technology is the key to unlocking limitless business
//               potential. As a leading provider of digital transformation
//               solutions, we empower businesses to embrace innovation, optimize
//               operations, and achieve sustainable growth in today’s
//               fast-evolving digital world.
//             </p>
//             <p className="text-gray-700 leading-relaxed text-justify">
//               With a deep understanding of{" "}
//               <span className="font-medium">cloud computing</span>,{" "}
//               <span className="font-medium">software development</span>,{" "}
//               <span className="font-medium">AI</span>, and{" "}
//               <span className="font-medium">cybersecurity</span>, we craft
//               solutions that drive efficiency, security, and success. Whether
//               you’re a startup, SME, or enterprise, ZAdroit delivers the
//               cutting-edge technology solutions you need to stay ahead of the
//               competition.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

//   v2 ---- version 2

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// import developersImg from "../../assets/about/dev.jpg";
// import softwareImg from "../../assets/about/software.jpg";
// import coreBeleif from "../../assets/about/coreBeleif.png";
// import team from "../../assets/about/team.png";
// import Glide from "@glidejs/glide";

// import decrypt from "../../Helper";
// import "./About.css";

// interface Product {
//   refProductsName: string;
//   refProductDescription: string;
//   refProductLink: string;
//   refProductLogo: string;
//   signedImageUrl?: string;
// }

// const About: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   let glideInstance: Glide | null = null;

//   const fetchProducts = () => {
//     axios
//       .get(`${import.meta.env.VITE_API_URL}/UserRoutes/ourProducts`, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then((response: any) => {
//         const data = decrypt(
//           response.data[1],
//           response.data[0],
//           import.meta.env.VITE_ENCRYPTION_KEY
//         );
//         console.log("Decrypted product data:", data);

//         if (data.success) {
//           setProducts(data.productImage);
//         }
//       })
//       .catch((error) => {
//         console.error("Failed to fetch products:", error);
//       });
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     if (products.length === 0) return;

//     glideInstance = new Glide(".glide-09", {
//       type: "carousel",
//       autoplay: 1000,
//       animationDuration: 2500,
//       animationTimingFunc: "linear",
//       perView: 3,
//       breakpoints: {
//         1024: { perView: 2 },
//         640: { perView: 1, gap: 36 },
//       },
//     });

//     glideInstance.mount();
//     return () => {
//       glideInstance?.destroy();
//     };
//   }, [products]);

//   const handleMouseEnter = (index: number) => {
//     glideInstance?.pause();
//     setHoveredIndex(index);
//   };

//   const handleMouseLeave = () => {
//     glideInstance?.play();
//     setHoveredIndex(null);
//   };

//   const slider = new Glide(".glide-09", {
//   type: "carousel",
//   autoplay: 1, // setting to 1ms gives an almost continuous scroll
//   animationDuration: 3000, // slower transition to make it smooth
//   animationTimingFunc: "linear", // linear motion for continuous effect
//   perView: 3, // or 5 depending on your design
//   gap: 20, // gap between items
// });
// slider.mount();

//   return (
//     <div>
//       {/* Banner */}
//       <div className="AboutBanner">
//         <div className="AboutBannerOverlay">
//           <h1 className="AboutBannerTitle uppercase underline">About</h1>
//         </div>
//       </div>

//       {/* Intro Section */}
//       <div className="px-4 mt-20 flex items-center">
//         <div className="flex flex-col lg:flex-row max-w-7xl mx-auto gap-3">
//           <div className="flex-1 py-10 relative flex justify-center items-center">
//             <div className="relative w-[100%] left-[10%] lg:left-0 lg:w-[60%]">
//               <img
//                 src={softwareImg}
//                 alt="Main"
//                 className="lg:w-[400px] w-[280px] lg:h-[420px] h-[330px] rounded-lg shadow-lg rounded-ss-lg rounded-se-[40%]"
//               />
//             </div>
//             <div className="absolute top-[65%] lg:left-[35%] left-[25%] w-4/6 lg:w-[70%] transform -translate-x-1/2 -translate-y-1/2">
//               <img
//                 src={developersImg}
//                 alt="Sub"
//                 className="w-[350px] h-auto rounded-lg shadow-xl"
//               />
//             </div>
//           </div>

//           {/* About Us Text */}
//           <div className="flex-1 text-center lg:text-left">
//             <div className="flex items-center justify-start mb-4">
//               <div className="w-[70px] h-[3px] bg-[#fca000] mr-4"></div>
//               <span className="text-xl uppercase font-bold">About Us</span>
//             </div>

//             <p className="text-[24px] uppercase font-bold mb-2">
//               The Story Behind{" "}
//               <span className="text-[#fca000] font-bold">ZAdroit</span> IT
//               Solutions
//             </p>

//             <div className="space-y-3 text-justify text-[19px]">
//               <p>
//                 What started as a small team of tech experts has grown into a
//                 trusted global IT solutions provider. With over a decade of
//                 experience, we help businesses streamline operations, boost
//                 productivity, and stay ahead with cutting-edge technology.
//               </p>
//               <p>
//                 Driven by innovation and strong partnerships, our mission
//                 remains the same: empowering businesses with future-ready
//                 solutions.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Products Carousel */}
//       <div className="w-full md:w-10/12 mx-auto py-10">
//         <p className="text-center text-[25px] uppercase font-bold">
//           Our Products
//         </p>

//         <div className="glide-09 relative w-full overflow-hidden py-6">
//           <div data-glide-el="track">
//             <ul className="flex relative w-full overflow-hidden p-0">
//               {products.map((product, index) => (
//                 <li
//                   key={index}
//                   className="px-4 relative cursor-pointer"
//                   onMouseEnter={() => handleMouseEnter(index)}
//                   onMouseLeave={handleMouseLeave}
//                   onClick={() => window.open(product.refProductLink, "_blank")}
//                 >
//                   <img
//                     src={product.refProductLogo || coreBeleif}
//                     alt={product.refProductsName}
//                     onError={(e) => {
//                       e.currentTarget.onerror = null;
//                       e.currentTarget.src = coreBeleif;
//                     }}
//                     className="m-auto h-30 max-h-full w-auto max-w-full rounded-md"
//                   />
//                   <div className="text-center mt-2 font-semibold">
//                     {product.refProductsName}
//                   </div>

//                   {hoveredIndex === index && (
//                     <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 max-w-xs p-3 bg-black bg-opacity-75 text-white text-sm rounded shadow-lg z-50">
//                       {product.refProductDescription}
//                     </div>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Belief Section */}
//       <div className="flex flex-col lg:flex-row max-w-7xl mx-auto gap-10 items-stretch p-6">
//         <div className="flex-1 flex flex-col">
//           <div className="mb-6">
//             <div className="flex items-center mb-4">
//               <div className="w-[60px] h-[3px] bg-[#fca000] mr-4"></div>
//               <h2 className="text-xl uppercase font-bold tracking-wide text-[#333]">
//                 Our Core Beliefs
//               </h2>
//             </div>
//             <p className="text-black lg:text-4xl text-2xl font-bold">
//               Shaping the future of businesses through intelligent, scalable,
//               and innovative technology solutions.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="p-5 bg-white rounded-xl shadow-lg border border-gray-200">
//               <div className="flex items-center gap-3 mb-2">
//                 <div className="text-2xl text-[#fca000]">🎯</div>
//                 <h3 className="text-lg font-bold text-gray-900">Our Vision</h3>
//               </div>
//               <p className="text-gray-600 text-lg text-justify">
//                 We empower businesses through technology, driving innovation,
//                 growth, and success in a constantly evolving world.
//               </p>
//             </div>

//             <div className="p-5 bg-white rounded-xl shadow-lg border border-gray-200">
//               <div className="flex items-center gap-3 mb-2">
//                 <div className="text-2xl text-[#fca000]">🚀</div>
//                 <h3 className="text-lg font-bold text-gray-900">Our Mission</h3>
//               </div>
//               <p className="text-gray-600 text-lg text-justify">
//                 We simplify technology for businesses by delivering smart,
//                 scalable, and secure IT solutions that enhance efficiency, boost
//                 productivity, and drive long-term success.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex-1 flex">
//           <img
//             src={coreBeleif}
//             alt="Core Belief Illustration"
//             className="w-full h-auto lg:h-full object-cover rounded-xl shadow-xl"
//           />
//         </div>
//       </div>

//       {/* Our Team */}
//       <div className="flex flex-col max-w-7xl mx-auto items-stretch p-6">
//         <div className="text-center mb-10">
//           <h2 className="text-3xl font-bold text-[#fca000] uppercase underline tracking-wider">
//             Our Team
//           </h2>
//           <p className="text-lg text-gray-600 mt-2">
//             Your vision, our technology, together we build the future.
//           </p>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-8 items-center">
//           <div className="flex-1 w-full">
//             <img
//               src={team}
//               alt="Team ZAdroit"
//               className="w-full h-auto lg:h-full object-cover rounded-xl shadow-xl"
//             />
//           </div>

//           <div className="flex-1 w-full flex flex-col gap-4">
//             <p className="text-3xl font-semibold text-[#111]">
//               Transforming challenges into opportunities with cutting-edge
//               digital solutions.
//             </p>
//             <p className="text-gray-700 leading-relaxed text-justify">
//               At <span className="font-bold text-[#fca000]">ZAdroit</span>, we
//               believe that technology is the key to unlocking limitless business
//               potential. As a leading provider of digital transformation
//               solutions, we empower businesses to embrace innovation, optimize
//               operations, and achieve sustainable growth in today’s
//               fast-evolving digital world.
//             </p>
//             <p className="text-gray-700 leading-relaxed text-justify">
//               With a deep understanding of{" "}
//               <span className="font-medium">cloud computing</span>,{" "}
//               <span className="font-medium">software development</span>,{" "}
//               <span className="font-medium">AI</span>, and{" "}
//               <span className="font-medium">cybersecurity</span>, we craft
//               solutions that drive efficiency, security, and success. Whether
//               you’re a startup, SME, or enterprise, ZAdroit delivers the
//               cutting-edge technology solutions you need to stay ahead of the
//               competition.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

// import axios from "axios";

// import developersImg from "../../assets/about/dev.jpg";
// import softwareImg from "../../assets/about/software.jpg";
// import coreBeleif from "../../assets/about/coreBeleif.png";
// import team from "../../assets/about/team.png";
// import Glide from "@glidejs/glide";

// import decrypt from "../../Helper";
// import "./About.css";

// import React, { useEffect, useState, useRef } from "react";

// // import { Tooltip } from "primereact/tooltip";

// import "./About.css";
// import "primereact/resources/themes/lara-light-indigo/theme.css";
// import "primereact/resources/primereact.min.css";

// interface Product {
//   refProductsName: string;
//   refProductDescription: string;
//   refProductLink: string;
//   refProductLogo: string;
//   signedImageUrl?: string;
// }

// const About: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const glideRef = useRef<Glide | null>(null);

//   const fetchProducts = () => {
//     axios
//       .get(`${import.meta.env.VITE_API_URL}/UserRoutes/ourProducts`, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then((response: any) => {
//         const data = decrypt(
//           response.data[1],
//           response.data[0],
//           import.meta.env.VITE_ENCRYPTION_KEY
//         );

//         if (data.success) {
//           // Duplicate items to ensure continuous scroll even for small lists
//           const productList = [...data.productImage, ...data.productImage];
//           setProducts(productList);
//         }
//       })
//       .catch((error) => {
//         console.error("Failed to fetch products:", error);
//       });
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     if (products.length === 0) return;

//     const instance = new Glide(".glide-09", {
//       type: "carousel",
//       autoplay: 1,
//       animationDuration: 4000,
//       animationTimingFunc: "linear",
//       perView: 3,
//       gap: 20,
//       breakpoints: {
//         1024: { perView: 2 },
//         640: { perView: 1 },
//       },
//     });

//     instance.mount();
//     glideRef.current = instance;

//     return () => {
//       instance.destroy();
//     };
//   }, [products]);

//   const handleMouseEnter = (index: number) => {
//     glideRef.current?.pause();
//     setHoveredIndex(index);
//   };

//   const handleMouseLeave = () => {
//     glideRef.current?.play();
//     setHoveredIndex(null);
//   };

//   return (
//     <div>
//       {/* Banner */}
//       <div className="AboutBanner">
//         <div className="AboutBannerOverlay">
//           <h1 className="AboutBannerTitle uppercase underline">About</h1>
//         </div>
//       </div>

//       {/* Intro Section */}
//       <div className="px-4 mt-20 flex items-center">
//         <div className="flex flex-col lg:flex-row max-w-7xl mx-auto gap-3">
//           <div className="flex-1 py-10 relative flex justify-center items-center">
//             <div className="relative w-[100%] left-[10%] lg:left-0 lg:w-[60%]">
//               <img
//                 src={softwareImg}
//                 alt="Main"
//                 className="lg:w-[400px] w-[280px] lg:h-[420px] h-[330px] rounded-lg shadow-lg rounded-ss-lg rounded-se-[40%]"
//               />
//             </div>
//             <div className="absolute top-[65%] lg:left-[35%] left-[25%] w-4/6 lg:w-[70%] transform -translate-x-1/2 -translate-y-1/2">
//               <img
//                 src={developersImg}
//                 alt="Sub"
//                 className="w-[350px] h-auto rounded-lg shadow-xl"
//               />
//             </div>
//           </div>

//           <div className="flex-1 text-center lg:text-left">
//             <div className="flex items-center justify-start mb-4">
//               <div className="w-[70px] h-[3px] bg-[#fca000] mr-4"></div>
//               <span className="text-xl uppercase font-bold">About Us</span>
//             </div>

//             <p className="text-[24px] uppercase font-bold mb-2">
//               The Story Behind <span className="text-[#fca000] font-bold">ZAdroit</span> IT
//               Solutions
//             </p>

//             <div className="space-y-3 text-justify text-[19px]">
//               <p>
//                 What started as a small team of tech experts has grown into a trusted global IT
//                 solutions provider. With over a decade of experience, we help businesses streamline
//                 operations, boost productivity, and stay ahead with cutting-edge technology.
//               </p>
//               <p>
//                 Driven by innovation and strong partnerships, our mission remains the same:
//                 empowering businesses with future-ready solutions.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Products Carousel */}
//      <div className="w-full md:w-10/12 mx-auto py-10">
//         <p className="text-center text-[25px] uppercase font-bold">Our Products</p>

//         <div className="glide-09 relative w-full overflow-hidden py-6">
//           <div data-glide-el="track">
//             <ul className="flex relative w-full overflow-hidden p-0">
//               {products.map((product, index) => (
//                 <li
//                   key={index}
//                   className="px-4 relative cursor-pointer product-tooltip"
//                   data-pr-tooltip={product.refProductDescription}
//                   onMouseEnter={() => handleMouseEnter(index)}
//                   onMouseLeave={handleMouseLeave}
//                   onClick={() => window.open(product.refProductLink, "_blank")}
//                 >
//                   <img
//                     src={product.refProductLogo || coreBeleif}
//                     alt={product.refProductsName}
//                     onError={(e) => {
//                       e.currentTarget.onerror = null;
//                       e.currentTarget.src = coreBeleif;
//                     }}
//                     className="m-auto h-30 max-h-full w-auto max-w-full rounded-md"
//                   />
//                   <div className="text-center mt-2 font-semibold">
//                     {product.refProductsName}
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Belief Section */}
//       <div className="flex flex-col lg:flex-row max-w-7xl mx-auto gap-10 items-stretch p-6">
//         <div className="flex-1 flex flex-col">
//           <div className="mb-6">
//             <div className="flex items-center mb-4">
//               <div className="w-[60px] h-[3px] bg-[#fca000] mr-4"></div>
//               <h2 className="text-xl uppercase font-bold tracking-wide text-[#333]">
//                 Our Core Beliefs
//               </h2>
//             </div>
//             <p className="text-black lg:text-4xl text-2xl font-bold">
//               Shaping the future of businesses through intelligent, scalable,
//               and innovative technology solutions.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="p-5 bg-white rounded-xl shadow-lg border border-gray-200">
//               <div className="flex items-center gap-3 mb-2">
//                 <div className="text-2xl text-[#fca000]">🎯</div>
//                 <h3 className="text-lg font-bold text-gray-900">Our Vision</h3>
//               </div>
//               <p className="text-gray-600 text-lg text-justify">
//                 We empower businesses through technology, driving innovation,
//                 growth, and success in a constantly evolving world.
//               </p>
//             </div>

//             <div className="p-5 bg-white rounded-xl shadow-lg border border-gray-200">
//               <div className="flex items-center gap-3 mb-2">
//                 <div className="text-2xl text-[#fca000]">🚀</div>
//                 <h3 className="text-lg font-bold text-gray-900">Our Mission</h3>
//               </div>
//               <p className="text-gray-600 text-lg text-justify">
//                 We simplify technology for businesses by delivering smart,
//                 scalable, and secure IT solutions that enhance efficiency, boost
//                 productivity, and drive long-term success.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex-1 flex">
//           <img
//             src={coreBeleif}
//             alt="Core Belief Illustration"
//             className="w-full h-auto lg:h-full object-cover rounded-xl shadow-xl"
//           />
//         </div>
//       </div>

//       {/* Our Team */}
//       <div className="flex flex-col max-w-7xl mx-auto items-stretch p-6">
//         <div className="text-center mb-10">
//           <h2 className="text-3xl font-bold text-[#fca000] uppercase underline tracking-wider">
//             Our Team
//           </h2>
//           <p className="text-lg text-gray-600 mt-2">
//             Your vision, our technology, together we build the future.
//           </p>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-8 items-center">
//           <div className="flex-1 w-full">
//             <img
//               src={team}
//               alt="Team ZAdroit"
//               className="w-full h-auto lg:h-full object-cover rounded-xl shadow-xl"
//             />
//           </div>

//           <div className="flex-1 w-full flex flex-col gap-4">
//             <p className="text-3xl font-semibold text-[#111]">
//               Transforming challenges into opportunities with cutting-edge
//               digital solutions.
//             </p>
//             <p className="text-gray-700 leading-relaxed text-justify">
//               At <span className="font-bold text-[#fca000]">ZAdroit</span>, we believe that technology
//               is the key to unlocking limitless business potential. As a leading provider of digital
//               transformation solutions, we empower businesses to embrace innovation, optimize
//               operations, and achieve sustainable growth in today’s fast-evolving digital world.
//             </p>
//             <p className="text-gray-700 leading-relaxed text-justify">
//               With a deep understanding of <span className="font-medium">cloud computing</span>,
//               <span className="font-medium"> software development</span>, <span className="font-medium">AI</span>, and
//               <span className="font-medium"> cybersecurity</span>, we craft solutions that drive efficiency, security,
//               and success. Whether you’re a startup, SME, or enterprise, ZAdroit delivers the
//               cutting-edge technology solutions you need to stay ahead of the competition.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

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
