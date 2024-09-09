import React, { useState } from 'react';
import './Header.scss';
import { FaHamburger } from 'react-icons/fa';
import Modal from '../../Modal/ModalMenu'; // Importez le composant Modal

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <header className="header-auth">
      <button
        className="btn-menu-burger"
        type="button"
        aria-label="Menu"
        onClick={handleOpenModal}
      >
        <FaHamburger className="icon-burger" />
      </button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </header>
  );
};

export default Header;