import { useSelector } from "react-redux";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

function Ingredient() {
    const recipe = useSelector(state => state.recipe.recipe)
    const navigate = useNavigate()
    if (!recipe) return
    
    const data = recipe[0]
    console.log(data)
    const { name, image, ingredients, description } = data
    console.log(name)
    console.log(ingredients)
   
    
    return <div>
        <Button type="primary" onClick={()=>navigate("/recipes")}> God back</Button>
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