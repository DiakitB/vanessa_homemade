import { useForm } from "react-hook-form";
import Button from "./Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditRecipe } from "../services/RecipeApi";
import { useNavigate } from "react-router-dom";
import ErrorPage from "./ErrorMessage";

function Form({ recipeData = {} }) {
    if(recipeData)console.log(recipeData)
    const { id: editId, ...recivedData } = recipeData
    console.log(recivedData, editId)
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
        if (!data) return
if(!isEditingSession)
  {const  newRecipe = {
          name: data.name,
           description: data.description,
       image: data.image[0],
           ingredients: data.ingredients.split(",")
}
createRecipe(newRecipe)
        }
       
        if (isEditingSession) {
            data.id = editId;
            const image = typeof data.image === "string" ? data.image : data.image[0]
            editRecipe({ newRecipeData: { ...data, image } ,id: data.id })
        }
            
        
     
        
        
    //     const image = typeof data.image === "string" ? data.image : data.image[0]
    //     console.log(data)
    //    const  newRecipe = {
    //         name: data.name,
    //         description: data.description,
    //         image: data.image[0],
    //         ingredients: data.ingredients.split(",")
    //     }
    //     console.log(newRecipe)
     
        // mutate(newRecipe)
      
       navigate('/success')
       
        
       

        
    }

    function onError(errors) {
        console.log(errors)
        
    }



    return <form onSubmit={handleSubmit(OnSubmitHandler, onError)} >
        <div className="grid grid-cols-1 pl-2 bg-blue-500 w-full overscroll-x-none overflow-auto scrollbar-hide py-4 px-5 ">
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
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ingredients</label>
                <input type="text" placeholder="Start by typing your ingredients separeted by comma"id="image" {...register("ingredients", { required: "This field is required" })}  className="shadow-sm bg-gray-50 border border-gray-300 
                text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500 dark:shadow-sm-light"/>
                   {errors?.ingredients?.message && <ErrorPage error={errors.ingredients.message}/>}
                 
             </div>
        </div>
        
        <div className="py-4">
            <Button type="small" >{isEditingSession ? "Edit Recipe": "Create New Recipe" }</Button>
        </div>  
        
    </form>
}

export default Form;


