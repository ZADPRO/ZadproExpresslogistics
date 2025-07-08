// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import decrypt from "../../Helper";
// import { useNavigate } from "react-router-dom";

// interface Release {
//   version: string;
//   notes: string;
//   releaseDate: string;
// }

// const AdminRelease: React.FC = () => {
//   const [listRelease, setListRelease] = useState<Release[]>([]);
//   const [visibleCount, setVisibleCount] = useState(3);
//   const navigate = useNavigate();

//   const fetchRelease = () => {
//     axios
//       .post(
//         `${import.meta.env.VITE_API_URL}/UserRoutes/listRelease`,
//         { refProductsId: 5 },
//         { headers: { "Content-Type": "application/json" } }
//       )
//       .then((response: any) => {
//         const data = decrypt(
//           response.data[1],
//           response.data[0],
//           import.meta.env.VITE_ENCRYPTION_KEY
//         );
//         console.log("data", data);

//         if (data.success) {
//           const releaseList = data.Release;
//           setListRelease(releaseList);
//         }
//       })
//       .catch((error) => {
//         console.error("Failed to list Release:", error);
//       });
//   };

//   useEffect(() => {
//     fetchRelease();
//   }, []);

//   const handleViewMore = () => {
//     if (visibleCount === 3) {
//       setVisibleCount(listRelease.length); // show all
//     } else {
//       setVisibleCount(3); // collapse back to 3
//     }
//   };
//   const handleReadMore = (release: Release) => {
//     navigate("/release-view", { state: { release } });
//   };
//   const displayedRelease = listRelease.slice(0, visibleCount);

//   const stripHtmlTags = (html: string = "") => {
//     const tempDiv = document.createElement("div");
//     tempDiv.innerHTML = html;
//     return tempDiv.textContent || tempDiv.innerText || "";
//   };

//   return (
//     <div className="bg-gray-100 pt-10 px-5">
//       <h1 className="text-3xl font-bold text-center mb-8 uppercase underline">
//         Release
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {displayedRelease.map((release, index) => (
//           <div
//             key={index}
//             className="bg-gray-50 p-6 border-l-4 border-[#fca000] rounded-xl shadow
//               hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out text-left"
//           >
//             <div className="mb-4">
//               <div className="flex justify-between items-center mb-3">
//                 <h2
//                   className="font-semibold text-lg truncate"
//                   title={release.version}
//                 >
//                   {release.version}
//                 </h2>
//                 <p className="text-sm text-gray-500">{release.releaseDate}</p>
//               </div>
//               <p
//                 className="text-gray-600 text-sm"
//                 title={stripHtmlTags(release.notes)}
//               >
//                 {stripHtmlTags(release.notes)}
//               </p>
//             </div>
//           </div>
//         ))}
//          <div
//                     className="text-center p-3 uppercase bg-blue-800 font-bold text-white rounded-xl flex items-center justify-center gap-3 hover:bg-blue-700 transition duration-300"
//                     onClick={() => handleReadMore(release)}
//                   >
//                     <p>Read More</p>
//                   </div>
//       </div>
//       {listRelease.length > 3 && (
//         <div className="flex justify-center mt-10">
//           <button
//             className="text-blue-800 font-semibold underline hover:text-blue-600 transition duration-300 mb-2"
//             onClick={handleViewMore}
//           >
//             {visibleCount === 3 ? "View More" : "View Less"}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminRelease;
import React, { useEffect, useState } from "react";
import axios from "axios";
import decrypt from "../../Helper";
import { useNavigate } from "react-router-dom";

interface Release {
  version: string;
  notes: string;
  releaseDate: string;
}

const AdminRelease: React.FC = () => {
  const [listRelease, setListRelease] = useState<Release[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const navigate = useNavigate();

  const fetchRelease = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/UserRoutes/listRelease`,
        {
          refProductsId: import.meta.env.VITE_PRODUCT_ID,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response: any) => {
        const data = decrypt(
          response.data[1],
          response.data[0],
          import.meta.env.VITE_ENCRYPTION_KEY
        );
        if (data.success) {
          setListRelease(data.Release);
        }
      })
      .catch((error) => {
        console.error("Failed to list Release:", error);
      });
  };

  useEffect(() => {
    fetchRelease();
  }, []);

  const handleViewMore = () => {
    setVisibleCount(visibleCount === 3 ? listRelease.length : 3);
  };

  const handleReadMore = (release: Release) => {
    navigate("/release-view", { state: { release } });
  };

  const displayedRelease = listRelease.slice(0, visibleCount);

  const stripHtmlTags = (html: string = "") => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="ReleaseBanner">
        <div className="ReleaseBannerOverlay max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold uppercase mb-4 underline text-[#fca000]">
            RELEASES
          </h1>
        </div>
      </div>

      {/* Cards Section */}
      <div className="ReleaseCards flex w-full items-center justify-center">
        <div className="w-full md:w-10/12 mx-auto py-8 px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedRelease.map((release, index) => (
              <div
                key={index}
                className="cardTemplate flex flex-col rounded-xl shadow-lg cursor-pointer bg-white"
              >
                <div className="flex flex-col p-4 flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <h2
                      className="font-bold text-lg truncate"
                      title={release.version}
                    >
                      {release.version}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {release.releaseDate}
                    </p>
                  </div>

                  <p
                    className="text-gray-600 text-sm mb-4 line-clamp-3"
                    title={stripHtmlTags(release.notes)}
                  >
                    {stripHtmlTags(release.notes)}
                  </p>

                  <div
                    className="text-center p-3 uppercase bg-orange-400 font-bold text-white rounded-xl flex items-center justify-center gap-3 hover:bg-orange-500 transition duration-300 mt-auto"
                    onClick={() => handleReadMore(release)}
                  >
                    <p>Read More</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View More Button */}
      {listRelease.length > 3 && (
        <div className="flex justify-center mb-10">
          <button
            style={{ borderRadius: "50px" }}
            className="text-center px-7 py-4 uppercase bg-orange-400 font-bold text-white flex items-center justify-center gap-3 hover:bg-orange-500 transition duration-300 mt-auto w-full max-w-xs mx-4"
            onClick={handleViewMore}
          >
            {visibleCount === 3 ? "View More" : "View Less"}
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminRelease;
