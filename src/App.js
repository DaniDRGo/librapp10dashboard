<<<<<<< HEAD
import React from "react";
=======
import React, { useEffect } from "react";
>>>>>>> jorge
import "./App.css";

import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Home from './component/main/Home'


function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );

  }


export default App;