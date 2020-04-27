import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import axios from "axios";

function App() {
  const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";
  const [books, setBooks] = useState("");

  const fetchData = async () => {
    const response = await axios.get(apiURL);
    var bookArray = [];
    response.data.forEach((book, index) => {
      let dateString = new Date(book.released).toDateString();
      bookArray.push(
        <div className="book" key={index}>
          <h3>Book {index + 1}</h3>
          <h2>{book.name}</h2>
          <div className="details">
            <p>👨: {book.authors}</p>
            <p>📖:{book.numberOfPages}</p>
            <p>🏘️: {book.country}</p>
            <p>⏰: {dateString}</p>
          </div>
        </div>
      );
    });
    console.log("got books, setting state");
    setBooks(bookArray);
  };

  return (
    <div className="App">
      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>
      <div>
        <button onClick={fetchData} className="fetch-button">
          Fetch Data
        </button>
        <br />
      </div>

      <div className="books">{books}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
