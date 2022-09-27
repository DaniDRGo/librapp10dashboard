import React, { Component, useState, useEffect } from "react";
import './categorias.css'
function Categorias() {
  const [categorias, setCategorias] = useState([])


  async function loadData() {
    try {
      const request = await fetch('http://localhost:5010/api/categories')
      const json = await request.json()
      setCategorias(json.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className="categoriaTabla">

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Total de titulos</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {
            categorias.map((data) => {
              return (
                <tr key={data.id}>
                  <th scope="row">{data.id}</th>
                  <td>{data.nombre}</td>
                  <td>{data.TotalLibros}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>


    </div>
  );
}

export default Categorias;