import React from "react";
import pulse from "../images/Pulse.png"
import yoga from "../images/Yoga.png"
import flexing from "../images/Flexing.png"
import squats from "../images/Squats.png"

export default function Fitness(){
    return(
        <div>
           <h1 align="center" className="fitness--h1">FIND YOUR FITNESS <span>SOLUTION</span> </h1>
              <div className="fitness--wrapper">
                    <div className="fitness--goal">
                        <div className="fit">
                        <img src={pulse} alt="" />
                        <h2 align="center">Cardio</h2>
                         </div>
                        <p>Reduce stress,Increase engery
                              and feel Happy and Healthy</p>
                    </div>

                     <div className="fitness--goal">
                        <div className="fit">
                        <img src={yoga} alt="" />
                        <h2 align="center">Yoga</h2>
                         </div>
                        <p>Reduce stress,Increase engery
                              and feel Happy and Healthy</p>
                    </div>

                     <div className="fitness--goal">
                        <div className="fit">
                        <img src={flexing} alt="" />
                        <h2 align="center">Muscle Build</h2>
                         </div>
                        <p>Reduce stress,Increase engery
                              and feel Happy and Healthy</p>
                    </div>

                     <div className="fitness--goal">
                        <div className="fit">
                        <img src={squats} alt="" />
                        <h2 align="center">Weight Loss</h2>
                         </div>
                        <p>Reduce stress,Increase engery
                              and feel Happy and Healthy</p>
                    </div>
                
              </div>

        </div>
    )
}