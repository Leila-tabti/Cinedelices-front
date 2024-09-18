import React, { useState } from 'react';
import Select from 'react-select'
import chiliHeinsenberg from '../../assets/Pictures/Recipes/chiliHeinsenberg.png';
import { useRootContext } from '../../routes/Root';
import './Recipes.scss';
import { NavLink } from 'react-router-dom';

export default function Recipes() {
    const { recipes } = useRootContext();

    // Initialize selected category with a value and label object
    const [selectedCategory, setSelectedCategory] = useState({ value: 'All', label: 'Toutes les catégories' });

    // Category options for the selector
    const categoryOptions = [
        { value: 'All', label: 'Toutes les catégories' },
        { value: 'Entrée', label: 'Entrée' },
        { value: 'Plat', label: 'Plat' },
        { value: 'Dessert', label: 'Dessert' }
    ];

    // Handler for category change
    const handleCategoryChange = (selectedOption) => {
        setSelectedCategory(selectedOption);
    };

    // Filter recipes based on selected category
    const filteredRecipes = selectedCategory.value === 'All' 
        ? recipes 
        : recipes.filter(recipe => recipe.recipeCategory.name === selectedCategory.value);

    return (
        <div className="container">
            <h1>Recettes</h1>
            <div className="custom-select">
                <label htmlFor="category-select">Filtrer par catégorie : </label>
                <Select
                    value={selectedCategory}       // Selected value
                    onChange={handleCategoryChange} // Change handler
                    options={categoryOptions}       // Options for select
                    isSearchable={true}             // Allow search within options
                />
            </div>
            <div className="cards-container">
                {filteredRecipes.map((recipe) => (

                    <div key={recipe.id} className="card">
                        <NavLink to={`/Recipes/${recipe.id}`}>
                            <img src={`/Recipes/${recipe.id}.png`} alt={recipe.name} />
                            <h3>{recipe.name}</h3>
                        </NavLink>
                    </div>
                ))}

            </div>
        </div>
    );
}
