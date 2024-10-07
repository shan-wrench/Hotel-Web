import React from 'react'
import {react} from 'react-router-dom'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"


const Navbar = () => {
  return (
    <>
        <nav className="navbar">
            <div className="container flex_space">
                <div className="meni-iton">
                    <i class="fa-solid fa-bars"></i>
                </div>

                <ul className = "nav-menu active">
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/gallery">Gallery</Link>
                        <Link to="/destination">Destination</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/testimonail">Testimonail</Link>
                        <Link to="/contactus">Contact Us</Link>
                    </li>
                </ul>

                <div 
            </div>
        </nav>    
    </>
  )
}

export default Navbar