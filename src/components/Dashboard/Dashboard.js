import React, { useEffect } from "react";
import "./Dashboard.css";

import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  fetchSearch,
  getAllBooks,
  setSearchInputValue,
} from "../../Books/bookSlice";
import LoadingSpinner from "./../Spinner/LoadingSpinner";
import Book from "../Book/Book";
import bookService from "../../Books/BookService";

const Dashboard = () => {
  const {
    books,
    isLoading,
    errorMessage,
    isCompleted,
    isError,
    searchInputValue,
  } = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
    }

    if (searchInputValue.trim() !== "") {
      dispatch(fetchSearch());
    } else {
      dispatch(getAllBooks());
    }
  }, [isError, errorMessage, dispatch, searchInputValue]);

  return (
    <>
      <Header />
      <main className="wrapper-dashboard">
        <div className="wrapper-search">
          <h1>ALL BOOKS</h1>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => dispatch(setSearchInputValue(e.target.value))}
            value={searchInputValue}
          />
        </div>
        <div className="books-container">
          {isLoading ? (
            <LoadingSpinner />
          ) : isCompleted && books.length === 0 ? (
            <h1 style={{ margin: "50px auto" }}>
              There are no books with that name!
            </h1>
          ) : (
            books.map((book) => <Book book={book} key={book._id} />)
          )}
        </div>
      </main>
    </>
  );
};

export default Dashboard;
