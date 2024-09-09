import React, { useEffect, useState } from 'react';
import NavBar from '../components/App/Navbar/Navbar';
import Footer from '../components/App/Footer/Footer';
import Header from '../components/App/Header/Header';
import { Outlet, useOutletContext } from 'react-router-dom';
import { IRecipe, IMovieSerie, IRootContext } from '../types/types';

// je défini un décorateur pour mon useOutletContext
export function useRootContext() {
    return useOutletContext<IRootContext>();
  }

export default function Root() {

    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [moviesSeries, setMoviesSeries] = useState<IMovieSerie[]>([]);
    
    useEffect(() => {
        const fetchRecipes = async () => {
            try{
            const response = await fetch('http://localhost:3000/recipes');
            const newRecipes: IRecipe[] = await response.json();
            setRecipes(newRecipes);
        } catch (error) {
            console.log(error);
        }
        };
        fetchRecipes();

        const fetchMoviesSeries = async () => {
            try {
            const response = await fetch('http://localhost:3000/moviesSeries');
            const newMoviesSeries: IMovieSerie[] = await response.json();
            setMoviesSeries(newMoviesSeries);
        } catch (error) {
            console.log(error);
        }
        };
        fetchMoviesSeries();

    }, []);
        

    return (
      <>
            <Header />
            <NavBar />
            <Outlet context= {{recipes, setRecipes, moviesSeries, setMoviesSeries} satisfies IRootContext} />
            <Footer />
     </>
    );
}
