import React from 'react'
import electronicscreen1 from "./image/e (1).jpeg"
import electronicscreen2 from "./image/e (2).jpeg"
import electronicscreen3 from "./image/e (3).jpg"
import electronicscreen4 from "./image/e (4).jpg"
import electronicscreen5 from "./image/e (5).jpg"
import electronicscreen6 from "./image/e (6).jpg"
import electronicscreen7 from "./image/e (7).jpg"
import electronicscreen8 from "./image/e (8).jpg"
import electronicscreen9 from "./image/e (9).jpg"
import electronicscreen10 from "./image/e (10).jpg"
import electronicscreen11 from "./image/e (11).png"
import electronicscreen12 from "./image/e (12).jpg"
import "./ElectronicScreen.css"
import {Link} from "react-router-dom"

function ElectronicScreen() {
    return (
        <div>
           <div className="card">
           <div className="container">
          <img src={electronicscreen1} alt="Avatar" className="image-electronicscreen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={electronicscreen2} alt="Avatar" className="image-electronicscreen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={electronicscreen3} alt="Avatar" className="image-electronicscreen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={electronicscreen4} alt="Avatar" className="image-electronicscreen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={electronicscreen5} alt="Avatar" className="image-electronicscreen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={electronicscreen6} alt="Avatar" className="image-electronicscreen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={electronicscreen7} alt="Avatar" className="image-electronicscreen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={electronicscreen8} alt="Avatar" className="image-electronicscreen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={electronicscreen9} alt="Avatar" className="image-electronicscreen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={electronicscreen10} alt="Avatar" className="image-electronicscreen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={electronicscreen11} alt="Avatar" className="image-electronicscreen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={electronicscreen12} alt="Avatar" className="image-electronicscreen" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
           </div>
        </div>
    )
}

export default ElectronicScreen
