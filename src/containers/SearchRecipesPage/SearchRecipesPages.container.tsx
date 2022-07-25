import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import { RecipeContext } from '../../context/RecipeContext'
import RecipeList from '../../components/RecipeList/RecipeList.component'
import './SearchRecipesPage.styles.css'

type Props = {}

const SearchRecipesPages = (props: Props) => {
    const {query} = useParams()
    const {searchedRecipe}: any = useContext(RecipeContext)

    if (searchedRecipe === undefined) {
        return <div className="no-recipes">No Recipes Found.</div>
    }

  return (
    <>
    {searchedRecipe ? <div><RecipeList title={query} recipes={searchedRecipe}/></div> : <div className="no-recipes">No Recipes Found.</div>}
    </>
  )
}

export default SearchRecipesPages
