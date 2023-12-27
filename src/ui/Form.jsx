import { useForm } from "react-hook-form";
import Button from "./Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewRecipe } from "../services/RecipeApi";
import { useNavigate } from "react-router-dom";
import ErrorPage from "./ErrorMessage";

function Form() {
    const { register, handleSubmit, reset, formState } = useForm();
    const { errors } = formState
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const { mutate, isloading, } = useMutation({
        mutationFn: createNewRecipe,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["bookmark"] })
            reset();
        }
    })
    console.log(errors)
    function OnSubmitHandler(data) {
        if(!data) return
       
        console.log(data)
       const  newRecipe = {
            name: data.name,
            description: data.description,
            image: data.image[0],
            ingredients: data.ingredients.split(",")
        }
        console.log(newRecipe)

        mutate(newRecipe)
      
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
                <input type="file" placeholder="image"id="image" {...register("image", { required: "This field is required" })}  className="shadow-sm bg-gray-50 border border-gray-300 
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
        <Button type="small" >Add recipe</Button>
        </div>  
        
    </form>
}

export default Form;


