import React, { useState } from 'react';
import '../styles/Navbar.css';

// Nav link data, kept in one place so the markup below just maps over it.
const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <div id="home">
      <nav id="desktop-nav">
        <div className="logo"><a href="#home">Nikhil P</a></div>
        <div>
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Nikhil P</div>
        <div className="hamburger-menu">
          <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={toggleMenu}>{link.label}</a>
              </li>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
