import React from "react";
import { useEffect } from 'react';
import { useRef } from "react";
import {Link} from "react-router-dom";
import { FaBars } from "react-icons/fa"



export default function Navbar(){

    function handleScroll() {
        if (window.pageYOffset > 0) {
          document.querySelector('nav').classList.add('black');
        } else {
          document.querySelector('nav').classList.remove('black');
        }
      }

   

      useEffect(() => {                                                         
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


      const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};


    return(
      
         <nav onScroll={handleScroll} >
           
           <span className="logo">Logo</span>
           <div className="nav--links" ref={navRef}>
            <li><Link to="/" className="nav--li">Home</Link></li>
            <li><Link to="/Service" className="nav--li">Servicess</Link></li>
            <li><Link to="/About" className="nav--li">About</Link></li>
           
           
            
           </div>

           <button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
            
        </nav>

        
         
    )
}