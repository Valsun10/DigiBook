import React from "react";
import "./Book.css";
import whitePolygon from "../assets/images/Polygon 25.png";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { name, author, image, createOn, lastUpdateOn, genre, _id } = book;

  const date = (date) => {
    const originalDate = new Date(date);
    const day = String(originalDate.getDate()).padStart(2, "0");
    const month = String(originalDate.getMonth() + 1).padStart(2, "0");
    const year = originalDate.getFullYear();
    const formatedData = `${day}/${month}/${year}`;

    return formatedData;
  };

  return (
    <div className="book-content">
      <img src={image} alt={name} />
      <div className="book-details">
        <h1>{name}</h1>
        <h3>{author}</h3>
        <div className="genre-name">Genre: {genre.name}</div>
        <div className="create-update">
          <div>
            Created on:
            <span>{date(createOn)}</span>
          </div>
          <div>
            Updated on:
            <span>{date(lastUpdateOn)}</span>
          </div>
        </div>
      </div>
      <Link to={`/details/${_id}`} className="blue-button">
        <img src={whitePolygon} alt="polygon" />
      </Link>
    </div>
  );
};

export default Book;
