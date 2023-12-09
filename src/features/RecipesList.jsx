import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../services/RecipeApi";
import Recipes from "./Recipes";





function RecipesList() {
    const { data: recipes, isLoading, error} = useQuery({
        queryKey: ["recipes"],
        queryFn: getRecipes
    })
   
    return <ul className=" sm:grid grid-cols-2 py-3 px-3 gap-3 md: grid-cols-4">
        
        {recipes?.map(recipe => <Recipes recipe={recipe} key={recipe.id}/>)}
        
    </ul>
}
export default RecipesList;