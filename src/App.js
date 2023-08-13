import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";


import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Clients from "./pages/Clients";
import Services from "./pages/Services";
import ScrollTop from './components/ScrollTop';

class App extends Component {


  render() {
    return (
      <div className="App">
      <ScrollTop />
        {/* <ParallaxProvider> */}
          <Header />
          <div className="mainContent">
            <Routes>
              {/* <Route exact path="/SweetMoves" element={<Home />} />
              <Route path="/SweetMoves/about" element={<About />} />
              <Route path="/SweetMoves/contact" element={<Contact />} />
              <Route path="/SweetMoves/clients" element={<Clients />} /> */}
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/reviews" element={<Clients />} />
              <Route exact path='/services' element={<Services />} />
            </Routes>
          </div>
          
          <Footer />
        {/* </ParallaxProvider> */}
      </div>
    );
  }
}

export default App;