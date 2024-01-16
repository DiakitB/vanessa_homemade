
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { clearIngredientList, getIngredients } from "../reducers/ingredientSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

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
const quantities = [1, 1/2, 1/4,  2, 3,3/4, 4, 5, 6, 7, 8, 9]
const units = ["cup", "slice", "tps"]
const ingredients = ["celery", "salad", "onion", "carrots", "broccoli", "cucumber", "chicken", "beef", "fish", "coffee"]




export default function IngredientsCreator() {

const dispatch = useDispatch()
    const { register, handleSubmit, reset, formState } = useForm()



    function onSubmitHandler(data) {
       
        if (!data) return
        dispatch(getIngredients(data))
        console.log(data)
        reset()
   
    }

   
    

    return <form onSubmit={handleSubmit(onSubmitHandler)} >
        <div className="flex  gap-2">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full p">
  Submit
</button>
        <div>
      
        <StyledSelect  id="quantity" {...register("quantity",  { required: "This field is required" })}>
        <option value="" disabled selected hidden><h5 >Quantity</h5></option>
                    {quantities.map(quantity => <option key={quantity} className="text-sm">{ quantity}</option>)}
    </StyledSelect>
        </div>
        <div>
        
                <StyledSelect className="text-red-600 text-sm"  id="unit" {...register("unit", { required: "This field is required" })} >
                <option value="" disabled selected hidden>Unit</option>
        {units.map(unit => <option key={unit} className="text-sm">{ unit}</option>)}
    </StyledSelect>
        </div>
        <div>
        
                <StyledSelect className="text-red-600 text-sm"  id="ingredient" {...register("ingredient", { required: "This field is required" })}>
                <option value="" disabled selected hidden>Ingredient</option>
                    {ingredients.map(ingredient => <option key={ingredient}  className="text-sm">{ingredient }</option>)}
    </StyledSelect>
            </div>
         
          
</div>
        
    </form>
}