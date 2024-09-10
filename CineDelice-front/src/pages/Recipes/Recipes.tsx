import React, { useState } from 'react';
import { IRecipe } from '../../types/types';
import chiliHeinsenberg  from '../../assets/Pictures/Recipes/chiliHeinsenberg.png';
import { useRootContext } from '../../routes/Root';
import './Recipes.scss';
import { NavLink } from 'react-router-dom';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const optionCategory = [
    { value: 'entrée', label: 'Entrée'},
    { value: 'plat', label: 'Plat'},
    { value: 'dessert', label: 'Dessert'},
]


export default function Recipes () {

    function customTheme(theme){
        return {
            ...theme,
            colors: {
                ...theme.colors,
                primary25: 'red',
                primary: 'red',
            }
        }
    }
    
   const { recipes } = useRootContext();

    return (
        <div className="container">
            <h1>Recettes</h1>
            <Select 
            theme={customTheme}
            options={optionCategory}
            className='select'
            placeholder="Selectionner une catégorie"
            />
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