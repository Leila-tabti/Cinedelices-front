import React from 'react';
import ratatouille from '../../assets/Pictures/ratatouille.png';
import seigneur from '../../assets/Pictures/seigneur.png';
import hp from '../../assets/Pictures/harrypotter.png';
import starwars from '../../assets/Pictures/starwars.png';
import got from '../../assets/Pictures/got.png';
import onepiece from '../../assets/Pictures/onepiece.png';
import './MoviesSeries.scss';
export default function MoviesSeries () {
    
    return (
        <div className="container">
            <h1>Films & Séries</h1>
            <div className="cards-container">
                <div className="card">
                    <img src={seigneur} alt="image_seigneur des anneaux" />
                    <h2>Seigneur des Anneaux</h2>
                </div>
                <div className="card">
                    <img src={hp} alt="image_harry_potter" />
                    <h2>Harry Potter</h2>
                </div>
                <div className="card">
                    <img src={ratatouille} alt="image_ratatouille" />
                    <h2>Ratatouille</h2>
                </div>
                <div className="card">
                    <img src={starwars} alt="image_starwars" />
                    <h2>Star wars</h2>
                </div>
                <div className="card">
                    <img src={got} alt="image_got" />
                    <h2>Game of throne</h2>
                </div>
                <div className="card">
                    <img src={onepiece} alt="image_one_piece" />
                    <h2>One piece</h2>
                </div>
            </div>
        </div>
)
}