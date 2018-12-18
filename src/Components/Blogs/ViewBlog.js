import React, { Component } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import "./viewblog.css";

export default class ViewBlog extends Component {
  constructor() {
    super();

    this.state = {
      blogs: []
    };
  }
  componentDidMount() {
    this.getPost();
  }
  getPost = () => {
    // console.log(this.props.match.params.id);
    axios.get(`/api/blog/${this.props.match.params.id}`).then(response => {
      this.setState({
        blogs: response.data
      });
    });
  };

  render() {
    // console.log("props", this.props);
    // console.log("state", this.state);
    let dispPost = this.state.blogs.map((blog, index) => {
      return (
        <div key={index} className="viewblog-cont">
          <div className="viewblog-header">
            <h1>{blog.title}</h1>
            <h2>{blog.date}</h2>
          </div>
          <hr />
          <div className="viewblog-text">
            <h3>{blog.text}</h3>
          </div>
        </div>
      );
    });
    return (
      <div>
        <Navbar />
        {dispPost}
      </div>
    );
  }
}
