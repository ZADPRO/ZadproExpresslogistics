import React from "react";
import { Pencil, Trash2 } from "lucide-react";

type Achievement = {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
};

interface Props {
  data: Achievement;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const AchievementCard: React.FC<Props> = ({ data, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6">
      <img
        src={data.imageUrl}
        alt={data.title}
        className="w-32 h-32 object-cover rounded-md"
      />
      <div className="flex-1 w-full">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-[#090a58]">
              {data.title}
            </h3>
            <p className="text-sm text-gray-500 mb-1">{data.date}</p>
            <p className="text-gray-700">{data.description}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(data.id)}
              className="text-blue-600 hover:text-blue-800"
              aria-label="Edit"
            >
              <Pencil size={18} />
            </button>
            <button
              onClick={() => onDelete(data.id)}
              className="text-red-600 hover:text-red-800"
              aria-label="Delete"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
