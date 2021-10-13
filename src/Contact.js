import React from "react";
import './Contact.css';


function Contact(){
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
        <form action="/action_page.php">
<div class="row">
    <div class="col-25">
      <label for="fname">First Name</label>
    </div>
    <div class="col-75">
      <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
    </div>
  </div>




  <div class="row">
    <div class="col-25">
      <label for="lname">Last Name</label>
    </div>
    <div class="col-75">
      <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
    </div>
  </div>


  <div class="row">
    <div class="col-25">
      <label for="email">Email Address</label>
    </div>
    <div class="col-75">
      <input type="text" id="email" name="email" placeholder="Your Email Address.."></input>
    </div>
  </div>

  <div class="row">
    <div class="col-25">
      <label for="number">Phone Number</label>
    </div>
    <div class="col-75">
      <input type="text" id="number" name="number" placeholder="Phone Numbers.."></input>
    </div>
  </div>

  
  <div class="row">
    <div class="col-25">
      <label for="country">Country</label>
    </div>
    <div class="col-75">
      <select id="country" name="country">
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>
    </div>
  </div>



  <div class="row">
    <div class="col-25">
      <label for="subject">Send Message</label>
    </div>
    <div class="col-75">
      <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
    </div>
  </div>



  <div class="row">
    <input type="button" value="Send Message"></input>
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