import React, { useState } from 'react';
import './SearchBar.scss';
import { FaSearch } from 'react-icons/fa';
import { IRecipe } from '../../../types/types';

interface HeaderProps {
    recipes: IRecipe[]
};

export default function SearchBar({recipes}: HeaderProps) {

    const [input, setInput] = useState('');

    const handleChange = (value) => {
        setInput(value);
        const filteredRecipes = recipes.filter((recipe) => {
            return value && recipe && recipe.name && recipe.name.toLowerCase().includes(value.toLowerCase());
        });
        console.log(filteredRecipes);
    };

    return (
            
     <div className="header-form">
        <input
            type="search"
            placeholder="Rechercher..."
            aria-label="Recherche CinéDélices"
            className="search-input"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
        />
        <button className="btn-search" type="submit" aria-label="Rechercher">
            <FaSearch className="icon-search" />
        </button>
    </div>
    );
}