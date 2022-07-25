import { createContext, useState, useEffect} from "react";
import {IRecipeContext, IRecipe, IFavorite, IIngredient} from '../recipe.model'
import { fetchRandomRecipes, fetchIngredients, fetchSearchedRecipes } from "../utils/api";

export const RecipeContext = createContext<IRecipeContext | undefined>(undefined);

export const RecipeProvider = ({children}: any) => {
    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [favorites, setFavorites] = useState<IFavorite[]>([])
    const [ingredients, setIngredients] = useState<IIngredient[]>([])
    const [searchedRecipe, setSearchedRecipe] = useState<IRecipe[]>([]);

    const searchRecipes = async (query: string) => {
        const data = await fetchSearchedRecipes(query);
        setSearchedRecipe(data)
    }

    useEffect(() => {
        const getIngredients = async () => {
            const data = await fetchIngredients()
            setIngredients(data)
        }

        getIngredients()
    }, [])

    useEffect(() => {
      const getRecipes = () => {
         fetchRandomRecipes().then((data: any) => setRecipes(data))
      }

      getRecipes()
      }, [])

    return (
        <RecipeContext.Provider value={{recipes, setRecipes, favorites, setFavorites, ingredients, searchedRecipe, searchRecipes}}>{children}</RecipeContext.Provider>
    )
};
