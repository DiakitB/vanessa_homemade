import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../services/RecipeApi";
import Recipes from "./Recipes";





function RecipesList() {
    const { data: recipes, isLoading, error} = useQuery({
        queryKey: ["recipes"],
        queryFn: getRecipes
    })
   
    return <ul className=" grid   px-3  md:grid-cols-4 gap-4 justify-center">
        
        {recipes?.map(recipe => <Recipes recipe={recipe} key={recipe.id}/>)}
        
    </ul>
}
export default RecipesList;