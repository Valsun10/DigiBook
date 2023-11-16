import React, { useEffect, useState } from "react";
import "./DetailBookPage.css";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import bookService from "../../Books/BookService";

const initialState = {
  _id: "",
  name: "",
  author: "",
  image: "",
  createOn: "",
  lastUpdateOn: "",
  genre: {
    _id: "",
    name: "",
  },
};

const DetailBookPage = () => {
  const [book, setBook] = useState(initialState);
  const { token } = useSelector((state) => state.auth);

  const { id } = useParams();

  useEffect(() => {
    bookService.getOneBook(id, token).then((res) => setBook(res));
  }, []);

  const { name, author, image, createOn, lastUpdateOn, genre } = book;

  const date = (date) => {
    const originalDate = new Date(date);
    const day = String(originalDate.getDate()).padStart(2, "0");
    const month = String(originalDate.getMonth() + 1).padStart(2, "0");
    const year = originalDate.getFullYear();
    const formatedData = `${day}/${month}/${year}`;

    return formatedData;
  };

  return (
    <>
      <Header />
      <main className="wrapper-detailsPage">
        <img src={image} alt="bookImg" />
        <section className="book-wrapper">
          <div className="book-container">
            <div className="book-title">
              <h1>{name}</h1>
            </div>
            <h2>{author}</h2>
            <p>
              Genre: <span>{genre.name}</span>
            </p>
            <p>
              Created on: <span>{date(createOn)}</span>
            </p>
            <p>
              Updated on: <span>{date(lastUpdateOn)}</span>
            </p>
          </div>
          <div className="short-description">
            <h3>Short description</h3>
            <p>Description here.......</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default DetailBookPage;
