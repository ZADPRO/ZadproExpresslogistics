import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import axios from "axios";
import decrypt from "../../Helper";

const AdminFeedback: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const submitFeedback = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/settingsRoutes/addReviews`,
        {
          // refProductName: "MicroFin",
          refProductName: import.meta.env.VITE_PRODUCT_NAME,
          userName: name,
          userEmail: email,
          reviewContent: message,
          ratings: rating.toString(),
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response: any) => {
        const data = decrypt(
          response.data[1],
          response.data[0],
          import.meta.env.VITE_ENCRYPTION_KEY
        );
        console.log("Feedback Response:", data);

        if (data.success) {
          setSuccessMsg("Thank you! Your feedback has been submitted.");
          setName("");
          setEmail("");
          setMessage("");
          setRating(0);
        } else {
          setErrorMsg("Something went wrong. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Failed to submit feedback:", error);
        setErrorMsg("Failed to send feedback. Please try again.");
      });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message || rating === 0) {
      setErrorMsg("Please fill all fields and provide a rating.");
      return;
    }

    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    submitFeedback();

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-6xl mx-auto pt-[80px] pb-[60px] px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 border-l-4 border-[#090a58] pl-4">
          Tell us what you think
        </h2>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block mb-2 text-gray-700 font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#090a58]"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#090a58]"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Your Rating
            </label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="text-2xl text-[#fca000] hover:scale-110 transition-transform"
                >
                  {rating >= star ? <AiFillStar /> : <AiOutlineStar />}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 text-gray-700 font-medium">
              Message
            </label>
            <textarea
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#090a58]"
            ></textarea>
          </div>

          {errorMsg && (
            <div className="md:col-span-2 text-red-600 text-sm font-medium">
              {errorMsg}
            </div>
          )}
          {successMsg && (
            <div className="md:col-span-2 text-green-600 text-sm font-medium">
              {successMsg}
            </div>
          )}

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#090a58] hover:bg-[#090a58e4] text-white px-6 py-3 rounded-md font-semibold transition duration-200 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Feedback"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminFeedback;
