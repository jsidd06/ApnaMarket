import React from 'react'
import computer1 from "./images/c (1).jpg"
import computer2 from "./images/c (2).jpg"
import computer3 from "./images/c (3).jpg"
import computer4 from "./images/c (4).jpg"
import computer5 from "./images/c (5).jpg"
import computer6 from "./images/c (6).jpg"
import computer7 from "./images/c (7).jpg"
import computer8 from "./images/c (8).jpg"
import computer9 from "./images/c (9).jpg"
import computer10 from "./images/c (10).jpg"
import {Link} from "react-router-dom"


function ComputerScreen() {
    return (
        <div>
           <div className="card">
           <div className="container">
          <img src={computer1} alt="Avatar" className="image-computer" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={computer2} alt="Avatar" className="image-computer" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={computer3} alt="Avatar" className="image-computer" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={computer4} alt="Avatar" className="image-computer" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={computer5} alt="Avatar" className="image-computer" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={computer6} alt="Avatar" className="image-computer" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={computer7} alt="Avatar" className="image-computer" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={computer8} alt="Avatar" className="image-computer" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={computer9} alt="Avatar" className="image-computer" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={computer10} alt="Avatar" className="image-computer" />
          <div className="overlay">
            <div className="text"><Link to="/buynow">BuyNow</Link></div>
          </div>
        </div>
           </div>
        </div>
    )
}

export default ComputerScreen
