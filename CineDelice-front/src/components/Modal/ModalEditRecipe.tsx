import React, { useEffect, useState, FormEvent } from 'react';
import { IIngredient, IRecipe, IRecipeCategory, IMovieSerie } from '../../types/types';
import Select from 'react-select';
import './ModalAddRecipe.scss';

interface ModalEditRecipeProps {
  onClose: () => void;
  recipes: IRecipe[];
  setRecipes: React.Dispatch<React.SetStateAction<IRecipe[]>>;
  ingredients: IIngredient[];
  recipeCategory: IRecipeCategory[];
  moviesSeries: IMovieSerie[];
  recipe: IRecipe | null; // Prop pour la recette à éditer
}

export default function ModalEditRecipe({
  onClose,
  recipes,
  setRecipes,
  ingredients,
  recipeCategory,
  moviesSeries,
  recipe,
}: ModalEditRecipeProps) {
    console.log('recipes dans modaledit', recipes)
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [instruction, setInstruction] = useState('');
  const [time, setTime] = useState('');
  const [difficulty, setDifficulty] = useState('facile');
  const [movieAndSerie, setMovieAndSerie] = useState<IMovieSerie | null>(null);
  const [category, setCategory] = useState<IRecipeCategory | null>(null);
  const [selectedIngredients, setSelectedIngredients] = useState<{ ingredient: IIngredient, quantity: string }[]>([]);
  const [error, setError] = useState({
    name: '',
    description: '',
    instruction: '',
    time: '',
    ingredients: '',
    recipeCategory: '',
    movieAndSerie: '',
  });

  useEffect(() => {
    if (recipe) {
        console.log(recipe);
      setName(recipe.name);
      setDescription(recipe.description);
      setInstruction(recipe.instruction);
      setTime(recipe.time);
      setDifficulty(recipe.difficulty);
      setMovieAndSerie(moviesSeries.find(m => m.id === recipe.movieAndSerie?.id) || null);
      setCategory(recipeCategory.find(c => c.id === recipe.recipeCategory?.id) || null);
      setSelectedIngredients(recipe.ingredient.map((ing: any) => ({
        ingredient: ingredients.find(i => i.id === ing.ingredient.id) || ing.ingredient,
        quantity: ing.quantity
      })));
    }
  }, [recipe, ingredients, recipeCategory, moviesSeries]);

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

  const validateForm = () => {
    let formErrors = { name: '', description: '', instruction: '', time: '', ingredients: '', recipeCategory: '', movieAndSerie: '' };
    let isValid = true;

    if (!name) {
      formErrors.name = 'Le nom de la recette est requis.';
      isValid = false;
    }
    if (!description) {
      formErrors.description = 'La description est requise.';
      isValid = false;
    }
    if (!instruction) {
      formErrors.instruction = 'Les instructions sont requises.';
      isValid = false;
    }
    if (!time) {
      formErrors.time = 'Le temps de préparation est requis.';
      isValid = false;
    }
    if (selectedIngredients.length === 0) {
      formErrors.ingredients = 'Vous devez ajouter au moins un ingrédient.';
      isValid = false;
    }
    if (!category) {
      formErrors.recipeCategory = 'La catégorie est requise.';
      isValid = false;
    }
    if (!movieAndSerie) {
      formErrors.movieAndSerie = 'Le film ou la série est requis.';
      isValid = false;
    }

    setError(formErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      console.error('Veuillez remplir tous les champs requis.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/admin/recipes/${recipe?.id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          name,
          description,
          ingredient: selectedIngredients.map(ing => ({ 
            ingredientId: ing.ingredient.id, 
            quantity: ing.quantity })),
          instruction,
          time,
          difficulty,
          movieId: movieAndSerie?.id,
          recipeCategoryId: category?.id,
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la modification de la recette');
      }
      const updatedRecipe: IRecipe = await response.json();
      if (recipes) {
        setRecipes(recipes.map(r => (r.id === updatedRecipe.id ? updatedRecipe : r)));
      } else {
        console.error('La liste des recettes est indéfinie.');
      }
      onClose();

    } catch (error) {
      console.error('Erreur', error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-overlay">
        <div className="modal-Recipe">
          <form onSubmit={(e) => handleSubmit(e)}>
            <h2>Modifier la recette</h2>
            <label>
              Nom de la recette:
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Nom de la recette"
              />
              {error.name && <p>{error.name}</p>}
            </label>

            <label>
              Description:
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Description de la recette"
              />
              {error.description && <p>{error.description}</p>}
            </label>

            <label>
              Ingrédients:
              <Select
                isMulti
                options={ingredients.map((ing) => ({ label: ing.name, value: ing.id }))}
                onChange={handleIngredientChange}
                placeholder="Sélectionnez les ingrédients"
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
              {error.ingredients && <p>{error.ingredients}</p>}
            </label>

            <label>
              Instructions:
              <textarea
                value={instruction}
                onChange={e => setInstruction(e.target.value)}
                placeholder="Instructions de préparation"
              />
              {error.instruction && <p>{error.instruction}</p>}
            </label>

            <label>
              Temps de préparation:
              <input
                type="text"
                value={time}
                onChange={e => setTime(e.target.value)}
                placeholder="Ex: 30 min"
              />
              {error.time && <p>{error.time}</p>}
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
            <label>
              Catégorie de la recette:
              <Select
                options={recipeCategory.map(category => ({ label: category.name, value: category.id }))}
                onChange={option => setCategory(recipeCategory.find(cat => cat.id === option?.value) || null)}
                placeholder="Sélectionnez une catégorie"
              />
              {error.recipeCategory && <p>{error.recipeCategory}</p>}
            </label>

            <label>
              Film ou Série associé:
              <Select
                options={moviesSeries.map(movie => ({ label: movie.name, value: movie.id }))}
                onChange={option => setMovieAndSerie(moviesSeries.find(movie => movie.id === option?.value) || null)}
                placeholder="Sélectionnez un film ou une série"
              />
              {error.movieAndSerie && <p>{error.movieAndSerie}</p>}
            </label>

            <div className="modal-actions">
              <button type="button" onClick={onClose}>Annuler</button>
              <button type="submit">Enregistrer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}