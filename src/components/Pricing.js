import React from "react";

export default function Pricing(){
    return(
        <>
         <h1 className="price-h1">Pricing</h1>
        <div className="pricing" id="pricing">
           
            <div className="price P1">
               <h1>Daily</h1>
                <h2>$2000</h2>
                <div>
                
                   <li>Training</li>
                   <li>Bar</li>
                   <li>lounge</li>
                   <li>Pool</li>
                   </div>
                   <button>join now</button>
            </div>

            <div className="price P2">
               <h1>Monthly</h1>
               <h2>$2000</h2>
                  <div>
                
                   <li>Training</li>
                   <li>Bar</li>
                   <li>lounge</li>
                   <li>Pool</li>
                   </div>
                   <button>join now</button>
            </div>
        </div>
        </>
    )
}