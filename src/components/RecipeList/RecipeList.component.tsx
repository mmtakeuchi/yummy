import React, {useContext} from 'react'
import {RecipeContext} from '../../context/RecipeContext'
import { IRecipe } from '../../recipe.model'
import RecipeItem from '../RecipeItem/RecipeItem.component'
import './RecipeList.styles.css'


const RecipeList = () => {
    const {recipes}: any = useContext(RecipeContext)

    const renderRecipes = () => {
        return recipes && recipes.map((recipe: IRecipe) =>  <RecipeItem key={recipe.idMeal} recipe={recipe} />)
    }

  return (
    <div>
      <h2>Trending Recipes</h2>
      <ul className='recipes-list'>{renderRecipes()}</ul>
    </div>
  )
}

export default RecipeList
