import React from 'react';
import './MovieDetails.scss';
import seigneur from '../../assets/Pictures/MoviesSeries/seigneur.png';
import painlembas from '../../assets/Pictures/Recipes/painlembas.png';
import flanaumiel from '../../assets/Pictures/Recipes/flanaumiel.png';
import soupechampignon from '../../assets/Pictures/Recipes/soupechampignon.png';
import { useRootContext } from '../../routes/Root';
import { useParams } from 'react-router-dom';
import { IMovieSerie } from '../../types/types';
import Page404 from '../404/404';

export default function MovieDetails() {

    const { MovieSerieId } = useParams();
    console.log(MovieSerieId);

    const { moviesSeries }: { moviesSeries: IMovieSerie[]} = useRootContext();

    const movieSerieFound = moviesSeries.find((movieSerie) => movieSerie.id === parseInt(MovieSerieId));

    if(movieSerieFound) {

    return (
        <div className='container'>
            <h1>{movieSerieFound.name}</h1>
            <ul className='informations'>
                <li>Réalisateur : {movieSerieFound.director}</li>
                <li>Acteurs principaux : {movieSerieFound.actor}</li>
                <li>Sorti le : {movieSerieFound.release_date}</li>
            </ul>
            <img src={seigneur} alt="image du seigneur des anneaux" />
            <h3>Synopsis</h3>
            <p className='synopsis'>
                {movieSerieFound.synopsis}
            </p>
            <ul className='genres'>
                <li>Fantastique</li>
                <li>Aventure</li>
                <li>Epique</li>
            </ul>
            <div className='second-container'>
                <h2>Recettes associées</h2>
                <ul className='recipes'>
                    {movieSerieFound.recipes.map((recipe) => {
                        return(
                        <div key={recipe.id}>
                            <img src="{flanaumiel}" alt={recipe.name} />
                            <h3>{recipe.name}</h3>
                        </div>
                        )
    })}
                </ul>
            </div>
        </div>
    )
}
else {
    return <Page404 />;
}
}