import React from 'react';
import { IRecipe } from '../../types/types';
import chiliHeinsenberg  from '../../assets/Pictures/Recipes/chiliHeinsenberg.png';
import { useRootContext } from '../../routes/Root';
import './Recipes.scss';
import { NavLink } from 'react-router-dom';


interface RecipeProps {
    recipe: IRecipe;
}

export default function Recipes () {

    
   const { recipes } = useRootContext();

    return (
        <div className="container">
            <h1>Recettes</h1>
            <div className="cards-container">
                {recipes.map((recipe) => (
                    <div className="card">
                <NavLink to='/Recipes/:RecipeId'>
                <img src={chiliHeinsenberg} alt="image chili Heinsenberg"/>
                </NavLink>
                
                    <h2>{recipe.name}</h2>
                    <h3>{recipe.recipeCategory.name}</h3>
                </div>
                ))}
                
               
                
            </div>
        </div>
    )
}