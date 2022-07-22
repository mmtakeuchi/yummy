import React from 'react'
import {IRecipeItem} from '../../recipe.model'
import './RecipeItem.styles.css'

const RecipeItem = ({recipe}: IRecipeItem) => {
    console.log(recipe)
  return (
    <li key={recipe.idMeal} className="recipe-item">
        <p>{recipe.strMeal}</p>
    </li>
  )
}

export default RecipeItem
