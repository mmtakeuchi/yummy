import React from 'react'
import {Link} from 'react-router-dom'
import { IIngredientItem } from '../../recipe.model'
import './IngredientItem.styles.css'

const IngredientItem = ({ingredient}: IIngredientItem) => {
  return (
    <Link to={ingredient.idCategory} className="ingredient-item">
        <li key={ingredient.idCategory}>
            <img className="ingredient-img" src={`${ingredient.strCategoryThumb}`} alt={ingredient.strCategory}/>
            <p className="ingredient-title">{ingredient.strCategory}</p>
        </li>
    </Link>
  )
}

export default IngredientItem
