const GetAllBooksURL = "https://books-library-dev.herokuapp.com/api/book";
const GetABookURL = "https://books-library-dev.herokuapp.com/api/book/";
const SearchBookURL = "https://books-library-dev.herokuapp.com/api/book/search";

const getAllBooks = async (token) => {
  const response = await fetch(GetAllBooksURL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const jsonResult = await response.json();

  return jsonResult;
};

const getOneBook = async (id, token) => {
  const response = await fetch(GetABookURL + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const jsonResult = await response.json();

  return jsonResult;
};

const fetchSearch = async (pattern, token) => {
  const response = await fetch(SearchBookURL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ pattern }),
  });

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const jsonResult = await response.json();

  return jsonResult;
};

const bookService = {
  getAllBooks,
  getOneBook,
  fetchSearch,
};

export default bookService;
