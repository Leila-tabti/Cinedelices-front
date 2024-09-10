import React, { useState } from 'react';
import './Header.scss';
import { FaHamburger } from 'react-icons/fa';
import ModalMenu from '../../Modal/ModalMenu'; // Composant ModalMenu pour la modale
import Navbar from '../Navbar/Navbar'; // Composant Navbar

const HeaderAuth = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <header className="header-auth">
      {/* Bouton du menu burger, visible seulement sur mobile */}
      <button
        className="btn-menu-burger"
        type="button"
        aria-label="Menu"
        onClick={handleOpenModal}
      >
        <FaHamburger className="icon-burger" />
      </button>

      {/* Navbar visible uniquement sur les grands écrans */}
      <nav className="navbar modal-menu">
        <Navbar />
      </nav>

      {/* La modale s'affiche uniquement si isModalOpen est true */}
      <ModalMenu isOpen={isModalOpen} onClose={handleCloseModal} />
    </header>
  );
};

export default HeaderAuth;
