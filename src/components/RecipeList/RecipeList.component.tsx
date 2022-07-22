import React, {useContext} from 'react'
import './RecipeList.styles.css'
import {RecipeContext} from '../../context/RecipeContext'
import { IRecipeContext, IRecipe } from '../../recipe.model'


const RecipeList = () => {
    const {recipes}: any = useContext(RecipeContext)
    console.log(recipes)

    const renderRecipes = () => {
        return recipes && recipes.map(({recipe, liked}: IRecipe) => {
            return (<li key={recipe.idMeal} className="recipe-item">
                <p>{recipe.strMeal}</p>
            </li>)
        })
    }

  return (
    <ul className='recipes-list'>{renderRecipes()}</ul>
  )
}

export default RecipeList
