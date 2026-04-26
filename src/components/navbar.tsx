"use client";
import React from 'react'
import { useState } from "react";
import "./navbar.css";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (

  
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">C</div>
          <span className="logo-text">Span Investment</span>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Insights</li>
        </ul>

        {/* Button */}
        <button className="get-started-btn">
          Get Started
        </button>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li>Insights</li>

        <button className="mobile-btn">
          Get Started
        </button>
      </div>

    </nav>
  

  )
}

export default Navbar