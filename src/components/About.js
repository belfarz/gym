import React from "react";
import about1 from "../images/about1.jpg";
import about4 from "../images/about4.jpg";
import about2 from "../images/about2.jpg"
import about3 from "../images/about3.jpg"



export default function About(){

    return(
        <>
        <div className="about">

           <div className="about--text">
                <h1>About Us</h1>
                <hr/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam hic mollitia doloremque, ducimus voluptatum inventore earum a, dolor sit amet consectetur adipisicing elit. Quam hic mollitia doloremque, ducimus voluptatum inventore earum a, fugiat veritatis laboriosam explicabo at deleniti eligendi cor</p>
                <hr/>
                <div className="about--div">
                <div className="about--img">
                <img src={about3} alt="" className="about1" />
                <h1>CEO</h1>
                <h2>Afolabi Joshua</h2>
                <h3>Afolabi@gym.com</h3>
                </div>

                <div className="about--img">
                <img src={about1} alt="" className="about2" />
                <h1>Manager</h1>
                <h2>Chris John</h2>
                <h3>Chris@gym.com</h3>
                </div>

                <div className="about--img">
                <img src={about2} alt="" className="about3" />
                <h1>Secretary</h1>
                <h2>Amanda Daniels</h2>
                <h3>amanda@gym.com</h3>
                </div>
                
                <div className="about--img">
                <img src={about4} alt="" className="about4" />
                <h1>Instructor</h1>
                <h2>John Legend</h2>
                <h3>Legend@gmail.com</h3>
                </div>
            </div>
           </div>
           
        </div>

        </>
    )
}