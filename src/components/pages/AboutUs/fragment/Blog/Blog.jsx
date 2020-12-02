import React from "react";
import "./Blog.css";

import Blog_img_1 from "../../../../images/about/blog_img_1.svg";
import Blog_img_2 from "../../../../images/about/blog_img_2.svg";
import Blog_img_3 from "../../../../images/about/blog_img_3.svg";

const Blog = () => {
  return (
    <>
      <h1 className="blog_header">Stories & insights</h1>
      <h3 className="blog_sub_header mb-5 blog-header-margin">
        from our blog
      </h3>
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-md-4 p-4">
              <img src={Blog_img_1} alt="" className="card-img" />
              <h1 className="blog_post_header mt-4">
                So you need a short loan? 10 things to consider before picking
                your loan partners.
              </h1>
            </div>
            <div className="col-md-4 p-4">
              <img src={Blog_img_2} alt="" className="card-img" />
              <h1 className="blog_post_header mt-4">
                Valentine is coming...where’s ya boyfrend? Surviving Valentine
              </h1>
            </div>
            <div className="col-md-4 p-4">
              <img src={Blog_img_3} alt="" className="card-img" />
              <h1 className="blog_post_header mt-4">
                20 great side hustles you can engage in to keep you financially
                free in 2020.
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-9 mx-auto blog_bg"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
