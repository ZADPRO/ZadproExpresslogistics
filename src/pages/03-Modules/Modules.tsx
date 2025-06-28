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

      <div className="max-w-6xl mx-auto mt-10 p-4">
        <p className="text-center text-2xl uppercase underline font-bold">
          Powerful Features Tailored for Courier and Microfinance Businesses
        </p>
        <div className="relative w-full h-[600px] mt-10">
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

      <div className="bg-gray-100  py-10 mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8">
          {[
            { label: "Active Employees", value: "120+" },
            { label: "Parcel Bookings", value: "15K+" },
            { label: "Finance Records", value: "200K+" },
            { label: "Reports Generated", value: "5K+" },
          ].map((stat, idx) => (
            <div key={idx}>
              <div className="text-3xl font-bold text-[#fca000]">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold uppercase mb-4 underline text-[#fca000]">
            ERP Modules Overview
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            Our ERP system is designed to streamline courier & microfinance
            operations. Here’s a breakdown of each powerful module.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Role-Based Dashboard",
                desc: "Empower your team with tailored dashboards. Super Admin, Admin, Finance, and Employees each get access to what they need — and nothing they don't.",
                icon: "👤",
              },
              {
                title: "Parcel Booking",
                desc: "Book parcels with leading courier partners in just a few clicks. Choose document/non-document types, walk-in vs regular users, and auto-fill sender/receiver details.",
                icon: "📦",
              },
              {
                title: "Bulk Upload",
                desc: "Upload bulk orders using Excel. Automatically detects duplicates before submission and saves hours of manual entry.",
                icon: "📂",
              },
              {
                title: "Transaction Mapping",
                desc: "Map vendor purchases by uploading leaves. Prevents duplicates and ensures traceable transaction history for compliance and audit.",
                icon: "📂",
              },
              {
                title: "Finance Tracking",
                desc: "Split leaves into subcategories, generate reports, and export them for internal or client reviews.",
                icon: "💳",
              },
              {
                title: "Employee Management",
                desc: "Onboard employees with ease. Assign roles, email credentials, and track onboarding progress in one place.",
                icon: "🧑‍💼",
              },
              {
                title: "Reports & Analytics",
                desc: "Split leaves into subcategories, generate reports, and export them for internal or client reviews.",
                icon: "📊",
              },
              {
                title: "Custom Settings",
                desc: "Configure pricing, categories, and courier partners per your business model. Fully customizable for operational flexibility.",
                icon: "📊",
              },
            ].map((mod, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-xl rounded-xl border-l-4 border-[#fca000] transition-transform transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{mod.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#000]">
                  {mod.title}
                </h3>
                <p className="text-gray-600 text-justify">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col gap-5">
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
        <div className="flex w-full md:w-10/12 mx-auto lg:flex-row flex-col p-4 gap-8 mt-5">
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
                <span className="text-[#fca000] font-bold">Bulk </span> Parcel
                Upload :
              </span>
            </div>
            <p className="text-[20px] text-justify">
              Upload bulk orders using Excel. Automatically detects duplicates
              before submission and saves hours of manual entry.
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
                <span className="text-[#fca000] font-bold">Transaction </span>
                Mapping:{" "}
              </span>
            </div>{" "}
            <p className="text-[20px] text-justify">
              Map vendor purchases by uploading leaves. Prevents duplicates and
              ensures traceable transaction history for compliance and audit.
            </p>
          </div>{" "}
          <div className="flex-1">
            <img src={Module001} alt="" />
          </div>
        </div>

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
                <span className="text-[#fca000] font-bold">Employee </span>{" "}
                Management :
              </span>
            </div>
            <p className="text-[20px] text-justify">
              Onboard employees with ease. Assign roles, email credentials, and
              track onboarding progress in one place.
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
                <span className="text-[#fca000] font-bold">
                  Finance & Payment{" "}
                </span>
                Tracking:{" "}
              </span>
            </div>{" "}
            <p className="text-[20px] text-justify">
              Manage customer balances, accept payments via GPay or cash, and
              audit records with full transparency.
            </p>
          </div>{" "}
        </div>
        <div className="flex w-full md:w-10/12 mx-auto lg:flex-row flex-col p-4 gap-8 mt-5">
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
                <span className="text-[#fca000] font-bold">
                  Reports & Leaf{" "}
                </span>
                Management :
              </span>
            </div>
            <p className="text-[20px] text-justify">
              Split leaves into subcategories, generate reports, and export them
              for internal or client reviews.
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
                <span className="text-[#fca000] font-bold">Custom </span>
                Settings:{" "}
              </span>
            </div>{" "}
            <p className="text-[20px] text-justify">
              Configure pricing, categories, and courier partners per your
              business model. Fully customizable for operational flexibility.
            </p>
          </div>{" "}
          <div className="flex-1">
            <img src={Module001} alt="" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Modules;
