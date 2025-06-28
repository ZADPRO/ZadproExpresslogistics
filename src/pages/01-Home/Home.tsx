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
    desc: "Track consignments live with integrated APIs — no manual work.",
    icon: <MapPin className="w-7 h-7 text-[#fca000]" />,
  },
  {
    title: "Role-Based Access",
    desc: "Each user type—Admin, Finance, Staff—gets tailored dashboards & access.",
    icon: <ShieldCheck className="w-7 h-7 text-[#fca000]" />,
  },
  {
    title: "Finance Automation",
    desc: "Track dues, reconcile payments, and automate financial logs.",
    icon: <CreditCard className="w-7 h-7 text-[#fca000]" />,
  },
  {
    title: "Bulk Upload & Processing",
    desc: "Upload and process hundreds of parcels via Excel in one go.",
    icon: <FileUp className="w-7 h-7 text-[#fca000]" />,
  },
  {
    title: "Analytics & Reports",
    desc: "Get insights into logistics and finances with customizable reports.",
    icon: <BarChart2 className="w-7 h-7 text-[#fca000]" />,
  },
];

const stats = [
  { label: "Happy Clients", value: "500+" },
  { label: "Parcels Processed", value: "1.2M+" },
  { label: "Finance Records", value: "950K+" },
  { label: "Reports Generated", value: "30K+" },
];

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Banner */}
      <div className="HomeBanner">
        <div className="HomeBannerOverlay flex items-center justify-center h-[350px] text-white">
          <h1 className="HomeBannerTitle text-4xl md:text-5xl font-bold uppercase underline">
            {/* Welcome to Express Logistics ERP */}
          </h1>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-[60px] h-[3px] bg-[#fca000] mr-3"></div>
              <span className="uppercase text-xl font-semibold text-[#090a58]">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#090a58] leading-tight">
              Streamline Your Logistics & Finance with{" "}
              <span className="text-[#fca000]">One Platform</span>
            </h2>
            <p className="text-gray-700 text-lg text-justify">
              Our ERP system is purpose-built for courier and microfinance
              businesses. We bring automation, real-time visibility, and
              complete control across all operations—from parcel bookings to
              payments, from employee access to reports.
            </p>
          </div>
          <div>
            <img src={ERP} alt="ERP" className="w-full rounded-xl shadow-xl" />
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold uppercase text-[#fca000] mb-4 underline">
            ERP Modules Highlights
          </h2>
          <p className="text-gray-700 mb-10">
            Discover the modules that make our ERP powerful, flexible, and
            business-ready.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 border-l-4 border-[#fca000] rounded-xl shadow hover:shadow-lg hover:scale-105 transition-transform duration-300 text-left"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-[#090a58] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8 px-4">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-4xl font-bold text-[#fca000]">
                {stat.value}
              </div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#fca000] py-14 text-white text-center px-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Transform Your Courier Business?
        </h3>
        <p className="max-w-2xl mx-auto mb-6">
          Join hundreds of businesses that trust Express Logistics ERP for their
          daily operations. Get started today and streamline your workflows like
          never before.
        </p>
        <button className="bg-white text-[#fca000] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition duration-300">
          Request a Demo
        </button>
      </section>
    </div>
  );
};

export default Home;
