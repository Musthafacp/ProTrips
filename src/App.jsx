import React from "react";
import { Routes, Link, Route } from "react-router-dom";
import Form from "./Component/Form";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link className="kalvium" to="/">KALVIUM❤️</Link>
          </li>
          <div>
            <li>
              <Link to="/Form">Registration Form</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </div>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
