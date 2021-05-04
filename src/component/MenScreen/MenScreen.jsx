import React from 'react'
import menscreen1 from "./images/men (1).jpeg"
import menscreen2 from "./images/men (2).jpeg"
import menscreen3 from "./images/men (3).jpeg"
import menscreen4 from "./images/men (4).jpg"
import menscreen5 from "./images/men (5).jpg"
import menscreen6 from "./images/men (6).jpg"
import menscreen7 from "./images/men (7).jpg"
import menscreen8 from "./images/men (8).jpg"
import menscreen9 from "./images/men (9).png"
import menscreen10 from "./images/men (10).jpg"
import menscreen11 from "./images/men (11).jpg"
import {Link} from "react-router-dom"
import "./MenScreen.css"
function MenScreen() {
    return (
        <div>
        <div className="card">
        <div className="container">
       <img src={menscreen1} alt="Avatar" className="image-menscreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">BuyNow</Link></div>
       </div>
     </div>
     <div className="container">
       <img src={menscreen2} alt="Avatar" className="image-menscreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">BuyNow</Link></div>
       </div>
     </div>
     <div className="container">
       <img src={menscreen3} alt="Avatar" className="image-menscreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">BuyNow</Link></div>
       </div>
     </div>
     <div className="container">
       <img src={menscreen4} alt="Avatar" className="image-menscreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">BuyNow</Link></div>
       </div>
     </div>
     <div className="container">
       <img src={menscreen5} alt="Avatar" className="image-menscreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">BuyNow</Link></div>
       </div>
     </div>
     <div className="container">
       <img src={menscreen6} alt="Avatar" className="image-menscreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">BuyNow</Link></div>
       </div>
     </div>
     <div className="container">
       <img src={menscreen7} alt="Avatar" className="image-menscreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">BuyNow</Link></div>
       </div>
     </div>
     <div className="container">
       <img src={menscreen8} alt="Avatar" className="image-menscreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">BuyNow</Link></div>
       </div>
     </div>
     <div className="container">
       <img src={menscreen9} alt="Avatar" className="image-menscreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">BuyNow</Link></div>
       </div>
     </div>
     <div className="container">
       <img src={menscreen10} alt="Avatar" className="image-menscreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">BuyNow</Link></div>
       </div>
     </div>
     <div className="container">
       <img src={menscreen11} alt="Avatar" className="image-menscreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">BuyNow</Link></div>
       </div>
     </div>
        </div>
     </div>
    )
}

export default MenScreen
