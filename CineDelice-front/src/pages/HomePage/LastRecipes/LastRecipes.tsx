import React, { useState, useEffect } from "react";
import "./LastRecipes.scss";
import { NavLink } from "react-router-dom";
import { useRootContext } from '../../../routes/Root';

export default function LastRecipes() {
    const { lastRecipes } = useRootContext();
    const [isLoading, setIsLoading] = useState(true);  // Gère le statut de chargement

    useEffect(() => {
        if (lastRecipes.length > 0) {
            setIsLoading(false);  // Stoppe le chargement si les recettes sont récupérées
        }
    }, [lastRecipes]);

    return (
        <section className="container">
            <h1>Vos dernières créations</h1>

            <div className="cards-container">
                {isLoading ? (
                    <p>Chargement des recettes...</p>  // Loader affiché pendant le chargement
                ) : (
                    lastRecipes.length > 0 ? (
                        lastRecipes.map((recipe) => (

                            <div key={recipe.id} className="card">
                                <NavLink to={`/Recipes/${recipe.id}`}>
                            <img src={`/Recipes/${recipe.id}.png`} alt={recipe.name} />
                            <h3>{recipe.name}</h3>
                                </NavLink>
                    </div>
                        ))
                    ) : (
                        <p>Aucune recette trouvée...</p>
                    )
                )}
            </div>

            
            <NavLink to="/recipes">
            <button className="subscribe_button"><a href="/recipes">Découvrir toutes les recettes</a></button>
            </NavLink>
        </section>
    );
}
