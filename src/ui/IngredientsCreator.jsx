
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { clearIngredientList, getIngredients } from "../reducers/ingredientSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getIngredientsList, getQuantity, getUnit } from "../services/ingredientApi";

const StyledSelect = styled.select`
  font-size: 0.5;
  padding: 0;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);



`;



export default function IngredientsCreator() {

const dispatch = useDispatch()
    const { register, handleSubmit, reset, formState } = useForm()



    function onSubmitHandler(data) {
       
        if (!data) return
        dispatch(getIngredients(data))
       
        reset()
   
    }
    const queryClient = useQueryClient()
    const { data: quantity, isLoading: loadingQuantity, error: errorQuantity } = useQuery({
      queryKey: ["quantity"],
      queryFn: getQuantity,
      onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["quantity"] })
          reset();
      }
  })
    const { data: listIngredients, isLoading: loadingIngredients, error: errorIngredient } = useQuery({
      queryKey: ["ingredients"],
      queryFn: getIngredientsList,
      onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["ingredients"] })
          reset();
      }
  })
    const { data: unit, isLoading, error } = useQuery({
      queryKey: ["unit"],
      queryFn: getUnit,
      onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["unit"] })
          reset();
      }
  })
 if(!quantity) return
  const quantityList = quantity[0]
  if(!unit) return
  const unitList = unit[0]
  if(!listIngredients) return
  const IngredientList = listIngredients[0]


    return <form onSubmit={handleSubmit(onSubmitHandler)} >
        <div className="flex  gap-2">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-1 px-2 rounded-full p">
                    Submit
                    </button>
                <div>
              
                    <StyledSelect  id="quantity" {...register("quantity",  { required: "This field is required" })} className="text-lg text-red-600">
                  <option value="" disabled selected hidden><h5 >Quantity</h5></option>
                            {quantityList?.quantity.map(quantity => <option key={quantity} className="text-sm">{ quantity}</option>)}
                    </StyledSelect>
                </div>
                <div>
                
                        <StyledSelect className="text-red-600 text-lg"  id="unit" {...register("unit", { required: "This field is required" })} >
                        <option value="" disabled selected hidden>Unit</option>
                    {unitList.unit?.map(unit => <option key={unit} className="text-sm">{ unit}</option>)}
                      </StyledSelect>
                </div>
                <div>
                
                        <StyledSelect className="text-red-600 text-lg"  id="ingredient" {...register("ingredient", { required: "This field is required" })}>
                        <option value="" disabled selected hidden >Ingredient</option>
                            {IngredientList.ingredients?.map(ingredient => <option key={ingredient}  className="text-sm">{ingredient }</option>)}
                      </StyledSelect>
        </div>   
        
          </div>
        
    </form>
}