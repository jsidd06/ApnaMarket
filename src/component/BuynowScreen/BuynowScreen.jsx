import React from 'react'
import buynow from "./image/b.jpg"
import {Link} from "react-router-dom"
import "./BuynowScreen.css"

function BuynowScreen() {
    return (
        <>
        <div className="heading">
            <h1>𝓘'𝓶 𝔀𝓸𝓻𝓴𝓲𝓷𝓰 𝓱𝓮𝓻𝓮 📝</h1>
            </div>
            <div >
                <img src={buynow} className="image" />
            </div>
            <div className="link-buynow">
            <Link to="/">Please Go back</Link>
            </div>
            
        </>
    )
}

export default BuynowScreen
 