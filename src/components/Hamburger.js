import React from "react";
import './Hamburger.css';

const Hamburger = ({ onClick }) => {
    return (
      <button className="hamburger-menu" onClick={onClick}>
        <span className="hamburger-menu__bar"></span>
        <span className="hamburger-menu__bar"></span>
        <span className="hamburger-menu__bar"></span>
      </button>
    );
  };
  
  export default Hamburger;