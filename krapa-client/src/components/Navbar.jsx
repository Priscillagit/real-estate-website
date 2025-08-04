// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <h2 className="logo">KRAPA</h2>
      <nav className="nav-links">
        <a href="#listings">Listings</a>
        <a href="#gallery">Gallery</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="/admin">Admin</a>

      </nav>
    </header>
  );
}

export default Navbar;
