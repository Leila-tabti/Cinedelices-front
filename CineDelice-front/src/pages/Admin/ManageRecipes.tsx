import React, { useState } from 'react';
import ModalAddRecipe from '../../components/Modal/ModalAddRecipe';
import { useRootContext } from '../../routes/Root';

export default function ManageRecipes() {

    const {recipes, setRecipes, ingredients, profileData} = useRootContext();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleOpenModal = () => {
        console.log("open modal")
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        console.log("close modal")
        setIsModalOpen(false);
    }

    return (
        <>
            <h1>Bienvenue sur la page de gestion des recettes {profileData?.pseudo} !</h1>
                <h2>Voici les recettes crées</h2>

            <button onClick={handleOpenModal}>Créer une recette</button>

            {isModalOpen && (
                <ModalAddRecipe onClose={handleCloseModal} recipes={recipes} setRecipes={setRecipes} ingredients={ingredients} />
            )}
        </>
    );
}