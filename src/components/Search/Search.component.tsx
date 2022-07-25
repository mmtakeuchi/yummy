import React, {useState, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import { RecipeContext } from '../../context/RecipeContext'
import './Search.styles.css'

const Search = () => {
  const navigate = useNavigate()
  const {searchRecipes}: any = useContext(RecipeContext)
    const [query, setQuery] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (query) {
        searchRecipes(query)
      }

      navigate(`/recipes/search/${query}`)
    }


  return (
    <form onSubmit={handleSearch}>
      <input className="search-input" type="text" value={query} onChange={handleChange} placeholder="Search for a meal..."/>
      <button type="submit">Search</button>
    </form>
  )
}

export default Search
