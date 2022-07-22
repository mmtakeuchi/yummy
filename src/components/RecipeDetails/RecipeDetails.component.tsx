import React, {useContext, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { fetchSelectedRecipe } from '../../utils/api'
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
        <h2>{selectedRecipe.strMeal}</h2>
        <img src={selectedRecipe.strMealThumb} alt={selectedRecipe.strMeal}/>
        <div>{selectedRecipe.strCategory}</div>
        <div>{selectedRecipe.strArea}</div>
        <ul className="recipe-ingredients-list">
            {selectedRecipe.strIngredient1 && <li>{selectedRecipe.strIngredient1}<div>{selectedRecipe.strMeasure1}</div></li>}
            {selectedRecipe.strIngredient2 && <li>{selectedRecipe.strIngredient2}<div>{selectedRecipe.strMeasure2}</div></li>}
            {selectedRecipe.strIngredient3 && <li>{selectedRecipe.strIngredient3}<div>{selectedRecipe.strMeasure3}</div></li>}
            {selectedRecipe.strIngredient4 && <li>{selectedRecipe.strIngredient4}<div>{selectedRecipe.strMeasure4}</div></li>}
            {selectedRecipe.strIngredient5 && <li>{selectedRecipe.strIngredient5}<div>{selectedRecipe.strMeasure5}</div></li>}
            {selectedRecipe.strIngredient6 && <li>{selectedRecipe.strIngredient6}<div>{selectedRecipe.strMeasure6}</div></li>}
            {selectedRecipe.strIngredient7 && <li>{selectedRecipe.strIngredient7}<div>{selectedRecipe.strMeasure7}</div></li>}
            {selectedRecipe.strIngredient8 && <li>{selectedRecipe.strIngredient8}<div>{selectedRecipe.strMeasure8}</div></li>}
            {selectedRecipe.strIngredient9 && <li>{selectedRecipe.strIngredient9}<div>{selectedRecipe.strMeasure9}</div></li>}
            {selectedRecipe.strIngredient10 && <li>{selectedRecipe.strIngredient10}<div>{selectedRecipe.strMeasure10}</div></li>}
            {selectedRecipe.strIngredient11 && <li>{selectedRecipe.strIngredient11}<div>{selectedRecipe.strMeasure11}</div></li>}
            {selectedRecipe.strIngredient12 && <li>{selectedRecipe.strIngredient12}<div>{selectedRecipe.strMeasure12}</div></li>}
            {selectedRecipe.strIngredient13 && <li>{selectedRecipe.strIngredient13}<div>{selectedRecipe.strMeasure13}</div></li>}
            {selectedRecipe.strIngredient14 && <li>{selectedRecipe.strIngredient14}<div>{selectedRecipe.strMeasure14}</div></li>}
            {selectedRecipe.strIngredient15 && <li>{selectedRecipe.strIngredient15}<div>{selectedRecipe.strMeasure15}</div></li>}
            {selectedRecipe.strIngredient16 && <li>{selectedRecipe.strIngredient16}<div>{selectedRecipe.strMeasure16}</div></li>}
            {selectedRecipe.strIngredient17 && <li>{selectedRecipe.strIngredient17}<div>{selectedRecipe.strMeasure17}</div></li>}
            {selectedRecipe.strIngredient18 && <li>{selectedRecipe.strIngredient18}<div>{selectedRecipe.strMeasure18}</div></li>}
            {selectedRecipe.strIngredient19 && <li>{selectedRecipe.strIngredient19}<div>{selectedRecipe.strMeasure19}</div></li>}
            {selectedRecipe.strIngredient20 && <li>{selectedRecipe.strIngredient20}<div>{selectedRecipe.strMeasure20}</div></li>}
        </ul>
        <ul className="recipe-instructions-list">{selectedRecipe.strInstructions.split(".").map((instruction: string, i: number) => <li className='recipe-instruction' key={i}>{instruction}</li>)}</ul>
        <div>
        {selectedRecipe.strSource && <a href={selectedRecipe.strSource}>Source</a>}
        </div>
        <div>
        {selectedRecipe.strYoutube && <a href={selectedRecipe.strYoutube}>Youtube</a>}
        </div>
    </div>
  )
}

export default RecipeDetails
