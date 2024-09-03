import React from 'react';
import './MovieDetails.scss';
import seigneur from '../../assets/Pictures/MoviesSeries/seigneur.png';
import painlembas from '../../assets/Pictures/Recipes/painlembas.png';
import flanaumiel from '../../assets/Pictures/Recipes/flanaumiel.png';
import soupechampignon from '../../assets/Pictures/Recipes/soupechampignon.png';

export default function MovieDetails() {
    return (
        <div className='container'>
            <h1>Seigneur des Anneaux</h1>
            <ul className='informations'>
                <li>Créateur : J. R. R. Tolkien</li>
                <li>Réalisateur : Peter Jackson</li>
                <li>Acteurs principaux : Elijah Wood, Viggo Mortensen, Orlando Bloom</li>
                <li>Sorti le : 19/12/2001</li>
            </ul>
            <img src={seigneur} alt="image du seigneur des anneaux" />
            <h3>Synopsis</h3>
            <p className='synopsis'>
            Un jeune et timide hobbit, Frodon Sacquet, hérite d'un anneau magique. Sous ses apparences de simple bijou, il s'agit en réalité d'un instrument de pouvoir absolu qui permettrait à Sauron, le Seigneur des ténèbres, de régner sur la Terre du Milieu et de réduire en esclavage ses peuples. Frodon doit parvenir, avec l'aide de la Communauté de l'Anneau, composée de huit compagnons venus de différents royaumes, jusqu'à la Montagne du Destin pour le détruire.
            </p>
            <ul className='genres'>
                <li>Fantastique</li>
                <li>Aventure</li>
                <li>Epique</li>
            </ul>
            <div className='second-container'>
                <h2>Recettes associées</h2>
                <ul className='recipes'>
                    <li>
                        <img src={painlembas} alt="image de pain lembas" />
                        <h3>Pain lembas</h3>
                    </li>
                    <li>
                        <img src={flanaumiel} alt="image de flan au miel" />
                        <h3>Flan au miel</h3>
                    </li>
                    <li>
                        <img src={soupechampignon} alt="image de soupe de champignon" />
                        <h3>Soupe de champignon</h3>
                    </li>
                </ul>
            </div>
        </div>
    )
}