import React from 'react';
import './MovieDetails.scss';
import { NavLink } from 'react-router-dom';
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
                <li><span>Réalisateur :</span>{movieSerieFound.director}</li>
                <li><span>Acteurs principaux :</span>{movieSerieFound.actor}</li>
                <li><span>Sorti le :</span>{movieSerieFound.release_date}</li>
            </ul>
            <img src={`/MoviesSeries/${movieSerieFound.id}.png`} alt={`image ${movieSerieFound.name} `} />
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
                            <NavLink to={`/Recipes/${recipe.id}`}>
                            <img src={`/Recipes/${recipe.id}.png`} alt={recipe.name} />
                            <h3>{recipe.name}</h3>
                            </NavLink>
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