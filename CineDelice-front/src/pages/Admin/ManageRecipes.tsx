import React, { useState } from 'react';
import ModalAddRecipe from '../../components/Modal/ModalAddRecipe';
import { useRootContext } from '../../routes/Root';

export default function ManageRecipes() {

    const {recipes, setRecipes, ingredients, profileData} = useRootContext(); // Get recipes, setRecipes, ingredients, and profileData from context
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);// State to control modal visibility

    const handleOpenModal = () => {
        console.log("open modal")// Log when opening the modal
        setIsModalOpen(true);// Set state to open the modal
    }

    const handleCloseModal = () => {
        console.log("close modal")// Log when closing the modal
        setIsModalOpen(false);// Set state to close the modal
    }

    return (
        <>
            <h1>Bienvenue sur la page de gestion des recettes {profileData?.pseudo} !</h1>
                <h2>Voici les recettes crées</h2>

            <button onClick={handleOpenModal}>Créer une recette</button>

            {isModalOpen && (
                <ModalAddRecipe onClose={handleCloseModal} recipes={recipes} setRecipes={setRecipes} ingredients={ingredients} />
            )}{/* Conditionally render the ModalAddRecipe component */}
        </>
    );
}