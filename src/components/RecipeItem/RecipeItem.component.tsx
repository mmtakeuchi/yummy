import React from 'react'
import {Link} from 'react-router-dom'
import {IRecipeItem} from '../../recipe.model'
import './RecipeItem.styles.css'

const RecipeItem = ({recipe}: IRecipeItem) => {
  return (
    <Link to={recipe.idMeal} className="recipe-item">
    <li key={recipe.idMeal} >
        <img className="recipe-img" src={`${recipe.strMealThumb}/preview`} alt={recipe.strMeal}/>
        <p className="recipe-name">{recipe.strMeal}</p>
    </li>
    </Link>
  )
}

export default RecipeItem
