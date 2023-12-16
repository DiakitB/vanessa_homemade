import { useSelector } from "react-redux";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { postBookMar } from "../services/BookMarkApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";

const Image = styled.img`
   width: 350px;
    height: 300px;
    margin-left: auto;
  margin-right: auto;
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
    return <Dive>
        <div>
            <div className="flex gap-8">
            <Button type="secondary" onClick={() => navigate("/recipes")} > God back</Button>
            <Button type="secondary" onClick={testFunction}>Book Mark this recipe</Button>
            
            </div>
            <p>{ name}</p>
        </div>
        <div>
            <Image src={image}/>
        </div>
        <div>
            {ingredients.map(ingredient => <ul>
                <li>
                    {ingredient}
                </li>
            </ul>)}
        </div>
        

    </Dive>
}

export default Ingredient;

{/* <Button type="secondary" onClick={() => navigate("/recipes")} > God back</Button>
            <Button type="secondary" onClick={testFunction}>Book this recipe</Button> */}
            