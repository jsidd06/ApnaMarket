import React from 'react'
import womenscreen1 from "./images/w (1).jpeg"
import womenscreen2 from "./images/w (2).jpeg"
import womenscreen3 from "./images/w (3).jpg"
import womenscreen4 from "./images/w (4).jpg"
import womenscreen5 from "./images/w (5).jpg"
import womenscreen7 from "./images/w (6).jpg"
import womenscreen8 from "./images/w (8).jpg"
import womenscreen9 from "./images/w (9).jpg"
import womenscreen10 from "./images/w (10).png"
import womenscreen11 from "./images/w (11).jpg"
import {Link} from "react-router-dom"
import "./WomenScreen.css"

function WomenScreen() {
    return (
        <div>
        <div className="card">
        <div className="container">
       <img src={womenscreen1} alt="Avatar" className="image-womenscreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">womenscreen</Link></div>
       </div>
     </div>
     <div className="container">
       <img src={womenscreen2} alt="Avatar" className="image-womenscreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">womenscreen</Link></div>
       </div>
     </div>
     <div className="container">
       <img src={womenscreen3} alt="Avatar" className="image-womenscreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">womenscreen</Link></div>
       </div>
     </div>
     <div className="container">
       <img src={womenscreen4} alt="Avatar" className="image-womenscreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">womenscreen</Link></div>
       </div>
     </div>
     <div className="container">
       <img src={womenscreen5} alt="Avatar" className="image-womenscreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">womenscreen</Link></div>
       </div>
     </div>
     <div className="container">
       <img src={womenscreen7} alt="Avatar" className="image-womenscreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">womenscreen</Link></div>
       </div>
     </div>
     <div className="container">
       <img src={womenscreen7} alt="Avatar" className="image-womenscreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">womenscreen</Link></div>
       </div>
     </div>
     <div className="container">
       <img src={womenscreen8} alt="Avatar" className="image-womenscreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">womenscreen</Link></div>
       </div>
     </div>
     <div className="container">
       <img src={womenscreen9} alt="Avatar" className="image-womenscreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">womenscreen</Link></div>
       </div>
     </div>
     <div className="container">
       <img src={womenscreen10} alt="Avatar" className="image-womenscreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">womenscreen</Link></div>
       </div>
     </div>
     <div className="container">
       <img src={womenscreen11} alt="Avatar" className="image-womenscreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">womenscreen</Link></div>
       </div>
     </div>
        </div>
     </div>
    )
}

export default WomenScreen
