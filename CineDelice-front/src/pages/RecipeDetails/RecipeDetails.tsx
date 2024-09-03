import React from 'react';
import ratatouille from '../../assets/Pictures/Recipes/ratatouille.jpg';
import ratatouilleMovie from '../../assets/Pictures/MoviesSeries/ratatouille.png';
import './RecipeDetails.scss';

export default function RecipeDetails () {
    return(
        <div className='container'>
            <h1>Ratatouille</h1>
            <img src={ratatouille} alt="image ratatouille" />
            <p className='description'>
            Le plat principal inspiré du film, qui est la quintessence de la cuisine provençale avec des légumes frais et savoureux.
            </p>
            <p className='inspiredBy'>Inspiré du film :</p>
            <h2>Ratatouille</h2>
            <img src={ratatouilleMovie} alt="image ratatouille le film" />
            <div className='otherRecipesContainer'>
                <p className='otherRecipes'>
                    Voir d'autres recettes liées à Ratatouille 
                </p>
                <img src="{ratatouille}" alt="" />
                <img src="{ratatouille}" alt="" />
            </div>
            <div className='ingredientsContainer'>
                <h3>Liste des ingrédients</h3>
                <ul>
                    <li>1 aubergine</li>
                    <li>1 courgette</li>
                    <li>1 poivre rouge</li>
                    <li>1 poivron jaune</li>
                    <li>2 tomates</li>
                    <li>1 oignon</li>
                    <li>2 gousses d'ail</li>
                    <li>4 cuillères à soupe d'olive</li>
                    <li>1 cuillère à café d'herbes de Provence</li>
                    <li>Sel et poivre</li>
                </ul>         
            </div>
        </div>
    )
}
