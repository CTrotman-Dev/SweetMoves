import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HashRouter } from "react-router-dom";
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Clients from "./pages/Clients";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";

import App from './App'; 

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <HashRouter>
//     <App />
//   </HashRouter>

const router = createBrowserRouter(
  createRoutesFromElements(
<Route path="/" element={<App />} errorElement={<NotFound />}>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/reviews" element={<Clients />} />
  <Route path='/services' element={<Services />} />
  <Route errorElement={<NotFound />} />
</Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

