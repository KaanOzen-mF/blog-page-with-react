import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar_container">
        <div className="navbar_logo_container">
          <li className="navbar_btn">
            <Link to={"/"}>Home Page</Link>
          </li>
        </div>

        <div className="navbar_btn_container">
          <ul>
            <li className="navbar_btn">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="navbar_btn">
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>

        <SearchBar onSearch={(text) => console.log(text)} />
      </div>
    </>
  );
}
