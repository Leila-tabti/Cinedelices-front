import React,{useEffect, useState} from 'react';
import { IIngredient, IRecipe } from '../../types/types';
import  './ModalAddRecipe.scss';

interface ModalAddRecipeProps {
    onClose: () => void;
}
 
export default function ModalAddRecipe({onClose}: ModalAddRecipeProps) {

    const [recipe, setRecipe] = useState<IRecipe>






useEffect(() => {

const handleSubmit = async () => {

    try {
        const response = await fetch('http://localhost:3000/profile/recipes', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(recipe),
        });

        if(!response.ok) {
            throw new Error('Erreur lors de l\'ajout de la recette');
        }

        onClose();
    } catch (error) {
        console.error('Erreur', error);
    }
}
})

    return (
    <div className="modal">
        <div className="modal-overlay">
          <div className="modal-Recipe">
            <h2>Créer une nouvelle recette</h2>
            <label>
              Nom de la recette:
              <input 
                type="text" 
                value="" 
                onChange="" 
                placeholder="Nom de la recette" 
              />
            </label>
    
            <label>
              Ingrédients:
              
                <div>
                  <input
                    type="text"
                    placeholder="Ingrédient"
                    value=""
                    onChange=""
                  />
                  <input
                    type="text"
                    placeholder="Quantité"
                    value=""
                    onChange=""
                  />
                </div>
              <button>Ajouter un ingrédient</button>
            </label>
    
            <label>
              Instructions:
              <textarea
                value=""
                onChange=""
                placeholder="Instructions de préparation"
              />
            </label>
    
            <label>
              Temps de préparation:
              <input 
                type="text" 
                value="" 
                onChange=""
                placeholder="Ex: 30 min" 
              />
            </label>
            <label>
              Difficulté:
              <select 
                value="" 
                onChange=""
              >
                <option value="Facile">Facile</option>
                <option value="Moyenne">Moyenne</option>
                <option value="Difficile">Difficile</option>
              </select>
            </label>
    
            <div className="modal-actions">
              <button onClick="">Annuler</button>
              <button onClick="">Enregistrer</button>
            </div>
          </div>
        </div>
    </div>
      );
}

  


