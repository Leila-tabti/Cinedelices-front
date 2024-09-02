import React from 'react';
import './Navbar.scss';

export default function Navbar() {
    return (
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">Films & Séries</li>
          <li className="navbar-item">Recettes</li>
          <li className="navbar-item">
            <button className="categories-button">Catégories</button>
          </li>
        </ul>
      </nav>
    );
  }