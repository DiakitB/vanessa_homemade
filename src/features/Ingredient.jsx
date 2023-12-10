import { useSelector } from "react-redux";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { postBookMar } from "../services/BookMarkApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function Ingredient() {
    const recipe = useSelector(state => state.recipe.recipe)
    const navigate = useNavigate()

    ////
    

    const queryClient = useQueryClient()
    const { mutate, isloading, } = useMutation({
        mutationFn: postBookMar,
        onSuccess: ()=> alert("recipe uloaded successfully")
    })
   
   


    if (!recipe) return
    
    const data = recipe[0]
    console.log(data)
    const { name, image, ingredients, description } = data
    console.log(name)
    console.log(ingredients)
    async function testFunction() {
        const  newRecipe = {
            name: data.name,
            description: data.description,
            image: data.image,
            ingredients: data.ingredients
        }
        console.log(newRecipe)
        mutate(newRecipe)
    
    }
    return <div>
        <div className="flex gap-5">

        <Button type="primary" onClick={() => navigate("/recipes")}> God back</Button>
        <Button type="secondary" onClick={testFunction}>Book this recipe</Button>
        </div>
        <div>
            <h3>{name}</h3>
            <img src={image} />
        </div>
        {ingredients.map(ing => <div key={ing.id}>
            <p key={ing.id}>{ing }</p>
        </div> )}

        

    </div>
}

export default Ingredient;