import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex gap-8 lg:flex-row flex-col">
        {/* Section 1 - Company Name + Description */}
        <div className="flex-2">
          <h2 className="text-2xl font-bold mb-4 text-[#fca000]">
            EXPRESS LOGISTICS{" "}
          </h2>
          <p className="text-sm text-gray-300">
            One Unified Platform to Book, Track, Manage, and Report Shipments
            with Real-Time Finance and Employee Insights.
          </p>
        </div>

        {/* Section 2 - Quick Links */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4 text-[#fca000]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a
                href="/"
                className="hover:text-[#fca000] hover:font-semibold transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-[#fca000] hover:font-semibold transition"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/modules"
                className="hover:text-[#fca000] hover:font-semibold transition"
              >
                Modules
              </a>
            </li>
            <li>
              <a
                href="/blogs"
                className="hover:text-[#fca000] hover:font-semibold transition"
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-[#fca000] hover:font-semibold transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3 - Communication Details */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4 text-[#fca000]">
            Contact Us
          </h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>
              <span className="font-medium">Phone:</span> +968 97424232
            </li>
            <li>
              <span className="font-medium">Email:</span> sales@setoman.com,{" "}
            </li>
            <li>info.setoman@gmail.com </li>
            <li>
              <span className="font-medium">Location:</span> P.O Box: 65, P.C:
              121, Plot No. 50, Al Khalili Building, Barka, Sultanate of Oman.
            </li>
          </ul>
        </div>

        {/* Section 4 - Map */}
        <div className="flex-2">
          <h3 className="text-xl font-semibold mb-4 text-[#fca000]">Find Us</h3>

          <div className="rounded-md overflow-hidden border border-gray-600">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58609.69148543565!2d57.809481489361445!3d23.690574544566587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8dc2d57c551137%3A0x55262d3ba054e86b!2sBarka%2C%20Oman!5e1!3m2!1sen!2sin!4v1748330488368!5m2!1sen!2sin"
              width="100%"
              height="200"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Zadroit - ZAdPro Express Logistics.
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
