import React from 'react';
import './ModalMenu.scss';
import Navbar from '../App/Navbar/Navbar';


const ModalMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Si la modale n'est pas ouverte, on ne l'affiche pas

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Bouton pour fermer la modale */}
        <button className="modal-close" onClick={onClose}>X</button>
        
        {/* Navbar à l'intérieur de la modale */}
        <nav className="navbar modal-navbar modal-menu">
          <Navbar />
        </nav>
      </div>
    </div>
  );
};

export default ModalMenu;
