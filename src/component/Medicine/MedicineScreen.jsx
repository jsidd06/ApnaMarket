import React from 'react'
import medicinescreen1 from "./images/medicine (1).jpeg"
import medicinescreen2 from "./images/medicine (2).jpeg"
import medicinescreen3 from "./images/medicine (3).jpg"
import medicinescreen4 from "./images/medicine (4).jpg"
import medicinescreen5 from "./images/medicine (5).jpg"
import medicinescreen6 from "./images/medicine (6).jpg"
import medicinescreen7 from "./images/medicine (7).jpg"
import medicinescreen8 from "./images/medicine (8).jpg"
import medicinescreen9 from "./images/medicine (9).jpg"
import {Link} from "react-router-dom"
import "./MedicineScreen.css"

function MedicineScreen() {
    return (
        <div>
        <div className="card">
        <div className="container">
       <img src={medicinescreen1} alt="Avatar" className="image-medicinescreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">medicinescreen</Link></div>
       </div>
     </div>
     <div className="container">
       <img src={medicinescreen2} alt="Avatar" className="image-medicinescreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">medicinescreen</Link></div>
       </div>
     </div>
     <div className="container">
       <img src={medicinescreen3} alt="Avatar" className="image-medicinescreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">medicinescreen</Link></div>
       </div>
     </div>
     <div className="container">
       <img src={medicinescreen4} alt="Avatar" className="image-medicinescreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">medicinescreen</Link></div>
       </div>
     </div>
     <div className="container">
       <img src={medicinescreen5} alt="Avatar" className="image-medicinescreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">medicinescreen</Link></div>
       </div>
     </div>
     <div className="container">
       <img src={medicinescreen6} alt="Avatar" className="image-medicinescreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">medicinescreen</Link></div>
       </div>
     </div>
     <div className="container">
       <img src={medicinescreen7} alt="Avatar" className="image-medicinescreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">medicinescreen</Link></div>
       </div>
     </div>
     <div className="container">
       <img src={medicinescreen8} alt="Avatar" className="image-medicinescreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">medicinescreen</Link></div>
       </div>
     </div>
     <div className="container">
       <img src={medicinescreen9} alt="Avatar" className="image-medicinescreen" />
       <div className="overlay">
         <div className="text"><Link to="/buynow">medicinescreen</Link></div>
       </div>
     </div>
        </div>
     </div>
    )
}

export default MedicineScreen
