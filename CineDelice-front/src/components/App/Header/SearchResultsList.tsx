import React from 'react'
import './SearchResultsList.scss'
import { NavLink } from 'react-router-dom'
import SearchResult from './SearchResult'

export default function SearchResultsList({results}) {
  return (
    <div className='results-list'>
        {results.map((result, id) => {
            return (
            <NavLink to={`/recipes/${result.id}`} key={id}>
            <SearchResult result={result} />
            </NavLink>
            )
        })}
    </div>
  )
}


