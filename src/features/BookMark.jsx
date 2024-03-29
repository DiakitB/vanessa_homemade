import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import {  useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import styled from "styled-components";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBookMark } from "../services/BookMarkApi";
import { getBookMarkObject } from "../reducers/bookMarkSlice";
import { Trash } from "../icons/Icons";



const Image = styled.img`
 width: 400px;
 height: 220px;
 
  
`




function BookMark({ recipe }) {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
if (!recipe) return

const { name, description, image,  id,ingredients } = recipe
// console.log(name, image, id)
async function onClikHandler(id) {

  dispatch(getBookMarkObject(recipe))
navigate("/bookmarkingredient")
  

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
  

//   const fecher =  useFetcher()
//     useEffect(function () {
//     if(!fecher.data && fecher.state == "idle")
// fecher.load('/ingredient')
//   }, [fecher])
  
// console.log(fecher.data)
  return <li >
  <div className="flex flex-col  justify-center gap-2 px-10">
    <h3 className="px- py-3 leading-normal  font-semibold  ">{name}</h3>
    <div className="pr-25 ">

    <Image src={image} alt="picture" />
    </div>
    <div  className="pr-20">
        <p className="leading-normal  font-semibold ">{ description} </p>
    </div>
    <div className="flex justify-between">

        {/* <Button type="small" onClick={() => onClikHandler(id)} >Ingredients</Button> */}
        <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 
        hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium 
        rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2"onClick={() => onClikHandler(id)}>Ingredients</button>
          <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500
     to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 
     dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium
     rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>mutate(id)}><Trash/></button>
    </div>
  </div>
  </li>
}
export default BookMark;



{/* <li className="bg-blue-400">
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

      // <Button type="small" onClick={()=>onClikHandler(id)} >Ingredients</Button>
      <button type="button" class="text-gray-900 bg-gradient-to-r from-red-200
       via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
       focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 
      text-center me-2 mb-2" onClick={()=>onClikHandler(id)} >Ingredients</button>
      </div>
    </div>
    </li> */}

        {/* <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500
     to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 
     dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium
     rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>mutate(id)}>Delete</button> */}