import React from "react";
import Body2 from "./Body2";
import gym1 from "../images/gym1.jpg"
import gym2 from "../images/gym2.jpg"
import gym3 from "../images/gym3.jpg"
import gym4 from "../images/gym4.jpg"

export default function Service(){
    return(
        <>
      <Body2 /> 
        <h1 className="service--h1">Our Services</h1>
        <div className="service--wrapper">

        <div className="service s-1">
            <div className="service--div">
                <img src={gym1} alt=""  />
                  <div> 
                    <h2>service one</h2>          
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ut esse rerum eius, iusto necessitatibus, officiis non error cum dignissimos quisquam voluptate aspernatur quae, temporibus quaerat obcaecati alias ab ullam.</p>
                 </div>
           </div>
          </div>

      
          <div className="service s-2">
            <div className="service--div">
                <img src={gym2} alt=""  />
                  <div> 
                    <h2>service two</h2>          
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ut esse rerum eius, iusto necessitatibus, officiis non error cum dignissimos quisquam voluptate aspernatur quae, temporibus quaerat obcaecati alias ab ullam.</p>
                 </div>
           </div>
          </div>


          <div className="service s-3">
            <div className="service--div">
                <img src={gym3} alt=""  />
                  <div> 
                    <h2>service three</h2>          
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ut esse rerum eius, iusto necessitatibus, officiis non error cum dignissimos quisquam voluptate aspernatur quae, temporibus quaerat obcaecati alias ab ullam.</p>
                 </div>
           </div>
          </div>


          <div className="service s-4">
            <div className="service--div">
                 <div> 
                      <h2>service four </h2>          
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ut esse rerum eius, iusto necessitatibus, officiis non error cum dignissimos quisquam voluptate aspernatur quae, temporibus quaerat obcaecati alias ab ullam.</p>
                </div>
                     <img src={gym4} alt=""  />
           </div>
          </div>


      



        </div>
        
        
        </>
    )
}