import { createContext, useState } from "react";
import {IRecipeContext, IRecipe} from '../recipe.model'

const RecipeContext = createContext<IRecipeContext | undefined>(undefined);

export const RecipeProvider = ({children} :any) => {
    const [recipes, setRecipes] = useState<IRecipe[]>([]);

    return (
        <RecipeContext.Provider value={{recipes, setRecipes}}>{children}</RecipeContext.Provider>
    )
};
