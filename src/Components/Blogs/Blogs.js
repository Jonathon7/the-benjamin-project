import React, { Component } from "react";
import BlogTemplate from "./BlogTemplate";
import axios from "axios";
import "./blogs.css";

export default class Blog extends Component {
  constructor() {
    super();

    this.state = {
      blogs: []
    };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:3004/api/blogs")
      .then(response => {
        this.setState({ blogs: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    let dispBlogs = this.state.blogs.map((blog, index) => {
      return (
        <BlogTemplate
          key={index}
          title={blog.title}
          date={blog.date}
          text={blog.text}
        />
      );
    });
    return <div className="blogs">{dispBlogs}</div>;
  }
}
