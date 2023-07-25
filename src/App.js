import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Service from "./components/Service";
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Footer from "./components/Footer";


function App() {


  return (
    <div className="App">
      <Navbar />
      
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gym' element={<Home />} />
            <Route path='/Service' element={<Service />} />
            <Route path='/About' element={<About />} />
          </Routes>
          
      <Footer />


    </div>
  );
}

export default App;
