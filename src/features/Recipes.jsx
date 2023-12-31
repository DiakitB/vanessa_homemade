import { useState } from "react";
import { getRecipeIngredient } from "../services/RecipeApi";

import { useDispatch } from "react-redux";
import { getRecipeObject } from "../reducers/recipeSlice";
import {  useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import styled from "styled-components";
import Form from "../ui/Form";
import { Edit} from "../icons/Icons";


import { NavLink } from 'react-router-dom'




const StyledLink = styled(NavLink)`

`;
const Image = styled.img`
width: 400px;
 height: 220px;
  
`

const DiveRecipe = styled.div`
  
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`

function Recipes({ recipe }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showForm, setShowForm]= useState()
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
 
  return <li className="">
    <div className="flex flex-col  justify-center gap-2 px-10 pb-4">
      <h3 className="px- py-3 leading-normal  font-semibold  ">{name}</h3>
      <div className="pr-25 ">
        <NavLink to="/cooking" onClick={()=>dispatch(getRecipeObject(recipe))}>
      <Image src={image} alt="picture" />
     </NavLink>
      </div>
      <div  className="pr-20">
        <p className="leading-normal  font-semibold ">{description}</p>
      </div>
      <div className="space-x-4">
     <button onClick={()=>setShowForm(show => !show)}><Edit/></button>
      <Button type="small" onClick={()=>onClikHandler(id)} >Ingredients</Button>
      </div>
    </div>
    {showForm && <Form recipeData={recipe} />}
    </li>

     
     
        
    
}
export default Recipes;