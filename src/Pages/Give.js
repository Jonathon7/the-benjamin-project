import React, { Component } from "react";
import "./give.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default class Give extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="give-cont">
          <h1 className="give-header">Give to The Benjamin Project</h1>
          <hr />
          <div className="give-text">
            <h2>Ways to Give</h2>
            <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              quaerat nisi expedita pariatur a deleniti perspiciatis suscipit
              odio, cum maxime accusamus omnis doloribus tempore! Doloribus ut
              vitae voluptas quis unde. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Quod quaerat nisi expedita pariatur a deleniti
              perspiciatis suscipit odio, cum maxime accusamus omnis doloribus
              tempore!
            </h3>
            <br />
            <hr />
            <br />
            <div className="give-video-cont">
              <div className="give-video">
                <iframe
                  title="give-video"
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/-Ct-FjFefx4"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
              <div className="give-button-cont">
                <button className="give-button">Donate</button>
              </div>
            </div>
            <h3>
              <br />
              <hr />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum fugiat aliquam ea ipsa libero sapiente! Vero, nesciunt
              commodi! Maiores assumenda in doloribus enim adipisci aperiam
              explicabo molestiae repellendus autem. Minus! Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Quod quaerat nisi expedita
              pariatur a deleniti perspiciatis suscipit odio, cum maxime
              accusamus omnis doloribus tempore! Doloribus ut vitae voluptas
              quis unde. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Quod quaerat nisi expedita pariatur a deleniti perspiciatis
              suscipit odio, cum maxime accusamus omnis doloribus tempore!
              Doloribus ut vitae voluptas quis unde. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Quod quaerat nisi expedita pariatur
              a deleniti perspiciatis suscipit odio, cum maxime accusamus omnis
              doloribus tempore! Doloribus ut vitae voluptas quis unde.
            </h3>
          </div>
          <br />
          <hr />
          <br />
          <br />
        </div>
        <Footer />
      </div>
    );
  }
}
