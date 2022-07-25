import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import { RecipeContext } from '../../context/RecipeContext'
import { IRecipe } from '../../recipe.model'
import RecipeList from '../../components/RecipeList/RecipeList.component'
import './SearchRecipesPage.styles.css'

type Props = {}

const SearchRecipesPages = (props: Props) => {
    const {query} = useParams()
    const {searchedRecipe}: any = useContext(RecipeContext)

    if (searchedRecipe === null) {
        return <div>No Recipes Found.</div>
    }

  return (
    <div><RecipeList title={query} recipes={searchedRecipe}/></div>
  )
}

export default SearchRecipesPages
