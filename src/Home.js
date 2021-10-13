import React from "react";
import './home.css';

function Home(){
    return(
        
        <div>
           <br></br>
           <br></br>
           
           
        <div className="homestyle">
        <h1> welcome to our website</h1>
          <div className="video">
           <video width="100%" height="1000px" controls autoPlay>
            <source src="https://mdbootstrap.com/img/video/Sail-Away.mp4" type="video/mp4" />
             </video>
         </div> 
           
    <h2>Check in and tell us about your ride!!!</h2>
<div className="Form">        
  <form action="/action_page.php">
  <div class="row">
    <div class="col-25">
      <label for="fname">Car Make:-</label>
    </div>
    <div class="col-75">
      <select id="make" name="make">
        <option value="Nissan">Nissan</option>
        <option value="Audi">Audi</option>
        <option value="Ford">Ford</option>
        <option value="Toyota">Toyota</option>
        <option value="Mazda">Mazda</option>
        <option value="Mitsubishi">Mitsubishi</option>
        <option value="Lexus">Lexus</option>
        <option value="Jaguar">Jaguar</option>
        <option value="Ferrari">Farrari</option>
        <option value="Land Rover">Land Rover</option>
        <option value="Mini">Mini</option>
        <option value="Dodge">Dodge</option>
        <option value="Bentley">Bentley</option>
        <option value="Acura">Acura</option>
        <option value="Honda">Honda</option>
      </select>
    </div>
  </div>


  <div class="row">
    <div class="col-25">
      <label for="lname">Model:-</label>
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
      <label for="country">Year:-</label>
    </div>
    <div class="col-75">
      <select id="year" name="year">
        <option value="2000">2000</option>
        <option value="2001">2001</option>
        <option value="2002">2002</option>
        <option value="2003">2003</option>
        <option value="2004">2004</option>
        <option value="2005">2005</option>
        <option value="2006">2006</option>
        <option value="2007">2007</option>
        <option value="2008">2008</option>
        <option value="2009">2009</option>
        <option value="2010">2010</option>
        <option value="2011">2011</option>
        <option value="2012">2012</option>
        <option value="2013">2013</option>
        <option value="2014">2014</option>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
      </select>
    </div>
  </div>
  <h4> What you want to do with your car?</h4>
  <div class="row">
    <div class="col-25">
      
      <label for="subject">Descrption:-</label>
    </div>
    <div class="col-75">
      <textarea id="description" name="descrption" placeholder="Write something.." ></textarea>
    </div>
  </div>
  <div class="row">
    <input type="submit" value="Submit"></input>
  </div>
  </form>
  <br></br>
          <br></br>
  </div>
</div>

               
  <div className="home">
    
    <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
  </div>                        
</div>
                
           
       
   
    );
    }
export default Home;