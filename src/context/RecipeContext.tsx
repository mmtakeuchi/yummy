import { createContext, useState, useEffect} from "react";
import {IRecipeContext, IRecipe, IRecipeData} from '../recipe.model'
import { fetchRandomRecipes } from "../utils/api";

const RecipeContext = createContext<IRecipeContext | undefined>(undefined);

export const RecipeProvider = ({children}: any) => {
    const [recipes, setRecipes] = useState<IRecipe[]>([]);

    useEffect(() => {
      const getRecipes = () => {
        fetchRandomRecipes().then((data: any) => setRecipes(data))
      }

      getRecipes()
      }, [])

      console.log(recipes)

    return (
        <RecipeContext.Provider value={{recipes, setRecipes}}>{children}</RecipeContext.Provider>
    )
};
