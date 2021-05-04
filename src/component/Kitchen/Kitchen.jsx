import React from 'react'
import kitechen1 from "./images/k (1).jpeg"
import kitechen2 from "./images/k (2).jpeg"
import kitechen3 from "./images/k (3).jpeg"
import kitechen4 from "./images/k (4).jpg"
import kitechen5 from "./images/k (5).jpg"
import kitechen6 from "./images/k (6).png"
import kitechen7 from "./images/k (7).jpg"
import kitechen8 from "./images/k (8).png"
import kitechen9 from "./images/k (9).jpg"
import "./Kitchen.css"
import {Link} from "react-router-dom"

function Kitchen() {
    return (
        <div>
           <div className="card">
           <div className="container">
          <img src={kitechen1} alt="Avatar" className="image-Kitchen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={kitechen2} alt="Avatar" className="image-Kitchen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={kitechen3} alt="Avatar" className="image-Kitchen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={kitechen4} alt="Avatar" className="image-Kitchen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={kitechen5} alt="Avatar" className="image-Kitchen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={kitechen6} alt="Avatar" className="image-Kitchen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={kitechen7} alt="Avatar" className="image-Kitchen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={kitechen8} alt="Avatar" className="image-Kitchen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={kitechen9} alt="Avatar" className="image-Kitchen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
           </div>
        </div>
    )
}

export default Kitchen
