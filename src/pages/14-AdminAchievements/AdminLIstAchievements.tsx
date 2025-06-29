import React from "react";
import AchievementCard from "./AchievementCard";

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

const AdminLIstAchievements: React.FC = () => {
  const handleEdit = (id: string) => {
    alert(`Edit achievement: ${id}`);
    // Navigate to edit form or populate edit modal
  };

  const handleDelete = (id: string) => {
    const confirmDelete = window.confirm("Are you sure to delete this?");
    if (confirmDelete) {
      alert(`Deleted achievement: ${id}`);
      // Call Firebase delete logic here
    }
  };
  return (
    <div>
      <div className="ml-[70px] min-h-screen bg-gray-100 px-4 py-10 space-y-6">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-2xl font-bold text-[#090a58] border-l-4 pl-4 border-[#090a58]">
            Achievements List
          </h2>
          <p>Button - Add New</p>
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

export default AdminLIstAchievements;
