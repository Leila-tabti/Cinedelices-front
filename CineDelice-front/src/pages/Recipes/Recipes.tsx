import React, { useState } from 'react';

import chiliHeinsenberg from '../../assets/Pictures/Recipes/chiliHeinsenberg.png';

import './Recipes.scss';
import { NavLink } from 'react-router-dom';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const optionCategory = [
    { value : 'entrée', label : ' Entrée'},
    { value : 'plat', label : 'Plat'},
    { value : 'dessert', label : 'Dessert'},
]

export default function Recipes () {
    return (
        <div className="container">
            <h1>Recettes</h1>
            <div className="cards-container">
                <div className="card">
                <NavLink to='/'>Accueil</NavLink> 
                <NavLink to='/Recipes/:RecipeId'>
                <img src={chiliHeinsenberg} alt="image chili Heinsenberg"/>
                </NavLink>
                
                    <h2>Chili Heinsenberg</h2>
                    <h3>Breaking Bad</h3>
                </div>
               
                
            </div>
        </div>
    )
}