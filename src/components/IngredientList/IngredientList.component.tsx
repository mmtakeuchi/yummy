import React, {useContext} from 'react'
import { RecipeContext } from '../../context/RecipeContext'
import IngredientItem from '../IngredientItem/IngredientItem.component'
import './IngredientList.styles.css'

type Props = {}

const IngredientList = (props: Props) => {
    const {ingredients}: any = useContext(RecipeContext)

    if (!ingredients) {
        return <div></div>
    }

    const renderIngredients = () => {
       return ingredients?.map((ingredient: any) => <IngredientItem key={ingredient.idCategory} ingredient={ingredient}/>)
    }

  return (
    <div className="ingredients-section">
        <h2>Trending Ingredients</h2>
        <ul className="ingredients-list">{renderIngredients()}</ul>
    </div>
  )
}

export default IngredientList
