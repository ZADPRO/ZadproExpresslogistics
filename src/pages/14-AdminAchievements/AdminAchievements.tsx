import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminAchievements: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");

  const navigate = useNavigate();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    if (!title || !description || !date || !imageFile) {
      alert("Please fill all fields and upload an image.");
      return;
    }

    // Upload image and post to database logic here (Firebase/your backend)
    console.log({ title, description, date, imageFile });

    // After posting:
    alert("Achievement added successfully!");
    navigate("/admin/achievements");
  };

  return (
    <div className="bg-gray-50 max-w-7xl mx-auto px-4 text-center">
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-3xl font-bold uppercase mb-4 underline text-[#fca000]">
        <div className="w-full max-w-3xl px-4">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 border-l-4 border-[#090a58] pl-4">
              Post New Achievement
            </h2>

            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block mb-2 text-gray-700 font-medium">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., 1 Million Downloads"
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#090a58]"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700 font-medium">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  placeholder="Detailed achievement description..."
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#090a58]"
                ></textarea>
              </div>

              <div>
                <label className="block mb-2 text-gray-700 font-medium">
                  Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#090a58]"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700 font-medium">
                  Upload Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full"
                />
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="mt-4 w-40 rounded-lg"
                  />
                )}
              </div>

              <div>
                <button
                  onClick={handleSubmit}
                  className="bg-[#090a58] uppercase text-white px-6 py-3 rounded-md font-semibold hover:bg-[#090a58e4] transition duration-200 w-full"
                >
                  Submit Achievement
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAchievements;
