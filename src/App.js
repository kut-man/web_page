import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

export default function App() {

  return (
    <div className="App">

      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>

      <Footer />
    </div>
  );

}