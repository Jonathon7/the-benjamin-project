import React, { Component } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      toggle: false
    };
  }

  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    return (
      <span>
        <nav className="resp-nav">
          <h1>
            <Link className="nav-cont-h1" to="/">
              The Benjamin Project
            </Link>
          </h1>
          <label htmlFor="toggle" className="label" onClick={this.handleToggle}>
            &#9776;
          </label>
          <div className={this.state.toggle ? "menu" : "hidden"}>
            <Link className="menu-link" to="/about">
              About
            </Link>{" "}
            <Link className="menu-link" to="/blog">
              Blog
            </Link>
            <Link className="menu-link" to="/contact">
              Contact
            </Link>{" "}
            <Link className="menu-link" to="/give">
              Give
            </Link>
          </div>
        </nav>

        {/* THIS NAV WILL BE RENDERED ON DESKTOP */}

        <nav className="nav-cont">
          <h1>
            <Link className="nav-cont-h1" to="/">
              The Benjamin Project
            </Link>
          </h1>
          <ul className="nav-list">
            <li>
              <Link className="nav-list-link" to="/About">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-list-link" to="/Blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="nav-list-link" to="/Contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="nav-list-link" to="/Give">
                Give
              </Link>
            </li>
          </ul>
        </nav>
      </span>
    );
  }
}
