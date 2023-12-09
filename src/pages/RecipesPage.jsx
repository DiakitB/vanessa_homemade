import { useEffect } from "react";
import { getRecipes } from "../services/RecipeApi";
import RecipesList from "../features/RecipesList";

function RecipesPage() {

    // useEffect(function () {
    //     getRecipes().then(data =>console.log(data))
    //  },[])
    return <div>
        <RecipesList/>
    </div>
}

export default RecipesPage;