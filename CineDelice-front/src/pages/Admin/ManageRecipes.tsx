import React, { useState } from 'react';
import ModalAddRecipe from '../../components/Modal/ModalAddRecipe';

export default function ManageRecipes() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            <h1>Bienvenue sur la page de gestion des recettes !</h1>

            <button onClick={handleOpenModal}>Créer une recette</button>

            {isModalOpen && (
                <ModalAddRecipe onClose={handleCloseModal} />
            )}
        </>
    );
}