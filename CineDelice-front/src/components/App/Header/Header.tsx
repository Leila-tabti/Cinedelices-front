import React, { useState } from 'react';
import './Header.scss';
import HeaderLogo from './HeaderLogo';
import SearchBar from './SearchBar';
import HeaderAuth from './HeaderAuth';
import HeaderBurger from './HeaderBurger';
import { ILoggedUser, IRecipe } from '../../../types/types';

interface HeaderProps {
  user: ILoggedUser | null
  recipes: IRecipe[];
};


export default function Header(props: HeaderProps) {
   
  const { user } = props;
  const { recipes } = props;

  const [results, setResults] = useState([]);
    
  return (
        <>
      <header className="header">
        <HeaderLogo />
        <SearchBar recipes={recipes} />
        <div>SearchResults</div>
        <HeaderAuth />
        <HeaderBurger user={user}/>

      </header>
      </>
    );
  }