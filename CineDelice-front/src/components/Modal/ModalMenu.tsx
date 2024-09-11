import React from 'react';
import './ModalMenu.scss';
import Navbar from '../App/Navbar/Navbar';
import HeaderAuth from '../App/Header/HeaderAuth';
import { FaTimes } from 'react-icons/fa'; // Importer l'icône



const ModalMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Si la modale n'est pas ouverte, on ne l'affiche pas

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Bouton pour fermer la modale */}
        <button className="modal-close" onClick={onClose}><FaTimes></FaTimes></button>
        
        {/* Navbar à l'intérieur de la modale */}
        
          <Navbar />
          <HeaderAuth />
       
      </div>
    </div>
  );
};

export default ModalMenu;
