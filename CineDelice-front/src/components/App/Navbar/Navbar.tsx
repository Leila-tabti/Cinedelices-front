import React from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
      <nav className="navbar">
        <ul className="navbar-list">
        <li className="navbar-item" ><NavLink to='/'>Accueil</NavLink></li>
          <li className="navbar-item"><NavLink to='/MoviesSeries'>Films & Séries</NavLink></li>
          <li className="navbar-item"><NavLink to ='/Recipes'>Recettes</NavLink></li>
          <li className="navbar-item">
            <button className="categories-button"><a href="">Catégories</a></button>
          </li>
        </ul>
      </nav>
    );
  }