import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './HeaderAuth.scss';

export default function HeaderAuth() {
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
    <>
      {user ? (
        <nav className="header-auth logged-in">
          <ul className="auth-list">
            <li className="auth-item">Bienvenue, {user.userPseudo}</li>
            <li className="auth-item">
              <NavLink to="/" onClick={handleLogout}>Déconnexion</NavLink>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="header-auth logged-out">
          <ul className="auth-list">
            <li className="auth-item">
              <NavLink to="/login">Connexion</NavLink>
            </li>
            <li className="auth-item">
              <NavLink to="/register">Inscription</NavLink>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
