import React, {useContext, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { fetchSelectedRecipe } from '../../utils/api'
import { sanitizeIngredient } from '../../utils'
import { IRecipe } from '../../recipe.model'
import './RecipeDetails.styles.css'

const RecipeDetails = () => {
    const {recipeId} = useParams()
    const [selectedRecipe, setSelectedRecipe] = useState<IRecipe | undefined>(undefined)

    useEffect(() => {
        const getSelectedRecipe = async () => {
            const meal = await fetchSelectedRecipe(recipeId)
            setSelectedRecipe(meal)
        }

        getSelectedRecipe()
    }, [recipeId])

    console.log(selectedRecipe)

    if (selectedRecipe === undefined) {
        return (<div></div>)
    }

  return (
    <div className="recipe-details">
        <h2 className="recipe-name">{selectedRecipe.strMeal}</h2>
        <div className="recipe-image-section">
            <img src={selectedRecipe.strMealThumb} alt={selectedRecipe.strMeal} className="recipe-image"/>
            <div className="recipe-tags">
                <button>{selectedRecipe.strCategory}</button>
                <button>{selectedRecipe.strArea}</button>
            </div>
        </div>
        <section className="recipe-ingredients-section">
        <h3>Ingredients</h3>
        <ul className="recipe-ingredients-list">
            {selectedRecipe.strIngredient1 && <li><img src={`https://www.themealdb.com/images/ingredients/${sanitizeIngredient(selectedRecipe.strIngredient1)}-Small.png`} alt={selectedRecipe.strIngredient1} /><div>{selectedRecipe.strMeasure1}</div></li>}
            {selectedRecipe.strIngredient2 && <li><img src={`https://www.themealdb.com/images/ingredients/${sanitizeIngredient(selectedRecipe.strIngredient2)}-Small.png`} alt={selectedRecipe.strIngredient2} /><div>{selectedRecipe.strMeasure1}</div></li>}
            {selectedRecipe.strIngredient3 && <li><img src={`https://www.themealdb.com/images/ingredients/${sanitizeIngredient(selectedRecipe.strIngredient3)}-Small.png`} alt={selectedRecipe.strIngredient3} /><div>{selectedRecipe.strMeasure1}</div></li>}
            {selectedRecipe.strIngredient4 && <li><img src={`https://www.themealdb.com/images/ingredients/${sanitizeIngredient(selectedRecipe.strIngredient4)}-Small.png`} alt={selectedRecipe.strIngredient4} /><div>{selectedRecipe.strMeasure1}</div></li>}
            {selectedRecipe.strIngredient5 && <li><img src={`https://www.themealdb.com/images/ingredients/${sanitizeIngredient(selectedRecipe.strIngredient5)}-Small.png`} alt={selectedRecipe.strIngredient5} /><div>{selectedRecipe.strMeasure1}</div></li>}
            {selectedRecipe.strIngredient6 && <li><img src={`https://www.themealdb.com/images/ingredients/${sanitizeIngredient(selectedRecipe.strIngredient6)}-Small.png`} alt={selectedRecipe.strIngredient6} /><div>{selectedRecipe.strMeasure1}</div></li>}
            {selectedRecipe.strIngredient7 && <li><img src={`https://www.themealdb.com/images/ingredients/${sanitizeIngredient(selectedRecipe.strIngredient7)}-Small.png`} alt={selectedRecipe.strIngredient7} /><div>{selectedRecipe.strMeasure1}</div></li>}
            {selectedRecipe.strIngredient8 && <li><img src={`https://www.themealdb.com/images/ingredients/${sanitizeIngredient(selectedRecipe.strIngredient8)}-Small.png`} alt={selectedRecipe.strIngredient8} /><div>{selectedRecipe.strMeasure1}</div></li>}
            {selectedRecipe.strIngredient9 && <li><img src={`https://www.themealdb.com/images/ingredients/${sanitizeIngredient(selectedRecipe.strIngredient9)}-Small.png`} alt={selectedRecipe.strIngredient9} /><div>{selectedRecipe.strMeasure1}</div></li>}
            {selectedRecipe.strIngredient10 && <li><img src={`https://www.themealdb.com/images/ingredients/${sanitizeIngredient(selectedRecipe.strIngredient10)}-Small.png`} alt={selectedRecipe.strIngredient10} /><div>{selectedRecipe.strMeasure1}</div></li>}
            {selectedRecipe.strIngredient11 && <li><img src={`https://www.themealdb.com/images/ingredients/${sanitizeIngredient(selectedRecipe.strIngredient11)}-Small.png`} alt={selectedRecipe.strIngredient11} /><div>{selectedRecipe.strMeasure1}</div></li>}
            {selectedRecipe.strIngredient12 && <li><img src={`https://www.themealdb.com/images/ingredients/${sanitizeIngredient(selectedRecipe.strIngredient12)}-Small.png`} alt={selectedRecipe.strIngredient12} /><div>{selectedRecipe.strMeasure1}</div></li>}
            {selectedRecipe.strIngredient13 && <li><img src={`https://www.themealdb.com/images/ingredients/${sanitizeIngredient(selectedRecipe.strIngredient13)}-Small.png`} alt={selectedRecipe.strIngredient13} /><div>{selectedRecipe.strMeasure1}</div></li>}
            {selectedRecipe.strIngredient14 && <li><img src={`https://www.themealdb.com/images/ingredients/${sanitizeIngredient(selectedRecipe.strIngredient14)}-Small.png`} alt={selectedRecipe.strIngredient14} /><div>{selectedRecipe.strMeasure1}</div></li>}
            {selectedRecipe.strIngredient15 && <li><img src={`https://www.themealdb.com/images/ingredients/${sanitizeIngredient(selectedRecipe.strIngredient15)}-Small.png`} alt={selectedRecipe.strIngredient15} /><div>{selectedRecipe.strMeasure1}</div></li>}
            {selectedRecipe.strIngredient16 && <li><img src={`https://www.themealdb.com/images/ingredients/${sanitizeIngredient(selectedRecipe.strIngredient16)}-Small.png`} alt={selectedRecipe.strIngredient16} /><div>{selectedRecipe.strMeasure1}</div></li>}
            {selectedRecipe.strIngredient17 && <li><img src={`https://www.themealdb.com/images/ingredients/${sanitizeIngredient(selectedRecipe.strIngredient17)}-Small.png`} alt={selectedRecipe.strIngredient17} /><div>{selectedRecipe.strMeasure1}</div></li>}
            {selectedRecipe.strIngredient18 && <li><img src={`https://www.themealdb.com/images/ingredients/${sanitizeIngredient(selectedRecipe.strIngredient18)}-Small.png`} alt={selectedRecipe.strIngredient18} /><div>{selectedRecipe.strMeasure1}</div></li>}
            {selectedRecipe.strIngredient19 && <li><img src={`https://www.themealdb.com/images/ingredients/${sanitizeIngredient(selectedRecipe.strIngredient19)}-Small.png`} alt={selectedRecipe.strIngredient19} /><div>{selectedRecipe.strMeasure1}</div></li>}
            {selectedRecipe.strIngredient20 && <li><img src={`https://www.themealdb.com/images/ingredients/${sanitizeIngredient(selectedRecipe.strIngredient20)}-Small.png`} alt={selectedRecipe.strIngredient20} /><div>{selectedRecipe.strMeasure1}</div></li>}
        </ul>
        </section>
        <section className="recipe-instructions-section">
            <h3>Instructions</h3>
        <ul className="recipe-instructions-list">{selectedRecipe.strInstructions.split(".").map((instruction: string, i: number) => {
        return instruction.length > 0 && <li className='recipe-instruction' key={i}>{instruction}</li>
    })}</ul>
        </section>
        <div className="recipe-sources-section">
            <h4>Links</h4>
            <div className="recipe-sources">
            {selectedRecipe.strSource && <a href={selectedRecipe.strSource}>Reference</a>}
            {selectedRecipe.strYoutube && <a href={selectedRecipe.strYoutube}>Youtube</a>}
            </div>
        </div>
    </div>
  )
}

export default RecipeDetails
