import React, {useContext} from 'react'
import {RecipeContext} from '../../context/RecipeContext'
import { IRecipe, IRecipeList } from '../../recipe.model'
import RecipeItem from '../RecipeItem/RecipeItem.component'
import './RecipeList.styles.css'

const RecipeList = ({title, recipes}: IRecipeList) => {
    // const {recipes}: any = useContext(RecipeContext)

    const renderRecipes = () => {
        return recipes && recipes.map((recipe: IRecipe) =>  <RecipeItem key={recipe.idMeal} recipe={recipe} />)
    }

  return (
    <div className="recipe-list">
      <h2>{title}</h2>
      <ul>{renderRecipes()}</ul>
    </div>
  )
}

export default RecipeList
