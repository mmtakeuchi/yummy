import React, {useContext} from 'react'
import { RecipeContext } from '../../context/RecipeContext'
import RecipeList from '../../components/RecipeList/RecipeList.component'
import IngredientList from '../../components/IngredientList/IngredientList.component'
import Search from '../../components/Search/Search.component'
import './HomePage.styles.css'

type Props = {}

const HomePage = (props: Props) => {
  const {recipes}: any = useContext(RecipeContext)

  return (
    <div className="home-page">
        <Search/>
        <RecipeList title="Trending Recipes" recipes={recipes}/>
        <IngredientList/>
    </div>
  )
}

export default HomePage
