import React, { useState } from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  // Store form data in state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, subject, message } = formData;

    const mailto = `https://mail.google.com/mail/?view=cm&fs=1&to=info@zadroit.com.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    )}`;

    window.open(mailto, "_blank");
  };

  return (
    <div>
      <div>
        <div className="contactUsBanner">
          <div className="bannerOverlay">
            <h1 className="bannerTitle uppercase underline">Contact Us</h1>
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-[80px] pb-[60px]">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 border-l-4 border-[#090a58] pl-4">
              We'd love to hear from you
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div>
                <label className="block mb-2 text-gray-700 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#090a58]"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#090a58]"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700 font-medium">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#090a58]"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#090a58]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block mb-2 text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Write your message here..."
                  required
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#090a58]"
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="bg-[#090a58] hover:bg-[#090a58e4] text-white px-6 py-3 rounded-md font-semibold transition duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
