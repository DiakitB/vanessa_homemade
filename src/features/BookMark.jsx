import { useState } from "react";
import { getRecipeIngredient } from "../services/RecipeApi";
import Ingredient from "./Ingredient";
import { useDispatch } from "react-redux";
import { getRecipeObject } from "../reducers/recipeSlice";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import styled from "styled-components";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBookMark } from "../services/BookMarkApi";



const Image = styled.img`
    width: 418px;
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
  const queryClient = useQueryClient();
  
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteBookMark,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookmark'] })
    
   }
   
  });

//   onSuccess: async () => {
//     await queryClient.invalidateQueries("getComments");
//   },
// });
  
  return <li>
      
    <div className="flex flex-col gap-5 justify-center ">
      
         <h3 className="px- py-3 leading-normal  font-semibold  ">{name}</h3>
    
      <div>

      <Image src={image} alt="picture" />
      </div>
      <div className="flex space-x-4">

        <Button type="small" onClick={() => onClikHandler(id)} >Ingredients</Button>
        <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500
     to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 
     dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium
     rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>mutate(id)}>Delete</button>
      </div>
    </div>
    </li>
}
export default BookMark;



{/* <li>
    <div className="flex flex-col gap-5 justify-center">
      <h3 className="px- py-3 leading-normal  font-semibold  ">{name}</h3>
      <div>

      <Image src={image} alt="picture" />
      </div>
      <div>
        <p className="leading-normal  font-semibold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eius
          nulla consequuntur quisquam cum quos adipisci vitae quae,
        ?</p>
      </div>
      <div>

      <Button type="small" onClick={()=>onClikHandler(id)} >Ingredients</Button>
      </div>
    </div>
    </li> */}