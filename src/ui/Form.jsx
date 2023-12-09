import { useForm } from "react-hook-form";
import Button from "./Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewRecipe } from "../services/RecipeApi";

function Form() {
    const { register, handleSubmit, reset } = useForm();
    const queryClient = useQueryClient()
    const { mutate, isloading, } = useMutation({
        mutationFn: createNewRecipe,
        onSuccess: ()=> alert("recipe uloaded successfully")
    })
    function OnSubmitHandler(data) {
        if(!data) return
        // console.log(data.name.split(','))
        console.log(data.name)
        console.log(data.ingredients)
        console.log(typeof (data))
        
       const  newRecipe = {
            name: data.name,
            description: data.description,
            image: data.image,
            ingredients: data.ingredients.split(",")
        }
        console.log(newRecipe)

        mutate(newRecipe)
       
        
        
       

        
    }
    return <form onSubmit={handleSubmit(OnSubmitHandler)}>
        <div className="grid grid-cols-1 bg-blue-500 w-full">
            <div className="input w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recipe Name</label>
                <input type="text" placeholder="type name" id="name" {...register("name")} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500 dark:shadow-sm-light"/>
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recipe Description</label>
                <input type="text" placeholder="type description" id="description" {...register("description")} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500 dark:shadow-sm-light"/>
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                <input type="text" placeholder="image"id="image" {...register("image")}  className="shadow-sm bg-gray-50 border border-gray-300 
                text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500 dark:shadow-sm-light"/>
                <Button type="small"> add an image</Button>
            </div>
                <div className="flex gap-4">   
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingredients</label>
                <textarea type="text" id="ingredients" {...register("ingredients")} className="pace-y-4 shadow-sm bg-gray-50 border
                 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                 dark:focus:border-blue-500 dark:shadow-sm-light " rows="5" ></textarea>
                
             </div>
        </div>
        <Button type="small">Add recipe</Button>
    </form>
}

export default Form;


