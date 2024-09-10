import React from 'react';
import { IRecipe } from '../../types/types';
import chiliHeinsenberg  from '../../assets/Pictures/Recipes/chiliHeinsenberg.png';
import { useRootContext } from '../../routes/Root';
import './Recipes.scss';
import { NavLink } from 'react-router-dom';



export default function Recipes () {
    
   const { recipes } = useRootContext();

    return (
        <div className="container">
            <h1>Recettes</h1>
            <div className="cards-container">
                {recipes.map((recipe) => (
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