import React from "react";
import { useEffect } from "react";

function Home() {
  // http://localhost:5010/api/users
  // http://localhost:5010/api/users/detalle/id
  // http://localhost:5010/api/books
  // http://localhost:5010/api/books/detalle/id

  useEffect( () => {
    fetch('http://localhost:5010/api/books/detalle/45')
      .then(response => response.json())
      .then( data => console.log(data) )

  },[])

  return <div>Componente Home Renderizando</div>;
}

export default Home;
