import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import { Data } from "../Constents";

export const Mycontext = createContext()

export const MyProvider = ({ children }) => {

    // Recipes:
    const [Recipes, setRecipesD] = useState([])

    useEffect(() => {
        const GetRecipes = async () => {
            let Recipes_D = await axios.get(import.meta.env.VITE_APP_RECIPES_URL)
            
            let Recipes_Data = await Recipes_D.data.recipes
            console.log(Recipes_Data);
            setRecipesD(Recipes_Data);
        }

        GetRecipes()
    }, [])

    // Chefs:
    // const [chef, newChefs] = useState(Data.Chefs.Profil)


    const all = { Recipes, setRecipesD }

    return <Mycontext.Provider value={all}>{children}</Mycontext.Provider>
}