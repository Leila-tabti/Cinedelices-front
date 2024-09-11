import React, { useState } from 'react';
import './Header.scss';
import { FaHamburger } from 'react-icons/fa';
import ModalMenu from '../../Modal/ModalMenu'; // Composant ModalMenu pour la modale
import Navbar from '../Navbar/Navbar'; 
import './HeaderBurger.scss' // Composant Navbar

const HeaderMenuModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="header-menu-modal">
      {/* Bouton du menu burger, visible seulement sur mobile */}
      <button
        className="btn-menu-burger"
        type="button"
        aria-label="Menu"
        onClick={handleOpenModal}
      >
        <FaHamburger className="icon-burger" />
      </button>

      

      {/* La modale s'affiche uniquement si isModalOpen est true */}
      <ModalMenu isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default HeaderMenuModal;
