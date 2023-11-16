import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="wrapper-search">
      <h1>ALL BOOKS</h1>
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default SearchBar;
