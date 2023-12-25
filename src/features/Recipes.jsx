import { useState } from "react";
import { getRecipeIngredient } from "../services/RecipeApi";
import Ingredient from "./Ingredient";
import { useDispatch } from "react-redux";
import { getRecipeObject } from "../reducers/recipeSlice";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import styled from "styled-components";


const Image = styled.img`
 width: 100%;
 height: 220px;
  
`

const DiveRecipe = styled.div`
  
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`

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
 
  return <li className="bg-blue-400">
    <div className="flex flex-col  justify-center gap-2 px-10">
      <h3 className="px- py-3 leading-normal  font-semibold  ">{name}</h3>
      <div className="pr-25 ">

      <Image src={image} alt="picture" />
      </div>
      <div  className="pr-20">
        <p className="leading-normal  font-semibold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eius
          nulla consequuntur quisquam cum quos adipisci vitae quae,
        ?</p>
      </div>
      <div>

      <Button type="small" onClick={()=>onClikHandler(id)} >Ingredients</Button>
      </div>
    </div>
    </li>

     
     
        
    
}
export default Recipes;