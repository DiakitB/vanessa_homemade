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
import AddNewRecipe from "./AddNewRecipe";




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

    const { name, description, image,  id,ingredients, category } = recipe
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
      <h3 className="px- py-3 leading-normal  font-bold  text-lg">{name}</h3>
   
       <div className="pr-25 ">
      
      <Image src={image} alt="picture" />
     
      </div> 
      <div  className="pr-20">
        <p className="text-xl font-medium text-gray-900 dark:text-white">{description}</p>
      </div>
      <div className="space-x-8">
     <button  onClick={()=>setShowForm(form => !form)}><Edit/></button>
        {/* <Button type="small" onClick={() => onClikHandler(id)} >Ingredients</Button> */}
        <button type="button"  className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-lg
         px-5 py-2.5 text-center me-2 mb-2" onClick={() => onClikHandler(id)}>Ingredients</button>
        <NavLink to="/cooking" onClick={() => dispatch(getRecipeObject(recipe))} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700
         hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300
         dark:focus:ring-purple-800 font-medium rounded-lg text-lg
          px-5 py-2.5 text-center me-2 mb-2">Instructions</NavLink>
      </div>
    </div>
    {showForm && <AddNewRecipe recipe={recipe} setShowForm={setShowForm } />}
    </li>

     
     
        
    
}
export default Recipes;