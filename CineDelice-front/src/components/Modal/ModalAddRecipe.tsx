import React,{useEffect, useState, FormEvent} from 'react';
import { IIngredient, IRecipe } from '../../types/types';
import Select from 'react-select';
import  './ModalAddRecipe.scss';

interface ModalAddRecipeProps {
  onClose: () => void;
  recipes: IRecipe[];
  setRecipes: React.Dispatch<React.SetStateAction<IRecipe[]>>;
  ingredients: IIngredient[];
}
 
export default function ModalAddRecipe({onClose, recipes, setRecipes, ingredients}: ModalAddRecipeProps) {


  console.log('ingredient in modal recipe', ingredients);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [instruction, setInstruction] = useState('');
  const [time, setTime] = useState('');
  const [difficulty, setDifficulty] = useState('facile');
  const [selectedIngredients, setSelectedIngredients] = useState<{ ingredient: IIngredient, quantity: string }[]>([]);

  
  const options = ingredients.length > 0 ? ingredients.map((ing) => ({ label: ing.name, value: ing.id })) : [];
  console.log('Select options:', options);
  const handleIngredientChange = (selectedOptions: any) => {
    const selectedIngs = selectedOptions ? selectedOptions.map((option: any) => ({
      ingredient: ingredients.find(ing => ing.id === option.value)!,
      quantity: ''
    })) : [];
    setSelectedIngredients(selectedIngs);
  };

  const handleQuantityChange = (index: number, value: string) => {
    const updatedSelectedIngredients = [...selectedIngredients];
    updatedSelectedIngredients[index].quantity = value;
    setSelectedIngredients(updatedSelectedIngredients);
  };


const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

  e.preventDefault();

  if (!name || !description || !instruction || !time || !difficulty || selectedIngredients.length === 0) {
    console.error('Veuillez remplir tous les champs requis.');
    return;
  }

    try {
        const response = await fetch('http://localhost:3000/admin/recipes', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                name,
                description,
                ingredients: selectedIngredients,
                instruction,
                time,
                difficulty,
                
            }),
        });

        if(!response.ok) {
          throw new Error('Erreur lors de l\'ajout de la recette');
        }
        const newRecipe: IRecipe = await response.json();
        setRecipes([...recipes, newRecipe]);
        onClose();

    } catch (error) {
        console.error('Erreur', error);
    }
}


    return (
    <div className="modal">
        <div className="modal-overlay">
          <div className="modal-Recipe">
            <form onSubmit={(e) => handleSubmit(e)}>
                <h2>Créer une nouvelle recette</h2>
                <label>
                  Nom de la recette:
                  <input 
                    type="text" 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    placeholder="Nom de la recette" 
                  />
                </label>

                <label>
                  Description:
                  <textarea
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Description de la recette"
                  />
                </label>
        
                <label>
                  Ingrédients:
                  
                    <Select
                    isMulti
                    options={ingredients.map((ing) => ({ label: ing.name, value: ing.id}))}
                    onChange={handleIngredientChange}
                    placeholder= "Selectionnez les ingrédients"
                    />
                    {selectedIngredients.map((ing, index) => (
                      <div key={ing.ingredient.id}>
                        <span>{ing.ingredient.name}</span>
                        <input
                        type="text"
                        placeholder="Quantité"
                        value={ing.quantity}
                        onChange={e => handleQuantityChange(index, e.target.value)}
                        />
                      </div>
                    ))}
                    
                 
                </label>
        
                <label>
                  Instructions:
                  <textarea
                    value={instruction}
                    onChange={e => setInstruction(e.target.value)}
                    placeholder="Instructions de préparation"
                  />
                </label>
        
                <label>
                  Temps de préparation:
                  <input 
                    type="text" 
                    value={time}
                    onChange={e => setTime(e.target.value)}
                    placeholder="Ex: 30 min" 
                  />
                </label>
                <label>
                  Difficulté:
                  <select 
                    value={difficulty}
                    onChange={e => setDifficulty(e.target.value)}
                  >
                    <option value="Facile">Facile</option>
                    <option value="Moyenne">Moyenne</option>
                    <option value="Difficile">Difficile</option>
                  </select>
                </label>
        
                <div className="modal-actions">
                  <button onClick={onClose}>Annuler</button>
                  <button type='submit'>Enregistrer</button>
                </div>
            </form>
          </div>
        </div>
    </div>
      );
}

  


