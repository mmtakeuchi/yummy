import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {IRecipeItem} from '../../recipe.model'
import './RecipeItem.styles.css'

const RecipeItem = ({recipe}: IRecipeItem) => {
  const navigate = useNavigate()

  const navigateToRecipeDetails = (event: React.MouseEvent<HTMLElement>) => {
    navigate(`/recipes/${recipe.idMeal}`)
  }

  return (
    // <Link to={recipe.idMeal} className="recipe-item">
    <li className="recipe-item" key={recipe.idMeal} onClick={navigateToRecipeDetails}>
        <img className="recipe-img" src={`${recipe.strMealThumb}/preview`} alt={recipe.strMeal}/>
        <p className="recipe-title">{recipe.strMeal}</p>
    </li>
    // </Link>
  )
}

export default RecipeItem
