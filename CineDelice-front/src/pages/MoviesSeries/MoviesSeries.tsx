import React from 'react';
import seigneur from '../../assets/Pictures/MoviesSeries/seigneur.png';
import { useRootContext } from '../../routes/Root';
import { IMovieSerie } from '../../types/types';

import './MoviesSeries.scss';

interface MovieSerieProps {
    movieSerie: IMovieSerie[]
}
export default function MoviesSeries () {

    const { moviesSeries } = useRootContext();
    
    return (
        <div className="container">
            <h1>Films & Séries</h1>
            <div className="cards-container">
                {moviesSeries.map((movieSerie) => (
                   <div key={movieSerie.id} className="card">
                    
                    <img src={seigneur} alt="image_seigneur des anneaux" />
                    <h3>{movieSerie.name}</h3>
                </div> 
                ))}
                
            </div>
        </div>
)
}