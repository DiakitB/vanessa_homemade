import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../services/RecipeApi";
import Recipes from "./Recipes";
import styled from "styled-components";
const Container = styled.div`
   height: 200px;
    width: 300px;
    padding: 10px;
    border: 1px solid #444;

    overflow: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction:column;
    gap: 5px;
`

function RecipesList() {
    const { data: recipes, isLoading, error} = useQuery({
        queryKey: ["recipes"],
        queryFn: getRecipes
    })
   
    return <ul  className="grid h-[1200px] overscroll-x-none overflow-auto scrollbar-hide place-items-center md:grid-cols-4 gap-3 w-screem">
        
        {recipes?.map(recipe => <Recipes recipe={recipe} key={recipe.id}/>)}
        
    </ul>
}
export default RecipesList;