
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { getRecipeObject } from "../reducers/recipeSlice";
import { useSelector } from "react-redux";
import styled from "styled-components";
const Image = styled.img`
width: 400px;
 height: 220px;
  
`
export default function RecipeCooking() {
    const recipes = useSelector(state => state.recipe.recipe)
    console.log(recipes)
    const navigate = useNavigate()
    return <div className="flex flex-col  justify-center gap-2 px-10 pb-4">
        <button type="small" onClick={()=>navigate('/recipes')}>Back</button>
        <div>
            <Image src={recipes.image} />
            <div>
                <p>{ recipes.description}</p>
            </div>
        </div>
    </div>
}