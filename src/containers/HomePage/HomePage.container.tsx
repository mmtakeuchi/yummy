import React from 'react'
import RecipeList from '../../components/RecipeList/RecipeList.component'
import IngredientList from '../../components/IngredientList/IngredientList.component'
import './HomePage.styles.css'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className="home-page">
        <RecipeList/>
        <IngredientList/>
    </div>
  )
}

export default HomePage
