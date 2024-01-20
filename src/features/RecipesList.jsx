import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getRecipes } from "../services/RecipeApi";
import Recipes from "./Recipes";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

const Container = styled.ul`
   height: 1200px;
  width: 100vw;
    display: grid;
    justify-items: center;
  direction: ltr;
    gap: 5px;
`

function RecipesList() {
  const [searchParams] =useSearchParams()
    const queryClient = useQueryClient()
    const { data: recipes, isLoading, error } = useQuery({
        queryKey: ["recipes"],
        queryFn: getRecipes,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["recipes"] })
            reset();
        }
    })
console.log(recipes)
    const filterValue = searchParams.get("sort") || "all"
  console.log(filterValue)
    let filterRecipe;

    if (filterValue === "all") filterRecipe = recipes
    if (filterValue === "breakfast") filterRecipe = recipes?.filter(recipe => recipe.category === "breakfast")
    
    if (filterValue === "lunch") filterRecipe = recipes?.filter(recipe => recipe.category === "lunch")
    
    if (filterValue === "supper") filterRecipe = recipes?.filter(recipe => recipe.category === "supper")
    
    return <Container className="md:grid-cols-4 ">
    {filterRecipe?.map(recipe => <Recipes recipe={recipe} key={recipe.id}/>)}
    </Container>
   
}
export default RecipesList;