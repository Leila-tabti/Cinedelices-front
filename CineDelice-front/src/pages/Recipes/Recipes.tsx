import React from 'react';
import ratatouille from '../../assets/Pictures/Recipes/ratatouille.jpg';
import chiliHeinsenberg from '../../assets/Pictures/Recipes/chiliHeinsenberg.png';
import flanaumiel from '../../assets/Pictures/Recipes/flanaumiel.png';
import nachos from '../../assets/Pictures/Recipes/nachos.png';
import painlembas from '../../assets/Pictures/Recipes/painlembas.png';
import soupechampignon from '../../assets/Pictures/Recipes/soupechampignon.png';
import tarteetoiles from '../../assets/Pictures/Recipes/tarteetoiles.png';
import './Recipes.scss';
import { NavLink } from 'react-router-dom';

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
                <div className="card">
                    <img src={nachos} alt="image nachos" />
                    <h2>Nachos</h2>
                    <h3>Breaking Bad</h3>
                </div>
                <div className="card">
                    <img src={painlembas} alt="image pain lembas" />
                    <h2>Pain lembas des elfes</h2>
                    <h3>Seigneur des anneaux</h3>
                </div>
                <div className="card">
                    <img src={flanaumiel} alt="image flan au miel de la forêt noire" />
                    <h2>Flan au miel de la forêt noire</h2>
                    <h3>Seigneur des anneaux</h3>
                </div>
                <div className="card">
                    <img src={soupechampignon} alt="image soupe de champignon" />
                    <h2>Soupe de champignon de la Comté</h2>
                    <h3>Seigneur des anneaux</h3>
                </div>
                <div className="card">
                    <img src={ratatouille} alt="image ratatouille" />
                    <h2>Ratatouille</h2>
                    <h3>Ratatouille</h3>
                </div>
                <div className="card">
                    <img src={tarteetoiles} alt="image tarte aux étoiles" />
                    <h2>Tarte aux étoiles</h2>
                    <h3>Star Wars</h3>
                </div>
            </div>
        </div>
    )
}