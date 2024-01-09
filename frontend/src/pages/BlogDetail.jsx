import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const apiToken =
  "0546198683f3f13ff19aec0987d6ee820917bfca8640ef2e68dbaa0f78b3b86a037e0f61b4bdc5b72ab614490141ec72e21e9621b26767e8b4d3e45d7bc185423ccc3c1134ee9f9189fe923c99965ba5901c89e5d392c4c42857170142ce120dbc4d33411086de41386fb8522453c5a6ee8fc654eb1dc76e1a6c6d1cef0ca3a0";

export default function BlogDetail() {
  const { id } = useParams();
  const { loading, error, data } = useFetch(
    `http://localhost:1337/api/blogs/${id}?populate=*`,
    apiToken
  );

  return (
    <div className="blog_detail_page">
      <Navbar />

      {loading && <p>Loading...</p>}

      {error && <p>Error: Unable to load data.</p>}
      {!loading && !error && data && data.data && (
        <div className="main_container">
          <img
            src={`http://localhost:1337${data.data.attributes.blogMedia.data[0].attributes.url}`}
            alt={`image of ${data.data.attributes.blogTitle}`}
            width="250px"
          />
          <p>{data.data.attributes.blogTitle}</p>
          <p>{data.data.attributes.blogTags}</p>
          <p>{data.data.attributes.blogTexts}</p>
          <p>{data.data.attributes.createdAt}</p>
          <p>{data.data.attributes.updatedAt}</p>
        </div>
      )}

      <Footer />
    </div>
  );
}
