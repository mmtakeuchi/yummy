import React, {useContext} from 'react'
import {RecipeContext} from '../../context/RecipeContext'
import { IRecipeContext, IRecipe } from '../../recipe.model'
import RecipeItem from '../RecipeItem/RecipeItem.component'
import './RecipeList.styles.css'


const RecipeList = () => {
    const {recipes}: any = useContext(RecipeContext)
    console.log(recipes)

    const renderRecipes = () => {
        return recipes && recipes.map((recipe: IRecipe) => {
        console.log(recipe)
        return <RecipeItem key={recipe.idMeal} recipe={recipe} />})
    }

  return (
    <ul className='recipes-list'>{renderRecipes()}</ul>
  )
}

export default RecipeList
