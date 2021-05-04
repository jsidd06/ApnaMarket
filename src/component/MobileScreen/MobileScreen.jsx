import React from 'react'
import {Link} from "react-router-dom"
import mobile1 from "./images/m (1).jpeg"
import mobile2 from "./images/m (1).jpg"
import mobile3 from "./images/m (1).png"
import mobile4 from "./images/m (2).jpg"
import mobile5 from "./images/m (3).jpg"
import mobile6 from "./images/m (4).jpg"
import mobile7 from "./images/m (5).jpg"
import mobile8 from "./images/m (6).jpg"
import mobile9 from "./images/m (7).jpg"
import mobile10 from "./images/m (8).jpg"
import "./MobileScreen.css"

function MobileScreen() {
    return (
        <div>
           <div className="card">
           <div className="container">
          <img src={mobile1} alt="Avatar" className="image-mobile" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={mobile2} alt="Avatar" className="image-mobile" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={mobile3} alt="Avatar" className="image-mobile" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={mobile4} alt="Avatar" className="image-mobile" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={mobile5} alt="Avatar" className="image-mobile" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={mobile6} alt="Avatar" className="image-mobile" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={mobile7} alt="Avatar" className="image-mobile" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={mobile8} alt="Avatar" className="image-mobile" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={mobile9} alt="Avatar" className="image-mobile" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={mobile10} alt="Avatar" className="image-mobile" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
           </div>
        </div>
    )
}

export default MobileScreen
