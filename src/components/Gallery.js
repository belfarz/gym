import React from "react";
import gallery1 from "../images/Rectangle9.png"
import gallery2 from "../images/Rectangle10.png"
import gallery3 from "../images/Rectangle11.png"
import gallery4 from "../images/Rectangle12.png"

export default function Gallery(){
    return(
        <div className="gallery">
         <div className="gallery--wrapper">
            <h1 align="center">Our Gallery</h1>
                <div className="gallery--row1">
                <img src={gallery1} alt="" className="gallery1" />
                    <div className="row1--row">
                    <img src={gallery2} alt="" className="gallery2" />
                    <img src={gallery3} alt="" className="gallery3" />
                    </div>
                </div>
                <div className="gallery--row2">
                <img src={gallery4} alt="" className="gallery4" />
                </div>
        </div>
        </div>
    )
}