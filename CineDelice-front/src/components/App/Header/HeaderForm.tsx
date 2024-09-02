import React from 'react';
import './Header.scss';
import { FaSearch } from 'react-icons/fa';

export default function HeaderForm() { 
    return (
        <>
            
                <form className="header-form">
                    <input
                        type="search"
                        placeholder="Rechercher..."
                        aria-label="Recherche CinéDélices"
                        className="search-input"
                    />
                    <button className="btn-search" type="submit" aria-label="Rechercher">
                        <FaSearch className="icon-search" />
                    </button>
                </form>
            
        </>
    );
}