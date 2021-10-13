import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
function NavBar(){
    return(
        <ul className="navbar">
        <a><Link to="/">Home</Link></a>
        <a><Link to="/pictures">Pictures</Link></a>
        <a><Link to="/about">About</Link></a>
        <a><Link to="/contact">Contact</Link></a>
        <a><Link to="/help">Help</Link></a>
        </ul>
        
    )
}

export default NavBar;