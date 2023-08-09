import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../CSS/contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_scdwcrh",
        "template_evvzmij",
        form.current,
        "0zFSC1XE5do6HXj0D"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
    <NavBar />
    <div class="contact-main-wrapper">
      <h1 className="contact-header">GET IN TOUCH</h1>
      <form class="contact-form" ref={form} onSubmit={sendEmail}>
        <div class="form-row">
          <input
            className="contact-inputs"
            type="text"
            name="user_name"
            placeholder="Enter Name"
            required
          />
          <input
            className="contact-inputs"
            type="email"
            name="user_email"
            placeholder="Enter Email"
            required
          />
          <input
            className="contact-inputs"
            type="tel"
            name="user_number"
            placeholder="Enter Phone Number"
            required
          />
        </div>
        <textarea name="message" placeholder="How can we help you!" required></textarea>
        <input className="contact-button" type="submit" value="Send" />
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default Contact;
