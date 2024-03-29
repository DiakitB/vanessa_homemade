import { useDispatch, useSelector } from "react-redux";

import { NavLink, useNavigate } from "react-router-dom";
import { postBookMar } from "../services/BookMarkApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import { getRecipeObject } from "../reducers/recipeSlice";
import { AddedToCart, getCart } from "../services/ShopingCart";
import { useState } from "react";
import { getCarts } from "../reducers/shoppingListSlice";



const Image = styled.img`
     width: 330px;
 height: 220px;
`
const Dive = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    margin-left: auto;
    margin-right: auto;
    height: 100vh;
    gap: 15px;
 
`

function Ingredient() {
    const recipe = useSelector(state => state.recipe.recipe)
    const cartLts = useSelector(state => state.cart.cart)
   const[cheched, setChecked] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()



    const queryClient = useQueryClient()
    const { mutate, isloading, } = useMutation({
        mutationFn: postBookMar,
        onSuccess: () => alert("recipe uloaded successfully"),

      
    })
    

    if (!recipe) return
    
    const data = recipe[0]
    if (!data) return;
    const { name, image, ingredients} = data


    async function testFunction() {
        const  newRecipe = {
            name: data?.name,
            description: data?.description,
            image: data.image,
            ingredients: data?.ingredients
        }
       if(!newRecipe) return
        mutate(newRecipe)
    
    }
   

    
  const Deltat =  ingredients.map((ingre) => {
        return JSON.parse(ingre)
       
  })
   
    function onChangeHandler(value) {
       
        console.log(value)
       
        const cart = value.split(" ").slice(35, 36).join("")
      dispatch(getCarts(cart))
 
    
      
    }



    return <div className="flex flex-col  justify-center gap-2 px-8">
            <div className="space-x-2">
            {/* <Button type="secondary" onClick={() => navigate("/recipes")} > God back</Button> */}
            <button type="button" className="text-white bg-gradient-to-br from-green-400 
            to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200
             dark:focus:ring-green-800 font-medium 
            rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2"onClick={() => navigate("/recipes")} >Back</button>
            <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200
             dark:focus:ring-green-800 font-medium rounded-lg 
            text-sm px-5 py-2.5 text-center me-2 mb-2"onClick={testFunction}>Book Mark</button>
            
                    {/* <Button type="secondary" onClick={testFunction}>Book Mark </Button>   */}
            </div>
            <h3 className="px- py-3 leading-normal  font-semibold  ">{name}</h3>
            <div className="pr-25 ">

            <Image src={image} alt="picture" />
        </div>
        <div className="grid grid-cols-2 ">
        <div>
                    {Deltat?.map((ing, index) => {
                        return <>
                            <div key={ing.id}>
                                
                                <input type="checkbox" labe={ing.ingredient} value={`${index + 1})
                                 ${ing.quantity} ${ing.unit} ${ing.ingredient} `} onChange={(e) => { onChangeHandler(e.target.value) }} />
                            <label > {`${index + 1}) ${ing.quantity} ${ing.unit} ${ing.ingredient} `}</label>
                            
                            </div>
                            
                        </>
                        
                    })}
                


                <button type="button"  className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-lg
         px-5 py-2.5 text-center me-2 mb-2" onClick={() => { AddedToCart(cartLts); navigate('/recipes') }}>Add</button>
        </div>
            <div>

            <NavLink to="/cooking" onClick={() => dispatch(getRecipeObject(data))} className="text-white bg-gradient-to-r mx-[70px]  from-purple-500 via-purple-600 to-purple-700
         hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300
         dark:focus:ring-purple-800 font-medium rounded-lg text-lg
         px-5 py-2.5 text-center me-2 mb-2">Instructions</NavLink>
         </div>
        </div>
                    
  </div>

   
}

export default Ingredient;



