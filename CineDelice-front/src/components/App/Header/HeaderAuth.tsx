import React from 'react';
import './Header.scss';
import { FaHamburger } from 'react-icons/fa';


export default function HeaderAuth() {
    return (
        <>
        <div className="header-auth">
        <button className="btn-menu-burger" type="submit" aria-label="Rechercher">
                <FaHamburger className="icon-burger" />
        </button>
        </div>
        </>
    );
}