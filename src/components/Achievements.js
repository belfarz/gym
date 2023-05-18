import React from "react";

export default function Achievements(){
    return(
        <>
            <h1 align="center" className="a-h1">ACHIEVE<span>MENTS</span></h1>
              <div className="achive--background">
                <div className="achievement A1">
                  <img src="images/Exercise.png" alt="" />
                  <h2>100k+</h2>
                  <span>Calories burnt</span>
                </div>
                <div className="achievement A2">
                  <img src="images/Thumbs.png" alt="" />
                  <h2>3000</h2>
                  <span>Positive Reviews</span>
                </div>
                <div className="achievement A3">
                  <img src="images/Crowd.png" alt="" />
                  <h2>9000+</h2>
                  <span>Satisfied Customer</span>
                </div>
              </div>
              

        </>
    )
}