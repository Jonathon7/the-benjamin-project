import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./about.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="about-cont">
          <div className="about-header">
            <h1>About</h1>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              facilis quo. Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </h3>
            <hr />
          </div>
          <div className="about-img">
            <img src="" alt="" />
          </div>
          <div className="about-description">
            <hr />
            <h3>
              My name is Elvie Brown. I am a pastor on the Southside of Midland.
              I have been married to my wife Dekithia Brown for 19 years and we
              have four children. I am reaching out to you all because I am
              deeply concerned for our community and for our country. I have
              been serving God by serving his people on the Southside of Midland
              for the past three and a half years. I came to Midland straight
              out of Bible School, Christ for the Nations in Dallas Texas. When
              I was in Dallas, God gave me a vision and a purpose for my life.
              He gave me the Benjamin Project and it is all about renaming a
              generation of men who have lost their identity. The Benjamin
              Project began in Dallas. After Bible classes we would go to the
              streets of Oak Cliff daily and to the county jail on Thursdays.
              For the past two and a half years we have been going to the
              streets on the Southside of Midland and to the county jail every
              Thursday. We also host a Biblical manhood class and fellowship
              every Saturday at the Kaleidoscope building. The Benjamin project
              is structured in such a way to reach black men. We speak to men
              from the context of Black Heritage and Culture. To be clear on
              this point we believe there is only one race the human race. There
              is a great need in the black community of Midland and America. We
              know all lives matter to God and the Benjamin project is a way to
              show the world they also matter to the church. I'm reaching out to
              you all asking that you would please consider partnering with us,
              the Benjamin project. When Benjamin was born his mother named him
              the son of her pain, but his father changed his name to the son of
              his strength. Help us to help men on the Southside of Midland, it
              is a mission field. Thank you and May God bless you All.
            </h3>
            <br />
            <hr />
          </div>
          <br />
          <div className="about-vis">
            <h1>Our Vision</h1>
            <h3>
              We wish to share our Father's heart of love and restoration with
              the men on the Southeast side of Midland. We will encounter the
              men on the Southeast side of Midland with street preaching and
              door-to-door evangelism. We will develop relationships with the
              Midland county jail and the probation office. We will have a
              Biblical Manhood class every Saturday morning and a midweek men's
              fellowship to disciple the men we gather. We will seek to partner
              with churches, schools, educational programs, and local businesses
              to help the men with needs they may have.
            </h3>
            <br />
            <hr />
          </div>
          <br />
          <br />
        </div>
        <Footer />
      </div>
    );
  }
}
