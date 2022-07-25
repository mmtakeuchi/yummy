import React from 'react'
import RecipeList from '../../components/RecipeList/RecipeList.component'
import IngredientList from '../../components/IngredientList/IngredientList.component'
import Search from '../../components/Search/Search.component'
import './HomePage.styles.css'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className="home-page">
        <Search/>
        <RecipeList/>
        <IngredientList/>
    </div>
  )
}

export default HomePage
