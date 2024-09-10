import React from 'react';
import './Header.scss';
import { FaHamburger } from 'react-icons/fa';
import { ILoggedUser } from '../../../types/types';
interface HeaderProps {
    user: ILoggedUser | null
  };
  
export default function HeaderAuth({user}: HeaderProps) {

    
    console.log( {user} );
    return (
        <>
        <div className="header-auth">
            {user ? <span>Bienvenue {user.userPseudo}</span>
             : <button className="btn-menu-burger" type="submit" aria-label="Rechercher">
                    <FaHamburger className="icon-burger" />
                </button>} 
        
        </div>
        </>
    );
}