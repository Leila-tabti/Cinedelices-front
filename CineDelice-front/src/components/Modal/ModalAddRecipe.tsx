import React,{useEffect, useState, FormEvent} from 'react';
import { IIngredient, IRecipe } from '../../types/types';
import { useRootContext } from '../../routes/Root';
import Select from 'react-select';
import  './ModalAddRecipe.scss';

interface ModalAddRecipeProps {
  onClose: () => void;
}
 
export default function ModalAddRecipe({ onClose }: ModalAddRecipeProps) {

  const { recipes, setRecipes } = useRootContext();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState<{ name: string; quantity: string }[]>([])
  const [ingredientQuantity, setIngredientQuantity] = useState('');
  const [Instructions, setInstructions] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [difficulty, setDifficulty] = useState('facile');
  const [selectedIngredients, setSelectedIngredients] = useState<SelectedIngredient[]>([]);

 
  console.log({'recipes':recipes.map(recipe => recipe.ingredient)});
  


  // Fonction pour gérer la sélection des ingrédients
  const handleIngredientChange = (selectedOption: any) => {
    const ingredient = recipes.ingredient.find((ing) => ing.id === selectedOption.value);
    if (ingredient) {
      setSelectedIngredients([...selectedIngredients, { ingredient, quantity: '' }]);
    }
  };

  // Fonction pour gérer le changement de quantité
  const handleQuantityChange = (index: number, value: string) => {
    const updatedSelectedIngredients = [...selectedIngredients];
    updatedSelectedIngredients[index].quantity = value;
    setSelectedIngredients(updatedSelectedIngredients);
  };


const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

  e.preventDefault();

    try {
        const response = await fetch('http://localhost:3000/profile/recipes', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                name,
                description,
                ingredients,
                Instructions,
                prepTime,
                difficulty
            }),
        });

        const newRecipe: IRecipe = await response.json();
        const newRecipes = [...recipes, newRecipe];
        setRecipes(newRecipes);

        if(!response.ok) {
            throw new Error('Erreur lors de l\'ajout de la recette');
        }

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
                  
                    <div>
                      <input
                        type="text"
                        placeholder="Ingrédient"
                        value={ingredients.name}
                        onChange={e => setIngredients(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Quantité"
                        value={ingredientQuantity}
                        onChange={e => setIngredientQuantity(e.target.value)}
                      />
                    </div>
                  <button>Ajouter un ingrédient</button>
                </label>
        
                <label>
                  Instructions:
                  <textarea
                    value={Instructions}
                    onChange={e => setInstructions(e.target.value)}
                    placeholder="Instructions de préparation"
                  />
                </label>
        
                <label>
                  Temps de préparation:
                  <input 
                    type="text" 
                    value={prepTime}
                    onChange={e => setPrepTime(e.target.value)}
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

  


