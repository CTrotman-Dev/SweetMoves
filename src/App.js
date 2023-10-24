import React, { Component } from 'react';
// import { Routes, Route } from "react-router-dom";
import { Link, Outlet} from "react-router-dom";

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
      
          <Header />
           <div className="mainContent">
           <ScrollTop />
            {/*<Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/reviews" element={<Clients />} />
              <Route exact path='/services' element={<Services />} />
            </Routes>*/}
            <Outlet />
          </div> 
          
          <Footer />
      </div>
    );
  }
}

export default App;