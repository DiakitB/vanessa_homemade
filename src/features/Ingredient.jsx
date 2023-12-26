import { useSelector } from "react-redux";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { postBookMar } from "../services/BookMarkApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";

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
    const navigate = useNavigate()

    ////
    

    const queryClient = useQueryClient()
    const { mutate, isloading, } = useMutation({
        mutationFn: postBookMar,
        onSuccess: ()=> alert("recipe uloaded successfully")
    })
   
   


    if (!recipe) return
    
    const data = recipe[0]
    if (!data) return;
    const { name, image, ingredients, description } = data
    console.log(name)
    console.log(ingredients)
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
    return<div className="flex flex-col  justify-center gap-2 px-8">
    <div className="space-x-4 px-10">
    <Button type="secondary" onClick={() => navigate("/recipes")} > God back</Button>
            <Button type="secondary" onClick={testFunction}>Book Mark </Button>  
    </div>
    <h3 className="px- py-3 leading-normal  font-semibold  ">{name}</h3>
    <div className="pr-25 ">

    <Image src={image} alt="picture" />
    </div>
   
    <div className="">
            {ingredients?.map((ingredient, index) => 
                <h4 className="list-disc tracking-tight"><span>{ index +1}-</span>
                    {ingredient}
                </h4>)}
        </div>
  </div>

   
}

export default Ingredient;



{/* <Button type="secondary" onClick={() => navigate("/recipes")} > God back</Button>
            <Button type="secondary" onClick={testFunction}>Book this recipe</Button> */}
            