import React, { Component, useState, useEffect } from "react";
import './productos.css'
function Productos () {
  const [books, setBooks] = useState([])


  async function loadData() {
    try {
      const request = await fetch('http://localhost:5010/api/books')
      const json = await request.json()
      setBooks(json.products)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className="tablaProducto">

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Categoria</th>
            <th scope="col">Url</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {
            books.map((product) => {
              return (
                <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{product.name}</td>
                  <td>{product.categoria}</td>
                  <td>{product.url}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>


    </div>
  );
}

export default Productos;
