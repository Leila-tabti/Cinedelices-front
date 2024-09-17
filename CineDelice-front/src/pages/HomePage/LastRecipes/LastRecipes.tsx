import React from "react";
import "./LastRecipes.scss";
import { NavLink } from "react-router-dom";

import Photo1 from '../../../assets/Pictures/Recipes/Photo1.png';
import Photo2 from '../../../assets/Pictures/Recipes/Photo2.png';
import Photo3 from '../../../assets/Pictures/Recipes/Photo3.png';
import Photo4 from '../../../assets/Pictures/Recipes/Photo4.png';
import Photo5 from '../../../assets/Pictures/Recipes/Photo5.png';

export default function LastRecipes() {
    
    return (
<section className="last-recipes">
                <h1>Vos dernières créations</h1>

                <div className="cards-container">
                    <article className="card">
                        <img src={Photo1} alt="Photo de la recette de la Tarte cerise au chocolat" />
                        <h2>Tarte "Sombre Cerise" au chocolat</h2>
                    </article>
                    <article className="card">
                        <img src={Photo2} alt="Photo de la recette de la Soupe à l'oignon du Chapelier Fou" />
                        <h2>Soupe à l'oignon du Chapelier Fou</h2>
                    </article>
                    <article className="card">
                        <img src={Photo3} alt="Photo de la recette du Poulet sauce piment et chocolat" />
                        <h2>Poulet sauce piment et chocolat</h2>
                    </article>
                    <article className="card">
                        <img src={Photo4} alt="Photo de la recette du gâteau 'Chapeau du Chapelier'" />
                        <h2>Gâteau "Chapeau du Chapelier"</h2>
                    </article>
                    <article className="card">
                        <img src={Photo5} alt="Photo de la recette de la Tourte à la viande de Mrs Lovett" />
                        <h2>Tourte à la viande de Mrs Lovett</h2>
                    </article>
                </div>
                <NavLink to="/Recipes">
                <button className="recipes_button"><a href="">Voir toutes les recettes</a></button>
                </NavLink>
            </section>
          );
        };