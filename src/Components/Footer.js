import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const redirect = () => {
    window.location.href = `${process.env.REACT_APP_SERVER}/login`;
  };
  return (
    <div className="footer-cont">
      <div className="footer-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/give">Give</Link>
        </li>
        <li>
          <button className="login-link" onClick={redirect}>
            Staff Login
          </button>
        </li>
      </div>
    </div>
  );
}
