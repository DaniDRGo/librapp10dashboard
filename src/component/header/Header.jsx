import React from 'react'
import logo from './Librapp-logo.svg'
import { Link } from 'react-router-dom'
import './Header.css'
function Header() {
   return (
      <div className='containerheader'>
         <div className='navegador'>
            <nav className="navbar navbar-expand-lg bg-light">
               <div className="container-fluid">
                  <a className="navbar-brand" href="#">Dashboard Librapp</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">

                     <img src={logo} className='logoinicio' alt='logo' />
                     <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Busqueda" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Busqueda</button>
                     </form>
                  </div>
               </div>
            </nav>
         </div>
         <div className='slidebar'>
         <nav className="nav flex-column">
            <Link to='/Home' exact="true"><h5>Home</h5></Link>
            <Link to='/Categorias' exact="true"><h5>Categorias</h5></Link>
            <Link to='/Productos' exact="true"><h5>Productos</h5></Link>
            <Link to='/Usuarios' exact="true"><h5>Usuarios</h5></Link>
         </nav>
         </div>
      </div>
   );
}
export default Header;