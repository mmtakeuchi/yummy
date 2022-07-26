import React, {useState, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import { RecipeContext } from '../../context/RecipeContext'
import { Link } from 'react-router-dom'
import './Header.styles.css'

type Props = {}

const Header = (props: Props) => {
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
    <header className="header">
        <Link to="/" className="links">Meals</Link>
        <form className="header-form" onSubmit={handleSearch}>
          <input className="header-input" value={query} onChange={handleChange} placeholder="Search"/>
        </form>
    </header>
  )
}

export default Header
