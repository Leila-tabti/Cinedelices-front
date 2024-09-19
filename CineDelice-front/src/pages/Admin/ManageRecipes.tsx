import React, { useState } from 'react';
import ModalAddRecipe from '../../components/Modal/ModalAddRecipe';
import ModalDeleteRecipe from '../../components/Modal/ModalDeleteRecipe';
import { useRootContext } from '../../routes/Root';
import { NavLink } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ModalEditRecipe from '../../components/Modal/ModalEditRecipe';
import './ManageRecipes.scss';


export default function ManageRecipes() {

    const {recipes, setRecipes, ingredients, profileData, recipeCategory, moviesSeries} = useRootContext();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
    const [selectedRecipeId, setSelectedRecipeId] = useState<number| string>('');
    const [selectedRecipeName, setSelectedRecipeName] = useState<string>("");
    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false); // New state for the edit modal
    const [selectedRecipe, setSelectedRecipe] = useState<any>(null); // To store the selected recipe

    const user = localStorage.getItem('user');
    const userId = JSON.parse(user!).userId;
    const handleOpenModal = () => {
        console.log("open modal")// Log when opening the modal
        setIsModalOpen(true);// Set state to open the modal
    }

    const handleCloseModal = () => {
        console.log("close modal")// Log when closing the modal
        setIsModalOpen(false);// Set state to close the modal
    }

    const handleOpenDeleteModal = (recipeId: number | string, recipeName: string) => {
        console.log("open delete modal");
        setSelectedRecipeId(recipeId);
        setSelectedRecipeName(recipeName);
        setIsDeleteModalOpen(true);
    }
    
    const handleCloseDeleteModal = () => {
        console.log("close delete modal")
        setIsDeleteModalOpen(false);
        setSelectedRecipeId("");
        setSelectedRecipeName("");
    }

    const handleOpenEditModal = (recipe: any) => {
        setSelectedRecipe(recipe);
        setIsEditModalOpen(true);
    };

    const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
        setSelectedRecipe(null);
    };
        
    const deleteRecipe = async(recipeId: number | string) => {
        try {
        const response = await fetch(`http://localhost:3000/admin/recipes/${recipeId}`, {
            method: 'DELETE',
            credentials: 'include',
        });

        if(!response.ok) {
            throw new Error('La suppression à échoué');
        }

        const data = await response.json();
        console.log(data);
        setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== recipeId));
    } catch (error) {
        console.log(error);
    }
    handleCloseDeleteModal();
    };


    const filteredUser = recipes.filter((recipe) => recipe.userId === userId);
   
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