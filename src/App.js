import React from "react";
import "./App.css";

import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Productos from './component/main/Productos'


function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Productos />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );

  }


export default App;