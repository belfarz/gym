import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Service from "./components/Service";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Footer from "./components/Footer";


function App() {


  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gym' element={<Home />} />
            <Route path='/Service' element={<Service />} />
            <Route path='/About' element={<About />} />
          </Routes>
          </BrowserRouter>
      <Footer />


    </div>
  );
}

export default App;
