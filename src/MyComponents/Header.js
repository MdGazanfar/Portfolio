import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo"><p><span className="name">Gazan </span>Portfo<span className="span">lio.</span></p></div>
          <ul className="menu">
            <li><Link to="/" className="menu-btn">Home</Link></li>
            <li><Link to="/about" className="menu-btn">About</Link></li>
            <li><Link to="/education" className="menu-btn">Education</Link></li>
            <li><Link to="/contact" className="menu-btn">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

