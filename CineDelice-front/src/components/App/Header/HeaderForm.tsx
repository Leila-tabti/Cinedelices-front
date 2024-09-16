import React, { useState, useEffect } from 'react';
import './Header.scss';
import { FaSearch } from 'react-icons/fa';
import Select from 'react-select';

const HeaderForm: React.FC = () => {

    return (
        <div>
            <form className="header-form">
                <input
                    type="text"
                    value=""
                    onChange=""
                    placeholder="Rechercher..."
                    aria-label="Recherche CinéDélices"
                    className="search-input"
                />
            </form>
            <ul>
                {results.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default HeaderForm;