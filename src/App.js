import React from 'react';
import './App.css';
import Header from './component/header/Header';
import Home from './component/main/Home';
import Usuarios from './component/main/Usuarios';
import Categorias from './component/main/Categorias';
import Productos from './component/main/Productos';
import { Link, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Route>
      <div className="container">
        <header>
          <Header />
        </header>

        <Switch>
          <Route path='/Home' exact={true} component={Home} />
          <Route path='/Categorias' component={Categorias} />
          <Route path='/Productos' component={Productos} />
          <Route path='/Usuarios' component={Usuarios} />
        </Switch>
      </div>
    </Route>
  );

}


export default App;