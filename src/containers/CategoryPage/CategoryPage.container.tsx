import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { ICategory } from '../../recipe.model'
import { fetchRecipeByCategory } from '../../utils/api'
import RecipeList from '../../components/RecipeList/RecipeList.component'
import RecipeItem from '../../components/RecipeItem/RecipeItem.component'
import './CategoryPage.styles.css'

type Props = {}

const CategoryPage = (props: Props) => {
    const [categoryRecipes, setCategoryRecipes] = useState<ICategory[]>([])
    const {categoryId} = useParams()

    useEffect(() => {
        const getRecipesbyCategory = async () => {
            const recipes = await fetchRecipeByCategory(categoryId);
            setCategoryRecipes(recipes)
        }

        getRecipesbyCategory()
    }, [categoryId])

    const renderRecipes = () => {
        return categoryRecipes && categoryRecipes.map((recipe: any) =>  <RecipeItem key={recipe.idMeal} recipe={recipe} />)
    }

  return (
    <div>
      <h2 className="category-title">{categoryId} Recipes</h2>
      <ul className="recipes-list">{renderRecipes()}</ul>
    </div>
  )
}

export default CategoryPage
