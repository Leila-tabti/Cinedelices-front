import React, { useState } from 'react';

import { IRecipe, IRecipeCategory } from '../../types/types';
import chiliHeinsenberg  from '../../assets/Pictures/Recipes/chiliHeinsenberg.png';
import { useRootContext } from '../../routes/Root';
import './Recipes.scss';
import { NavLink } from 'react-router-dom';



export default function Recipes () {

   const { recipes } = useRootContext();

   const [selectedCategory, setSelectedCategory] = useState('All');

   const handleCategoryChange = (event) => {
       setSelectedCategory(event.target.value);
   }

   const filteredRecipes = selectedCategory === 'All' 
   ? recipes 
   : recipes.filter(recipe => recipe.recipeCategory.name === selectedCategory);

    return (
        <div className="container">
            <h1>Recettes</h1>
            <label htmlFor="category-select">Filtrer par catégorie : </label>
      <select id="category-select" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="All">Toutes les catégories</option>
        <option value="Entrée">Entrée</option>
        <option value="Plat">Plat</option>
        <option value="Dessert">Dessert</option>
      </select>
            <div className="cards-container">
                {filteredRecipes.map((recipe) => (
                <div key={recipe.id} className="card">
                <NavLink to={`/Recipes/${recipe.id}`}>
                <img src={chiliHeinsenberg} alt="image chili Heinsenberg"/>
                    <h3>{recipe.name}</h3>
               
                </NavLink>
                
                </div>
                ))}               
            </div>
        </div>
    )
}