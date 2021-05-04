import React from "react";
import "./Aboutscreen.css"
import {Link} from "react-router-dom"
import sidd from "./images/s.jpg"

function AboutScreen() {
  return (
    <>
    <div className="heading">
        <h1>My Name is Siddharth Jain</h1>
    </div>
    <div className="card">
        <div className="box-1">
        <img src={sidd} className="image" />
        </div>
        <div className="box-2">
        <h2>About Me</h2>
        <p>I'm a webdeveloper and I'm looking for a job now days or i have completed my BCA Graducation apart off this i'm a social media influencer you can checkout my <strong>Instagram profile,Github repository,Facebook.</strong></p>
       <div className="social">
       <a target='_blank' href="https://github.com/jsidd06"><i class="fab fa-github"></i></a>
        <a target="_blank" href="https://www.instagram.com/sidd.jain.90/"><i class="fab fa-instagram"></i></a>
        <a target="_blank" href="https://www.facebook.com/sidd.jain.90"><i class="fab fa-facebook-square"></i></a>
       </div>
        </div>
    </div>
    </>
  );
}

export default AboutScreen;
