import React from "react";
import {
  Truck,
  MapPin,
  ShieldCheck,
  CreditCard,
  FileUp,
  BarChart2,
} from "lucide-react";

import ERP from "../../assets/home/ERP.jpg";
import "./Home.css";

const features = [
  {
    title: "Unified Courier Booking",
    desc: "Easily book parcels through major partners like DTDC, Delhivery, BlueDart — all from one place.",
    icon: <Truck className="w-7 h-7 text-[#fca000]" />,
  },
  {
    title: "Real-Time Parcel Tracking",
    desc: "No more manual checks. Track every consignment using live API integration.",
    icon: <MapPin className="w-7 h-7 text-[#fca000]" />,
  },
  {
    title: "Role-Based Access",
    desc: "Whether you're a Super Admin, Finance Officer, or Delivery Staff — everyone gets the right tools.",
    icon: <ShieldCheck className="w-7 h-7 text-[#fca000]" />,
  },
  {
    title: "Finance Made Easy",
    desc: "Automate dues tracking, reconcile payments, and stay on top of revenue — especially for regular customers.",
    icon: <CreditCard className="w-7 h-7 text-[#fca000]" />,
  },
  {
    title: "Bulk Booking Simplified",
    desc: "Upload hundreds of parcels via Excel. Prevents duplicates and errors for smooth ops.",
    icon: <FileUp className="w-7 h-7 text-[#fca000]" />,
  },
  {
    title: "Smart Reports & Analytics",
    desc: "Generate actionable reports, categorize bookings, and gain clarity into your logistics data.",
    icon: <BarChart2 className="w-7 h-7 text-[#fca000]" />,
  },
];

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Banner */}
      <div className="HomeBanner">
        <div className="HomeBannerOverlay">
          <h1 className="HomeBannerTitle uppercase underline"></h1>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Left: Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <div className="w-[70px] h-[3px] bg-[#fca000] mr-4"></div>
              <span className="text-lg font-bold text-[#090a58] uppercase">
                Why Choose Us
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 text-[#090a58] leading-tight">
              The Power of{" "}
              <span className="text-[#fca000]">Express Logistics</span>
            </h2>

            <p className="text-lg text-gray-700 mb-10 leading-relaxed text-justify">
              Managing courier operations or microfinance setups can be complex
              — juggling courier partners, tracking manually, managing Excel
              sheets, and using outdated tools. Express Logistics ERP simplifies
              all of this with intelligent automation and centralized control.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-[#090a58] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: ERP Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={ERP}
              alt="ERP System"
              className="w-full max-w-[500px] h-auto rounded-xl shadow-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Optional CTA Section */}
      <section className="bg-[#fca000] py-12 text-white text-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          Ready to streamline your logistics & finance?
        </h3>
        <p className="max-w-3xl mx-auto mb-6">
          Discover how Express Logistics ERP can revolutionize your operations
          with real-time tracking, role-based dashboards, and automation across
          departments.
        </p>
        <button className="bg-white text-[#fca000] px-6 py-3 font-semibold rounded-full shadow hover:bg-gray-100 transition">
          Request a Demo
        </button>
      </section>
    </div>
  );
};

export default Home;
