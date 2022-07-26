import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {IRecipe} from '../../recipe.model'
import { fetchRecipesByLetter } from '../../utils/api'
import RecipeList from '../../components/RecipeList/RecipeList.component'
import './LetterRecipePage.styles.css'

type Props = {}

const LetterRecipePage = (props: Props) => {
    const [letterRecipes, setLetterRecipes] = useState<IRecipe[]>([])
    const {letterId} = useParams()

    useEffect(() => {
        const getLetterRecipes = async () => {
            const data = await fetchRecipesByLetter(letterId);
            setLetterRecipes(data)
        }

        getLetterRecipes()
    }, [letterId])

  return (
    <div>
        <RecipeList title={`Recipes starting with ${letterId}`} recipes={letterRecipes}/>
    </div>
  )
}

export default LetterRecipePage
