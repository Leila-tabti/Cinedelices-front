import React from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';

interface NavbarProps {
  onNavItemClick: () => void;
}

export default function Navbar({ onNavItemClick }: NavbarProps) {
    return (
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item" onClick={onNavItemClick}><NavLink to='/'>Accueil</NavLink></li>
          <li className="navbar-item" onClick={onNavItemClick}><NavLink to='/MoviesSeries'>Films & Séries</NavLink></li>
          <li className="navbar-item" onClick={onNavItemClick}><NavLink to ='/Recipes'>Recettes</NavLink></li>
          <li className="navbar-item" onClick={onNavItemClick}><NavLink to = '/Login'>Connexion</NavLink></li>
          <li className="navbar-item" onClick={onNavItemClick}><NavLink to = '/Register'>Inscription</NavLink></li>
        </ul>
      </nav>
    );
  }