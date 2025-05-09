import React from 'react';
// import { Link } from 'react-router-dom';
import './navbar.styles.css';

export function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <a href="/">MySite</a>
                </div>
                <ul className="nav-list">
                    {/* <li className="nav-item"><Link to="/">Home</Link></li> */}
                    <li className="nav-item"><a href="#about">About</a></li>
                    <li className="nav-item"><a href="#projects">Projects</a></li>
                    <li className="nav-item"><a href="#contact">Contact</a></li>
                    <li className="nav-item"><a href="#certifications">Certifications</a></li>
                </ul>
            </div>
        </nav>
    );
}

