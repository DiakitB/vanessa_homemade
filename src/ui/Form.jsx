import { useForm } from "react-hook-form";
import Button from "./Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditRecipe } from "../services/RecipeApi";
import { useNavigate, useSearchParams } from "react-router-dom";
import ErrorPage from "./ErrorMessage";
import IngredientsCreator from "./IngredientsCreator";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearIngredientList } from "../reducers/ingredientSlice";

function Form({ recipeData = {} }) {
    const ingredients = useSelector(state => state.ingredients.ingredients)
    const [searchParms, setSearchParams] = useSearchParams()
    const[addingIngredients, setAddingIngredient] = useState(true)
    if(recipeData)console.log(recipeData)
    const { id: editId, ...recivedData } = recipeData
    
    const dispatch = useDispatch()
    ingredients.forEach((element) => {
        const { quantity, unit, ingredient } = element
      return{quantity, unit, ingredient}
  })
  
    

    console.log(ingredients)
    
    const isEditingSession = Boolean(editId)
    

    const { register, handleSubmit, reset, formState } = useForm({
        defaultValues: isEditingSession ? recivedData : {}
    });
    const { errors } = formState
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const { mutate: createRecipe, isloading, } = useMutation({
        mutationFn: createEditRecipe,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["bookmark"] })
            reset();
        }
    })
    const { mutate: editRecipe, isloading: isEditing, } = useMutation({
        mutationFn: ({ newRecipeData, id}) =>createEditRecipe(newRecipeData, id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["bookmark"] })
            reset();
           
        }
    })
    console.log(errors)
    function OnSubmitHandler(data) {
        console.log(data)
        if (!data) return
  if(!isEditingSession)
  {const  newRecipe = {
          name: data.name,
           description: data.description,
       image: data.image[0],
       category: data.category,
      ingredients: ingredients,
           instructions: data.instructions
  }
      
    createRecipe(newRecipe)
        }
      
        if (isEditingSession) {
            data.id = editId;
            const image = typeof data.image === "string" ? data.image : data.image[0]
            editRecipe({ newRecipeData: { ...data, image } ,id: data.id })
        }
        dispatch(clearIngredientList(""))
       navigate('/success')

        
    }

    function onError(errors) {
        console.log(errors)
        
    }
    function onChangeHandler(value) {
console.log(value)
    
}


    return <>
        <IngredientsCreator/>
    <form onSubmit={handleSubmit(OnSubmitHandler, onError)} >
        <div className="grid grid-cols-1 pl-2 bg-blue-500 w-full overscroll-x-none overflow-auto scrollbar-hide py-4 px-5 ">
            <div>
            <label >Choose a category:</label>

                <select  id="category" {...register("category",  { required: "This field is required" })} >
                <option value="" disabled selected hidden>Select a category</option>
                    
                    <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="supper">Supper</option>
               
                </select>
            </div>
            <div className="input w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recipe Name</label>
                <input type="text" placeholder="type name" id="name" {...register("name",  { required: "This field is required" })} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500 dark:shadow-sm-light"/>
                  {errors?.name?.message && <ErrorPage error={errors.name.message}/>}
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recipe Description</label>
                <input type="text" placeholder="type description" id="description" {...register("description",  { required: "This field is required" })} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500 dark:shadow-sm-light"/>
                   {errors?.description?.message && <ErrorPage error={errors.description.message}/>}
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                <input type="file" placeholder="image"id="image" {...register("image", { required: isEditingSession? false :"This field is required" })}  className="shadow-sm bg-gray-50 border border-gray-300 
                text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500 dark:shadow-sm-light"/>
                 {errors?.image?.message && <ErrorPage error={errors.image.message}/>}
            </div>
                <div >   
                    
                {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ingredients</label>
                <textarea type="text"  {...register("ingredients", { required: "This field is required" })}  className="shadow-sm bg-gray-50 border border-gray-300 
                text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500 dark:shadow-sm-light"></textarea>
                   {errors?.ingredients?.message && <ErrorPage error={errors.ingredients.message}/>}
                  */}
                </div>
                <div className="flex flex-col gap-1 py-4">
                <label>Ingredient</label>
                 {!isEditingSession &&  ingredients.map((ing, index) => <textarea id="ingredient"  {...register} rows="1"value={ingredients?`${index +1}-${ing.quantity} ${ing.unit} ${ing.ingredient}`:"" }></textarea>)}
                </div>
                {isEditingSession && <div>
                    <label>Ingredient</label>
                    <textarea id="ingredients" rows="5" {...register("ingredients")}  className="shadow-sm bg-gray-50 border border-gray-300 
                text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500 dark:shadow-sm-light"></textarea>
                </div>}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instruction</label>
                    <textarea id="instructions" rows="5" {...register("instructions", {required: "this field is required"})}  className="shadow-sm bg-gray-50 border border-gray-300 
                text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500 dark:shadow-sm-light"></textarea>
                </div>
           
        </div>
        
        <div className="py-4">
            <Button type="small" >{isEditingSession ? "Edit Recipe": "Create New Recipe" }</Button>
        </div>  
        
        </form>
        </>
}

export default Form;


