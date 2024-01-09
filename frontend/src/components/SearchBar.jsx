import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <div className="searchBar_container">
      <FaSearch className="search_icon" />
      <input
        className="search_input"
        type="text"
        value={searchText}
        onChange={handleInputChange}
      />
    </div>
  );
}
