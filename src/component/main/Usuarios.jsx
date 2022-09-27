import React, { Component, useState, useEffect } from "react";
import './Usuarios.css'
function Usuarios() {
  const [users, setUsers] = useState([])


  async function loadData() {
    try {
      const request = await fetch('http://localhost:5010/api/users')
      const json = await request.json()
      setUsers(json.users)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className="tablausuarios">

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Detalle</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {
            users.map((user) => {
              return (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.detail}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>


    </div>
  );
}


export default Usuarios



