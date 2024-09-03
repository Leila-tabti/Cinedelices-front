import React from 'react';
import './HomePage.scss';

// Importation des images utilisées dans le carrousel
import Photo1 from '../../assets/Pictures/Recipes/Photo1.png';
import Photo2 from '../../assets/Pictures/Recipes/Photo2.png';
import Photo3 from '../../assets/Pictures/Recipes/Photo3.png';

export default function HomePage() {
    return (
        <main className="homepage">
            <section className="landing_page">
                {/* Carrousel d'images avec DaisyUI en version horizontale */}
                <div className="carousel rounded-box w-full">
                    <div className="carousel-item w-full">
                        <img src={Photo1} alt="Photo de la recette de la Tarte cerise au chocolat" className="w-full object-cover" />
                    </div>
                    <div className="carousel-item w-full">
                        <img src={Photo2} alt="Photo de la recette de la Soupe à l'oignon du Chapelier Fou" className="w-full object-cover" />
                    </div>
                    <div className="carousel-item w-full">
                        <img src={Photo3} alt="Photo de la recette du Poulet sauce piment et chocolat" className="w-full object-cover" />
                    </div>
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
