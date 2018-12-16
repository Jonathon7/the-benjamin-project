import React from "react";
import Blogs from "../Components/Blogs/Blogs";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./blog.css";

export default function Blog() {
  return (
    <div>
      <Navbar />
      <div className="blog-cont">
        <div className="blog-header">
          <h1>Welcome to our Blog</h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            temporibus unde excepturi aliquid repudiandae.
          </h3>
          <hr />
        </div>
        <div className="blogs-cont">
          <Blogs />
        </div>
      </div>
      <Footer />
    </div>
  );
}
