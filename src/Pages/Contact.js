import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./contact.css";

export default class Contact extends Component {
  constructor() {
    super();

    this.state = {
      fname: "",
      lname: "",
      phone: "",
      email: "",
      message: "",
      input: {}
    };
  }

  handleClick = () => {
    const { fname, lname, phone, email, message } = this.state;
    this.setState({
      input: {
        fname: fname,
        lname: lname,
        phone: phone,
        email: email,
        message: message
      }
    });
  };

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="contact-container">
          <div className="contact-header">
            <h1>Contact Us</h1>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              ipsam itaque non
            </h3>
            <hr />
          </div>
          <div className="contact-content">
            <div className="form-cont">
              <form
                className="contact-form"
                name="contact"
                method="post"
                onSubmit={this.handleSubmit}
              >
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name.."
                  onChange={e => this.setState({ fname: e.target.value })}
                />

                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="Your last name.."
                  onChange={e => this.setState({ lname: e.target.value })}
                />

                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="number"
                  name="phone"
                  placeholder="Your phone number..."
                  onChange={e => this.setState({ phone: e.target.value })}
                />

                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="Email"
                  placeholder="Your email.."
                  onChange={e => this.setState({ email: e.target.value })}
                />

                <label htmlFor="subject">Message</label>
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Write something.."
                  onChange={e => this.setState({ message: e.target.value })}
                />
                <input
                  type="submit"
                  value="Submit"
                  onClick={this.handleClick}
                />
              </form>
            </div>
            <div className="contact-info-cont">
              <div className="contact-info">
                <h1>Contact Information</h1>
                <h2>Phone Number:</h2>
                <a href="tel:4322307180">432-230-7180</a>
                <h2>Email:</h2>
                <a href="mailto:elvie.brown.eb@gmail.com">
                  elvie.brown.eb@gmail.com
                </a>
                <h2>Address:</h2>
                <h3>502 E Nobles Midland, Tx 79701</h3>
              </div>
            </div>
          </div>
          <br />
          <hr />
          <br />
        </div>
        <Footer />
      </div>
    );
  }
}
