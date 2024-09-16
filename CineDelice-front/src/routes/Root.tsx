import React, { useEffect, useState } from 'react';
import NavBar from '../components/App/Navbar/Navbar';
import Footer from '../components/App/Footer/Footer';
import Header from '../components/App/Header/Header';
import { Outlet, useOutletContext } from 'react-router-dom';
import { IRecipe, IMovieSerie, ILoggedUser, IRootContext, IIngredient } from '../types/types';


export function useRootContext() {
    return useOutletContext<IRootContext>()
}

export default function Root() {

    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [moviesSeries, setMoviesSeries] = useState<IMovieSerie[]>([]);
    const [user, setUser] = useState<ILoggedUser | null>(null);
    const [ingredients, setIngredients] = useState<IIngredient[]>([]);
    const [profileData, setProfileData] = useState<any>(null);
    
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

        const fetchIngredients = async () => {
            try {
                const response = await fetch('http://localhost:3000/ingredients');
                const newIngredients: IIngredient[] = await response.json();
                setIngredients(newIngredients);
                
            }catch (error) {
                console.log(error);
            }
        };
        fetchIngredients();

      
      const stockedUser = localStorage.getItem('user');
    if(stockedUser) {
        try {
            const parsedUser = JSON.parse(stockedUser)
            console.log(parsedUser);
            setUser(parsedUser)
        } catch (error) {
            console.error('Error parsing JSON from localstorage', error);
        }
    }

    }, []);


const contextValue: IRootContext = {
    user,
    setUser,
    recipes, 
    setRecipes, 
    moviesSeries, 
    setMoviesSeries,
    ingredients,
    setIngredients,
    profileData,
    setProfileData
}
   
    return (
        <>
            <Header user={user} />
            <NavBar />
            <Outlet context={contextValue} />
            <Footer />
            
     </>
    );
}

