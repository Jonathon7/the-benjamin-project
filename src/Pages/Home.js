import React, { Component } from "react";
import "./home.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Blogs from "../Components/Blogs/Blogs";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="hero-image-cont">
          <div className="hero-image-header">
            <h1 className="hero-image-h1">The Benjamin Project</h1>
            <Link to="/about" className="button-link">
              <button className="hero-image-button">Learn More</button>
            </Link>
          </div>
          <div className="hero-image" />
        </div>
        <div className="home-cont">
          <div className="home-text-cont">
            <div className="home-text">
              <h2>Header Title</h2>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                facilis quo. Ducimus repellendus distinctio quia! Recusandae
                suscipit, repellendus eum ipsum neque sequi dolorum f ugiat,
                explicabo assumenda vero accusantium consequatur animi? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Autem,
                facilis quo. Ducimus repellendus distinctio quia! Recusandae
                suscipit, repellendus eum ipsum neque sequi dolorum f ugiat,
                explicabo assumenda vero accusantium consequatur animi? Ducimus
                repellendus distinctio quia! Recusandae suscipit, repellendus
                eum ipsum neque sequi dolorum f ugiat, explicabo assumenda vero
                accusantium consequatur animi? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ducimus repellendus distinctio
                quia! Recusandae suscipit, repellendus eum ipsum neque sequi
                dolorum f ugiat, explicabo assumenda vero accusantium
                consequatur animi? Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </h3>
            </div>
            <div className="home-text">
              <h2>Header Title</h2>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                facilis quo. Ducimus repellendus distinctio quia! Recusandae
                suscipit, repellendus eum ipsum neque sequi dolorum f ugiat,
                explicabo assumenda vero accusantium consequatur animi? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Autem,
                facilis quo. Ducimus repellendus distinctio quia! Recusandae
                suscipit, repellendus eum ipsum neque sequi dolorum f ugiat,
                explicabo assumenda vero accusantium consequatur animi? Ducimus
                repellendus distinctio quia! Recusandae suscipit, repellendus
                eum ipsum neque sequi dolorum f ugiat, explicabo assumenda vero
                accusantium consequatur animi? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ducimus repellendus distinctio
                quia! Recusandae suscipit, repellendus eum ipsum neque sequi
                dolorum f ugiat, explicabo assumenda vero accusantium
                consequatur animi? Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </h3>
            </div>
          </div>
          <br />
          <hr />
          <div className="home-video-cont">
            <div className="home-video-text">
              <h2>Header Title</h2>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, ipsam itaque non dignissimos praesentium fuga
                repellendus, expedita quasi necessitatibus beatae unde eaque
                aliquid exercitationem quis omnis amet officiis laudantium enim?
                Ducimus repellendus distinctio quia! Recusandae suscipit,
                repellendus eum ipsum neque sequi dolorum f ugiat, explicabo
                assumenda vero accusantium consequatur animi? Lorem ipsum dolor
                sit amet consectetur adipisicing elit.
              </h3>

              <div className="home-hr">
                <br />
                <hr />
              </div>
            </div>
            <br />
            <div className="home-video">
              <iframe
                title="home-video"
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/-Ct-FjFefx4"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <br />
          <hr />
          <div className="home-blogs">
            <h2>Latest From our Blog</h2>
            <Blogs />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
