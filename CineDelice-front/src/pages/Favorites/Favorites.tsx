import React from 'react';
import avatar from '../../assets/Pictures/Profil/avatar.png';
import dejeunerSophie from '../../assets/Pictures/Recipes/dejeuner-sophie.png';
import gateauxTurcs from '../../assets/Pictures/Recipes/gateaux-turcs.png';
import saladeDesBois from '../../assets/Pictures/Recipes/salade-des-bois.png';
import soupePotironMagique from '../../assets/Pictures/Recipes/soupe-potiron-magique.png';
import './Favorites.scss';

export default function Favorites() {
    return (
        <div className="favorites">
        <h1 className="title-favorites">Bienvenue dans ton studio perso!</h1>
        <div className="avatar">
            <img src={avatar} alt="avatar" />
            <h2 className="pseudo">Pseudo</h2>
        </div>
        <div className="recipes-list">
            <a href="/page-de-la-recette-des-oeufs-et-bacon-de-sophie" className="recipe-link">
                <div className="recipe">
                    <img src={dejeunerSophie} alt="Déjeuner de Sophie" />
                    <h3 className="recipe-title">Déjeuner de Sophie (Oeufs et Bacon)</h3>
                    <h4 className='titles-movies'>Le Château Ambulant</h4>
                </div>
            </a>
            <a href="/page-de-la-recette-des-gateaux-turcs" className="recipe-link">
                <div className="recipe">
                    <img src={gateauxTurcs} alt="Gâteaux Turcs" />
                    <h3 className="recipe-title">Gâteaux Turcs</h3>
                    <h4 className='titles-movies'>Le Monde de Narnia</h4>
                </div>
            </a>
            <a href="/page-de-la-recette-de-la-salade-des-bois" className="recipe-link">
                <div className="recipe">
                    <img src={saladeDesBois} alt="Salade des Bois" />
                    <h3 className="recipe-title">Salade des Bois</h3>
                    <h4 className='titles-movies'>Le Monde de Narnia</h4>
                </div>
            </a>
            <a href="/page-de-la-recette-de-la-soupe-potiron-magique" className="recipe-link">
                <div className="recipe">
                    <img src={soupePotironMagique} alt="Soupe Potiron Magique" />
                    <h3 className="recipe-title">Soupe Potiron Magique</h3>
                    <h4 className='titles-movies'>Le Château Ambulant</h4>
                </div>
            </a>
            <div>
                <button className="btn-edit">Modifier</button>
            </div>
        </div>
    </div>
    )
}    