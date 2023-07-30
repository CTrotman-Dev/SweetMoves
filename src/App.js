import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";


import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Clients from "./pages/Clients";

class App extends Component {


  render() {
    return (
      <div className="App">
        {/* <ParallaxProvider> */}
          <Header />
          <div className="mainContent">
            <Routes>
              <Route exact path="/SweetMoves" element={<Home />} />
              <Route path="/SweetMoves/about" element={<About />} />
              <Route path="/SweetMoves/contact" element={<Contact />} />
              <Route path="/SweetMoves/clients" element={<Clients />} />
              
            </Routes>
          </div>
          
          <Footer />
        {/* </ParallaxProvider> */}
      </div>
    );
  }
}

export default App;