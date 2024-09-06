import React, { useEffect, useState } from 'react';
import MoviesSeries from '../pages/MoviesSeries/MoviesSeries';
import NavBar from '../components/App/Navbar/Navbar';
import Footer from '../components/App/Footer/Footer';
import Header from '../components/App/Header/Header';
import { Outlet, useOutletContext } from 'react-router-dom';
import { IRecipe, IMovieSerie, IRootContext, ILoggedUser } from '../types/types';

// je défini un décorateur pour mon useOutletContext
export function useRootContext() {
    return useOutletContext<IRootContext>();
  }

export default function Root() {

    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [recipe, setRecipe] = useState<IRecipe[]>([]);
    const [moviesSeries, setMoviesSeries] = useState<IMovieSerie[]>([]);
    
    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch('http://localhost:3000/recipes');
            const newRecipes: IRecipe[] = await response.json();
            setRecipes(newRecipes);
        };
        fetchRecipes();

        const fetchRecipeDetails = async () => {
            const response = await fetch('http://localhost:3000/recipes/:id');
            const newRecipe: IRecipe[] = await response.json();
            setRecipe(newRecipeDetails);
        }

        const fetchMoviesSeries = async () => {
            const response = await fetch('http://localhost:3000/moviesSeries');
            const newMoviesSeries: IMovieSerie[] = await response.json();
            setMoviesSeries(newMoviesSeries);
        };
        fetchMoviesSeries();
    }, []);
        

    return (
      <>
            <Header />
            <NavBar />
            <Outlet context= {{recipes, setRecipes, recipe, setRecipe, moviesSeries, setMoviesSeries} satisfies IRootContext} />
            <Footer />
     </>
    );
}
