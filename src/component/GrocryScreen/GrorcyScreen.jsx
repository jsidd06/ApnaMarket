import React from 'react'
import GrorcyScreen1 from "./images/g (1).jpeg"
import GrorcyScreen8 from "./images/g (8).jpg"
import GrorcyScreen2 from "./images/g (2).jpg"
import GrorcyScreen9 from "./images/g (9).jpeg"
import GrorcyScreen10 from "./images/g (10).jpeg"
import GrorcyScreen3 from "./images/g (3).jpg"
import GrorcyScreen4 from "./images/g (4).jpg"
import GrorcyScreen5 from "./images/g (5).jpg"
import GrorcyScreen6 from "./images/g (6).jpg"
import GrorcyScreen7 from "./images/g (7).jpg"
import "./GrocryScreen.css"
import {Link} from "react-router-dom"

function GrorcyScreen() {
    return (
        <div>
           <div className="card">
           <div className="container">
          <img src={GrorcyScreen1} alt="Avatar" className="image-GrorcyScreen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={GrorcyScreen9} alt="Avatar" className="image-GrorcyScreen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={GrorcyScreen8} alt="Avatar" className="image-GrorcyScreen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={GrorcyScreen2} alt="Avatar" className="image-GrorcyScreen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={GrorcyScreen7} alt="Avatar" className="image-GrorcyScreen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={GrorcyScreen3} alt="Avatar" className="image-GrorcyScreen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={GrorcyScreen4} alt="Avatar" className="image-GrorcyScreen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={GrorcyScreen5} alt="Avatar" className="image-GrorcyScreen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={GrorcyScreen6} alt="Avatar" className="image-GrorcyScreen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={GrorcyScreen7} alt="Avatar" className="image-GrorcyScreen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={GrorcyScreen10} alt="Avatar" className="image-GrorcyScreen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
           </div>
        </div>
    )
}

export default GrorcyScreen
