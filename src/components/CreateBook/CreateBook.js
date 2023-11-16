import React from "react";
import "./CreateBook.css";
import logo from "../assets/images/Digi logo.png";
import { Link } from "react-router-dom";

const CreateBook = () => {
  return (
    <>
      <header className="header-create">
        <Link to="/dashboard">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </header>
      <main className="main-create">
        <h1>Create your book</h1>
        <form className="form-create">
          <div className="name-input">
            <label htmlFor="name">Enter name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="name-input">
            <label htmlFor="author">Enter author</label>
            <input type="text" id="author" name="author" />
          </div>
          <div className="name-input">
            <label htmlFor="genre">Enter genre</label>
            <input type="text" id="genre" name="genre" />
          </div>
          <div className="name-input">
            <label htmlFor="image">Enter image url</label>
            <input type="text" id="image" name="image" />
          </div>
          <button className="btn">Create</button>
        </form>
      </main>
    </>
  );
};

export default CreateBook;
