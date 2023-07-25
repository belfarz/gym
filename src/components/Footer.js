import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
  return (
    <>
    <footer> 
      <div className="footer--icons">
        <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} className="icon" /></a>
        <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} className="icon" /></a>
        <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} className="icon" /></a>
        <a href="https://tiktok.com"><FontAwesomeIcon icon={faTiktok} className="icon" /></a>
        <a href="https://youtube.com"><FontAwesomeIcon icon={faYoutube} className="icon" /></a>
      </div>

      <div className="footer--nav">
        <ul>
          <li><Link to="/" className="footer--li">Home</Link></li>
          <li><Link to="/Service" className="footer--li">Services</Link></li>
          <li><Link to="/About" className="footer--li">About</Link></li>
          <li><Link to="#pricing" className="footer--li">pricing</Link></li>
          <li><a href="#contact">Contact</a></li> 
        </ul>
      </div>

    </footer>

    <div className="footer--bottom">
        <p>Copyright &copy;2023; Designed by <span className="designer">Suleiman</span></p>
      </div>

    </>
  );
}
