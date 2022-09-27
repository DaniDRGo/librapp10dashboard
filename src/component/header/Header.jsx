import React from 'react'
import logo from './Librapp-logo.svg'
import './Header.css'
function Header(){
    return(
           <div className='containerheader'>
              <div className='navegador'>
             <nav class="navbar navbar-expand-lg bg-light">
             <div class="container-fluid">
             <a class="navbar-brand" href="#">Dashboard Librapp</a>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
             </button>
             <div class="collapse navbar-collapse" id="navbarSupportedContent">
             
             <img src = {logo} clasName = 'logoinicio' alt='logo'/>
             <form class="d-flex" role="search">
             <input class="form-control me-2" type="search" placeholder="Busqueda" aria-label="Search"/>
             <button class="btn btn-outline-success" type="submit">Busqueda</button>
             </form>
            </div>
         </div>
       </nav> 
        </div>
           <nav class="nav flex-column">
           <a class="nav-link active" aria-current="page" href="#">Active</a>
           <a class="nav-link" href="#">Link</a>
           <a class="nav-link" href="#">Link</a>
           <a class="nav-link disabled">Disabled</a>
           </nav>
        </div>
    );
}
export default Header;