import React, { useState } from 'react';
import './Header.scss';
import HeaderLogo from './HeaderLogo';
import SearchBar from './SearchBar';
import HeaderAuth from './HeaderAuth';
import HeaderBurger from './HeaderBurger';
import { ILoggedUser, IRecipe } from '../../../types/types';
import SearchResultsList from './SearchResultsList';

interface HeaderProps {
  user: ILoggedUser | null
  recipes: IRecipe[];
};


export default function Header(props: HeaderProps) {
   
  const { user } = props;
  const { recipes } = props;

  const [results, setResults] = useState([]);

  // Fonction pour gérer le clic sur une recette et vider les résultats
  const handleRecipeClick = () => {
    setResults([]); // Vide la liste des résultats
  };

  return (
        <>
      <header className="header">
        <HeaderLogo />
        <SearchBar recipes={recipes} setResults={setResults} />
        <div className='search-results-list'>
          <SearchResultsList results={results} onRecipeClick={handleRecipeClick} />
        </div>
        <HeaderAuth />
        <HeaderBurger user={user}/>

      </header>
      </>
    );
  }