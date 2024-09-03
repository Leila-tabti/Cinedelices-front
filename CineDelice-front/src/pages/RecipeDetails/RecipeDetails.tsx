import React from 'react';
import ratatouille from '../../assets/Pictures/Recipes/ratatouille.jpg';
import ratatouilleMovie from '../../assets/Pictures/MoviesSeries/ratatouille.png';
import './RecipeDetails.scss';
import { RiH3 } from 'react-icons/ri';

export default function RecipeDetails () {
    return(
        <div className='container'>
            <h1>Ratatouille</h1>
            <p className='description'>
            Le plat principal inspiré du film, qui est la quintessence de la cuisine provençale avec des légumes frais et savoureux.
            </p>
            <div className='second-container'>
                <img src={ratatouille} alt="image ratatouille" />
                <p className='inspiredBy'>Inspiré du film :</p>
                <h2>Ratatouille</h2>
                <img src={ratatouilleMovie} alt="image ratatouille le film" />
                <div className='otherRecipesContainer'>
                    <h3 className='otherRecipes'>
                        Voir d'autres recettes liées à Ratatouille 
                    </h3>
            </div>
            </div>
            <div className='ingredientsContainer'>
                <h3>Liste des ingrédients</h3>
                <ul className='ingredient-list'>
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
            <div className='second-container'>
                    <h3>instructions</h3>
                    <p>
                    Faites fondre le beurre avec l'huile d'olive dans une grande casserole à feu moyen. Ajoutez les oignons émincés et faites-les revenir doucement jusqu'à ce qu'ils soient caramélisés et dorés (environ 20-25 minutes). <br />
                    Déglacez avec le vin blanc (si utilisé) et laissez réduire pendant 2 minutes. <br />
                    Ajoutez le bouillon de bœuf et le bouquet garni. Laissez mijoter 15-20 minutes. Assaisonnez avec du sel et du poivre. <br />
                    Préchauffez votre four à 200°C (400°F). Disposez les tranches de pain sur une plaque de cuisson et faites-les légèrement griller. <br />
                    Répartissez la soupe dans des bols allant au four, déposez une tranche de pain grillé sur chaque bol, puis recouvrez généreusement de fromage râpé. <br />
                    Faites gratiner sous le gril du four jusqu'à ce que le fromage soit doré et bouillonnant.

                    </p>   
            </div>      
            
        </div>
    )
}
