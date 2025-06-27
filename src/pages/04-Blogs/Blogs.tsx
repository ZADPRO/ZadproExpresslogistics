import React from "react";
import "./Blogs.css";

import blogTemplateImg from "../../assets/blogs/blogTemplate.jpg";

const Blogs: React.FC = () => {
  return (
    <div>
      <div className="BlogsBanner">
        <div className="BlogsBannerOverlay">
          <h1 className="BlogsBannerTitle uppercase underline">BLOGS</h1>
        </div>
      </div>
      <div className="blogCards flex w-full align-items-center justify-content-center">
        <div className="flex w-full md:w-10/12 mx-auto lg:flex-row flex-col py-8 px-10 gap-10">
          <div className="cardTemplate flex flex-col flex-1 rounded-xl shadow-lg">
            <img src={blogTemplateImg} alt="" className="rounded-t-xl" />
            <div className="flex flex-col">
              <div className="flex">
                <div className="flex flex-col">
                  <p>29</p>
                  <p>June</p>
                </div>
                <div className="flex">
                  <p>Admin</p>
                </div>
                <div className="flex">
                  <p>Tag</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cardTemplate flex-1">
            <img src={blogTemplateImg} alt="" className="rounded-t-xl" />
          </div>
          <div className="cardTemplate flex-1">
            <img src={blogTemplateImg} alt="" className="rounded-t-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
