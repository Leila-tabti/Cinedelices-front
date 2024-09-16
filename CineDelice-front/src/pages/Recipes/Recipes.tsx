import React, { useState } from 'react';
import Select from 'react-select';  // Import de react-select
import chiliHeinsenberg from '../../assets/Pictures/Recipes/chiliHeinsenberg.png';
import { useRootContext } from '../../routes/Root';
import './Recipes.scss';
import { NavLink } from 'react-router-dom';

export default function Recipes() {
    const { recipes } = useRootContext();

    // Initialisation de la catégorie sélectionnée avec un objet de valeur et de label
    const [selectedCategory, setSelectedCategory] = useState({ value: 'All', label: 'Toutes les catégories' });

    // Options de catégories pour le sélecteur
    const categoryOptions = [
        { value: 'All', label: 'Toutes les catégories' },
        { value: 'Entrée', label: 'Entrée' },
        { value: 'Plat', label: 'Plat' },
        { value: 'Dessert', label: 'Dessert' }
    ];

    // Gestionnaire pour le changement de catégorie
    const handleCategoryChange = (selectedOption) => {
        setSelectedCategory(selectedOption);
    };

    // Filtrer les recettes en fonction de la catégorie sélectionnée
    const filteredRecipes = selectedCategory.value === 'All' 
        ? recipes 
        : recipes.filter(recipe => recipe.recipeCategory.name === selectedCategory.value);

    return (
        <div className="container">
            <h1>Recettes</h1>
            <div className="custom-select">
                <label htmlFor="category-select">Filtrer par catégorie : </label>
                <Select
                    className="select-bar"
                    value={selectedCategory}       // Valeur sélectionnée
                    onChange={handleCategoryChange} // Gestion du changement
                    options={categoryOptions}       // Options du select
                    isSearchable={true}             // Permettre la recherche dans les options
                />
            </div>
            <div className="cards-container">
                {filteredRecipes.map((recipe) => (
                    <div key={recipe.id} className="card">
                        <NavLink to={`/Recipes/${recipe.id}`}>
                            <img src={chiliHeinsenberg} alt="image chili Heinsenberg" />
                            <h3>{recipe.name}</h3>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
}
