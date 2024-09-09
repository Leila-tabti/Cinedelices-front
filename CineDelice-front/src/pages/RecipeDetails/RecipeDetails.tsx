import React from 'react';
import ratatouille from '../../assets/Pictures/Recipes/ratatouille.jpg';
import ratatouilleMovie from '../../assets/Pictures/MoviesSeries/ratatouille.png';
import './RecipeDetails.scss';
import { IRecipe } from '../../types/types';
import { useParams } from 'react-router-dom';
import Page404 from '../404/404';
import { useRootContext } from '../../routes/Root';




export default function RecipeDetails () {

    const {RecipeId} = useParams();
    console.log(RecipeId);

    const { recipes }: { recipes: IRecipe[]} = useRootContext();

    const recipeIdNumber = parseInt(RecipeId || '', 10);

    const recipeFound = recipes.find((recipe) => recipe.id === recipeIdNumber);

    if(recipeFound) {

    return(
        <div className='container'>
            <h1>{recipeFound.name}</h1>
            <p className='description'>
            {recipeFound.description}
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
                   {recipeFound.ingredient.map((ingredient) => {
                    return (
                        <li key={ingredient.id}>{ingredient.name}</li>
                    )
                    
                   })}
                </ul>
                </div>
            <div className='second-container'>
                    <h3>instructions</h3>
                    <p>
                        {recipeFound.instruction}
                    </p>   
            </div>      
            
        </div>
    )}
    
}
