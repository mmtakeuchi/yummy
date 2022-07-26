import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { IIngredientItem } from '../../recipe.model'
import './IngredientItem.styles.css'

const IngredientItem = ({ingredient}: IIngredientItem) => {
  const navigate = useNavigate()

  return (
    <li key={ingredient.idCategory} className="ingredient-item" onClick={() => navigate(`/categories/${ingredient.strCategory}`)}>
        <img className="ingredient-img" src={`${ingredient.strCategoryThumb}`} alt={ingredient.strCategory}/>
        <p className="ingredient-title">{ingredient.strCategory}</p>
    </li>
  )
}

export default IngredientItem
