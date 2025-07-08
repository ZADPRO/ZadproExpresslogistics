import React, { useEffect, useState } from "react";
import axios from "axios";
import decrypt from "../../Helper";
import { FaStar } from "react-icons/fa";
import "./ListFeedback.css";

interface Feedback {
  reviewContent: string;
  ratings: string;
  userEmail: string;
  userName: string;
}

const ListUserReview: React.FC = () => {
  const [listFeedback, setListFeedback] = useState<Feedback[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);

  const fetchFeedback = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/UserRoutes/listReviews`,
        {
          refProductsId: import.meta.env.VITE_PRODUCT_ID
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response: any) => {
        const data = decrypt(
          response.data[1],
          response.data[0],
          import.meta.env.VITE_ENCRYPTION_KEY
        );
        console.log("data", data);
        if (data.success) {
          setListFeedback(data.allReview);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch feedback:", error);
      });
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Show only visibleCount number of feedbacks
  const displayedFeedback = listFeedback.slice(0, visibleCount);

  const stripHtmlTags = (html: string = "") => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  const renderStars = (count: string) => {
    const ratingNum = parseInt(count, 10) || 0;
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`w-5 h-5 ${
          i < ratingNum ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="bg-[#fef6f3] py-16 px-6 md:px-10 lg:px-20 text-[#fca000] overflow-x-hidden">
      <div className="max-w-6xl mx-auto overflow-hidden">
        <h1 className="text-3xl font-bold text-center mb-10 uppercase underline">
          User Reviews
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedFeedback.map((feedback, index) => (
            <div
              key={index}
              // className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between h-full"
              className="bg-gray-50 p-6 border-l-4 border-[#fca000] rounded-xl shadow hover:shadow-lg hover:scale-105 transition-transform duration-300 text-left aos-init aos-animate"
            >
              <div className="mb-4">
                <div className="flex justify-between items-center mb-3">
                  <h2
                    className="font-semibold text-lg truncate"
                    title={feedback.userName}
                  >
                    {feedback.userName}
                  </h2>
                </div>

                <div className="flex justify-between items-center mb-3">
                  <p
                    className="text-sm text-gray-500 truncate"
                    title={feedback.userEmail}
                  >
                    {feedback.userEmail}
                  </p>
                </div>

                <div className="flex items-center mb-3">
                  {renderStars(feedback.ratings)}
                </div>

                <p
                  className="text-gray-600 text-sm line-clamp-3"
                  title={stripHtmlTags(feedback.reviewContent)}
                >
                  {stripHtmlTags(feedback.reviewContent)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {listFeedback.length > 3 && (
          <div className="flex justify-center mt-10">
            <button
              style={{ borderRadius: "50px" }}
              //   className="text-[#f97316] font-semibold underline hover:text-orange-500 transition duration-300"
              className="text-center px-7 py-4 uppercase bg-orange-500 font-bold text-white flex items-center justify-center gap-3 hover:text-orange-800 transition duration-300 mt-auto w-full max-w-xs mx-4"
              onClick={() =>
                visibleCount === 3
                  ? setVisibleCount(listFeedback.length)
                  : setVisibleCount(3)
              }
            >
              {visibleCount === 3 ? "View More" : "View Less"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListUserReview;
