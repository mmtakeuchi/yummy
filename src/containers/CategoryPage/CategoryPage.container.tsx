import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { IRecipe } from '../../recipe.model'
import { fetchRecipeByCategory } from '../../utils/api'
import RecipeList from '../../components/RecipeList/RecipeList.component'
import './CategoryPage.styles.css'

type Props = {}

const CategoryPage = (props: Props) => {
    const [categoryRecipes, setCategoryRecipes] = useState<IRecipe[]>([])
    const {categoryId} = useParams()

    useEffect(() => {
        const getRecipesbyCategory = async () => {
            const recipes = await fetchRecipeByCategory(categoryId);
            setCategoryRecipes(recipes)
        }

        getRecipesbyCategory()
    }, [categoryId])

  return (
    <div>
      <RecipeList title={`${categoryId} Recipes`} recipes={categoryRecipes}/>
    </div>
  )
}

export default CategoryPage
