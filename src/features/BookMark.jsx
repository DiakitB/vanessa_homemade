import { useState } from "react";
import { getRecipeIngredient } from "../services/RecipeApi";
import Ingredient from "./Ingredient";
import { useDispatch } from "react-redux";
import { getRecipeObject } from "../reducers/recipeSlice";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import styled from "styled-components";


const Image = styled.img`
    width: 350px;
    height: 300px;
    margin-left: auto;
  margin-right: auto;
`
function BookMark({ recipe }) {
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
 
    return <li>
    <div className="flex flex-col gap-2 ">
      <h3>{name}</h3>
      <Image src={image} alt="picture" />
      <Button type="small" onClick={()=>onClikHandler(id)} >Ingredients</Button>
    </div>
    </li>
}
export default BookMark;