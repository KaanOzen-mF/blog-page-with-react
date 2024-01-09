import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import winter from "../assets/winter.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function About() {
  return (
    <div className="about_page">
      <Navbar />
      <p className="about_page_main_container">
        <img src={winter} alt="" className="about_image" />
        <div className="about_page_text_container">
          <h3>Kaan Ozen</h3>
          <p>
            Highly motivated and recently graduated computer engineer with a
            passion for front-end development. Strong skills in HTML, CSS, and
            JavaScript, with a keen eye for user-friendly interfaces and
            seamless user experiences. Continuously improving and keeping
            up-to-date with the latest technologies. Eager to contribute to the
            field of front-end development and make a meaningful impact in the
            industry. I also working as a SAP Basis consultant at Anadolu Birlik
            Holding. Strong skills in managing complex SAP infrastructures and
            system updates.
          </p>
          <p>
            <a href="https://kaanozen-mf.github.io/" className="about_link">
              Personal Web Site
            </a>
          </p>
          <a href="https://www.linkedin.com/in/kaan-ozen/">
            <FaLinkedin size={"32px"} />
          </a>
          <a href="https://github.com/KaanOzen-mF">
            <FaGithubSquare size={"32px"} />
          </a>
        </div>
      </p>

      <Footer />
    </div>
  );
}
