import React, { useState } from "react";
import './Contact.css';

import api from './utils/api'

function Contact(){

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [city, setCity] = useState(() => "tauranga")
  const [message, setMessage] = useState("")
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await api.post("/contactrequests", {
        firstName, lastName, email, city, message, phone: parseInt(phone)
      })
      alert("Submitted Successfully!!!")
    } catch (err) {
      alert(err.message || "Could not submit the message.")
    }
  }
  
  
    return(
        <div className="contactstyle">
            <br></br>
            <br></br>
            <h1>Contact us.</h1>
            <br></br>

            <div>
              <h2>Phone Number</h2>
              <a href="tel:+644-o0225651705">+644-0225651705</a>
            </div>
              <br></br>
            <div>
              <h2>Email Adress</h2>
              <a href = "mailto:abc@example.com?subject = Feedback&body = Message">bimalbisho522@gmail.com </a>
            </div>
            <br></br>
            <div>
              <h2>Location</h2>
              <p>73 Moehau Street,Te Puke New Zealand </p>
            </div>
            <br></br>
            <br></br>
       
        <div class="container">
        <h3>Send us a Message</h3>
        <div className="bimal">
        <form onSubmit={handleSubmit}>
<div class="row">
    <div class="col-25">
      <label for="fname">First Name</label>
    </div>
    <div class="col-75">
      <input type="text" id="fname" name="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Your name.."></input>
    </div>
  </div>




  <div class="row">
    <div class="col-25">
      <label for="lname">Last Name</label>
    </div>
    <div class="col-75">
      <input type="text" id="lname" name="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Your last name.."></input>
    </div>
  </div>


  <div class="row">
    <div class="col-25">
      <label for="email">Email Address</label>
    </div>
    <div class="col-75">
      <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email Address.."></input>
    </div>
  </div>

  <div class="row">
    <div class="col-25">
      <label for="number">Phone Number</label>
    </div>
    <div class="col-75">
      <input type="text" id="number" name="number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Numbers.."></input>
    </div>
  </div>

  
  <div class="row">
    <div class="col-25">
      <label for="city">City</label>
    </div>
    <div class="col-75">
      <select id="city" name="city" value={city} onChange={e => setCity(e.target.value)}>
        <option disabled>Choose a city</option>
        <option value="tauranga">Tauranga</option>
        <option value="te_puke">Te Puke</option>
        <option value="papamoa">Papamoa</option>
        <option value="greeton">Greeton</option>
        <option value="gate_pa">Gate Pa</option>
      </select>
    </div>
  </div>



  <div class="row">
    <div class="col-25">
      <label for="subject">Send Message</label>
    </div>
    <div class="col-75">
      <textarea id="subject" name="subject" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write something.." ></textarea>
    </div>
  </div>



  <div class="row">
    <button type="submit">Send Message</button>
  </div>
  </form>
  </div>
  
</div>
<br></br>
<br></br>         
 </div>  
  
 
    );
    
}

export default Contact;