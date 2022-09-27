import React,{useState,useEffect} from 'react'
import './home.css'
function Home() {
  const [users, setUsers] = useState([])
  const [books, setBooks] = useState([])
  const [categorias, setCategorias] = useState([])
  
  async function loadData() {
    try {
      const request = await fetch('http://localhost:5010/api/users')
      const request2 = await fetch('http://localhost:5010/api/books')
      const request3 = await fetch('http://localhost:5010/api/categories')
      const json = await request.json()
      const json2 = await request2.json()
      const json3 = await request3.json()
      setUsers(json.count)
      setBooks(json2.count)
      setCategorias(json3.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadData()
  }, [])
  
  
  
  return (
    <div className='home'>


      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Estadisticas de Librrap 10</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Catindad de Usuarios {users} </li>
        <li className="list-group-item">Cantidad de Libros {books} </li>
        <li className="list-group-item">Generos Disponibles {categorias.length} </li>
      </ul>
    </div>


  )
};

export default Home;
