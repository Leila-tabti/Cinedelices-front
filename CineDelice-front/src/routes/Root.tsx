import React, { useEffect, useState } from 'react';
import MoviesSeries from '../pages/MoviesSeries/MoviesSeries';
import NavBar from '../components/App/Navbar/Navbar';
import Footer from '../components/App/Footer/Footer';
import Header from '../components/App/Header/Header';
import { Outlet, useOutletContext } from 'react-router-dom';
import { IRecipe, IRootContext, ILoggedUser } from '../types/types';

// je défini un décorateur pour mon useOutletContext
export function useRootContext() {
    return useOutletContext<IRootContext>();
  }

export default function Root() {

    const [recipes, setRecipes] = useState<IRecipe[]>([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch('http://localhost:3000/recipes');
            const newRecipes: IRecipe[] = await response.json();
            setRecipes(newRecipes);
        };
        fetchRecipes();
    }, []);
        

    return (
      <>
            <Header />
            <NavBar />
            <Outlet context= {{recipes, setRecipes} satisfies IRootContext} />
            <Footer />
     </>
    );
}
