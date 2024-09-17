import React from 'react'
import './SearchResultsList.scss'
import { NavLink } from 'react-router-dom'
import SearchResult from './SearchResult'
import { IRecipe } from '../../../types/types';

interface SearchResultsListProps {
  results: IRecipe[];
  onRecipeClick: () => void;
}

export default function SearchResultsList({results, onRecipeClick}: SearchResultsListProps) {
  if (results.length === 0) return null; // Masque la liste si aucun résultat

  return (
    <div className='results-list'>
        {results.map((result, id) => {
            return (
            <NavLink to={`/Recipes/${result.id}`}
            key={id}
            onClick={onRecipeClick} >
            <SearchResult result={result} />
            </NavLink>
            )
        })}
    </div>
  )
}


