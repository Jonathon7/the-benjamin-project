import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import Blogs from "../Components/Blogs/Blogs";
import "./dashboard.css";
import axios from "axios";

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      blogs: [],
      title: "",
      date: "",
      text: ""
    };
  }

  addBlog = () => {
    axios
      .post("http://localhost:3004/api/blogs", {
        title: this.state.title,
        date: this.state.date,
        text: this.state.text
      })
      .then(response => {
        this.setState({
          blogs: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
    this.getBlogs();
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="dashboard-cont">
          <h1>Dashboard</h1>
          <button onClick={this.addBlog}>Add Post</button>
          <Blogs />
        </div>
      </div>
    );
  }
}
