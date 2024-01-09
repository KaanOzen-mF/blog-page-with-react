import React from "react";
import useFetch from "../hooks/useFetch";
import Markdown from "react-markdown";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../Components.css";
import { Link } from "react-router-dom";

const apiToken =
  "0546198683f3f13ff19aec0987d6ee820917bfca8640ef2e68dbaa0f78b3b86a037e0f61b4bdc5b72ab614490141ec72e21e9621b26767e8b4d3e45d7bc185423ccc3c1134ee9f9189fe923c99965ba5901c89e5d392c4c42857170142ce120dbc4d33411086de41386fb8522453c5a6ee8fc654eb1dc76e1a6c6d1cef0ca3a0";

export default function Homepage() {
  const { loading, error, data } = useFetch(
    `http://localhost:1337/api/blogs?populate=*`,
    apiToken
  );

  return (
    <div className="home_page">
      <Navbar />
      <div className="main_container">
        {loading && <p>Loading...</p>}

        {error && <p>Error: Unable to load data.</p>}

        {!loading &&
          !error &&
          data &&
          data.data &&
          data.data.map((i) => (
            <div key={i.id}>
              <img
                src={`http://localhost:1337${i.attributes.blogMedia.data[0].attributes.url}`}
                alt={`image of ${i.attributes.blogTitle}`}
                width="250px"
              />
              <p>{i.attributes.blogTitle}</p>
              <Markdown>{i.attributes.blogTexts}</Markdown>

              <Link to={`/blog/${i.id}`}>Read More</Link>
              <hr />
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}
