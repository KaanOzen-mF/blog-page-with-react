import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import Markdown from "markdown-to-jsx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../Components.css";
import { Link } from "react-router-dom";
import { TbPointFilled } from "react-icons/tb";
import Categories from "../components/Categories";
const apiToken =
  "0546198683f3f13ff19aec0987d6ee820917bfca8640ef2e68dbaa0f78b3b86a037e0f61b4bdc5b72ab614490141ec72e21e9621b26767e8b4d3e45d7bc185423ccc3c1134ee9f9189fe923c99965ba5901c89e5d392c4c42857170142ce120dbc4d33411086de41386fb8522453c5a6ee8fc654eb1dc76e1a6c6d1cef0ca3a0";

export default function Homepage() {
  const { loading, error, data } = useFetch(
    `http://localhost:1337/api/blogs?populate=*`,
    apiToken
  );

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="home_page">
      <Navbar />
      <Categories
        onSelectCategory={handleSelectCategory}
        selectedCategory={selectedCategory}
      />
      <div className="blog_main_container">
        {loading && <p>Loading...</p>}

        {error && <p>Error: Unable to load data.</p>}

        {!loading &&
          !error &&
          data &&
          data.data &&
          data.data
            .filter(
              (i) =>
                selectedCategory === "All" ||
                i.attributes.blogTags === selectedCategory
            )
            .map((i) => {
              const date = new Date(i.attributes.publishedAt);

              const options = {
                year: "numeric",
                month: "long",
                day: "numeric",
              };
              const formattedDate = date.toLocaleDateString("en-US", options);

              const words = i.attributes.blogTexts.split(" ");
              const previewText =
                words.slice(0, 25).join(" ") + (words.length > 25 ? "..." : "");

              return (
                <div key={i.id} className="blog_card">
                  <img
                    src={`http://localhost:1337${i.attributes.blogMedia.data[0].attributes.url}`}
                    alt={`image of ${i.attributes.blogTitle}`}
                    className="blog_img"
                  />
                  <p className="blog_tags">{i.attributes.blogTags}</p>
                  <div className="blog_time_data_container">
                    <p>{formattedDate}</p>
                    <TbPointFilled />
                    <p>{i.attributes.minRead} min read</p>
                  </div>
                  <div className="blog_text_container">
                    <Markdown>{previewText}</Markdown>
                    <Link to={`/blog/${i.id}`} className="blog_text_link">
                      Read More
                    </Link>
                  </div>
                </div>
              );
            })}
      </div>
      <Footer />
    </div>
  );
}
