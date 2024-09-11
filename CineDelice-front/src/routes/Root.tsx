
<<<<<<< HEAD
import React,  { useState, useEffect} from 'react';
=======
import React, { useEffect, useState } from 'react';
>>>>>>> e5e8cf76a57ae63032b0468e92bca047d5ecdead
import NavBar from '../components/App/Navbar/Navbar';
import Footer from '../components/App/Footer/Footer';
import Header from '../components/App/Header/Header';
import { Outlet, useOutletContext } from 'react-router-dom';
<<<<<<< HEAD

import { IRecipe, IMovieSerie, ILoggedUser, IRootContext } from '../types/types';

=======
import { IRecipe, IMovieSerie,ILoggedUser, IRootContext } from '../types/types';

>>>>>>> e5e8cf76a57ae63032b0468e92bca047d5ecdead

export function useRootContext() {
    return useOutletContext<IRootContext>()
}

export default function Root() {

<<<<<<< HEAD
const [user, setUser] = useState<ILoggedUser | null>(null);

useEffect(() => {
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
},[])


=======

>>>>>>> e5e8cf76a57ae63032b0468e92bca047d5ecdead
    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [moviesSeries, setMoviesSeries] = useState<IMovieSerie[]>([]);
  const [user, setUser] = useState<ILoggedUser | null>(null);
    
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

<<<<<<< HEAD
    const contextValue: IRootContext = {
        user,
        setUser,  
        recipes, 
        setRecipes, 
        moviesSeries, 
        setMoviesSeries
    
    }
        
=======





const contextValue: IRootContext = {
    user,
    setUser,
    recipes, 
      setRecipes, 
      moviesSeries, 
      setMoviesSeries
   

}
   
>>>>>>> e5e8cf76a57ae63032b0468e92bca047d5ecdead
    return (
        <>
            <Header user={user} />
            <NavBar />
            <Outlet context={contextValue} />
<<<<<<< HEAD
    
=======

            <Footer />
>>>>>>> e5e8cf76a57ae63032b0468e92bca047d5ecdead
     </>
    );
}

