import React, { useState, useEffect } from 'react';
import Select from 'react-select';

interface Ingredient {
  id: number;
  name: string;
}

interface SelectedIngredient {
  ingredient: Ingredient;
  quantity: string;
}

interface Recipe {
  name: string;
  ingredients: SelectedIngredient[];
}

const RecipeForm: React.FC = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<SelectedIngredient[]>([]);
  const [recipeName, setRecipeName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Récupérer les ingrédients depuis une API au montage du composant
  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await fetch('https://api.example.com/ingredients');
        const data = await response.json();
        setIngredients(data);
      } catch (err) {
        console.error('Erreur lors du chargement des ingrédients', err);
        setError('Erreur lors du chargement des ingrédients.');
      }
    };

    fetchIngredients();
  }, []);

  // Fonction pour gérer la sélection des ingrédients
  const handleIngredientChange = (selectedOption: any) => {
    const ingredient = ingredients.find((ing) => ing.id === selectedOption.value);
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

  // Fonction pour envoyer le formulaire
  const handleSubmit = async () => {
    setIsLoading(true);
    const recipe: Recipe = {
      name: recipeName,
      ingredients: selectedIngredients,
    };

    try {
      const response = await fetch('https://api.example.com/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe),
      });

      if (!response.ok) {
        throw new Error('Échec de l\'envoi de la recette');
      }

      console.log('Recette enregistrée avec succès');
    } catch (err) {
      console.error('Erreur lors de l\'envoi de la recette', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Mapper les ingrédients en format compatible avec react-select
  const ingredientOptions = ingredients.map((ingredient) => ({
    value: ingredient.id,
    label: ingredient.name,
  }));

  return (
    <div>
      <h2>Créer une nouvelle recette</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <label>
        Nom de la recette:
        <input
          type="text"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
          placeholder="Nom de la recette"
        />
      </label>

      <label>
        Sélectionnez un ingrédient:
        <Select
          options={ingredientOptions}
          onChange={handleIngredientChange}
        />
      </label>

      {/* Liste des ingrédients sélectionnés */}
      {seelctedIngredients.map((selectedIngredient, index) => (
        <div key={selectedIngredient.ingredient.id}>
          <span>{selectedIngredient.ingredient.name}</span>
          <input
            type="text"
            placeholder="Quantité"
            value={selectedIngredient.quantity}
            onChange={(e) => handleQuantityChange(index, e.target.value)}
          />
        </div>
      ))}

      <div>
        <button onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? 'Enregistrement...' : 'Enregistrer la recette'}
        </button>
      </div>
    </div>
  );
};

export default RecipeForm;
