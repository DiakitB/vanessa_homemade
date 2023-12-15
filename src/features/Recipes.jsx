import { useState } from "react";
import { getRecipeIngredient } from "../services/RecipeApi";
import Ingredient from "./Ingredient";
import { useDispatch } from "react-redux";
import { getRecipeObject } from "../reducers/recipeSlice";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "../ui/Button";

function Recipes({ recipe }) {
    // const [ingreds, setingreds] = useState("")
    const [showIngredient, setShowIngredient] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    if (!recipe) return

    const { name, description, image,  id,ingredients } = recipe
    // console.log(name, image, id)
    async function onClikHandler(id) {
        const data = await getRecipeIngredient(id)
        if(!data)  return
        console.log(data)
        dispatch(getRecipeObject(data))
        navigate("/ingredient")

    }
  
    // console.log(ingredients)
 
    return <li className="space-y-[5px]">
        <h2 className="phone:bg-black-500">{name}</h2>
        <div className="rounded overflow-hidden ">
  <div className="grid - grid-rows-2 h-98">
    <img
      className="w-[1500px] h-[200px] object-cover px-5"
      src={image}
      loading="lazy"
      alt={""}
    />

  </div>
</div>
        
       <Button type="small" onClick={()=>onClikHandler(id)}>Ingredients</Button>
     
        
    </li>
}
export default Recipes;