import React from "react";

export default function Fitness(){
    return(
        <div>
           <h1 align="center" className="fitness--h1">FIND YOUR FITNESS <span>SOLUTION</span> </h1>
              <div className="fitness--wrapper">
                    <div className="fitness--goal">
                        <div className="fit">
                        <img src="images/Pulse.png" alt="" />
                        <h2 align="center">Cardio</h2>
                         </div>
                        <p>Reduce stress,Increase engery
                              and feel Happy and Healthy</p>
                    </div>

                     <div className="fitness--goal">
                        <div className="fit">
                        <img src="images/yoga.png" alt="" />
                        <h2 align="center">Yoga</h2>
                         </div>
                        <p>Reduce stress,Increase engery
                              and feel Happy and Healthy</p>
                    </div>

                     <div className="fitness--goal">
                        <div className="fit">
                        <img src="images/Flexing.png" alt="" />
                        <h2 align="center">Muscle Build</h2>
                         </div>
                        <p>Reduce stress,Increase engery
                              and feel Happy and Healthy</p>
                    </div>

                     <div className="fitness--goal">
                        <div className="fit">
                        <img src="images/Squats.png" alt="" />
                        <h2 align="center">Weight Loss</h2>
                         </div>
                        <p>Reduce stress,Increase engery
                              and feel Happy and Healthy</p>
                    </div>
                
              </div>

        </div>
    )
}