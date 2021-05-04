import React from 'react'
import "./ContactForm.css"
import {Link} from "react-router-dom"

function ContactForm() {
    return (
        <div className="container">
        <form action="/action_page.php">
          <div className="row">
            <div className="col-25">
              <label for="fname">First Name</label>
            </div>
            <div className="col-75">
              <input type="text" id="fname" name="firstname" placeholder="Your name.." />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="lname">Last Name</label>
            </div>
            <div className="col-75">
              <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="subject">Subject</label>
            </div>
            <div className="col-75">
              <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
            </div>
          </div>
          <div className="row">
            <Link to="/buynow">Submit</Link>
          </div>
        </form>
      </div>
      
    )
}

export default ContactForm
