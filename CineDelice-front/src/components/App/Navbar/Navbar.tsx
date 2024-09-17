import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);

  // Cette fonction gère la déconnexion
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null); // Mettez à jour l'état immédiatement
    navigate('/');
  };

   // Utilisation de useEffect pour vérifier régulièrement les changements dans localStorage
   useEffect(() => {
    const interval = setInterval(() => {
      const storedUser = localStorage.getItem('user');
      setUser(storedUser ? JSON.parse(storedUser) : null);
    }, 1000); // Vérifie toutes les secondes

    return () => clearInterval(interval); // Nettoie l'intervalle quand le composant est démonté
  }, []);

    return (
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item"><NavLink to='/'>Accueil</NavLink></li>
          <li className="navbar-item"><NavLink to='/MoviesSeries'>Films & Séries</NavLink></li>
          <li className="navbar-item"><NavLink to ='/Recipes'>Recettes</NavLink></li>
          <li className="navbar-item "><NavLink to = '/Login'>Connexion</NavLink></li>
          <li className="navbar-item "><NavLink to = '/Register'>Inscription</NavLink></li>
          <li className="navbar-item">
              <NavLink to="/" onClick={handleLogout}>Déconnexion</NavLink>
            </li>
        </ul>
      </nav>
    );
  }