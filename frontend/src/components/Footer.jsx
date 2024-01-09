import React from "react";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_main_section">
        <div className="personal_info_container">
          <h3>Kaan Ozen</h3>
          <p>Front End Developer</p>
          <FaLinkedin size={"32px"} />
        </div>
        <div className="collab_container">
          <h3>Collab</h3>
          <p>kaanozn98@gmail.com</p>
        </div>
      </div>
      <hr />
      <div className="footer_side_section">
        <p>COPYRIGHT © Kaan Ozen {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}
