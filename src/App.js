

import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Pictures from "./Pictures";
import Help from "./Help";
import Contact from "./Contact";
import {Route,Link} from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function App() {
  return (
    <div className="App"> 
    <NavBar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/pictures" component={Pictures}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/help" component={Help}/>
     <Footer/>
    </div>
  );
}

export default App;
