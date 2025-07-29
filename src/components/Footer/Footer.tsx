import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import decrypt from "../../Helper";
import axios from "axios";

interface Product {
  refProductsName: string;
  refProductDescription: string;
  refProductLink: string;
  refProductLogo: string;
  signedImageUrl?: string;
}

const Footer: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

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

        console.log("data", data);
        if (data.success) {
          const productList = data.productImage; // ✅ No duplication
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
          <br />
          <div className="flex space-x-4 text-[#fca000] text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="mailto:info@zadroit.com">
              <MdEmail />
            </a>
          </div>
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

        {/* Section 3 - Our Products */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4 text-[#fca000]">
            Our Products
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {products.map((product, index) => (
              <li key={index}>
                <a
                  href={product.refProductLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#fca000] hover:font-semibold transition"
                >
                  {product.refProductsName}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 4 - Communication Details */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4 text-[#fca000]">
            Contact Us
          </h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>
              <span className="font-medium">Phone:</span> +968 97424232
            </li>
            <li>
              <span className="font-medium">Email:</span> info@zadroit.com
              {/* expresslogistics@zadroit.com,{" "} */}
            </li>
            <li> </li>
            <li>
              <span className="font-medium">Location:</span> Salem
            </li>
          </ul>
        </div>

        {/* Section 5 - Map */}
        <div className="flex-2">
          <h3 className="text-xl font-semibold mb-4 text-[#fca000]">Find Us</h3>

          <div className="rounded-md overflow-hidden border border-gray-600">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.2853911570533!2d78.14989567505478!3d11.645788388560804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babef6bdbbc3f7d%3A0x404c804a4826efdf!2sZAdroit%20IT%20Solutions%20Private%20Limited!5e1!3m2!1sen!2sin!4v1751451851287!5m2!1sen!2sin"
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
