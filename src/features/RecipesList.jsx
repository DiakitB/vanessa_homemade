import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getRecipes } from "../services/RecipeApi";
import Recipes from "./Recipes";
import styled from "styled-components";
const Container = styled.ul`
   height: 1200px;
  width: 100vw;
    display: grid;
    justify-items: center;
  
    gap: 5px;
`

function RecipesList() {
    const queryClient = useQueryClient()
    const { data: recipes, isLoading, error } = useQuery({
        queryKey: ["recipes"],
        queryFn: getRecipes,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["recipes"] })
            reset();
        }
    })
    return <Container className="md:grid-cols-4 ">
    {recipes?.map(recipe => <Recipes recipe={recipe} key={recipe.id}/>)}
    </Container>
   
}
export default RecipesList;