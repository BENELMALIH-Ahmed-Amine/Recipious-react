import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Mycontext = createContext()

export const MyProvider = ({ children }) => {

    // Recipes:
    const [Recipes, setRecipesD] = useState([])

    useEffect(() => {
        const GetRecipes = async () => {
            let Recipes_D = await axios.get('https://dummyjson.com/recipes')
            console.log(Recipes_D);

            let Recipes_Data = await Recipes_D.data.recipes
            setRecipesD(Recipes_Data);
        }

        GetRecipes()
    }, [])

    const all = { Recipes, setRecipesD }

    return <Mycontext.Provider value={all}>{children}</Mycontext.Provider>
}