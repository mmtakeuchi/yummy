import { createContext, useState, useEffect} from "react";
import {IRecipeContext, IRecipe, IFavorite} from '../recipe.model'
import { fetchRandomRecipes } from "../utils/api";

export const RecipeContext = createContext<IRecipeContext | undefined>(undefined);

export const RecipeProvider = ({children}: any) => {
    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [favorites, setFavorites] = useState<IFavorite[]>([])

    useEffect(() => {
      const getRecipes = () => {
         fetchRandomRecipes().then((data: any) => setRecipes(data))
      }

      getRecipes()
      }, [])

    return (
        <RecipeContext.Provider value={{recipes, setRecipes, favorites, setFavorites}}>{children}</RecipeContext.Provider>
    )
};
