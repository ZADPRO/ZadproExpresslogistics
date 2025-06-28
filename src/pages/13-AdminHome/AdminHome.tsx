import React from "react";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  coverImage: string;
  status: "draft" | "published";
  tags: string[];
  publishDate: string;
}

const blogData: BlogPost[] = [
  {
    id: "1",
    title: "The Power of Morning Routines",
    content: "<p>Start your day with purpose and productivity...</p>",
    coverImage: "https://via.placeholder.com/800x400?text=Morning+Routine",
    status: "published",
    tags: ["health", "lifestyle"],
    publishDate: "2024-07-01",
  },
  {
    id: "2",
    title: "React Tips for Beginners",
    content: "<p>Master useState and useEffect with real-world examples...</p>",
    coverImage: "https://via.placeholder.com/800x400?text=React+Tips",
    status: "draft",
    tags: ["react", "webdev"],
    publishDate: "2024-07-10",
  },
  {
    id: "3",
    title: "The Power of Morning Routines",
    content: "<p>Start your day with purpose and productivity...</p>",
    coverImage: "https://via.placeholder.com/800x400?text=Morning+Routine",
    status: "published",
    tags: ["health", "lifestyle"],
    publishDate: "2024-07-01",
  },
  {
    id: "4",
    title: "React Tips for Beginners",
    content: "<p>Master useState and useEffect with real-world examples...</p>",
    coverImage: "https://via.placeholder.com/800x400?text=React+Tips",
    status: "draft",
    tags: ["react", "webdev"],
    publishDate: "2024-07-10",
  },
];

const AdminHome: React.FC = () => {
  return (
    <div className="ml-[70px] bg-gray-50 min-h-screen">
      <div className="fixed top-0 left-[70px] right-0 z-50 flex items-center justify-between px-3 py-2 shadow-md bg-white">
        <div className="flex flex-col">
          <p className="font-bold uppercase text-[#090a58]">Home Page</p>
          <p className="text-sm text-gray-500">Overall Analysis</p>
        </div>
        <div className="flex flex-col text-right">
          <p className="font-bold uppercase">Login User Name</p>
          <p className="text-sm text-gray-500">User Role</p>
        </div>
      </div>

      <div className="px-4 pb-10 pt-[80px]">
        <h2 className="text-xl font-semibold mb-4">Blog Previews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow p-4">
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-48 object-cover rounded mb-3"
              />
              <h3 className="text-lg font-bold text-[#090a58] mb-1">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Published on: {blog.publishDate}
              </p>
              <div
                className="text-sm text-gray-700 mb-2 line-clamp-3"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
              <div className="flex gap-2 flex-wrap mb-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 text-xs px-2 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <span
                className={`inline-block px-3 py-1 text-xs rounded-full font-semibold ${
                  blog.status === "published"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {blog.status.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
