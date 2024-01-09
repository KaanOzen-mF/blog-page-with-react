import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineSmartphone } from "react-icons/md";

export default function Contact() {
  return (
    <div className="contact_page">
      <Navbar />
      <div className="contact_main_container">
        <div className="contact_card">
          <div className="contact_option">
            <p className="contact_card_text">kaanozn98@gmail.com</p>
            <MdEmail className="contact_icon" size={"48px"} />
          </div>
          <div className="contact_option">
            <p className="contact_card_text">+90 0538 273 1267</p>
            <MdOutlineSmartphone className="contact_icon" size={"48px"} />
          </div>
          <div className="contact_last_option">
            <div className="contact_option">
              <FaLinkedin className="contact_icon" size={"48px"} />
            </div>
            <div className="contact_option">
              <FaGithubSquare className="contact_icon" size={"48px"} />
            </div>
          </div>
        </div>
        <div className="contact_mail">
          <h3 className="contact_mail_title">I'd love to hear from you</h3>
          <p className="contact_mail_text">
            Leave a message below, and I'll get back to you as soon as possible
          </p>

          <label htmlFor="name">Name*</label>
          <input type="text" name="name" autoComplete="off" />

          <label htmlFor="email">Email*</label>
          <input type="text" name="email" autoComplete="off" />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            style={{ width: "50%", height: "160px" }}
            placeholder="Write text here.."
          ></textarea>

          <div className="contact_mail_btn_container">
            <button className="contact_mail_btn">Send Message</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
