import React, { useState } from "react";
import AchievementCard from "./AchievementCard";
import AdminAchievements from "./AdminAchievements";

const dummyAchievements = [
  {
    id: "1",
    title: "1 Million Downloads",
    description: "Our app has reached 1 million downloads milestone!",
    date: "2024-06-10",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    title: "ISO Certification",
    description: "We are now ISO 9001:2015 certified.",
    date: "2024-07-01",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const AdminListAchievements: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (id: string) => {
    alert(`Edit achievement: ${id}`);
  };

  const handleDelete = (id: string) => {
    const confirmDelete = window.confirm("Are you sure to delete this?");
    if (confirmDelete) {
      alert(`Deleted achievement: ${id}`);
    }
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000ab]">
          <div className="relative bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-3 text-gray-600 hover:text-red-600 font-bold text-xl"
            >
              ×
            </button>
            <div className="">
              <AdminAchievements />
            </div>
          </div>
        </div>
      )}

      <div className="ml-[70px] min-h-screen bg-gray-100 px-4 py-10 space-y-6">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-2xl font-bold text-[#090a58] border-l-4 pl-4 border-[#090a58]">
            Achievements List
          </h2>
          <button
            onClick={handleOpenModal}
            className="bg-[#090a58] text-white px-4 py-2 rounded-md uppercase font-semibold hover:bg-[#090a58cc] transition"
          >
            Add New
          </button>
        </div>

        {dummyAchievements.map((achievement) => (
          <AchievementCard
            key={achievement.id}
            data={achievement}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminListAchievements;
