import React from "react";
import gym1 from "../images/gym1.jpg"
import gym2 from "../images/gym2.jpg"
import gym3 from "../images/gym3.jpg"
import gym4 from "../images/gym4.jpg"

export default function Body2(){


    return(
        
        <div className="body2">
           <div className="slider">

            <div className="slide slide1">
                <img src={gym1} alt="" className="gym1" />
                <div className="caption">
                    <h2>Workout Classes</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis </p>
                </div>
            </div>


            <div className="slide slide2">
                <img src={gym2} alt="" className="gym1" />
                <div className="caption">
                    <h2>Swimming Pool</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis </p>
                </div>
            </div>
            
            <div className="slide slide3">
                <img src={gym3} alt="" className="gym1" />
                <div className="caption">
                    <h2>Personal Training</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis </p>
                </div>
            </div>
            
            <div className="slide slide4">
                <img src={gym4} alt="" className="gym1" />
                <div className="caption">
                    <h2>Lounge and Bar</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis </p>
                </div>
            </div>

          <div className="slide slide1">
            <img src={gym1} alt="" className="gym1" />
                <div className="caption">
                    <h2>Workout Claasses</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis </p>
                </div>
            </div>

        </div>
            
        </div>

         

        
    )
}