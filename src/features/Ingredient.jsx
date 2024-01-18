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
console.log(recipe)
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
    console.log(ingredients.quantity)
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
   
    console.log(typeof (ingredients))
    
  const Deltat =  ingredients.map((ingre) => {
        return JSON.parse(ingre)
       
})
console.log(Deltat)
    return <div className="flex flex-col  justify-center gap-2 px-8">
            <div className="space-x-2">
            <Button type="secondary" onClick={() => navigate("/recipes")} > God back</Button>
                    <Button type="secondary" onClick={testFunction}>Book Mark </Button>  
            </div>
            <h3 className="px- py-3 leading-normal  font-semibold  ">{name}</h3>
            <div className="pr-25 ">

            <Image src={image} alt="picture" />
            </div>
        {Deltat.map((element, index) => <h4>{`${index + 1}:${element.quantity} ${element.unit} ${element.ingredient}` }</h4>)}
                    
  </div>

   
}

export default Ingredient;



{/* <Button type="secondary" onClick={() => navigate("/recipes")} > God back</Button>
            <Button type="secondary" onClick={testFunction}>Book this recipe</Button> */}
//             const myArray = [{x:100}, {x:200}, {x:300}];

// for (var key in result)
// {
//    if (result.hasOwnProperty(key))
//    {
//       // here you have access to
//       var MNGR_NAME = result[key].MNGR_NAME;
//       var MGR_ID = result[key].MGR_ID;
//    }
// }