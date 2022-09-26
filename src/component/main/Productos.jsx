import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Productos() {
  // http://localhost:5010/api/users
  // http://localhost:5010/api/users/detalle/id
  // http://localhost:5010/api/books
  // http://localhost:5010/api/books/detalle/id

  const [books, setBooks] = useState([]);

  async function loadData() {
    try {
      const request = await fetch("http://localhost:5010/api/books");
      const json = await request.json();
      setBooks(json.products);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      {books.map((book) => {
        return (
          <div key={book.id}>
            <h1> {book.name} </h1>
            <span> {book.categoria}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Productos;
