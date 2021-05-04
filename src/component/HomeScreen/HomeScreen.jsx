import React from "react";
import mobile from "./images/mobile.jpg";
import computer from "./images/computer.png";
import women from "./images/women.jpg";
import men from "./images/m.jpg";
import grocry from "./images/g.jpg";
import medicine from "./images/medicine.jpg"
import electronic from "./images/electronic.jpg"
import kitchen from "./images/kitchen.jpeg"
import "./HomeScreen.css";
import {Link} from "react-router-dom"

function HomeScreen() {
  return (
    <>
      <div className="card">
        <div className="container">
          <img src={mobile} alt="Avatar" className="image" />
          <div className="overlay">
            <div className="text"><Link to="/mobiles">Mobile</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={computer} alt="Avatar" className="image-computer" />
          <div className="overlay">
            <div className="text"><Link to="/computers">Computer</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={women} alt="Avatar" className="image" />
          <div className="overlay">
            <div className="text"><Link to="/women">Women</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={men} alt="Avatar" className="image-men" />
          <div className="overlay">
            <div className="text"><Link to="/men">Men</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={grocry} alt="Avatar" className="image-grocry" />
          <div className="overlay">
            <div className="text"><Link to="/grorcy">Grocry</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={medicine} alt="Avatar" className="image-medicine" />
          <div className="overlay">
            <div className="text"><Link to="/medicine">Medicine</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={electronic} alt="Avatar" className="image-electronic" />
          <div className="overlay">
            <div className="text"><Link to="/electronic">Electronic</Link></div>
          </div>
        </div>
        <div className="container">
          <img src={kitchen} alt="Avatar" className="image-kitchen" />
          <div className="overlay">
            <div className="text"><Link to="/kitchen">Kitchen</Link></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
