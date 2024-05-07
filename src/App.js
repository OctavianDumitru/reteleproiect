import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import Servicii from "./Servicii";
import Blog from "./Blog";
import Contact from "./Contact";

import Footer from "./Footer"; // Importul componentei footer
import "./App.css"; // Importul CSS-ului pentru aplicație

const App = () => {
  return (
    <Router>
      <div>
        {/* Titlul principal al service-ului */}
        <header>
          <h1>Service Auto CO Garage</h1> {/* Titlul principal */}
        </header>
        {/* Meniul de navigare */}
        <nav>
          <ul>
            <li>
              <Link to="/about-us">Despre Noi</Link>
            </li>
            <li>
              <Link to="/servicii">Servicii</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Definirea rutelor */}
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/servicii" element={<Servicii />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<AboutUs />} />
        </Routes>

        {/* Adaugă footerul la finalul aplicației */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
