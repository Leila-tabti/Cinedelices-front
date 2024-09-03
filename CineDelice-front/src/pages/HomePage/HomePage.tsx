import React from 'react';
import './HomePage.scss';
import Photo1 from '../../assets/Pictures/Recipes/Photo1.png';

export default function HomePage() {
    return (
        <main className="homepage">
            <section className="landing_page">
                <div className="image_container">
                    <img src={Photo1} alt="Image de la recette de soupe de potiron de chocolat noir" />
                </div>
                <div className="slogan">
                    <h1>Le goût du cinéma à chaque bouchée... Faites mijoter vos films préférés.</h1>
                    <h2>Plongez dans un festin cinématographique, où chaque film et série est une invitation à savourer des délices inspirés de l'écran.</h2>
                    <button className="subscribe_button"><a href="">S'inscrire</a></button>
                </div>
            </section>
        </main>
    );
}
