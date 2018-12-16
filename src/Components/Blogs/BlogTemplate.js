import React from "react";
import "./blogtemplate.css";

export default function BlogTemplate(props) {
  return (
    <div className="temp-cont">
      <div className="temp-header">
        <h1>{props.title}</h1>
        <h2>{props.date}</h2>
      </div>
      <h3 className="temp-text">{props.text}</h3>
    </div>
  );
}
