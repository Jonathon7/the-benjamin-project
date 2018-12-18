import React, { Component } from "react";
import BlogTemplate from "./BlogTemplate";
import axios from "axios";
import "./blogs.css";
import { Link } from "react-router-dom";

export default class Blog extends Component {
  constructor() {
    super();

    this.state = {
      blogs: []
    };
  }

  componentDidMount = () => {
    axios
      .get("https://benjamin-project.herokuapp.com/api/blogs")
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
        <Link
          key={index}
          to={{ pathname: `/viewblog/${blog.id}`, state: { id: blog.id } }}
          className="blog-link"
        >
          <BlogTemplate
            title={blog.title}
            date={blog.date}
            text={blog.text}
            id={blog.id}
          />
        </Link>
      );
    });
    return <div className="blogs">{dispBlogs}</div>;
  }
}
