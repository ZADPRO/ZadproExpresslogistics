import React, { useRef, useState } from "react";

const AdminBlogUpdate: React.FC = () => {
  const [showPreview, setShowPreview] = useState(false);

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const editorRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const img = new Image();
      img.onload = () => {
        if (img.width < 800 || img.height < 400) {
          alert("Please upload a proper blog cover image (min 800x400px)");
        } else {
          setImage(file);
          setPreview(URL.createObjectURL(file));
        }
      };
      img.src = URL.createObjectURL(file);
    }
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleSave = () => {
    const content = editorRef.current?.innerHTML || "";
    console.log({
      title,
      content,
      image,
      status,
      tags,
    });
  };

  const handleClear = () => {
    setImage(null);
    setPreview(null);
    setTitle("");
    setStatus("draft");
    setTags([]);
    setTagInput("");
    if (editorRef.current) editorRef.current.innerHTML = "";
  };

  const exec = (cmd: string, value: any = null) => {
    document.execCommand(cmd, false, value);
  };

  return (
    <div className="ml-[70px] bg-gray-50">
      {/* Header */}
      <div className="flex w-full items-center justify-between px-3 py-2 shadow-md bg-white rounded-md mb-6">
        <div className="flex flex-col">
          <p className="font-bold uppercase text-[#090a58]">Blog Page</p>
          <p className="text-sm text-gray-500">Create New Blog</p>
        </div>
        <div className="flex flex-col text-right">
          <p className="font-bold uppercase">Admin</p>
          <p className="text-sm text-gray-500">Super User</p>
        </div>
      </div>

      {/* Blog Layout */}
      <div className="flex gap-6 p-3">
        {/* Left - 60% */}
        <div className="w-[60%] bg-white rounded-xl shadow p-6 space-y-6">
          {/* Image Upload */}
          <div>
            <label className="block font-medium mb-2">Choose Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-3"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="w-full max-h-[250px] object-contain rounded"
              />
            )}
          </div>

          {/* Title */}
          <div>
            <label className="block font-medium mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#090a58]"
            />
          </div>

          {/* Rich Text Editor */}
          <div className="flex gap-2 p-2 border-b bg-gray-100 flex-wrap">
            <select
              onChange={(e) => exec("fontName", e.target.value)}
              className="border px-2"
            >
              <option value="Arial">Arial</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Verdana">Verdana</option>
            </select>

            <select
              onChange={(e) => exec("fontSize", e.target.value)}
              className="border px-2"
            >
              <option value="1">Small</option>
              <option value="3">Normal</option>
              <option value="5">Large</option>
              <option value="7">Huge</option>
            </select>

            <button onClick={() => exec("bold")} className="font-bold">
              B
            </button>
            <button onClick={() => exec("italic")} className="italic">
              I
            </button>
            <button onClick={() => exec("underline")} className="underline">
              U
            </button>

            <button onClick={() => exec("justifyLeft")}>Left</button>
            <button onClick={() => exec("justifyCenter")}>Center</button>
            <button onClick={() => exec("justifyRight")}>Right</button>
            <button onClick={() => exec("justifyFull")}>Justify</button>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = () =>
                    exec("insertImage", reader.result as string);
                  reader.readAsDataURL(file);
                }
              }}
              className="text-sm"
            />
          </div>
          <div
            ref={editorRef}
            contentEditable
            className="min-h-[200px] p-3 focus:outline-none"
          ></div>
        </div>

        {/* Right - 40% */}
        <div className="w-[40%] bg-white rounded-xl shadow p-6 space-y-6">
          {/* Publish State */}
          <div>
            <label className="block font-medium mb-2">Publish State</label>
            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value as "draft" | "published")
              }
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#090a58]"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>

          {/* Tags */}
          <div>
            <label className="block font-medium mb-2">Tags</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddTag()}
                placeholder="Enter tag and press Enter"
                className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#090a58]"
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="bg-[#090a58] text-white px-4 py-2 rounded-md"
              >
                Add
              </button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 text-sm px-3 py-1 rounded-full flex items-center gap-1"
                >
                  {tag}
                  <button
                    onClick={() => handleRemoveTag(tag)}
                    className="ml-1 text-red-600 font-bold"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Save & Clear Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleSave}
              className="bg-[#090a58] text-white px-6 py-3 rounded-md font-semibold w-full"
            >
              Save
            </button>
            <button
              onClick={handleClear}
              className="bg-gray-300 text-black px-6 py-3 rounded-md font-semibold w-full"
            >
              Clear
            </button>
          </div>
          <button
            onClick={() => setShowPreview(true)}
            className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold w-full"
          >
            Preview
          </button>
        </div>
      </div>
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white max-w-[800px] w-full rounded-lg p-6 overflow-auto max-h-[90vh]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Blog Preview</h2>
              <button
                onClick={() => setShowPreview(false)}
                className="text-red-500 text-xl"
              >
                ×
              </button>
            </div>
            {preview && (
              <img
                src={preview}
                alt="Cover"
                className="w-full max-h-[300px] object-contain rounded mb-4"
              />
            )}
            <h1 className="text-2xl font-semibold mb-2">{title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: editorRef.current?.innerHTML || "",
              }}
              className="prose max-w-none"
            ></div>
            <div className="mt-4 text-sm text-gray-600">
              <strong>Tags:</strong> {tags.join(", ")}
              <br />
              <strong>Status:</strong> {status}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBlogUpdate;
