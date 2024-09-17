import React, { useState } from 'react';
import './Header.scss';
import { FaHamburger, FaSignOutAlt } from 'react-icons/fa';
import { ILoggedUser } from '../../../types/types';
import ModalMenu from '../../Modal/ModalMenu'; // Composant ModalMenu pour la modale
import { useNavigate } from 'react-router-dom';
import './HeaderBurger.scss'

interface HeaderProps {
    user: ILoggedUser | null
};
  
export default function HeaderAuth({user}: HeaderProps) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    
    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    }
    return (
        <>
        <div className="header-menu-modal">
            {user ? (
                    <>
                        <span>Bienvenue {user.userPseudo}</span>
                        <button
                            className="btn-logout"
                            type="button"
                            aria-label="Déconnexion"
                            onClick={handleLogout}
                        >
                            <FaSignOutAlt className="icon-logout" />
                        </button>
                    </>
                ) 
             : (<button 
                    className="btn-menu-burger"
                    type="button" 
                    aria-label="menu"
                    onClick={handleOpenModal}
              > 
                    <FaHamburger className="icon-burger" />
                </button>
                )} 

                <ModalMenu isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
        </>
    );
}